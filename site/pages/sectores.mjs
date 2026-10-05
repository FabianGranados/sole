import { esc, icon, waButton } from "../lib/base.mjs";
import { label, ctaFinal, faqList, lista } from "../lib/components.mjs";
import { servicio, OBLIGACIONES_SECTOR } from "../content/servicios.mjs";

const OBL = Object.fromEntries(OBLIGACIONES_SECTOR);
const S = (p) => `<a href="${p}">${esc(servicio(p).menu)} ${icon.arrow}</a>`;

const SECTORES = [
  {
    id: "industria", nombre: "Industria y manufactura", obl: OBL["Industria y manufactura"],
    reto: "Plantas que crecieron más rápido que sus permisos: vertimientos y emisiones por actualizar, residuos peligrosos sin reportar y un Departamento de Gestión Ambiental que existe solo en el papel.",
    serv: ["/servicios/cumplimiento-ambiental/", "/servicios/permisos-ambientales/permiso-de-vertimientos/", "/servicios/permisos-ambientales/permiso-de-emisiones-atmosfericas/", "/servicios/cumplimiento-ambiental/departamento-de-gestion-ambiental/", "/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/"],
  },
  {
    id: "construccion", nombre: "Construcción e inmobiliario", obl: OBL["Construcción"],
    reto: "La obra no puede parar por un árbol o una quebrada. Los permisos forestales y de ocupación de cauce deben estar listos antes de que llegue la maquinaria.",
    serv: ["/servicios/permisos-ambientales/aprovechamiento-forestal/", "/servicios/permisos-ambientales/ocupacion-de-cauce/", "/servicios/licenciamiento-ambiental/plan-de-manejo-ambiental/", "/servicios/asesoria-auditoria/interventoria-ambiental/"],
  },
  {
    id: "infraestructura", nombre: "Infraestructura vial", obl: OBL["Infraestructura vial"],
    reto: "Proyectos lineales que atraviesan varias jurisdicciones, con licencia o PMA, monitoreos permanentes y compensaciones que se ejecutan durante años.",
    serv: ["/servicios/licenciamiento-ambiental/", "/servicios/cumplimiento-ambiental/informes-ica/", "/servicios/licenciamiento-ambiental/compensaciones-inversion-1/", "/servicios/asesoria-auditoria/interventoria-ambiental/"],
  },
  {
    id: "mineria", nombre: "Minería", obl: OBL["Minería"],
    reto: "Licencias con obligaciones extensas, comunidades atentas y planes de cierre que se deben pensar desde el inicio.",
    serv: ["/servicios/licenciamiento-ambiental/estudio-de-impacto-ambiental/", "/servicios/licenciamiento-ambiental/plan-de-manejo-ambiental/", "/servicios/cumplimiento-ambiental/informes-ica/", "/servicios/licenciamiento-ambiental/compensaciones-inversion-1/"],
  },
  {
    id: "hidrocarburos", nombre: "Hidrocarburos", obl: OBL["Hidrocarburos"], destacado: true,
    reto: "Expedientes ante la ANLA con años de historia, cesiones de titular y seguimiento riguroso. Es nuestra especialidad.",
    serv: ["/servicios/asesoria-auditoria/due-diligence-ambiental/", "/servicios/cumplimiento-ambiental/informes-ica/", "/servicios/licenciamiento-ambiental/compensaciones-inversion-1/", "/servicios/asesoria-auditoria/requerimientos-y-sancionatorios/"],
  },
  {
    id: "energia", nombre: "Energía, incluida la solar", obl: OBL["Energía"],
    reto: "Grupo Sole viene del sector solar. Acompañamos los trámites ambientales de proyectos de energía —aprovechamiento forestal u ocupación de cauce durante la construcción, y la licencia o el instrumento que aplique según la capacidad del proyecto—, que se confirman caso a caso con la autoridad.",
    serv: ["/servicios/licenciamiento-ambiental/", "/servicios/permisos-ambientales/aprovechamiento-forestal/", "/servicios/permisos-ambientales/ocupacion-de-cauce/", "/servicios/licenciamiento-ambiental/plan-de-manejo-ambiental/"],
  },
  {
    id: "agroindustria", nombre: "Agroindustria", obl: OBL["Agroindustria"],
    reto: "El agua es el centro: concesiones, vertimientos de procesos y programas de uso eficiente, además del manejo de envases de agroquímicos.",
    serv: ["/servicios/permisos-ambientales/concesion-de-aguas/", "/servicios/cumplimiento-ambiental/pueaa/", "/servicios/permisos-ambientales/permiso-de-vertimientos/", "/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/"],
  },
  {
    id: "comercio", nombre: "Comercio y servicios", obl: OBL["Comercio y servicios"],
    reto: "Obligaciones que parecen pequeñas —residuos, vertimientos, ruido, publicidad exterior— y que la autoridad urbana revisa en sus operativos.",
    serv: ["/servicios/cumplimiento-ambiental/matriz-legal-ambiental/", "/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/", "/servicios/asesoria-auditoria/capacitaciones/"],
  },
  {
    id: "salud", nombre: "Salud y laboratorios", obl: OBL["Salud y laboratorios"],
    reto: "Residuos hospitalarios y químicos con reglas estrictas de clasificación, almacenamiento, entrega y reporte.",
    serv: ["/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/", "/servicios/permisos-ambientales/permiso-de-vertimientos/", "/servicios/asesoria-auditoria/capacitaciones/"],
  },
  {
    id: "entidades-publicas", nombre: "Entidades públicas", obl: "Supervisión ambiental de contratos de obra · cumplimiento de PMA y permisos de los proyectos · capacitación de equipos",
    reto: "Las entidades responden por el cumplimiento ambiental de las obras que contratan. Una interventoría ambiental independiente da trazabilidad y tranquilidad.",
    serv: ["/servicios/asesoria-auditoria/interventoria-ambiental/", "/servicios/licenciamiento-ambiental/plan-de-manejo-ambiental/", "/servicios/asesoria-auditoria/capacitaciones/"],
  },
];

export const sectores = {
  path: "/sectores/",
  title: "Consultoría Ambiental por Sector | Grupo Sole",
  description: "Obligaciones ambientales típicas y servicios recomendados para industria, construcción, infraestructura, minería, hidrocarburos, energía y más.",
  crumbs: [["Inicio", "/"], ["Sectores", "/sectores/"]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">10</span> Sectores</p>
  <h1>Cada sector tiene sus propias obligaciones ambientales</h1>
  <p class="lead">Estas son las exigencias más comunes por actividad y los servicios que normalmente las resuelven. Es una guía orientativa: cada caso depende de la resolución y de la autoridad.</p>
</div></section>
<div class="wrap" style="padding-block:24px 64px">
${SECTORES.map(
  (s, i) => `<section class="sector" id="${s.id}">
  <div><span class="mono">${String(i + 1).padStart(2, "0")} · Sector</span><h2>${esc(s.nombre)}</h2>${
    s.destacado ? `<p style="margin-top:14px"><a class="btn btn-ink" href="/sectores/hidrocarburos/"><span>Ver especialidad</span>${icon.arrow}</a></p>` : ""
  }</div>
  <div>
    <p class="lead" style="font-size:1.05rem">${esc(s.reto)}</p>
    <div class="sector-cols">
      <div><h3>Obligaciones más comunes</h3><ul class="chips">${s.obl.split(" · ").map((o) => `<li>${esc(o)}</li>`).join("")}</ul></div>
      <div class="sector-links"><h3>Servicios recomendados</h3>${s.serv.map(S).join("")}</div>
    </div>
  </div>
</section>`
).join("")}
</div>
${ctaFinal("¿Tu sector no aparece o tu caso es particular?", "Cuéntanos qué hace tu empresa y te decimos qué obligaciones ambientales le aplican.", "Hola, quiero saber qué obligaciones ambientales aplican a mi empresa.", "sectores")}`,
};

const HALLAZGOS = [
  ["Inversión forzosa del 1 %", "Plan de inversión radicado sin aprobación; obligación acumulada de varios periodos.", "alto"],
  ["Ficha de manejo de aguas residuales", "Monitoreos sin laboratorio acreditado en dos periodos del ICA.", "alto"],
  ["Concesión de aguas", "Caudal captado registrado por encima del otorgado en temporada seca.", "medio"],
  ["Plan de contingencia", "Simulacro anual sin evidencias en el último ICA.", "medio"],
  ["Compensación forestal", "Mantenimiento de siembras con soporte parcial.", "bajo"],
];

const FAQ_HC = [
    { q: "¿En qué momento conviene un due diligence ambiental?", a: "Antes de comprar, ceder, hacer farm-in o farm-out, o financiar un activo; y también de forma preventiva, antes de una visita de seguimiento de la ANLA." },
    { q: "¿Trabajan solo con la ANLA?", a: "Los proyectos de hidrocarburos licenciados son competencia de la ANLA, pero muchos permisos asociados y las obligaciones locales pasan por las corporaciones autónomas regionales. Revisamos ambos frentes." },
    { q: "¿La información del expediente se maneja con confidencialidad?", a: "Sí. Trabajamos bajo acuerdo de confidencialidad y usamos la información solo para el propósito de la revisión." },
  ];

export const hidrocarburos = {
  path: "/sectores/hidrocarburos/",
  title: "Consultoría Ambiental para Hidrocarburos | Grupo Sole",
  description: "Due diligence ambiental, auditoría de cumplimiento de licencias, ICA, PMA e inversión del 1 % para operadoras de exploración y producción de hidrocarburos.",
  crumbs: [["Inicio", "/"], ["Sectores", "/sectores/"], ["Hidrocarburos", "/sectores/hidrocarburos/"]],
  faqs: FAQ_HC,
  schema: [],
  body: `
<section class="svc-hero topo-bg">
  <div class="wrap svc-hero-in">
    <div>
      <p class="mono kicker"><span class="kicker-num">E&amp;P</span> Sector hidrocarburos</p>
      <h1>Consultoría ambiental para proyectos de hidrocarburos</h1>
      <p class="lead">Nos especializamos en procesos de <strong>Environmental Due Diligence</strong> para empresas que operan bajo licencia ambiental, con particular énfasis en exploración y producción petrolera.</p>
      <p class="lead">Auditamos el cumplimiento normativo de cada proyecto —expedientes, planes de manejo y conceptos técnicos— para identificar y mitigar contingencias legales u operativas antes de que se conviertan en un problema.</p>
      <div class="acts">
        ${waButton("Hablar de un activo o un expediente", "Hola, trabajo en el sector de hidrocarburos y quiero hablar sobre un due diligence o una auditoría ambiental.", { origen: "hidrocarburos" })}
        <a class="btn btn-line" href="#entregable"><span>Ver un informe tipo</span>${icon.arrow}</a>
      </div>
    </div>
    <aside class="ficha" aria-label="Ficha del sector">
      <p class="ficha-head mono"><span>Ficha del sector</span><span class="ficha-dot" aria-hidden="true"></span></p>
      <dl>
        <div><dt class="mono">Autoridad</dt><dd>ANLA (licencia y seguimiento) · CAR para permisos y obligaciones locales</dd></div>
        <div><dt class="mono">Instrumentos</dt><dd>Licencia ambiental · PMA · ICA · inversión del 1 % · compensaciones · plan de abandono</dd></div>
        <div><dt class="mono">Ciclo</dt><dd>Exploración · perforación · producción · transporte · abandono</dd></div>
        <div><dt class="mono">Para</dt><dd>Operadoras, socios no operadores, inversionistas y financiadores</dd></div>
      </dl>
    </aside>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${label("01", "El reto")}
    <div class="sec-head">
      <h2 class="h-sec">Un expediente con años de historia no se revisa en una tarde</h2>
      <p>Licencias modificadas varias veces, cambios de titular, ICA de muchos periodos, conceptos técnicos y requerimientos que se cruzan. Ahí se esconden las contingencias.</p>
    </div>
    <div class="grid-3">
      <div class="box"><h3>Antes de una transacción</h3><p>Compra, cesión, farm-in o farm-out: saber qué obligaciones hereda el nuevo titular y cuánto cuesta cerrarlas.</p></div>
      <div class="box"><h3>Antes de una visita de seguimiento</h3><p>Llegar con las evidencias ordenadas y las brechas identificadas, no descubrirlas en el acta.</p></div>
      <div class="box"><h3>Cuando ya llegó el requerimiento</h3><p>Soporte técnico para responder a tiempo y con pruebas, en coordinación con el equipo jurídico.</p></div>
    </div>
  </div>
</section>

<section class="sec sec-ink topo-bg-inv">
  <div class="wrap hc">
    <div class="hc-txt">
      ${label("02", "Enfoque")}
      <h2 class="h-sec">Análisis preventivo, con los criterios de evaluación de la autoridad</h2>
      <p>Conocemos cómo evalúa y hace seguimiento la autoridad ambiental. Por eso nuestro análisis no se queda en una lista de chequeo: interpreta cada obligación como la leería un evaluador, prioriza por riesgo y propone cómo cerrarla.</p>
      <p>El resultado es un insumo para decidir: negociar el precio, exigir garantías, planear el cierre de brechas o preparar la siguiente visita.</p>
    </div>
    <div class="hc-list">
      <p class="mono hc-k">Qué revisamos</p>
      <ol>
        <li><span class="mono">a</span>Licencia ambiental, modificaciones y cesiones</li>
        <li><span class="mono">b</span>Plan de Manejo Ambiental y fichas de seguimiento</li>
        <li><span class="mono">c</span>Informes de Cumplimiento Ambiental radicados</li>
        <li><span class="mono">d</span>Conceptos técnicos y requerimientos de seguimiento</li>
        <li><span class="mono">e</span>Inversión forzosa del 1 % y compensaciones</li>
        <li><span class="mono">f</span>Permisos de uso de recursos asociados</li>
        <li><span class="mono">g</span>Procesos sancionatorios y medidas preventivas</li>
        <li><span class="mono">h</span>Planes de abandono y restauración</li>
      </ol>
    </div>
  </div>
</section>

<section class="sec" id="entregable">
  <div class="wrap">
    ${label("03", "Entregable")}
    <div class="sec-head">
      <h2 class="h-sec">Así se ve una matriz de hallazgos</h2>
      <p>Cada hallazgo con su evidencia, su nivel de riesgo y la acción para cerrarlo. El informe ejecutivo resume lo que importa para la decisión.</p>
    </div>
    <div class="tabla-wrap"><table class="tabla">
      <caption class="mono">Ejemplo ilustrativo · no corresponde a un cliente real</caption>
      <thead><tr><th scope="col">Obligación</th><th scope="col">Hallazgo</th><th scope="col">Riesgo</th></tr></thead>
      <tbody>${HALLAZGOS.map(
        ([o, h, r]) =>
          `<tr><th scope="row">${esc(o)}</th><td data-l="Hallazgo">${esc(h)}</td><td data-l="Riesgo"><span class="st ${r === "alto" ? "st-warn" : r === "medio" ? "st-todo" : "st-ok"}">${r}</span></td></tr>`
      ).join("")}</tbody>
    </table></div>
  </div>
</section>

<section class="sec sec-paper2">
  <div class="wrap">
    ${label("04", "Servicios para el sector")}
    <div class="grid-3">
      ${[
        "/servicios/asesoria-auditoria/due-diligence-ambiental/",
        "/servicios/cumplimiento-ambiental/informes-ica/",
        "/servicios/licenciamiento-ambiental/plan-de-manejo-ambiental/",
        "/servicios/licenciamiento-ambiental/compensaciones-inversion-1/",
        "/servicios/asesoria-auditoria/requerimientos-y-sancionatorios/",
        "/servicios/licenciamiento-ambiental/estudio-de-impacto-ambiental/",
      ]
        .map((p) => {
          const s = servicio(p);
          return `<a class="card-doc" href="${p}"><span class="card-tab mono">Línea ${s.linea}</span><span class="card-t">${esc(s.menu)}</span><span class="card-d">${esc(s.description)}</span><span class="card-go">${icon.arrow}</span></a>`;
        })
        .join("")}
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap faq-wrap">
    <div>${label("05", "Preguntas frecuentes")}<h2 class="h-sec">Sobre el trabajo con operadoras</h2></div>
    ${faqList(FAQ_HC)}
  </div>
</section>
${ctaFinal("¿Tienes un activo, una cesión o una visita en camino?", "Cuéntanos el bloque o el proyecto y el plazo. Te proponemos el alcance de la revisión.", "Hola, trabajo en el sector de hidrocarburos y necesito una revisión ambiental de un activo o expediente.", "hidrocarburos")}`,
};
