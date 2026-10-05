import { esc, icon, waButton } from "../lib/base.mjs";
import { label, faqList, ctaFinal } from "../lib/components.mjs";
import { LINEAS, servicio } from "../content/servicios.mjs";

const SITUACIONES = [
  ["Me llegó un requerimiento de la autoridad ambiental y no sé cómo responderlo.", "Requerimientos y sancionatorios", "/servicios/asesoria-auditoria/requerimientos-y-sancionatorios/"],
  ["Voy a construir o ampliar y no sé qué permisos necesito.", "Permisos ambientales", "/servicios/permisos-ambientales/"],
  ["Tengo licencia, pero no estoy seguro de estar cumpliendo el PMA ni de cuándo presentar el ICA.", "Informes ICA", "/servicios/cumplimiento-ambiental/informes-ica/"],
  ["Genero residuos peligrosos y no tengo claro el registro ni el reporte anual.", "RESPEL y RUA", "/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/"],
  ["Voy a comprar una empresa, un predio o un campo y quiero saber si trae pasivos ambientales.", "Due diligence ambiental", "/servicios/asesoria-auditoria/due-diligence-ambiental/"],
];

const SECTORES = [
  ["Industria y manufactura", "industria"],
  ["Construcción e inmobiliario", "construccion"],
  ["Infraestructura vial", "infraestructura"],
  ["Minería", "mineria"],
  ["Hidrocarburos", "hidrocarburos"],
  ["Energía, incluida la solar", "energia"],
  ["Agroindustria", "agroindustria"],
  ["Comercio y servicios", "comercio"],
  ["Salud y laboratorios", "salud"],
  ["Entidades públicas", "entidades-publicas"],
];

const FAQ = [
  { q: "¿Atienden en todo el país?", a: "Sí. Trabajamos con empresas y proyectos en Colombia; los servicios que requieren visita de campo se cotizan según la ubicación." },
  { q: "¿Cuánto cuesta un trámite ambiental?", a: "Depende del tipo de permiso o estudio, del tamaño del proyecto y de los estudios técnicos necesarios. Tras el diagnóstico te damos una propuesta cerrada." },
  { q: "¿Ustedes pagan las tarifas de la autoridad?", a: "Las tarifas de evaluación y seguimiento las paga el titular del trámite; te indicamos cuánto y cuándo." },
  { q: "¿Cuál es la diferencia entre ANLA y la CAR?", a: "La ANLA evalúa los proyectos de mayor escala definidos en el Decreto 1076 de 2015; las corporaciones autónomas regionales y las autoridades urbanas atienden los demás en su territorio." },
  { q: "¿Trabajan con laboratorios?", a: "Sí. Los monitoreos y caracterizaciones se hacen con laboratorios acreditados por el IDEAM." },
];

const expediente = `<figure class="exp" aria-label="Ejemplo ilustrativo de una ruta de cumplimiento">
  <div class="exp-sheet exp-back" aria-hidden="true"></div>
  <div class="exp-sheet exp-mid" aria-hidden="true"></div>
  <div class="exp-sheet exp-front">
    <div class="exp-tab mono">Ruta de cumplimiento</div>
    <header class="exp-head">
      <div><p class="mono exp-k">Expediente</p><p class="exp-t">Planta industrial · Cundinamarca</p></div>
      <p class="mono exp-ej">Ejemplo<br>ilustrativo</p>
    </header>
    <table class="exp-rows">
      <thead class="mono"><tr><th>Obligación</th><th>Autoridad</th><th>Estado</th></tr></thead>
      <tbody>
        <tr><td>Concesión de aguas</td><td class="mono">CAR</td><td><span class="st st-ok">Vigente</span></td></tr>
        <tr><td>Permiso de vertimientos</td><td class="mono">CAR</td><td><span class="st st-warn">Renovar · 60 días</span></td></tr>
        <tr><td>RESPEL · reporte RUA</td><td class="mono">IDEAM</td><td><span class="st st-ok">Reportado</span></td></tr>
        <tr><td>Depto. de Gestión Ambiental</td><td class="mono">CAR</td><td><span class="st st-todo">Registrar</span></td></tr>
        <tr><td>Matriz legal ambiental</td><td class="mono">Interna</td><td><span class="st st-todo">Actualizar</span></td></tr>
      </tbody>
    </table>
    <footer class="exp-foot">
      <div class="exp-bar" role="img" aria-label="2 de 5 obligaciones al día"><span style="width:40%"></span></div>
      <p class="mono">2 / 5 al día · 3 acciones priorizadas</p>
    </footer>
    <div class="stamp mono" aria-hidden="true"><span>Ruta</span><span>definida</span></div>
  </div>
</figure>`;

export default {
  path: "/",
  title: "Consultoría Ambiental en Colombia | Grupo Sole",
  description: "Permisos, licencias, PMA, ICA y cumplimiento ambiental para empresas y proyectos. Diagnóstico gratuito por WhatsApp.",
  bodyClass: "home",
  faqs: FAQ,
  body: `
<section class="hero topo-bg">
  <div class="wrap hero-in">
    <div class="hero-txt">
      <p class="mono kicker"><span class="kicker-num">GS</span> Consultoría e ingeniería ambiental en Colombia</p>
      <h1>Permisos, estudios y cumplimiento ambiental <em>para tu empresa y tus proyectos</em></h1>
      <p class="lead">Te acompañamos ante la ANLA, las corporaciones autónomas regionales y las autoridades ambientales urbanas. Diagnosticamos, tramitamos y hacemos seguimiento para que tu operación avance sin sanciones ni retrasos.</p>
      <div class="acts">
        ${waButton("Solicitar diagnóstico gratuito", "Hola, quiero solicitar un diagnóstico ambiental gratuito para mi empresa o proyecto.", { cls: "btn btn-signal btn-lg", origen: "hero" })}
        <a class="btn btn-line btn-lg" href="/servicios/"><span>Ver servicios</span>${icon.arrow}</a>
      </div>
    </div>
    ${expediente}
  </div>
  <div class="wrap">
    <ul class="trust" aria-label="Por qué Grupo Sole">
      <li><span class="mono">01</span>Trámites ante ANLA, CAR y autoridades urbanas</li>
      <li><span class="mono">02</span>Atención directa del ingeniero a cargo</li>
      <li><span class="mono">03</span>Entregables listos para radicar</li>
      <li><span class="mono">04</span>Acompañamiento en todo el país</li>
    </ul>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${label("01", "Diagnóstico rápido")}
    <div class="sit">
      <h2 class="h-sec">¿Te suena alguna de estas situaciones?</h2>
      <ol class="sit-list">
        ${SITUACIONES.map(
          ([q, tag, href], i) => `<li><a href="${href}"><span class="sit-n mono">${String(i + 1).padStart(2, "0")}</span><q>${esc(q)}</q><span class="sit-ruta mono">Ruta → ${esc(tag)}</span></a></li>`
        ).join("")}
      </ol>
      <p class="sit-close">Para cada una tenemos una ruta clara. <a href="/contacto/" class="text-link">Escríbenos y te decimos por dónde empezar ${icon.arrow}</a></p>
    </div>
  </div>
</section>

<section class="sec sec-paper2" id="servicios">
  <div class="wrap">
    ${label("02", "Índice de servicios")}
    <div class="sec-head">
      <h2 class="h-sec">Cuatro líneas, un solo responsable</h2>
      <p>Del primer diagnóstico a la respuesta a la autoridad. Cada línea tiene su ruta, sus entregables y su normativa.</p>
    </div>
    <ol class="indice">
      ${LINEAS.map(
        (l) => `<li class="indice-item">
          <a class="indice-row" href="${l.path}">
            <span class="indice-num">${l.num}</span>
            <span class="indice-t">${esc(l.menu)}</span>
            <span class="indice-dots" aria-hidden="true"></span>
            <span class="indice-c mono">${l.hijos.length} servicios</span>
            <span class="indice-go">${icon.arrow}</span>
          </a>
          <p class="indice-d">${esc(l.intro[0])}</p>
          <ul class="indice-sub">${l.hijos.map((p) => `<li><a href="${p}">${esc(servicio(p).menu)}</a></li>`).join("")}</ul>
        </li>`
      ).join("")}
    </ol>
  </div>
</section>

<section class="sec sec-ink topo-bg-inv" id="hidrocarburos">
  <div class="wrap hc">
    <div class="hc-txt">
      ${label("03", "Especialidad")}
      <h2 class="h-sec">Due diligence ambiental para el sector de hidrocarburos</h2>
      <p class="lead">Auditamos el cumplimiento de proyectos de exploración y producción con licencia ambiental: expedientes, planes de manejo, ICA y conceptos técnicos de seguimiento.</p>
      <p>Conocemos los criterios con los que evalúa la autoridad. Eso nos permite identificar a tiempo las contingencias legales y operativas, y entregar a las operadoras un análisis preventivo que protege la viabilidad de sus inversiones frente al escrutinio regulatorio.</p>
      <div class="acts">
        <a class="btn btn-signal" href="/sectores/hidrocarburos/"><span>Servicios para hidrocarburos</span>${icon.arrow}</a>
        <a class="btn btn-line-inv" href="/servicios/asesoria-auditoria/due-diligence-ambiental/"><span>Due diligence ambiental</span>${icon.arrow}</a>
      </div>
    </div>
    <div class="hc-list">
      <p class="mono hc-k">Qué revisamos en el expediente</p>
      <ol>
        <li><span class="mono">a</span>Licencia ambiental, modificaciones y cesiones</li>
        <li><span class="mono">b</span>Plan de Manejo Ambiental y fichas de seguimiento</li>
        <li><span class="mono">c</span>Informes de Cumplimiento Ambiental radicados</li>
        <li><span class="mono">d</span>Conceptos técnicos y requerimientos de la ANLA</li>
        <li><span class="mono">e</span>Inversión forzosa del 1 % y compensaciones</li>
        <li><span class="mono">f</span>Planes de abandono y procesos sancionatorios</li>
      </ol>
    </div>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${label("04", "Método")}
    <div class="sec-head">
      <h2 class="h-sec">Cómo trabajamos</h2>
      <p>Cinco fases, con un entregable concreto al final de cada una.</p>
    </div>
    <ol class="linea-proc">
      <li><span class="lp-n mono">01</span><h3>Diagnóstico</h3><p>Revisamos tu actividad, ubicación, permisos actuales y obligaciones.</p></li>
      <li><span class="lp-n mono">02</span><h3>Ruta de cumplimiento</h3><p>Qué falta, qué es urgente, quién es la autoridad y cuánto toma cada trámite.</p></li>
      <li><span class="lp-n mono">03</span><h3>Estudios y documentos</h3><p>Hacemos los estudios técnicos, planes y formularios.</p></li>
      <li><span class="lp-n mono">04</span><h3>Radicación y gestión</h3><p>Radicamos en VITAL o ante la corporación y respondemos los requerimientos.</p></li>
      <li><span class="lp-n mono">05</span><h3>Seguimiento</h3><p>Calendario de obligaciones, informes periódicos y alertas de vencimientos.</p></li>
    </ol>
  </div>
</section>

<section class="sec sec-riesgo">
  <div class="wrap riesgo">
    <div class="riesgo-num">
      ${label("05", "Por qué no dejarlo para después")}
      <p class="big-num">100.000</p>
      <p class="mono big-cap">SMMLV · multa máxima por infracción ambiental · Ley 2387 de 2024</p>
    </div>
    <div class="riesgo-txt">
      <h2 class="h-sec">Cumplir a tiempo siempre sale más barato que defenderse después</h2>
      <p>La Ley 2387 de 2024 endureció el régimen sancionatorio ambiental. Además de multas, la autoridad puede:</p>
      <ul class="riesgos">
        <li>Suspender actividades u obras.</li>
        <li>Cerrar temporal o definitivamente el establecimiento.</li>
        <li>Revocar permisos, concesiones o licencias.</li>
      </ul>
      <a class="btn btn-ink" href="/diagnostico-ambiental/"><span>Haz el autodiagnóstico · 2 minutos</span>${icon.arrow}</a>
    </div>
  </div>
</section>

<section class="sec sec-paper2">
  <div class="wrap">
    ${label("06", "Sectores")}
    <div class="sec-head">
      <h2 class="h-sec">Cada sector tiene sus propias obligaciones</h2>
      <p>Conocemos las exigencias típicas de cada actividad y la autoridad que las vigila.</p>
    </div>
    <ul class="sectores">
      ${SECTORES.map(([s, id], i) => `<li><a href="/sectores/${id === "hidrocarburos" ? "hidrocarburos/" : `#${id}`}"><span class="mono">${String(i + 1).padStart(2, "0")}</span>${esc(s)}${icon.arrow}</a></li>`).join("")}
    </ul>
  </div>
</section>

<section class="sec">
  <div class="wrap">
    ${label("07", "Recursos")}
    <div class="sec-head">
      <h2 class="h-sec">Para entender antes de decidir</h2>
      <p>Guías prácticas, sin letra pequeña.</p>
    </div>
    <div class="grid-3">
      <a class="card-doc" href="/recursos/checklist-obligaciones-ambientales/"><span class="card-tab mono">Checklist</span><span class="card-t">Las 10 obligaciones ambientales que toda empresa debe revisar</span><span class="card-d">Una lista corta para saber si estás al día.</span><span class="card-go">${icon.arrow}</span></a>
      <a class="card-doc" href="/recursos/anla-o-car/"><span class="card-tab mono">Guía</span><span class="card-t">¿ANLA o CAR? Cómo saber ante quién tramitar</span><span class="card-d">La autoridad competente según el tipo y la escala del proyecto.</span><span class="card-go">${icon.arrow}</span></a>
      <a class="card-doc" href="/recursos/glosario/"><span class="card-tab mono">Glosario</span><span class="card-t">Las siglas ambientales, explicadas</span><span class="card-d">ANLA, CAR, EIA, PMA, ICA, DGA, RUA, PUEAA y más.</span><span class="card-go">${icon.arrow}</span></a>
    </div>
  </div>
</section>

<section class="sec sec-paper2">
  <div class="wrap faq-wrap">
    <div>
      ${label("08", "Preguntas frecuentes")}
      <h2 class="h-sec">Lo que más nos preguntan</h2>
      <p>¿Tu pregunta no está aquí? <a class="text-link" href="/contacto/">Escríbenos ${icon.arrow}</a></p>
    </div>
    ${faqList(FAQ)}
  </div>
</section>

${ctaFinal("¿Tienes un trámite, un requerimiento o un proyecto en camino?", "Cuéntanos en dos líneas y te respondemos con la ruta a seguir.", "Hola, tengo un trámite / requerimiento / proyecto ambiental y quiero saber por dónde empezar.", "home")}
`,
};
