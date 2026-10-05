// Componentes reutilizables y plantilla de página de servicio.
import { esc, icon, waButton, link, SITE } from "./base.mjs";
import { servicio, LINEAS, TABLA_PERMISOS, OBLIGACIONES_SECTOR } from "../content/servicios.mjs";

/** Etiqueta de sección tipo expediente: «§ 02 — Servicios» con regla fina. */
export const label = (num, texto) =>
  `<p class="label mono"><span class="label-num">§ ${num}</span><span class="label-txt">${esc(texto)}</span></p>`;

export const ficha = (filas, titulo = "Ficha técnica") => `<aside class="ficha" aria-label="${esc(titulo)}">
  <p class="ficha-head mono"><span>${esc(titulo)}</span><span class="ficha-dot" aria-hidden="true"></span></p>
  <dl>${filas.map(([k, v]) => `<div><dt class="mono">${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
</aside>`;

export const lista = (items, cls = "list-check") =>
  `<ul class="${cls}">${items.map((i) => `<li>${cls === "list-check" ? icon.check : ""}<span>${esc(i)}</span></li>`).join("")}</ul>`;

export const faqList = (faqs) =>
  faqs && faqs.length
    ? `<div class="faq">${faqs
        .map(
          (f, i) => `<details${i === 0 ? " open" : ""}><summary><span class="faq-n mono">${String(i + 1).padStart(2, "0")}</span><span class="faq-q">${esc(f.q)}</span><span class="faq-i" aria-hidden="true">${icon.plus}</span></summary><div class="faq-a"><p>${esc(f.a)}</p></div></details>`
        )
        .join("")}</div>`
    : "";

export const pasosList = (pasos) => `<ol class="pasos">${pasos
  .map(([t, d], i) => `<li><span class="paso-n mono">Fase ${String(i + 1).padStart(2, "0")}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`)
  .join("")}</ol>`;

export const normasList = (normas) => `<ul class="normas">${normas
  .map(
    ([nombre, tema, url]) =>
      `<li><span class="norma-n">${url ? `<a href="${url}" target="_blank" rel="noopener">${esc(nombre)} ${icon.arrowUp}</a>` : esc(nombre)}</span><span class="norma-t">${esc(tema)}</span></li>`
  )
  .join("")}</ul>`;

export function relacionados(paths) {
  if (!paths || !paths.length) return "";
  const card = (p) => {
    let titulo, texto, tag;
    if (p.startsWith("/servicios/")) {
      const s = servicio(p);
      titulo = s.menu;
      texto = s.description;
      tag = `Línea ${s.linea}`;
    } else {
      const extra = {
        "/diagnostico-ambiental/": ["Autodiagnóstico ambiental", "8 preguntas para saber si tu empresa tiene obligaciones pendientes.", "Herramienta"],
        "/sectores/hidrocarburos/": ["Hidrocarburos", "Due diligence, ICA, PMA e inversión del 1 % para operadoras.", "Sector"],
        "/sectores/": ["Sectores", "Obligaciones típicas y servicios recomendados por sector.", "Sectores"],
        "/recursos/anla-o-car/": ["¿ANLA o CAR?", "Cómo saber ante qué autoridad tramitar tu proyecto.", "Guía"],
        "/energia-solar/": ["Energía solar", "Calentadores solares y eficiencia energética.", "Grupo Sole"],
      }[p];
      [titulo, texto, tag] = extra;
    }
    return `<a class="card-doc" href="${p}"><span class="card-tab mono">${esc(tag)}</span><span class="card-t">${esc(titulo)}</span><span class="card-d">${esc(texto)}</span><span class="card-go">${icon.arrow}</span></a>`;
  };
  return `<section class="sec sec-rel"><div class="wrap">${label("→", "Servicios relacionados")}<div class="grid-3">${paths.map(card).join("")}</div></div></section>`;
}

export const ctaFinal = (titulo, texto, msg, origen = "cta-final") => `<section class="cta-final">
  <div class="wrap cta-in">
    <div>
      <p class="mono cta-k">Siguiente paso</p>
      <h2 class="cta-t">${titulo}</h2>
      <p class="cta-p">${esc(texto)}</p>
    </div>
    <div class="cta-acts">
      ${waButton("Escribir por WhatsApp", msg, { cls: "btn btn-signal btn-lg", origen })}
      <a class="text-link text-link-inv" href="/diagnostico-ambiental/">o haz el autodiagnóstico en 2 minutos ${icon.arrow}</a>
    </div>
  </div>
</section>`;

function tablaPermisos() {
  return `<div class="tabla-wrap"><table class="tabla">
  <caption class="mono">Tabla 1 · Permisos que tramitamos y autoridad que normalmente los otorga</caption>
  <thead><tr><th scope="col">Permiso</th><th scope="col">Para qué sirve</th><th scope="col">Quién lo otorga</th></tr></thead>
  <tbody>${TABLA_PERMISOS.map(
    ([p, sub, para, quien, href]) =>
      `<tr><th scope="row"><a href="${href}">${esc(p)}</a>${sub ? `<span class="sub">${esc(sub)}</span>` : ""}</th><td data-l="Para qué sirve">${esc(para)}</td><td data-l="Quién lo otorga">${esc(quien)}</td></tr>`
  ).join("")}</tbody></table></div>`;
}

export function tablaSectores() {
  return `<div class="tabla-wrap"><table class="tabla tabla-sect">
  <caption class="mono">Tabla 2 · Obligaciones típicas por sector — orientativa: cada caso depende de la resolución y la autoridad</caption>
  <thead><tr><th scope="col">Sector</th><th scope="col">Obligaciones más comunes</th></tr></thead>
  <tbody>${OBLIGACIONES_SECTOR.map(
    ([s, o]) => `<tr><th scope="row">${esc(s)}</th><td data-l="Obligaciones más comunes"><ul class="chips">${o.split(" · ").map((x) => `<li>${esc(x)}</li>`).join("")}</ul></td></tr>`
  ).join("")}</tbody></table></div>`;
}

function camino(pasos) {
  return `<ol class="camino">${pasos
    .map(([t, d], i) => `<li><span class="camino-n mono">${String(i + 1).padStart(2, "0")}</span><div><h3>${esc(t)}</h3><p>${esc(d)}</p></div></li>`)
    .join("")}</ol>`;
}

/** Página de servicio (o de línea). Estructura: problema → a quién aplica → riesgos → qué incluye → proceso → normativa → FAQ → CTA. */
export function paginaServicio(s) {
  const linea = LINEAS.find((l) => l.linea === s.linea);
  const secciones = [];
  const add = (id, titulo, html) => secciones.push({ id, titulo, html });

  if (s.esLinea) {
    add(
      "servicios",
      "Servicios de esta línea",
      `<ol class="index-sub">${s.hijos
        .map((p, i) => {
          const h = servicio(p);
          return `<li><a href="${p}"><span class="mono">${s.linea}.${i + 1}</span><span class="index-sub-t">${esc(h.menu)}</span><span class="index-sub-d">${esc(h.description)}</span>${icon.arrow}</a></li>`;
        })
        .join("")}</ol>`
    );
  }
  if (s.tablaPermisos) add("permisos", "Permisos que tramitamos", tablaPermisos());
  if (s.camino) add("camino", "El camino del licenciamiento", camino(s.camino));
  if (s.aQuienAplica)
    add(
      "a-quien",
      "¿A quién aplica?",
      `<div class="split-2">${s.aQuienAplica.map(([t, d]) => `<div class="box"><h3>${esc(t)}</h3><p>${esc(d)}</p></div>`).join("")}</div>`
    );
  else if (s.quien) add("quien", "¿Quién lo necesita?", lista(s.quien, "list-bar"));
  if (s.temas) add("temas", "Temas", lista(s.temas));
  if (s.tablaSectores) add("sectores", "Obligaciones típicas por sector", tablaSectores());
  if (s.riesgos)
    add("riesgos", s.esLinea && s.linea === "02" ? "Riesgos de no cumplir" : "¿Qué pasa si no lo tienes?", `<ul class="riesgos">${s.riesgos.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>`);
  add("incluye", s.esLinea && !s.tablaPermisos && s.linea !== "02" ? "Lo que hacemos" : "Qué incluye nuestro servicio", lista(s.incluye) + (s.nota ? `<p class="nota">${esc(s.nota)}</p>` : ""));
  add("proceso", "Cómo lo hacemos", pasosList(s.pasos));
  add("normativa", "Normativa aplicable", normasList([...s.normas, ...(s.normasExtra || [])]) + `<p class="nota mono">Normas citadas a ${new Date().getFullYear()}. Verificamos su vigencia en cada proyecto.</p>`);
  if (s.faqs && s.faqs.length) add("preguntas", "Preguntas frecuentes", faqList(s.faqs));

  const toc = `<nav class="toc" aria-label="En esta página"><p class="mono toc-h">En esta página</p><ol>${secciones
    .map((x, i) => `<li><a href="#${x.id}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${esc(x.titulo)}</a></li>`)
    .join("")}</ol>${waButton("Hablar con un ingeniero", s.wa, { cls: "btn btn-wa btn-block", origen: s.path })}</nav>`;

  const body = `
<section class="svc-hero topo-bg">
  <div class="wrap svc-hero-in">
    <div class="svc-hero-txt">
      <p class="mono kicker"><span class="kicker-num">Línea ${s.linea}</span> ${esc(linea.corto)}${s.esLinea ? "" : ` · ${esc(s.menu)}`}</p>
      <h1>${esc(s.h1)}</h1>
      ${s.intro.map((p) => `<p class="lead">${esc(p)}</p>`).join("")}
      <div class="acts">${waButton("Cotizar por WhatsApp", s.wa, { origen: s.path })}<a class="btn btn-line" href="#incluye"><span>Ver qué incluye</span>${icon.arrow}</a></div>
      ${s.aclaracion ? `<p class="aclaracion mono">${esc(s.aclaracion)}</p>` : ""}
    </div>
    ${ficha(s.ficha)}
  </div>
</section>
${s.novedad ? `<div class="wrap"><div class="novedad"><p class="mono novedad-k">${esc(s.novedad.titulo)}</p><p>${esc(s.novedad.texto)}</p></div></div>` : ""}
<div class="wrap svc-body">
  ${toc}
  <div class="svc-main">
    ${secciones
      .map(
        (x, i) => `<section class="svc-sec" id="${x.id}"><h2><span class="mono svc-sec-n">${String(i + 1).padStart(2, "0")}</span>${esc(x.titulo)}</h2>${x.html}</section>`
      )
      .join("")}
  </div>
</div>
${relacionados(s.relacionados)}
${ctaFinal("¿Tienes este trámite en camino?", "Cuéntanos en dos líneas qué necesitas y te respondemos con la ruta a seguir.", s.wa, s.path)}`;

  const crumbs = [["Inicio", "/"], ["Servicios", "/servicios/"]];
  if (!s.esLinea) crumbs.push([linea.corto, linea.path]);
  crumbs.push([s.esLinea ? s.corto : s.menu, s.path]);

  return {
    path: s.path,
    title: s.title,
    description: s.description,
    crumbs,
    faqs: s.faqs,
    body,
    schema: [
      {
        "@type": "Service",
        "@id": `${SITE.url}${s.path}#servicio`,
        name: s.h1,
        serviceType: s.menu,
        description: s.description,
        provider: { "@id": `${SITE.url}/#organizacion` },
        areaServed: { "@type": "Country", name: "Colombia" },
        url: SITE.url + s.path,
      },
    ],
  };
}

export { link };
