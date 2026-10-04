#!/usr/bin/env python3
"""
Migración única WordPress -> sitio estático (Cloudflare Workers static assets).

Uso:
    python3 scripts/migrar.py /ruta/a/gruposole-migracion

Toma el paquete de migración (HTML servido por WordPress + archivos originales
de wp-content / wp-includes) y genera `public/` con una copia exacta del sitio:

  * Cada URL queda en `public/<ruta>/index.html` (misma URL con slash final).
  * Los recursos conservan su ruta original (/wp-content/..., /wp-includes/...).
  * Las URLs absolutas a recursos se vuelven relativas a la raíz, de modo que el
    sitio funciona igual en *.workers.dev y en gruposole.com.co.
  * Se quitan las etiquetas que dependen de PHP/WordPress (wp-json, xmlrpc,
    feeds, oEmbed, emoji) y las hojas/JS que ya no existían en el servidor.
  * Se generan las miniaturas de WordPress (-WxH) que el HTML pide en src/srcset.
  * Se conservan <title>, meta, canonical, Open Graph, JSON-LD y la etiqueta
    de Google (GT-PJS7FBKV) sin cambios.

Requiere Pillow (pip install pillow). Solo hace falta volver a correrlo si se
quiere regenerar `public/` desde el paquete original; después de la migración
el código fuente es `public/`.
"""
import json
import re
import shutil
import sys
from pathlib import Path

from PIL import Image

DOMINIO = "gruposole.com.co"
RAIZ = Path(__file__).resolve().parent.parent
PUBLIC = RAIZ / "public"

# archivo html-original -> ruta pública
PAGINAS = {
    "inicio.html": "/",
    "calentadores-de-agua-solares.html": "/calentadores-de-agua-solares/",
    "calentador-de-agua-solar-presurizado.html": "/calentador-de-agua-solar-presurizado/",
    "calentador-de-agua-solar-sin-presion.html": "/calentador-de-agua-solar-sin-presion/",
    "quienes-somos.html": "/quienes-somos/",
    "404-prueba-inexistente.html": "/404.html",
}

# Recursos que el HTML pedía pero ya no existían en el servidor (respondían 404).
INEXISTENTES = [
    "wp-admin/css/color-picker.min.css",
    "wp-admin/js/accordion.min.js",
    "wp-content/plugins/woocommerce/assets/css/prettyPhoto.css",
    "wp-content/plugins/woocommerce/assets/js/prettyPhoto/jquery.prettyPhoto.min.js",
    "wp-content/themes/Wastix/wastix/assets/customicon/eicons.css",
    "wp-content/themes/Wastix/wastix/style.min.css",
    # Hojas "dinámicas" del tema: el PHP imprimía reglas sin selector (CSS vacío)
    "wp-content/themes/Wastix/wastix/assets/css/color.php",
    "wp-content/themes/Wastix/wastix/assets/css/color_two.php",
]

# El pie de página (plantilla Elementor 16) usa la lista de íconos, pero WordPress solo
# cargaba su CSS en las páginas que también la usaban en el contenido; en las demás los
# íconos del pie salían gigantes. Se carga en todas.
CSS_ICON_LIST = (
    "<link rel='stylesheet' id='widget-icon-list-css' "
    "href='/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css?ver=4.1.1' "
    "type='text/css' media='all' />\n"
)

DIM_RE = re.compile(r"^(?P<base>.+)-(?P<w>\d+)x(?P<h>\d+)\.(?P<ext>png|jpe?g|webp)$", re.I)


def reescribir_urls(texto: str) -> str:
    """Vuelve relativas a la raíz las URLs de recursos (wp-content, wp-includes)."""
    # Plantilla de demostración del tema: esos dos archivos existen en local.
    texto = re.sub(r"https?:(\\?/){2}23july\.hostlin\.com\\?/wastix\\?/", lambda m: "\\/" if "\\" in m.group(0) else "/", texto)
    # https://gruposole.com.co/wp-...  y  //gruposole.com.co/wp-...
    texto = re.sub(r"(?:https?:)?//(?:www\.)?gruposole\.com\.co/(wp-(?:content|includes)/)", r"/\1", texto)
    # Variante escapada en JSON: https:\/\/gruposole.com.co\/wp-...
    texto = re.sub(r"(?:https?:)?\\/\\/(?:www\.)?gruposole\.com\.co\\/(wp-(?:content|includes)\\/)", r"\\/\1", texto)
    return texto


def limpiar_html(html: str) -> str:
    # Emoji de WordPress (carga wp-emoji-release.min.js, que no se migra)
    html = re.sub(r"<script[^>]*>\s*/\* <!\[CDATA\[ \*/\s*window\._wpemojiSettings.*?</script>\s*", "", html, flags=re.S)
    html = re.sub(r"<script[^>]*>\s*window\._wpemojiSettings.*?</script>\s*", "", html, flags=re.S)
    html = re.sub(r"<style id='wp-emoji-styles-inline-css'.*?</style>\s*", "", html, flags=re.S)
    # Etiquetas de la API de WordPress, feeds, oEmbed, RSD, shortlink
    patrones = [
        r'<link rel="https://api\.w\.org/"[^>]*/>',
        r'<link rel="alternate"[^>]*wp-json[^>]*/>',
        r'<link rel="alternate"[^>]*type="application/rss\+xml"[^>]*/>',
        r'<link rel="alternate"[^>]*oembed[^>]*/>',
        r'<link rel="EditURI"[^>]*/>',
        r"<link rel='shortlink'[^>]*/>",
        r'<meta name="generator"[^>]*/?>',
    ]
    for p in patrones:
        html = re.sub(p + r"\s*", "", html)
    # Recursos que no existían en el servidor
    for ruta in INEXISTENTES:
        esc = re.escape(ruta)
        html = re.sub(r"<link [^>]*href=['\"][^'\"]*" + esc + r"[^>]*/?>\s*", "", html)
        html = re.sub(r"<script [^>]*src=['\"][^'\"]*" + esc + r"[^>]*>\s*</script>\s*", "", html)

    html = reescribir_urls(html)
    if "widget-icon-list-css" not in html:
        html = html.replace("</head>", CSS_ICON_LIST + "</head>", 1)
    # Enlaces internos (<a href>) relativos; canonical, og:url y JSON-LD quedan absolutos.
    html = re.sub(
        r"(<a\s[^>]*?href=)(['\"])\s*https?://(?:www\.)?gruposole\.com\.co(/[^'\"]*)?\2",
        lambda m: f"{m.group(1)}{m.group(2)}{m.group(3) or '/'}{m.group(2)}",
        html,
    )
    return html


def miniatura(origen: Path, destino: Path, w: int, h: int) -> None:
    img = Image.open(origen)
    ow, oh = img.size
    if abs((ow / oh) - (w / h)) > 0.02:  # recorte centrado (tamaños "crop" de WP)
        escala = max(w / ow, h / oh)
        img = img.resize((max(w, round(ow * escala)), max(h, round(oh * escala))), Image.LANCZOS)
        iw, ih = img.size
        izq, arr = (iw - w) // 2, (ih - h) // 2
        img = img.crop((izq, arr, izq + w, arr + h))
    else:
        img = img.resize((w, h), Image.LANCZOS)
    destino.parent.mkdir(parents=True, exist_ok=True)
    opts = {"quality": 85} if destino.suffix.lower() in (".webp", ".jpg", ".jpeg") else {"optimize": True}
    img.save(destino, **opts)


def generar_faltantes(textos: list[str]) -> list[str]:
    refs = set()
    for t in textos:
        refs.update(re.findall(r"/(wp-content/uploads/[^\s\"'()?,\\]+)", t))
    creadas = []
    for ref in sorted(refs):
        destino = PUBLIC / ref
        if destino.exists():
            continue
        m = DIM_RE.match(destino.name)
        if m:
            base = destino.with_name(f"{m['base']}.{m['ext']}")
            if base.exists():
                miniatura(base, destino, int(m["w"]), int(m["h"]))
                creadas.append(ref)
                continue
        if destino.name == "cropped-grupo-sole-panda.png":  # ícono del sitio (og:image)
            miniatura(destino.with_name("grupo-sole-panda.png"), destino, 249, 250)
            creadas.append(ref)
            continue
        print(f"  ! sin origen para {ref}")
    return creadas


def main() -> None:
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    paquete = Path(sys.argv[1]).resolve()
    originales = paquete / "wp-originales"
    html_dir = paquete / "html-original"

    # 1. Recursos originales con su misma ruta
    for carpeta in ("wp-content", "wp-includes"):
        if (PUBLIC / carpeta).exists():
            shutil.rmtree(PUBLIC / carpeta)
        shutil.copytree(originales / carpeta, PUBLIC / carpeta)
    for php in PUBLIC.rglob("*.php"):
        php.unlink()
    # Chunks de Elementor que faltaban en el respaldo (ver scripts/elementor-chunks/README.md)
    for chunk in (RAIZ / "scripts/elementor-chunks").glob("*.js"):
        shutil.copy(chunk, PUBLIC / "wp-content/plugins/elementor/assets/js" / chunk.name)

    # 2. CSS/JS con URLs absolutas al dominio -> relativas
    textos = []
    for f in list((PUBLIC / "wp-content").rglob("*.css")) + list((PUBLIC / "wp-content").rglob("*.js")):
        t = f.read_text(encoding="utf-8", errors="surrogateescape")
        n = reescribir_urls(t)
        if n != t:
            f.write_text(n, encoding="utf-8", errors="surrogateescape")
        textos.append(n)

    # 3. Páginas
    for archivo, ruta in PAGINAS.items():
        html = limpiar_html((html_dir / archivo).read_text(encoding="utf-8"))
        textos.append(html)
        if ruta == "/404.html":
            destino = PUBLIC / "404.html"
        else:
            destino = PUBLIC / ruta.strip("/") / "index.html"
        destino.parent.mkdir(parents=True, exist_ok=True)
        destino.write_text(html, encoding="utf-8")
        print(f"  {ruta:45} <- {archivo}")

    # 4. Miniaturas que WordPress generaba al subir cada imagen
    creadas = generar_faltantes(textos)
    print(f"  {len(creadas)} miniaturas generadas")

    # 5. /favicon.ico (los navegadores lo piden aunque el HTML use el PNG del panda)
    icono = PUBLIC / "wp-content/uploads/2024/02/cropped-grupo-sole-panda.png"
    Image.open(icono).save(PUBLIC / "favicon.ico", sizes=[(32, 32), (48, 48)])


if __name__ == "__main__":
    main()
