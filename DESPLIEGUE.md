# Prompt para el agente de Cloudflare

Copia y pega esto en el agente de Cloudflare (o úsalo como checklist manual en el dashboard).

---

Necesito desplegar un sitio estático en **Cloudflare Workers con Static Assets** conectado a
GitHub, y servirlo en el dominio **gruposole.com.co** (con www).

**Repositorio:** `https://github.com/FabianGranados/sole` — rama de producción `main`.
(Las demás ramas se publican como versiones de vista previa.)

**El repo ya trae todo configurado; no crees código nuevo ni un script de Worker:**
- `wrangler.jsonc` → Worker `gruposole`, solo assets desde `./dist`,
  `html_handling: "auto-trailing-slash"`, `not_found_handling: "404-page"`, rutas
  `custom_domain` para `gruposole.com.co` y `www.gruposole.com.co`, y un `build.command`
  (`node scripts/build.mjs`) que wrangler ejecuta solo antes de desplegar.
- El build genera `dist/` con `_redirects`, `_headers`, `sitemap.xml` y `robots.txt`.

**Pasos:**

1. **Zona DNS.** Verifica que `gruposole.com.co` esté agregada como zona en mi cuenta
   (plan Free sirve). Si está pendiente, dame los 2 nameservers de Cloudflare para cambiarlos
   en el registrador. Antes de activar, importa/conserva los registros que **no** sean de la
   web, sobre todo **MX, TXT (SPF, DKIM, DMARC, verificación de Google)** y cualquier
   subdominio de correo, para no romper el email.

2. **Crear el Worker desde Git** (Workers & Pages → Create → Import a repository):
   - Repositorio: `FabianGranados/sole`, rama `main`.
   - Nombre del proyecto: `gruposole` (debe coincidir con `name` en `wrangler.jsonc`).
   - Build command: *(vacío — wrangler ejecuta el build definido en `wrangler.jsonc`)*
   - Deploy command: `npx wrangler deploy`
   - Directorio raíz: `/`
   - Activa builds automáticos en cada push a `main` y versiones de vista previa para otras ramas.

3. **Dominio personalizado.** Los custom domains de `wrangler.jsonc` se crean al desplegar.
   Si fallan porque ya existen registros A/AAAA/CNAME para `@` o `www` (apuntando al hosting
   viejo de Hostinger), bórralos y vuelve a desplegar. No toques MX ni TXT.

4. **www → raíz.** Crea una Redirect Rule (Rules → Redirect Rules):
   si hostname = `www.gruposole.com.co` → 301 a
   `concat("https://gruposole.com.co", http.request.uri.path)` conservando query string.

5. **SSL/TLS:** modo *Full (strict)*, "Always Use HTTPS" activado, HSTS opcional.

6. **Verificación** (contra `https://gruposole.com.co`, o la URL `*.workers.dev` si el DNS aún no propaga):
   - 200: `/`, `/servicios/`, `/servicios/cumplimiento-ambiental/`, `/sectores/hidrocarburos/`,
     `/diagnostico-ambiental/`, `/calentadores-de-agua-solares/`, `/calentador-de-agua-solar-presurizado/`,
     `/calentador-de-agua-solar-sin-presion/`, `/sitemap.xml`, `/robots.txt`,
     `/wp-content/uploads/2024/11/Calentador-de-agua-solar-presurizado.pdf`
   - 301 a `/nosotros/`: `/quienes-somos/`
   - 307 a la versión con slash: `/nosotros`
   - 301 a `/calentadores-de-agua-solares/`: `/shop/`
   - 301 a `/`: `/author/publicidad-decoloungegmail-com/`
   - 404 con la página de error del sitio: `/no-existe/`
   - En el HTML de `/` debe aparecer `GT-PJS7FBKV` (Google tag).

7. Al final dame: la URL `*.workers.dev`, el estado del dominio y de los certificados, los
   nameservers (si hay que cambiarlos) y la lista de registros DNS que quedaron.

---

## Después del cambio de DNS

- En **Google Search Console**: enviar `https://gruposole.com.co/sitemap.xml` (39 URLs) y quitar los
  sitemaps viejos de All in One SEO (`page-sitemap.xml`, `sitemap.rss`, plantillas del tema).
  Pedir indexación de `/`, `/servicios/` y `/sectores/hidrocarburos/`.
- Comprobar en Google Analytics (G-DD41N7LS6K) que siguen llegando visitas.
- Mantener el hosting de Hostinger unos días como respaldo antes de cancelarlo.
