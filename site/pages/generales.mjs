import { esc, icon, waButton, SITE, wa } from "../lib/base.mjs";
import { label, ctaFinal, tablaSectores } from "../lib/components.mjs";
import { LINEAS, servicio } from "../content/servicios.mjs";

/* ───────────── /servicios/ ───────────── */
export const servicios = {
  path: "/servicios/",
  title: "Servicios de Consultoría Ambiental | Grupo Sole",
  description: "Permisos ambientales, cumplimiento ambiental empresarial, estudios y licenciamiento, due diligence, interventoría y capacitación en Colombia.",
  crumbs: [["Inicio", "/"], ["Servicios", "/servicios/"]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">4</span> Líneas de servicio</p>
  <h1>Servicios de consultoría e ingeniería ambiental</h1>
  <p class="lead">Organizamos el trabajo en cuatro líneas. Cada servicio tiene su propia página con lo que incluye, el proceso, la normativa y las preguntas frecuentes.</p>
</div></section>
<section class="sec" style="padding-top:56px"><div class="wrap">
<ol class="indice">
${LINEAS.map(
  (l) => `<li class="indice-item">
  <a class="indice-row" href="${l.path}"><span class="indice-num">${l.num}</span><span class="indice-t">${esc(l.menu)}</span><span class="indice-dots" aria-hidden="true"></span><span class="indice-c mono">${l.hijos.length} servicios</span><span class="indice-go">${icon.arrow}</span></a>
  <p class="indice-d">${esc(l.intro.join(" "))}</p>
  <ol class="index-sub" style="margin-left:calc(2.2ch + 18px)">${l.hijos
    .map((p, i) => {
      const h = servicio(p);
      return `<li><a href="${p}"><span class="mono">${l.num}.${i + 1}</span><span class="index-sub-t">${esc(h.menu)}</span><span class="index-sub-d">${esc(h.description)}</span>${icon.arrow}</a></li>`;
    })
    .join("")}</ol>
</li>`
).join("")}
</ol>
</div></section>
<section class="sec sec-paper2"><div class="wrap">
  ${label("→", "Referencia rápida")}
  <div class="sec-head"><h2 class="h-sec">Obligaciones típicas por sector</h2><p>Úsala como punto de partida. El detalle depende de tu resolución y de la autoridad de tu zona.</p></div>
  ${tablaSectores()}
</div></section>
${ctaFinal("¿No sabes cuál de estos servicios necesitas?", "Es normal. Cuéntanos qué hace tu empresa o tu proyecto y te decimos por dónde empezar.", "Hola, no sé qué servicio ambiental necesito. Les cuento mi caso:", "servicios")}`,
};

/* ───────────── /diagnostico-ambiental/ ───────────── */
const PREGUNTAS = [
  ["¿Tienes identificados todos los permisos que tu actividad necesita (agua, vertimientos, emisiones, forestal, cauce)?", "Permisos identificados"],
  ["¿Todos tus permisos están vigentes?", "Permisos vigentes"],
  ["Si tienes licencia o PMA, ¿presentas los ICA a tiempo?", "ICA a tiempo"],
  ["¿Tienes una matriz legal ambiental actualizada en el último año?", "Matriz legal actualizada"],
  ["Si tu empresa es industrial, ¿tiene Departamento de Gestión Ambiental registrado?", "DGA registrado"],
  ["Si generas residuos peligrosos, ¿estás inscrito en el RUA y reportaste el último año?", "RESPEL / RUA"],
  ["¿Tus monitoreos de agua, aire o ruido están al día y los hace un laboratorio acreditado?", "Monitoreos al día"],
  ["¿Respondiste a tiempo todos los requerimientos de la autoridad ambiental?", "Requerimientos respondidos"],
];

export const diagnostico = {
  path: "/diagnostico-ambiental/",
  title: "Autodiagnóstico Ambiental Gratuito para Empresas | Grupo Sole",
  description: "Responde 8 preguntas y descubre si tu empresa podría tener obligaciones ambientales pendientes. Gratis, en 2 minutos y sin registrarte.",
  crumbs: [["Inicio", "/"], ["Autodiagnóstico ambiental", "/diagnostico-ambiental/"]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">8</span> preguntas · 2 minutos</p>
  <h1>Autodiagnóstico ambiental para empresas</h1>
  <p class="lead">Responde con sinceridad. El resultado se calcula en tu navegador: no guardamos tus respuestas. Si quieres, al final puedes enviárnoslo por WhatsApp.</p>
</div></section>
<div class="wrap layout-aside">
  <div>
    <form class="diag" data-diag novalidate>
      <div class="diag-head mono"><span>Autodiagnóstico</span><span class="diag-prog" aria-hidden="true"><span data-diag-prog></span></span><span data-diag-count>0 / ${PREGUNTAS.length}</span></div>
      ${PREGUNTAS.map(
        ([q, corto], i) => `<fieldset data-corto="${esc(corto)}"><legend><span class="q-n">${i + 1}</span><span class="q-t">${esc(q)}</span></legend>
        <div class="opts" style="grid-column:2">
          <label><input type="radio" name="p${i}" value="si"><span>Sí</span></label>
          <label><input type="radio" name="p${i}" value="no"><span>No</span></label>
          <label><input type="radio" name="p${i}" value="nose"><span>No sé</span></label>
        </div></fieldset>`
      ).join("")}
      <div class="diag-foot"><p class="form-note" style="margin:0">Orientativo: no reemplaza una revisión técnica.</p><button class="btn btn-ink btn-lg" type="submit"><span>Ver mi resultado</span>${icon.arrow}</button></div>
    </form>
    <div class="diag-res" data-diag-res hidden aria-live="polite"></div>
  </div>
  <aside class="aside-card">
    <p class="mono" style="color:var(--signal-ink)">CÓMO SE LEE</p>
    <h2>Tres resultados posibles</h2>
    <p><strong>7–8 “Sí”:</strong> vas bien. Conviene una revisión anual.</p>
    <p><strong>4–6 “Sí”:</strong> hay brechas que conviene cerrar antes de una visita.</p>
    <p><strong>0–3 “Sí” o varios “No sé”:</strong> atención prioritaria.</p>
    ${waButton("Prefiero hablar directo", "Hola, quiero revisar el cumplimiento ambiental de mi empresa.", { cls: "btn btn-wa btn-block", origen: "diagnostico-aside" })}
  </aside>
</div>`,
};

/* ───────────── /nosotros/ ───────────── */
export const nosotros = {
  path: "/nosotros/",
  title: "Nosotros: Ingeniería Ambiental con Trato Directo | Grupo Sole",
  description: "Grupo Sole es una firma de consultoría e ingeniería ambiental en Colombia. Cada proyecto lo dirige un ingeniero ambiental que responde directamente al cliente.",
  crumbs: [["Inicio", "/"], ["Nosotros", "/nosotros/"]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">GS</span> Nosotros</p>
  <h1>Ingeniería ambiental con trato directo</h1>
  <p class="lead">Grupo Sole nació trabajando con energía solar y eficiencia. Hoy aplicamos esa misma mirada práctica a la consultoría ambiental: ayudamos a empresas y proyectos a cumplir sus obligaciones, obtener sus permisos y licenciar sus proyectos sin perder tiempo.</p>
</div></section>
<section class="sec"><div class="wrap layout-aside" style="padding-block:0">
  <div class="prose">
    <h2 style="margin-top:0">Cómo trabajamos</h2>
    <p>Cada proyecto lo dirige un ingeniero ambiental con experiencia en el análisis de expedientes de proyectos con licencia ambiental —con especial énfasis en el sector de hidrocarburos—, que responde directamente al cliente.</p>
    <p>Cuando el proyecto lo requiere, coordinamos especialistas en biología, hidrología, geología y gestión social, y laboratorios acreditados por el IDEAM. Tú tienes un solo interlocutor; nosotros nos encargamos de que todo encaje.</p>
    <h2>Lo que nos diferencia</h2>
    <ul>
      <li><strong>Atención directa del ingeniero a cargo:</strong> no pasas por cinco intermediarios.</li>
      <li><strong>Visión completa:</strong> desde el primer diagnóstico hasta la respuesta a la autoridad y el seguimiento.</li>
      <li><strong>Conocimiento de las autoridades:</strong> ANLA, corporaciones autónomas regionales y autoridades urbanas.</li>
      <li><strong>Entregables claros:</strong> matrices, cronogramas y documentos listos para radicar.</li>
      <li><strong>Herencia en energía renovable:</strong> venimos del mundo de la energía solar; eso nos da una mirada práctica de eficiencia, agua y energía.</li>
    </ul>
    <h2>De la energía solar a la consultoría ambiental</h2>
    <p>Durante años instalamos calentadores solares y acompañamos a hogares y empresas en su transición energética. Esa experiencia nos enseñó que la sostenibilidad se construye con decisiones técnicas concretas y con el cumplimiento de reglas claras. Hoy ese es nuestro foco principal, y seguimos atendiendo la <a href="/energia-solar/">línea de energía solar</a>.</p>
  </div>
  <aside class="aside-card">
    <p class="mono" style="color:var(--signal-ink)">HABLEMOS</p>
    <h2>¿Quieres conocer al equipo?</h2>
    <p>Agenda una llamada corta para contarnos tu caso. Sin costo y sin compromiso.</p>
    ${waButton("Agendar por WhatsApp", "Hola, quiero agendar una llamada con Grupo Sole para contarles mi caso.", { cls: "btn btn-wa btn-block", origen: "nosotros" })}
  </aside>
</div></section>
<section class="sec sec-paper2"><div class="wrap">
  ${label("→", "Valores")}
  <ul class="valores">
    <li><span class="mono" style="color:var(--signal-ink)">01</span><h3>Rigor técnico</h3><p>Cada afirmación con su soporte y su norma.</p></li>
    <li><span class="mono" style="color:var(--signal-ink)">02</span><h3>Transparencia</h3><p>Te decimos también lo que no necesitas.</p></li>
    <li><span class="mono" style="color:var(--signal-ink)">03</span><h3>Cumplimiento de fechas</h3><p>Los plazos de la autoridad no se negocian; los nuestros tampoco.</p></li>
    <li><span class="mono" style="color:var(--signal-ink)">04</span><h3>Respeto por el territorio</h3><p>Por las comunidades y los ecosistemas donde trabajamos.</p></li>
  </ul>
</div></section>
${ctaFinal("Trabajemos juntos", "Cuéntanos tu caso en dos líneas y te respondemos con la ruta a seguir.", "Hola, quiero contarles mi caso ambiental.", "nosotros")}`,
};

/* ───────────── /contacto/ ───────────── */
const OPC_SERV = LINEAS.flatMap((l) => [l.menu, ...l.hijos.map((p) => servicio(p).menu)]).concat(["Due diligence para hidrocarburos", "Calentadores solares", "Otro / no estoy seguro"]);

export const contacto = {
  path: "/contacto/",
  title: "Contacto | Grupo Sole Consultoría Ambiental",
  description: "Escríbenos por WhatsApp o déjanos tus datos: te respondemos con la ruta a seguir para tu trámite, requerimiento o proyecto ambiental.",
  crumbs: [["Inicio", "/"], ["Contacto", "/contacto/"]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">→</span> Contacto</p>
  <h1>Cuéntanos tu caso</h1>
  <p class="lead">El canal más rápido es WhatsApp. Si prefieres, completa el formulario: armamos el mensaje por ti y lo envías desde tu WhatsApp.</p>
</div></section>
<div class="wrap contact-grid">
  <form class="form" data-contacto>
    <div class="field"><label for="f-nombre">Nombre *</label><input id="f-nombre" name="nombre" required autocomplete="name"></div>
    <div class="field"><label for="f-empresa">Empresa</label><input id="f-empresa" name="empresa" autocomplete="organization"></div>
    <div class="field"><label for="f-cargo">Cargo</label><input id="f-cargo" name="cargo" autocomplete="organization-title"></div>
    <div class="field"><label for="f-ciudad">Ciudad o región del proyecto</label><input id="f-ciudad" name="ciudad"></div>
    <div class="field full"><label for="f-servicio">¿Qué necesitas?</label><select id="f-servicio" name="servicio"><option value="">Selecciona una opción</option>${OPC_SERV.map((o) => `<option>${esc(o)}</option>`).join("")}</select></div>
    <div class="field full"><label for="f-mensaje">Cuéntanos en dos líneas</label><textarea id="f-mensaje" name="mensaje" placeholder="Ej.: Tenemos una planta en Funza y nos llegó un requerimiento por el permiso de vertimientos."></textarea></div>
    <div class="full" style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:space-between">
      <p class="form-note" style="margin:0;max-width:46ch">Al enviar se abre WhatsApp con tu mensaje. Este sitio no almacena tus datos. Ver la <a href="/politica-de-privacidad/">política de privacidad</a>.</p>
      <button class="btn btn-signal btn-lg" type="submit">${icon.whatsapp}<span>Enviar por WhatsApp</span></button>
    </div>
  </form>
  <aside>
    <ul class="contact-ch">
      <li><span class="mono">WhatsApp · consultoría</span><a href="${wa("Hola, quiero hablar con Grupo Sole sobre un tema ambiental.")}" target="_blank" rel="noopener" data-wa="contacto">${SITE.waLabel}</a></li>
      <li><span class="mono">WhatsApp · calentadores solares</span><a href="${wa("Hola, quiero información sobre calentadores solares.", SITE.waSolar)}" target="_blank" rel="noopener" data-wa="contacto-solar">${SITE.waSolarLabel}</a></li>
      <li><span class="mono">Cobertura</span><span style="font:500 1.3rem var(--serif)">Colombia</span></li>
    </ul>
    <p class="form-note" style="margin-top:18px">¿Aún no sabes qué necesitas? Prueba el <a href="/diagnostico-ambiental/">autodiagnóstico ambiental</a>.</p>
  </aside>
</div>`,
};

/* ───────────── /politica-de-privacidad/ ───────────── */
export const privacidad = {
  path: "/politica-de-privacidad/",
  title: "Política de Privacidad y Tratamiento de Datos | Grupo Sole",
  description: "Política de privacidad y tratamiento de datos personales de Grupo Sole, conforme a la Ley 1581 de 2012.",
  crumbs: [["Inicio", "/"], ["Política de privacidad", "/politica-de-privacidad/"]],
  body: `
<section class="page-hero"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">§</span> Legal</p>
  <h1>Política de privacidad y tratamiento de datos personales</h1>
</div></section>
<div class="wrap" style="padding-block:40px 80px"><div class="prose">
  <p>Grupo Sole respeta la privacidad de quienes visitan este sitio y trata los datos personales conforme a la Ley 1581 de 2012 y sus normas reglamentarias.</p>
  <h2>Qué datos recibimos</h2>
  <p>Este sitio no tiene formularios que almacenen información. Cuando nos escribes por WhatsApp —directamente o desde el formulario de contacto, que solo arma el mensaje— recibimos los datos que decidas compartir: nombre, empresa, cargo, ubicación y la descripción de tu caso.</p>
  <h2>Para qué los usamos</h2>
  <ul>
    <li>Responder tu consulta y preparar propuestas de servicio.</li>
    <li>Prestar los servicios contratados y comunicarnos durante su ejecución.</li>
    <li>Cumplir obligaciones legales y contractuales.</li>
  </ul>
  <p>No vendemos ni cedemos tus datos a terceros. Solo los compartimos con aliados técnicos (por ejemplo, laboratorios) cuando es necesario para el servicio y con tu conocimiento.</p>
  <h2>Medición del sitio</h2>
  <p>Usamos Google Analytics para conocer de forma agregada cómo se usa el sitio (páginas visitadas, origen de las visitas). Puedes bloquear estas cookies desde la configuración de tu navegador.</p>
  <h2>Tus derechos</h2>
  <p>Como titular puedes conocer, actualizar, rectificar y solicitar la supresión de tus datos, revocar la autorización y presentar quejas ante la Superintendencia de Industria y Comercio. Para ejercerlos, escríbenos por WhatsApp al ${SITE.waLabel} indicando tu solicitud.</p>
  <h2>Vigencia</h2>
  <p>Esta política rige desde su publicación y puede actualizarse; la versión vigente es siempre la publicada en esta página.</p>
</div></div>`,
};

/* ───────────── /recursos/ ───────────── */
export const recursos = {
  path: "/recursos/",
  title: "Recursos de Gestión Ambiental: Guías y Checklist | Grupo Sole",
  description: "Guías prácticas sobre trámites ambientales en Colombia: ¿ANLA o CAR?, checklist de obligaciones ambientales y glosario de siglas.",
  crumbs: [["Inicio", "/"], ["Recursos", "/recursos/"]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">3</span> Recursos</p>
  <h1>Para entender antes de decidir</h1>
  <p class="lead">Guías cortas y prácticas sobre la gestión ambiental de empresas y proyectos en Colombia.</p>
</div></section>
<section class="sec"><div class="wrap"><div class="grid-3">
  <a class="card-doc" href="/recursos/checklist-obligaciones-ambientales/"><span class="card-tab mono">Checklist</span><span class="card-t">Las 10 obligaciones ambientales que toda empresa debe revisar</span><span class="card-d">Una lista corta para saber si estás al día.</span><span class="card-go">${icon.arrow}</span></a>
  <a class="card-doc" href="/recursos/anla-o-car/"><span class="card-tab mono">Guía</span><span class="card-t">¿ANLA o CAR? Cómo saber ante quién tramitar</span><span class="card-d">La autoridad competente según el tipo y la escala del proyecto.</span><span class="card-go">${icon.arrow}</span></a>
  <a class="card-doc" href="/recursos/glosario/"><span class="card-tab mono">Glosario</span><span class="card-t">Las siglas ambientales, explicadas</span><span class="card-d">ANLA, CAR, EIA, PMA, ICA, DGA, RUA, PUEAA y más.</span><span class="card-go">${icon.arrow}</span></a>
</div></div></section>
${ctaFinal("¿Prefieres que lo revisemos contigo?", "Te ayudamos a aterrizar estas guías a tu empresa o proyecto.", "Hola, leí sus guías y quiero revisar mi caso.", "recursos")}`,
};

const articulo = ({ path, title, description, kicker, h1, lead, crumb, cuerpo, asideTitulo, asideTexto, msg, ogType = "article" }) => ({
  path,
  title,
  description,
  ogType,
  tipoPagina: "Article",
  crumbs: [["Inicio", "/"], ["Recursos", "/recursos/"], [crumb, path]],
  body: `
<section class="page-hero topo-bg"><div class="wrap">
  <p class="mono kicker"><span class="kicker-num">→</span> ${esc(kicker)}</p>
  <h1>${esc(h1)}</h1>
  <p class="lead">${esc(lead)}</p>
</div></section>
<div class="wrap layout-aside">
  <article class="prose">${cuerpo}</article>
  <aside class="aside-card">
    <p class="mono" style="color:var(--signal-ink)">¿DUDAS CON TU CASO?</p>
    <h2>${esc(asideTitulo)}</h2>
    <p>${esc(asideTexto)}</p>
    ${waButton("Preguntar por WhatsApp", msg, { cls: "btn btn-wa btn-block", origen: path })}
    <p style="margin:14px 0 0"><a class="text-link" href="/diagnostico-ambiental/">Hacer el autodiagnóstico ${icon.arrow}</a></p>
  </aside>
</div>`,
});

export const anlaOCar = articulo({
  path: "/recursos/anla-o-car/",
  title: "¿ANLA o CAR? Ante Quién Tramitar tu Licencia o Permiso | Grupo Sole",
  description: "Guía práctica para saber si tu proyecto se tramita ante la ANLA, la corporación autónoma regional o la autoridad ambiental urbana.",
  kicker: "Guía",
  crumb: "¿ANLA o CAR?",
  h1: "¿ANLA o CAR? Cómo saber ante quién tramitar",
  lead: "En Colombia no hay una sola autoridad ambiental. Saber a cuál le corresponde tu proyecto es el primer paso de cualquier trámite.",
  asideTitulo: "Revisamos la competencia de tu proyecto",
  asideTexto: "Con la descripción y la ubicación del proyecto te decimos qué autoridad es la competente y qué instrumento aplica.",
  msg: "Hola, quiero saber si mi proyecto se tramita ante la ANLA o ante la CAR.",
  cuerpo: `
<h2 style="margin-top:0">Las tres autoridades que debes conocer</h2>
<h3>ANLA — Autoridad Nacional de Licencias Ambientales</h3>
<p>Evalúa y hace seguimiento a los proyectos de mayor escala definidos en el Decreto 1076 de 2015: por ejemplo, hidrocarburos, gran minería, grandes centrales de generación de energía, puertos, aeropuertos y vías nacionales, entre otros. Sus trámites se radican en VITAL, la Ventanilla Integral de Trámites Ambientales en Línea.</p>
<h3>CAR — Corporaciones autónomas regionales</h3>
<p>Son la autoridad ambiental en su jurisdicción para los proyectos que no son competencia de la ANLA, y otorgan la mayoría de permisos de uso de recursos naturales: concesiones de agua, vertimientos, emisiones, aprovechamiento forestal y ocupación de cauce.</p>
<h3>Autoridades ambientales urbanas</h3>
<p>En las grandes ciudades, una autoridad urbana —como una secretaría de ambiente— ejerce las funciones de la corporación dentro del perímetro urbano.</p>
<h2>Tres preguntas para saber a quién acudir</h2>
<ul>
  <li><strong>¿Tu actividad requiere licencia ambiental?</strong> El Decreto 1076 de 2015 lista las actividades que la necesitan y fija los umbrales que separan la competencia de la ANLA y de las corporaciones.</li>
  <li><strong>¿Dónde está el proyecto?</strong> Si está en zona urbana de una gran ciudad, probablemente intervenga la autoridad urbana; si no, la corporación de la región.</li>
  <li><strong>¿Es un permiso asociado a un proyecto licenciado por la ANLA?</strong> En ese caso, el uso de recursos suele quedar incluido en la licencia que otorga la ANLA.</li>
</ul>
<h2>Un error frecuente</h2>
<p>Asumir que, como el proyecto es pequeño, no hay nada que tramitar. Aunque no requiera licencia, casi cualquier actividad que use agua, vierta, emita o intervenga árboles o cauces necesita permisos de la corporación o de la autoridad urbana.</p>
<p>Relacionado: <a href="/servicios/licenciamiento-ambiental/">licenciamiento ambiental</a> · <a href="/servicios/permisos-ambientales/">permisos ambientales</a>.</p>`,
});

const CHECK = [
  ["Inventario de permisos", "Sabes qué permisos necesita tu actividad (agua, vertimientos, emisiones, forestal, cauce) y los tienes.", "/servicios/permisos-ambientales/"],
  ["Vigencias", "Ningún permiso, concesión o licencia está vencido ni por vencer sin trámite de renovación.", "/servicios/permisos-ambientales/"],
  ["Obligaciones de cada acto administrativo", "Leíste las obligaciones de cada resolución y tienes un calendario con sus fechas.", "/servicios/cumplimiento-ambiental/"],
  ["ICA al día", "Si tienes licencia o PMA, presentaste los Informes de Cumplimiento Ambiental de todos los periodos.", "/servicios/cumplimiento-ambiental/informes-ica/"],
  ["Matriz legal", "Tienes una matriz legal ambiental revisada en el último año.", "/servicios/cumplimiento-ambiental/matriz-legal-ambiental/"],
  ["Departamento de Gestión Ambiental", "Si eres industrial, el DGA está conformado y registrado ante la autoridad.", "/servicios/cumplimiento-ambiental/departamento-de-gestion-ambiental/"],
  ["Residuos peligrosos", "Conoces tu categoría de generador, tienes plan de gestión, usas gestores autorizados y reportaste en el RUA.", "/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/"],
  ["Uso eficiente del agua", "Si tienes concesión, tu PUEAA está aprobado y en ejecución.", "/servicios/cumplimiento-ambiental/pueaa/"],
  ["Monitoreos", "Tus monitoreos de agua, aire o ruido están al día y los hace un laboratorio acreditado por el IDEAM.", "/servicios/permisos-ambientales/permiso-de-vertimientos/"],
  ["Requerimientos", "Respondiste a tiempo y con soportes todos los requerimientos de la autoridad.", "/servicios/asesoria-auditoria/requerimientos-y-sancionatorios/"],
];

export const checklist = articulo({
  path: "/recursos/checklist-obligaciones-ambientales/",
  title: "Checklist: 10 Obligaciones Ambientales de toda Empresa | Grupo Sole",
  description: "Revisa en 5 minutos las 10 obligaciones ambientales más comunes de las empresas en Colombia: permisos, ICA, matriz legal, DGA, RESPEL, PUEAA y más.",
  kicker: "Checklist",
  crumb: "Checklist de obligaciones",
  h1: "Las 10 obligaciones ambientales que toda empresa debe revisar",
  lead: "Si puedes marcar las diez, vas bien. Si alguna te genera duda, ahí está tu prioridad.",
  asideTitulo: "¿Alguna te generó duda?",
  asideTexto: "Escríbenos cuál y te decimos qué implica para tu empresa.",
  msg: "Hola, revisé el checklist de obligaciones ambientales y tengo dudas con algunos puntos.",
  cuerpo: `<ol class="checklist">${CHECK.map(
    ([t, d, h]) => `<li><div><h3>${esc(t)}</h3><p>${esc(d)}</p><a class="text-link" href="${h}">Ver servicio ${icon.arrow}</a></div></li>`
  ).join("")}</ol>
<p style="margin-top:24px">¿Quieres el resultado en números? Haz el <a href="/diagnostico-ambiental/">autodiagnóstico interactivo</a>.</p>`,
});

const GLOSARIO = [
  ["ANLA", "Autoridad Nacional de Licencias Ambientales."],
  ["CAR", "Corporación Autónoma Regional: autoridad ambiental de cada región."],
  ["EIA", "Estudio de Impacto Ambiental."],
  ["DAA", "Diagnóstico Ambiental de Alternativas."],
  ["NDAA", "Solicitud a la autoridad para saber si se necesita DAA."],
  ["PMA", "Plan de Manejo Ambiental."],
  ["ICA", "Informe de Cumplimiento Ambiental."],
  ["DGA", "Departamento de Gestión Ambiental."],
  ["RESPEL", "Residuos peligrosos."],
  ["RUA", "Registro Único Ambiental (IDEAM)."],
  ["PUEAA", "Programa de Uso Eficiente y Ahorro del Agua."],
  ["PGRMV", "Plan de gestión del riesgo para el manejo de vertimientos."],
  ["VITAL", "Ventanilla Integral de Trámites Ambientales en Línea (ANLA)."],
  ["IDEAM", "Instituto de Hidrología, Meteorología y Estudios Ambientales."],
  ["SMMLV", "Salario mínimo mensual legal vigente."],
  ["COPNIA", "Consejo Profesional Nacional de Ingeniería (matrícula profesional)."],
];

export const glosario = articulo({
  path: "/recursos/glosario/",
  title: "Glosario Ambiental: Siglas ANLA, CAR, PMA, ICA, RUA | Grupo Sole",
  description: "Qué significan ANLA, CAR, EIA, DAA, PMA, ICA, DGA, RESPEL, RUA, PUEAA, PGRMV, VITAL y otras siglas de la gestión ambiental en Colombia.",
  kicker: "Glosario",
  crumb: "Glosario",
  h1: "Glosario de siglas ambientales",
  lead: "Las siglas que vas a encontrar en resoluciones, requerimientos y propuestas, explicadas en una línea.",
  asideTitulo: "¿Te llegó un documento lleno de siglas?",
  asideTexto: "Envíanoslo y te explicamos qué te están pidiendo y en qué plazo.",
  msg: "Hola, recibí un documento de la autoridad ambiental y quiero entender qué me piden.",
  cuerpo: `<dl class="glosario">${GLOSARIO.map(([s, d]) => `<div><dt>${s}</dt><dd>${esc(d)}</dd></div>`).join("")}</dl>`,
});

/* ───────────── 404 ───────────── */
export const noEncontrada = {
  path: "/404.html",
  title: "Página no encontrada | Grupo Sole",
  description: "La página que buscas no existe o cambió de dirección.",
  noindex: true,
  body: `<section class="nf topo-bg"><div class="wrap">
  <p class="big-num">404</p>
  <h1 style="margin-top:24px">Esta página no está en el expediente</h1>
  <p class="lead">Puede que haya cambiado de dirección. Estas rutas te pueden servir:</p>
  <div class="acts"><a class="btn btn-ink" href="/"><span>Ir al inicio</span>${icon.arrow}</a><a class="btn btn-line" href="/servicios/"><span>Ver servicios</span>${icon.arrow}</a><a class="btn btn-line" href="/energia-solar/"><span>Energía solar</span>${icon.arrow}</a></div>
</div></section>`,
};
