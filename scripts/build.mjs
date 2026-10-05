#!/usr/bin/env node
// Genera el sitio estático en dist/. Sin dependencias: `node scripts/build.mjs`.
// Cloudflare lo ejecuta automáticamente antes de cada despliegue (ver wrangler.jsonc → build).
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { render } from "../site/lib/layout.mjs";
import { paginaServicio } from "../site/lib/components.mjs";
import { SERVICIOS } from "../site/content/servicios.mjs";
import inicio from "../site/pages/inicio.mjs";
import * as generales from "../site/pages/generales.mjs";
import * as sect from "../site/pages/sectores.mjs";
import * as solar from "../site/pages/solar.mjs";
import { SITE } from "../site/lib/base.mjs";

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIST = join(RAIZ, "dist");
const STATIC = join(RAIZ, "site/static");

const PAGINAS = [
  inicio,
  generales.servicios,
  ...SERVICIOS.map(paginaServicio),
  sect.sectores,
  sect.hidrocarburos,
  generales.diagnostico,
  generales.nosotros,
  generales.contacto,
  generales.recursos,
  generales.anlaOCar,
  generales.checklist,
  generales.glosario,
  generales.privacidad,
  solar.energiaSolar,
  solar.calentadores,
  solar.presurizado,
  solar.despresurizado,
  generales.noEncontrada,
];

// Redirecciones 301 (URLs del sitio WordPress que ya no existen)
const REDIRECCIONES = [
  ["/quienes-somos/", "/nosotros/"],
  ["/quienes-somos", "/nosotros/"],
  ["/shop/", "/calentadores-de-agua-solares/"],
  ["/shop", "/calentadores-de-agua-solares/"],
  ["/tienda/", "/calentadores-de-agua-solares/"],
  ["/author/*", "/"],
  ["/feed/", "/"],
  ["/comments/feed/", "/"],
  ["/inicio/", "/"],
  ["/blog/", "/recursos/"],
  ["/servicio/*", "/servicios/"],
  ["/sitemap.rss", "/sitemap.xml"],
  ["/page-sitemap.xml", "/sitemap.xml"],
  ["/sitemap_index.xml", "/sitemap.xml"],
  ["/wp-sitemap.xml", "/sitemap.xml"],
];

/* ── Fondo cartográfico (curvas de nivel) ───────────────────────────── */
function topo(color, opacidad) {
  let s = 7;
  const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const cerros = [
    { cx: 640, cy: 360, n: 14, r0: 26, paso: 24 },
    { cx: 260, cy: 640, n: 8, r0: 18, paso: 22 },
  ];
  const paths = [];
  for (const c of cerros) {
    const fases = Array.from({ length: 4 }, () => rnd() * Math.PI * 2);
    const amp = [0.16, 0.1, 0.06, 0.035];
    for (let k = 0; k < c.n; k++) {
      const R = c.r0 + k * c.paso;
      const pts = [];
      const N = 72;
      for (let i = 0; i < N; i++) {
        const t = (i / N) * Math.PI * 2;
        let f = 1;
        amp.forEach((a, j) => (f += a * Math.sin((j + 2) * t + fases[j] + k * 0.13 * (j + 1))));
        pts.push([c.cx + Math.cos(t) * R * f * 1.25, c.cy + Math.sin(t) * R * f]);
      }
      // Catmull-Rom cerrado → Bézier
      let d = `M${pts[0][0].toFixed(1)} ${pts[0][1].toFixed(1)}`;
      for (let i = 0; i < N; i++) {
        const p0 = pts[(i - 1 + N) % N], p1 = pts[i], p2 = pts[(i + 1) % N], p3 = pts[(i + 2) % N];
        const c1 = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
        const c2 = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
        d += `C${c1[0].toFixed(1)} ${c1[1].toFixed(1)} ${c2[0].toFixed(1)} ${c2[1].toFixed(1)} ${p2[0].toFixed(1)} ${p2[1].toFixed(1)}`;
      }
      const indice = k % 5 === 4;
      paths.push(`<path d="${d}Z" stroke-width="${indice ? 1.7 : 0.9}"/>`);
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 1000" fill="none" stroke="${color}" stroke-opacity="${opacidad}">${paths.join("")}</svg>`;
}

/* ── Utilidades ─────────────────────────────────────────────────────── */
const archivoDe = (path) => (path.endsWith(".html") ? join(DIST, path) : join(DIST, path, "index.html"));
function listar(dir) {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? listar(p) : [p];
  });
}

/* ── Build ──────────────────────────────────────────────────────────── */
rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(STATIC, DIST, { recursive: true });
writeFileSync(join(DIST, "assets/img/topo.svg"), topo("#12201a", 0.11));
writeFileSync(join(DIST, "assets/img/topo-inv.svg"), topo("#f3efe6", 0.07));

const version = createHash("sha1")
  .update(readFileSync(join(STATIC, "assets/css/site.css")))
  .update(readFileSync(join(STATIC, "assets/js/site.js")))
  .digest("hex")
  .slice(0, 8);

const rutas = new Set();
for (const p of PAGINAS) {
  if (rutas.has(p.path)) throw new Error(`Ruta duplicada: ${p.path}`);
  rutas.add(p.path);
  if (!p.noindex && (p.title.length > 70 || p.description.length > 170))
    console.warn(`  ! SEO largo en ${p.path}: title ${p.title.length}, description ${p.description.length}`);
  const html = render({ ...p, version });
  const f = archivoDe(p.path);
  mkdirSync(dirname(f), { recursive: true });
  writeFileSync(f, html);
}

// Validación de enlaces internos y recursos
const destinos = new Set([...rutas, ...REDIRECCIONES.map((r) => r[0])]);
let rotos = 0;
for (const f of listar(DIST).filter((x) => x.endsWith(".html"))) {
  const html = readFileSync(f, "utf8");
  for (const [, url] of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    if (url.startsWith("//")) continue;
    const enDisco = existsSync(join(DIST, url)) && statSync(join(DIST, url)).isFile();
    if (!enDisco && !destinos.has(url)) {
      console.error(`  ✗ ${f.replace(DIST, "")}: enlace roto ${url}`);
      rotos++;
    }
  }
}
if (rotos) process.exit(1);

// sitemap.xml, robots.txt, _redirects, _headers
const hoy = new Date().toISOString().slice(0, 10);
const prioridad = (p) => (p === "/" ? "1.0" : p.split("/").length <= 3 ? "0.8" : "0.6");
writeFileSync(
  join(DIST, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGINAS.filter((p) => !p.noindex)
    .map((p) => `  <url><loc>${SITE.url}${p.path}</loc><lastmod>${hoy}</lastmod><priority>${prioridad(p.path)}</priority></url>`)
    .join("\n")}\n</urlset>\n`
);
writeFileSync(join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
writeFileSync(
  join(DIST, "_redirects"),
  `# Generado por scripts/build.mjs — URLs viejas de WordPress\n${REDIRECCIONES.map(([a, b]) => `${a} ${b} 301`).join("\n")}\n/wp-admin/* / 302\n/wp-login.php / 302\n`
);
writeFileSync(
  join(DIST, "_headers"),
  `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n\n/assets/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/assets/*\n  Cache-Control: public, max-age=2592000\n\n/wp-content/*\n  Cache-Control: public, max-age=2592000\n`
);

console.log(`✓ ${PAGINAS.length} páginas generadas en dist/ (versión ${version})`);
