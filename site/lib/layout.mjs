// Plantilla común: <head>, encabezado con menú, pie de página y datos estructurados.
import { SITE, esc, icon, wa, waButton } from "./base.mjs";
import { LINEAS, servicio } from "../content/servicios.mjs";

const ORG_ID = `${SITE.url}/#organizacion`;

export const ORGANIZACION = {
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: SITE.name,
  alternateName: "Grupo Sole Consultoría Ambiental",
  description:
    "Consultoría e ingeniería ambiental en Colombia: permisos ambientales, licenciamiento, planes de manejo, informes de cumplimiento ambiental (ICA) y due diligence ambiental.",
  url: `${SITE.url}/`,
  logo: `${SITE.url}/wp-content/uploads/2024/02/cropped-grupo-sole-panda.png`,
  image: `${SITE.url}/assets/img/og-grupo-sole.png`,
  telephone: "+57 320 233 6372",
  areaServed: { "@type": "Country", name: "Colombia" },
  knowsAbout: [
    "Licenciamiento ambiental",
    "Permisos ambientales",
    "Plan de Manejo Ambiental",
    "Informe de Cumplimiento Ambiental",
    "Due diligence ambiental",
    "Residuos peligrosos",
  ],
};

function navServicios() {
  return LINEAS.map(
    (l) => `<div class="mega-col">
      <a class="mega-head" href="${l.path}"><span class="mono">${l.num}</span>${esc(l.corto)}</a>
      <ul>${l.hijos.map((p) => `<li><a href="${p}">${esc(servicio(p).menu)}</a></li>`).join("")}</ul>
    </div>`
  ).join("");
}

function header(path) {
  const activo = (p) =>
    path === p || (p !== "/" && path.startsWith(p) && !(p === "/sectores/" && path.startsWith("/sectores/hidrocarburos/"))) ? ' aria-current="page"' : "";
  return `<a class="skip" href="#contenido">Saltar al contenido</a>
<div class="topbar"><div class="wrap topbar-in">
  <span class="mono">Consultoría e ingeniería ambiental · Colombia</span>
  <span class="mono topbar-auth">ANLA · CAR · Autoridades ambientales urbanas</span>
  <a class="mono" href="${wa("Hola, quiero hablar con Grupo Sole sobre un tema ambiental.")}" target="_blank" rel="noopener" data-wa="topbar">WhatsApp ${SITE.waLabel}</a>
</div></div>
<header class="site-header" data-header>
  <div class="wrap header-in">
    <a class="brand" href="/" aria-label="Grupo Sole — Consultoría Ambiental, inicio">
      <img src="/assets/img/sole-panda.webp" alt="" width="161" height="192" class="brand-mark">
      <span class="brand-text"><img src="/assets/img/sole-wordmark.webp" alt="Sole" width="336" height="96" class="brand-word"><span class="brand-tag">Consultoría Ambiental</span></span>
    </a>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="nav" data-nav-toggle>${icon.menu}<span>Menú</span></button>
    <nav id="nav" class="nav" aria-label="Principal">
      <ul class="nav-list">
        <li class="has-mega">
          <a href="/servicios/"${activo("/servicios/")} class="nav-link" data-mega-trigger>Servicios</a>
          <div class="mega"><div class="mega-in">${navServicios()}
            <div class="mega-note"><p class="mono">¿No sabes por dónde empezar?</p><p>Responde 8 preguntas y te decimos qué obligaciones podrías tener pendientes.</p><a href="/diagnostico-ambiental/" class="text-link">Hacer el autodiagnóstico ${icon.arrow}</a></div>
          </div></div>
        </li>
        <li><a class="nav-link" href="/sectores/"${activo("/sectores/")}>Sectores</a></li>
        <li><a class="nav-link" href="/sectores/hidrocarburos/"${activo("/sectores/hidrocarburos/")}>Hidrocarburos</a></li>
        <li><a class="nav-link" href="/recursos/"${activo("/recursos/")}>Recursos</a></li>
        <li><a class="nav-link" href="/nosotros/"${activo("/nosotros/")}>Nosotros</a></li>
        <li><a class="nav-link" href="/contacto/"${activo("/contacto/")}>Contacto</a></li>
      </ul>
      <a class="btn btn-ink nav-cta" href="/diagnostico-ambiental/"><span>Diagnóstico gratuito</span>${icon.arrow}</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const col = (titulo, items) =>
    `<div class="f-col"><p class="f-head mono">${titulo}</p><ul>${items.map(([t, h]) => `<li><a href="${h}">${esc(t)}</a></li>`).join("")}</ul></div>`;
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="f-top">
      <div class="f-brand">
        <a class="brand brand-inv" href="/" aria-label="Grupo Sole, inicio">
          <img src="/assets/img/sole-panda-blanco.webp" alt="" width="161" height="192" class="brand-mark">
          <span class="brand-text"><img src="/assets/img/sole-wordmark-blanco.webp" alt="Sole" width="334" height="96" class="brand-word"><span class="brand-tag">Consultoría Ambiental</span></span>
        </a>
        <p class="f-claim">Permisos, estudios y cumplimiento ambiental para empresas y proyectos en Colombia.</p>
        ${waButton(`WhatsApp ${SITE.waLabel}`, "Hola, quiero hablar con Grupo Sole sobre un tema ambiental.", { cls: "btn btn-line-inv", origen: "footer" })}
      </div>
      ${col("Servicios", LINEAS.map((l) => [l.corto, l.path]).concat([["Todos los servicios", "/servicios/"]]))}
      ${col("Empresa", [
        ["Sectores", "/sectores/"],
        ["Hidrocarburos", "/sectores/hidrocarburos/"],
        ["Nosotros", "/nosotros/"],
        ["Contacto", "/contacto/"],
        ["Autodiagnóstico ambiental", "/diagnostico-ambiental/"],
      ])}
      ${col("Recursos", [
        ["¿ANLA o CAR?", "/recursos/anla-o-car/"],
        ["Checklist de obligaciones", "/recursos/checklist-obligaciones-ambientales/"],
        ["Glosario ambiental", "/recursos/glosario/"],
        ["Energía solar", "/energia-solar/"],
        ["Calentadores solares de agua", "/calentadores-de-agua-solares/"],
      ])}
    </div>
    <div class="f-bottom mono">
      <span>© ${new Date().getFullYear()} Grupo Sole · Consultoría Ambiental · Colombia</span>
      <a href="/politica-de-privacidad/">Política de privacidad y tratamiento de datos</a>
    </div>
  </div>
</footer>
<a class="wa-float" href="${wa("¡Hola Grupo Sole! Vengo desde su página web y me gustaría recibir más información.")}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp" data-wa="flotante">${icon.whatsapp}</a>`;
}

function breadcrumbs(crumbs) {
  if (!crumbs || crumbs.length < 2) return "";
  return `<nav class="crumbs mono" aria-label="Ruta de navegación"><div class="wrap"><ol>${crumbs
    .map(([n, p], i) => (i === crumbs.length - 1 ? `<li aria-current="page">${esc(n)}</li>` : `<li><a href="${p}">${esc(n)}</a></li>`))
    .join("")}</ol></div></nav>`;
}

function schemaGraph(page) {
  const url = SITE.url + page.path;
  const graph = [
    ORGANIZACION,
    { "@type": "WebSite", "@id": `${SITE.url}/#website`, url: `${SITE.url}/`, name: SITE.name, inLanguage: "es-CO", publisher: { "@id": ORG_ID } },
    {
      "@type": page.tipoPagina || "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "es-CO",
      isPartOf: { "@id": `${SITE.url}/#website` },
      ...(page.crumbs ? { breadcrumb: { "@id": `${url}#breadcrumb` } } : {}),
    },
  ];
  if (page.crumbs && page.crumbs.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: page.crumbs.map(([n, p], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: SITE.url + p })),
    });
  }
  if (page.faqs && page.faqs.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      mainEntity: page.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    });
  }
  for (const s of page.schema || []) graph.push(s);
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }).replace(/</g, "\\u003c");
}

export function render(page) {
  const url = SITE.url + page.path;
  const ogImage = page.ogImage || `${SITE.url}/assets/img/og-grupo-sole.png`;
  return `<!doctype html>
<html lang="es-CO">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.description)}">
${page.noindex ? '<meta name="robots" content="noindex, follow">' : '<meta name="robots" content="index, follow, max-image-preview:large">'}
${page.noindex ? "" : `<link rel="canonical" href="${url}">`}
<meta property="og:locale" content="es_CO">
<meta property="og:site_name" content="Grupo Sole · Consultoría Ambiental">
<meta property="og:type" content="${page.ogType || "website"}">
<meta property="og:title" content="${esc(page.ogTitle || page.title)}">
<meta property="og:description" content="${esc(page.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#13201a">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/assets/img/favicon.png" type="image/png">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preload" href="/assets/fonts/newsreader-latin-opsz-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/ibm-plex-sans-latin-400-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/css/site.css?v=${page.version}">
<script type="application/ld+json">${schemaGraph(page)}</script>
<!-- Etiqueta de Google (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${SITE.gtag}"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag("js",new Date());gtag("set","linker",{"domains":["gruposole.com.co"]});gtag("config","${SITE.gtag}");</script>
</head>
<body class="${page.bodyClass || ""}">
${header(page.path)}
${breadcrumbs(page.crumbs)}
<main id="contenido">
${page.body}
</main>
${footer()}
<script src="/assets/js/site.js?v=${page.version}" defer></script>
</body>
</html>
`;
}
