# Grupo Sole — gruposole.com.co

Copia exacta del sitio WordPress (tema Wastix + Elementor) convertida a sitio estático y
desplegada en **Cloudflare Workers (Static Assets)**. Sin PHP, sin base de datos.

Flujo: **push a `main` en GitHub → Cloudflare Workers Builds despliega automáticamente.**

## Estructura

| Ruta | Qué es |
|---|---|
| `public/` | **El sitio.** Lo que se publica tal cual. |
| `public/index.html`, `public/<slug>/index.html` | Las 5 páginas, mismas URLs que WordPress (con `/` final) |
| `public/404.html` | Página de error (se sirve con estado 404) |
| `public/wp-content/`, `public/wp-includes/` | CSS, JS, fuentes, imágenes y PDF originales, con su misma ruta |
| `public/_redirects` | Redirecciones 301 (/shop/, /author/…, sitemaps viejos, /wp-admin/) |
| `public/_headers` | Cabeceras de seguridad y caché |
| `public/sitemap.xml`, `public/robots.txt` | Sitemap limpio (solo las 5 páginas) |
| `wrangler.jsonc` | Configuración del Worker |
| `scripts/migrar.py` | Script único que generó `public/` desde el paquete de migración |
| `scripts/elementor-chunks/` | 5 JS de Elementor que faltaban en el respaldo, reconstruidos |
| `migracion/` | Documentación del sitio original (textos, SEO, HTML servido por WordPress) |

## Editar contenido

Edita directamente el HTML en `public/…/index.html`, haz commit y push. Las imágenes nuevas
van en `public/` (por ejemplo `public/img/`) y se enlazan con ruta absoluta (`/img/foto.webp`).

## Probar localmente

```bash
npm install
npm run dev        # http://localhost:8787
```

## Desplegar a mano (opcional)

```bash
npx wrangler deploy
```

## Qué se cambió respecto a WordPress

- Recursos con URL relativa a la raíz (funciona igual en `*.workers.dev` y en el dominio).
  `canonical`, Open Graph y JSON-LD siguen apuntando a `https://gruposole.com.co/`.
- Quitadas etiquetas que dependían de WordPress: wp-json, xmlrpc/RSD, feeds, oEmbed, emoji,
  y las hojas/JS que ya daban 404 en el servidor viejo (incluidas `color.php` del tema,
  que generaban CSS vacío).
- Generadas las 59 miniaturas (`-300x190.webp`, etc.) que el HTML pedía en `srcset`.
- Reconstruidos los chunks de Elementor de carrusel, acordeón y sección estirada.
- El CSS de la lista de íconos se carga en todas las páginas (antes los íconos del pie salían
  gigantes en las páginas de producto).
- `/shop/` (tienda “coming soon” en inglés) → 301 a `/calentadores-de-agua-solares/`;
  `/author/…` (expone un correo) → 301 a `/`.
- Se mantiene igual: textos, `<title>`, meta description, imágenes y alt, PDF, enlaces de
  WhatsApp, botón flotante, aviso de cookies y la etiqueta de Google `GT-PJS7FBKV`.

Pendientes sugeridos (ver `migracion/README-MIGRACION.md` §7): un H1 por página, URLs reales
de redes sociales en el pie, el botón “Características Técnicas” que apunta a `#`.
