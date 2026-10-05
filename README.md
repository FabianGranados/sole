# Grupo Sole — gruposole.com.co

Sitio de **Grupo Sole · Consultoría Ambiental**: permisos, licenciamiento, cumplimiento
ambiental y due diligence (con énfasis en hidrocarburos). La línea de **energía solar**
(calentadores) se conserva con sus mismas URLs para no perder su posicionamiento.

Flujo: **push a `main` en GitHub → Cloudflare Workers Builds genera y despliega el sitio.**

## Cómo está hecho

Sitio estático generado con un script de Node **sin dependencias** (`scripts/build.mjs`).
Wrangler lo ejecuta solo antes de `wrangler dev` y `wrangler deploy` (ver `build` en
`wrangler.jsonc`) y publica `dist/` con Workers Static Assets.

| Ruta | Qué es |
|---|---|
| `site/content/servicios.mjs` | **Contenido de las 22 páginas de servicio** (4 líneas + 18 servicios): textos, ficha, FAQ, normativa, mensaje de WhatsApp |
| `site/pages/` | Inicio, sectores, hidrocarburos, autodiagnóstico, nosotros, contacto, recursos, privacidad, energía solar y calentadores |
| `site/lib/layout.mjs` | Encabezado, menú, pie, `<head>` (SEO, Open Graph, JSON-LD, Google tag) |
| `site/lib/components.mjs` | Componentes y plantilla de página de servicio |
| `site/lib/base.mjs` | Teléfonos de WhatsApp, ID de Google tag, íconos |
| `site/static/` | CSS, JS, fuentes autoalojadas, logos, imágenes y PDF (se copian tal cual) |
| `site/imagenes.json` | Ancho y alto de cada imagen (para evitar saltos de diseño) |
| `scripts/build.mjs` | Genera `dist/`, el fondo topográfico, `sitemap.xml`, `robots.txt`, `_redirects` y `_headers`; **falla si hay enlaces internos rotos** |
| `migracion/` | Referencia: sitio WordPress original y documento de contenido de la consultoría |

## Tareas comunes

```bash
npm install
npm run dev      # genera y sirve en http://localhost:8787
npm run build    # solo genera dist/
```

- **Cambiar un texto de servicio:** `site/content/servicios.mjs`.
- **Cambiar el WhatsApp:** `site/lib/base.mjs` (`wa`, `waLabel`) y `site/static/assets/js/site.js` (`WA`).
- **Nueva página:** crea el objeto en `site/pages/` (path, title, description, crumbs, body) y agrégalo a `PAGINAS` en `scripts/build.mjs`. Entra sola al sitemap.
- **Nueva imagen:** ponla en `site/static/…` y agrega su tamaño en `site/imagenes.json`.
- **Redirección 301:** agrégala a `REDIRECCIONES` en `scripts/build.mjs`.

## Diseño

Concepto "expediente técnico": papel y tinta, curvas de nivel, fichas técnicas, tablas,
numeración de secciones (§) y el naranja del logo como color de señal.
Tipografías autoalojadas: Newsreader (títulos), IBM Plex Sans (texto), IBM Plex Mono (metadatos).

## SEO

- Cada página tiene `<title>`, meta description, canonical, Open Graph y JSON-LD
  (`ProfessionalService`, `Service`, `FAQPage`, `BreadcrumbList`, `Product` en calentadores).
- Las páginas de calentadores conservan URL, `<title>`, textos, imágenes con su alt y PDF.
- `/quienes-somos/` → 301 a `/nosotros/`; demás URLs viejas de WordPress en `REDIRECCIONES`.
- Google tag `GT-PJS7FBKV` en todas las páginas; los clics a WhatsApp se registran como evento `contacto_whatsapp` y el autodiagnóstico como `autodiagnostico`.

## Pendiente del dueño (ver `migracion/contenido-consultoria-ambiental.md` §13)

- Nombre, matrícula COPNIA y trayectoria del director técnico (para "Nosotros").
- Correo corporativo, ciudad base y redes sociales reales.
- 3 casos reales para una sección de proyectos (hoy oculta).
- Validar con el ingeniero la vigencia de la normativa citada (en especial el Decreto 766 de 2026).
- Confirmar si se siguen vendiendo calentadores; si no, cambiar sus URLs por 301 a `/servicios/`.
