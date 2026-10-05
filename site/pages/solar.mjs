// Línea secundaria de energía solar. Conserva URLs, <title>, meta description, textos,
// imágenes (con su alt) y fichas PDF del sitio WordPress original para no perder posicionamiento.
import { esc, icon, img, waButton, SITE } from "../lib/base.mjs";
import { label, faqList, lista } from "../lib/components.mjs";

const U = "/wp-content/uploads/2024";
const PDF_PRES = `${U}/11/Calentador-de-agua-solar-presurizado.pdf`;
const PDF_DESP = `${U}/11/Calentador-de-agua-solar-despresurizado.pdf`;
const COMPRAR = "Hola, quiero comprar un calentador solar de agua. ¿Me pueden asesorar?";
const comprar = (msg = COMPRAR, cls = "btn btn-signal", origen = "solar") => waButton("Comprar ahora", msg, { cls, num: SITE.waSolar, origen });
const pdf = (href, txt) => `<a class="btn btn-line" href="${href}" target="_blank" rel="noopener">${icon.download}<span>${txt}</span></a>`;

const banda = `<div class="solar-band"><div class="wrap" style="display:flex;flex-wrap:wrap;gap:8px 20px;justify-content:space-between;align-items:center">
  <p class="mono" style="text-transform:uppercase">Grupo Sole · Línea de energía solar</p>
  <p>¿Buscas permisos, licencias o cumplimiento ambiental? <a class="text-link" href="/">Conoce nuestra consultoría ambiental ${icon.arrow}</a></p>
</div></div>`;

const FEATS = `<ul class="feat">
  <li><h3>Vida útil prolongada</h3><p>Aprovecha al máximo tu inversión.</p></li>
  <li><h3>Resistencia a la intemperie</h3><p>Resistencia óptima ante condiciones adversas.</p></li>
  <li><h3>Envíos a todo el país</h3><p>¡Recibe tu pedido en cualquier lugar del país!</p></li>
  <li><h3>Ahorro de energía y gastos</h3><p>Reduce costos y contribuye al medio ambiente.</p></li>
</ul>`;

const GAL_PRES = [
  [`${U}/10/calentadores-presurizados-bogota.webp`, "calentadores presurizados bogota"],
  [`${U}/10/calentadores-presurizados-en-bogota.webp`, "calentadores presurizados en bogota"],
  [`${U}/10/calentador-solar-presurizado-en-bogota.webp`, "calentador solar presurizado en bogota"],
  [`${U}/10/calentador-de-agua-solar-presurizado-en-bogota-.webp`, "calentador de agua solar presurizado en bogota"],
];
const GAL_DESP = [
  [`${U}/10/calentador-solar-despresurizado-grupo-sole.webp`, "calentador solar despresurizado - grupo sole"],
  [`${U}/10/calentador-solar-despresurizado-bogota.webp`, "calentador solar despresurizado bogota"],
  [`${U}/10/calentador-solar-en-bogota.webp`, "calentador solar en bogota"],
  [`${U}/10/calentador-solar-despresurizado-en-bogota.webp`, "calentador solar despresurizado en bogota"],
];
const strip = (g) => `<div class="strip">${g.map(([s, a]) => img(s, a)).join("")}</div>`;

const ctaSolar = (origen) => `<section class="cta-final"><div class="wrap cta-in">
  <div><p class="mono cta-k">¿Listo para hacer el cambio a la energía solar?</p><h2 class="cta-t">Comienza a ahorrar hoy mismo</h2>
  <p class="cta-p">No esperes más para disfrutar de los beneficios de un calentador solar de agua. Contáctanos hoy mismo para una asesoría personalizada.</p></div>
  <div class="cta-acts">${waButton("Escribir por WhatsApp", COMPRAR, { cls: "btn btn-signal btn-lg", num: SITE.waSolar, origen })}</div>
</div></section>`;

/* ───────────── /energia-solar/ ───────────── */
export const energiaSolar = {
  path: "/energia-solar/",
  title: "Energía Solar para Hogares y Empresas | Grupo Sole",
  description: "Calentadores solares de agua y soluciones de energía solar para hogares y empresas en Colombia. Ahorra en costos y cuida el medio ambiente.",
  crumbs: [["Inicio", "/"], ["Energía solar", "/energia-solar/"]],
  body: `${banda}
<section class="prod-hero wrap">
  <div>
    <p class="mono kicker"><span class="kicker-num">☀</span> Energía solar</p>
    <h1>Energía solar para un futuro sostenible</h1>
    <p class="lead">Transformamos la energía del sol en soluciones accesibles para tu hogar o empresa.</p>
    <p>En GRUPO SOLE creemos que el futuro de la energía es renovable y accesible. Ofrecemos soluciones tecnológicas que aprovechan la energía del sol para impulsar hogares y empresas hacia la autosostenibilidad, reducir la huella de carbono y ahorrar en costos energéticos.</p>
    <div class="acts"><a class="btn btn-ink" href="/calentadores-de-agua-solares/"><span>Ver calentadores solares</span>${icon.arrow}</a>${comprar("Hola, quiero información sobre soluciones de energía solar.", "btn btn-line", "energia-solar")}</div>
  </div>
  ${img(`${U}/08/Beneficios-de-los-calentadores-solares-frente-a-los-electricos.webp`, "Beneficios de los calentadores solares frente a los eléctricos", { eager: true })}
</section>
<section class="sec sec-paper2"><div class="wrap">
  ${label("01", "Soluciones integrales en energía renovable")}
  <div class="sec-head"><h2 class="h-sec">Del calentador solar al proyecto completo</h2>
  <p>Desarrollamos e implementamos tecnologías que convierten la energía del sol en ahorro para tu hogar o negocio, con un enfoque que adapta cada proyecto a tus necesidades.</p></div>
  <div class="split-2">${lista([
    "Calentadores solares de agua",
    "Sistemas fotovoltaicos",
    "Diseño personalizado",
    "Instalación profesional",
    "Mantenimiento y soporte continuo",
    "Beneficios económicos tangibles",
  ])}
  <div class="box"><h3>Comprometidos con el planeta</h3><p>Adoptar energías renovables no solo es una decisión inteligente, sino una responsabilidad con el medio ambiente. Promovemos un cambio hacia un mundo donde las energías limpias reemplacen a los combustibles fósiles.</p></div></div>
</div></section>
<section class="sec"><div class="wrap">
  ${label("02", "Por qué elegir energía solar")}
  <div class="sec-head"><h2 class="h-sec">Una fuente inagotable, limpia y accesible</h2>
  <p>Al optar por soluciones solares reduces tu dependencia de las fuentes de energía tradicionales y te beneficias de una energía confiable que protege tu bolsillo y el medio ambiente.</p></div>
  <div class="strip">
    ${img(`${U}/08/Ventajas-de-los-calentadores-de-agua-solares.webp`, "Ventajas de los calentadores de agua solares")}
    ${img(`${U}/08/Calentadores-solares-en-venta.webp`, "Calentadores solares en venta")}
    ${img(`${U}/08/Mantenimiento-de-calentadores-solares-de-agua.webp`, "Mantenimiento de calentadores solares de agua")}
    ${img(`${U}/08/Instalacion-de-calentadores-solares-en-bogota.webp`, "Instalacion de calentadores solares en bogota")}
  </div>
</div></section>
<section class="sec sec-ink topo-bg-inv"><div class="wrap hc">
  <div class="hc-txt">${label("03", "Proyectos solares y permisos")}
  <h2 class="h-sec">¿Vas a desarrollar un proyecto solar?</h2>
  <p>Además de la tecnología, un proyecto de energía puede requerir trámites ambientales: aprovechamiento forestal u ocupación de cauce durante la construcción, y la licencia o el instrumento que aplique según su capacidad. Nuestra consultoría ambiental te acompaña.</p>
  <div class="acts"><a class="btn btn-signal" href="/sectores/#energia"><span>Consultoría para proyectos de energía</span>${icon.arrow}</a></div></div>
  <div class="hc-list"><p class="mono hc-k">También te puede servir</p><ol>
    <li><span class="mono">a</span><a href="/servicios/permisos-ambientales/aprovechamiento-forestal/">Aprovechamiento forestal</a></li>
    <li><span class="mono">b</span><a href="/servicios/permisos-ambientales/ocupacion-de-cauce/">Ocupación de cauce</a></li>
    <li><span class="mono">c</span><a href="/servicios/licenciamiento-ambiental/">Licenciamiento ambiental</a></li>
    <li><span class="mono">d</span><a href="/servicios/cumplimiento-ambiental/pueaa/">Uso eficiente del agua (PUEAA)</a></li>
  </ol></div>
</div></section>
${ctaSolar("energia-solar")}`,
};

/* ───────────── /calentadores-de-agua-solares/ ───────────── */
const prodCard = (href, nombre, imgSrc, alt, gal, pdfHref, pdfTxt, msg) => `<article class="prod">
  <a href="${href}">${img(imgSrc, alt)}</a>
  <div class="prod-b">
    <h3><a href="${href}" style="text-decoration:none">${esc(nombre)}</a></h3>
    ${strip(gal)}
    <div class="acts" style="margin-top:12px">${pdf(pdfHref, pdfTxt)}${comprar(msg)}</div>
    <a class="text-link" href="${href}">Ver especificaciones ${icon.arrow}</a>
  </div>
</article>`;

export const calentadores = {
  path: "/calentadores-de-agua-solares/",
  title: "Calentadores Solares de Agua | Eficiencia y Sostenibilidad",
  ogTitle: "Calentadores Solares de Agua / Eficiencia y Sostenibilidad",
  description: "Descubre los mejores calentadores solares de agua para tu hogar o empresa. Ahorra energía y obtén eficiencia y durabilidad con nuestras soluciones ecológicas.",
  crumbs: [["Inicio", "/"], ["Energía solar", "/energia-solar/"], ["Calentadores solares de agua", "/calentadores-de-agua-solares/"]],
  body: `${banda}
<section class="prod-hero wrap">
  <div>
    <p class="mono kicker"><span class="kicker-num">☀</span> Soluciones eficientes y ecológicas</p>
    <h1>Calentadores Solares de Agua</h1>
    <p class="lead">En GRUPO SOLE transformamos la energía solar en confort y ahorro. Con más de 10 años de experiencia y más de 1000 proyectos exitosos, ofrecemos calentadores solares de agua de la más alta calidad, diseñados para brindarte eficiencia energética y sostenibilidad.</p>
    <div class="acts">${comprar(COMPRAR, "btn btn-signal btn-lg", "calentadores-hero")}<a class="btn btn-line btn-lg" href="#productos"><span>Ver productos</span>${icon.arrow}</a></div>
  </div>
  ${img(`${U}/10/calentadores-de-agua-en-bogota-grupo-sole.webp`, "calentadores de agua en bogota- grupo sole", { eager: true })}
</section>
<section class="sec sec-paper2" id="productos"><div class="wrap">
  ${label("01", "Nuestros productos")}
  <div class="sec-head"><h2 class="h-sec">Calentadores solares de agua</h2><p>En GRUPO SOLE ofrecemos una variedad de calentadores solares de agua diseñados para diferentes necesidades.</p></div>
  <div class="prod-grid">
    ${prodCard("/calentador-de-agua-solar-presurizado/", "Calentador de agua solar presurizado", `${U}/10/calentador-de-agua-solar-presurizado-grupo-sole.webp`, "calentador de agua solar presurizado - grupo sole", GAL_PRES, PDF_PRES, "Ficha técnica presurizado", "Hola, quiero comprar el calentador de agua solar presurizado.")}
    ${prodCard("/calentador-de-agua-solar-sin-presion/", "Calentador de agua solar despresurizado", `${U}/10/venta-de-calentador-de-agua-solar-despresurizado-grupo-sole.webp`, "venta de calentador de agua solar despresurizado - grupo sole", GAL_DESP, PDF_DESP, "Ficha técnica despresurizado", "Hola, quiero comprar el calentador de agua solar despresurizado.")}
  </div>
</div></section>
<section class="sec"><div class="wrap">
  <div class="prod-hero" style="padding:0">
    <div>
      ${label("02", "Por qué elegirlos")}
      <h2 class="h-sec">¿Por qué elegir calentadores solares de agua?</h2>
      <p>Los calentadores solares de agua son la opción perfecta para reducir costos y contribuir al cuidado del medio ambiente. Estos sistemas aprovechan la energía del sol para calentar el agua de tu hogar o negocio, disminuyendo significativamente tu consumo de energía eléctrica o de gas.</p>
      ${lista([
        "Ahorro económico: reduce hasta un 80 % en tu factura de energía.",
        "Eficiencia energética: aprovecha al máximo la energía solar disponible.",
        "Sostenibilidad: contribuye a la reducción de emisiones de CO2.",
      ])}
    </div>
    ${img(`${U}/10/calentadores-para-agua-grupo-sole.webp`, "calentadores para agua - grupo sole")}
  </div>
  <div style="margin-top:56px">${FEATS}</div>
</div></section>
<section class="sec sec-paper2"><div class="wrap">
  <div class="split-2">
    <div>${label("03", "Beneficios")}<h2 class="h-sec">Beneficios de nuestros calentadores solares</h2>
      <p>Al elegir un calentador solar de agua de GRUPO SOLE, obtienes:</p>
      ${lista([
        "Durabilidad: materiales de alta calidad que garantizan una larga vida útil.",
        "Fácil mantenimiento: diseños que requieren un mantenimiento mínimo.",
        "Garantía de satisfacción: respaldados por nuestra experiencia y compromiso con la calidad.",
      ])}</div>
    <div>${label("04", "Funcionamiento")}<h2 class="h-sec">¿Cómo funciona un sistema solar de agua caliente?</h2>
      <p>Nuestros sistemas solares de agua caliente funcionan capturando la energía del sol mediante paneles solares térmicos. Esta energía se utiliza para calentar el agua, que se almacena en un tanque aislado para su uso posterior. Es una solución eficiente y confiable para cualquier clima.</p></div>
  </div>
</div></section>
<section class="sec"><div class="wrap">
  ${label("05", "Instalación")}
  <div class="sec-head"><h2 class="h-sec">Instalación profesional y soporte técnico</h2><p>En GRUPO SOLE no solo vendemos calentadores solares de agua; también ofrecemos instalación profesional y soporte técnico especializado para asegurarnos de que tu sistema funcione a la perfección desde el primer día.</p></div>
  <div class="grid-3">
    <div class="box"><h3>Sistemas de alta capacidad</h3><p>Perfectos para empresas y grandes instalaciones.</p></div>
    <div class="box"><h3>Sistemas compactos</h3><p>Ideales para hogares con espacio limitado.</p></div>
    <div class="box"><h3>Tecnología avanzada</h3><p>Paneles solares de última generación para máxima eficiencia.</p></div>
  </div>
  <div class="strip" style="margin-top:40px;grid-template-columns:repeat(4,1fr)">
    ${img(`${U}/08/Sistema-solar-de-agua-caliente-en-uso.webp`, "Sistema solar de agua caliente en uso")}
    ${img(`${U}/08/Tecnico-instalando-calentador-solar-de-agua.webp`, "Tecnico instalando calentador solar de agua")}
    ${img(`${U}/08/Panel-solar-termico-para-calentador-de-agua.webp`, "Panel solar térmico para calentador de agua")}
    ${img(`${U}/08/Beneficios-de-los-calentadores-solares-de-agua-de-GRUPO-SOLE.webp`, "Beneficios de los calentadores solares de agua de GRUPO SOLE")}
    ${img(`${U}/08/Ejemplo-de-ahorro-energetico-con-calentadores-solares.webp`, "Ejemplo de ahorro energetico con calentadores solares")}
    ${img(`${U}/08/Panel-solar-para-calentador-de-agua.webp`, "Panel solar para calentador de agua")}
    ${img(`${U}/08/Instalacion-de-calentadores-solares-de-agua-en-empresa-1.webp`, "Instalacion de calentadores solares de agua en empresa")}
    ${img(`${U}/08/Distribuidores-de-calentadores-solares-en-bogota.webp`, "Distribuidores de calentadores solares en bogota")}
  </div>
</div></section>
${ctaSolar("calentadores")}`,
};

/* ───────────── Páginas de producto ───────────── */
function producto({ path, title, description, nombre, mainImg, mainAlt, gal, spec, usos, faqs, pdfHref, pdfTxt, otro }) {
  return {
    path,
    title,
    description,
    crumbs: [["Inicio", "/"], ["Energía solar", "/energia-solar/"], ["Calentadores solares de agua", "/calentadores-de-agua-solares/"], [nombre, path]],
    faqs,
    schema: [
      {
        "@type": "Product",
        name: nombre,
        description,
        image: `${SITE.url}${mainImg}`,
        brand: { "@type": "Brand", name: "Grupo Sole" },
        category: "Calentadores solares de agua",
      },
    ],
    body: `${banda}
<section class="prod-hero wrap">
  <div class="gal">
    <div class="gal-main">${img(mainImg, mainAlt, { eager: true })}</div>
    ${gal.map(([s, a]) => img(s, a)).join("")}
  </div>
  <div>
    <p class="mono kicker"><span class="kicker-num">☀</span> Calentadores solares de agua</p>
    <h1>${esc(nombre)}</h1>
    <h2 class="mono" style="text-transform:uppercase;color:var(--muted);margin:0 0 12px">Especificaciones del producto</h2>
    ${spec}
    <div class="acts">${comprar(`Hola, quiero comprar el ${nombre.toLowerCase()}.`, "btn btn-signal btn-lg", path)}${pdf(pdfHref, pdfTxt)}</div>
  </div>
</section>
<section class="sec sec-paper2" style="padding-block:56px"><div class="wrap">${FEATS}</div></section>
<section class="sec"><div class="wrap">
  ${label("01", "Usos y aplicaciones")}
  <ul class="valores">${usos.map(([t, d], i) => `<li><span class="mono" style="color:var(--signal-ink)">${String(i + 1).padStart(2, "0")}</span><h3>${esc(t)}</h3><p>${esc(d)}</p></li>`).join("")}</ul>
  <p style="margin-top:28px">${pdf(pdfHref, "Características técnicas (PDF)")}</p>
</div></section>
<section class="sec sec-paper2"><div class="wrap faq-wrap">
  <div>${label("02", "Preguntas frecuentes")}<h2 class="h-sec">Preguntas frecuentes</h2><p>¿Otra duda? ${waButton("Pregúntanos", `Hola, tengo una pregunta sobre el ${nombre.toLowerCase()}.`, { cls: "text-link", num: SITE.waSolar, origen: path })}</p></div>
  ${faqList(faqs)}
</div></section>
<section class="sec sec-rel"><div class="wrap">${label("→", "También te puede interesar")}<div class="grid-3">
  <a class="card-doc" href="${otro[0]}"><span class="card-tab mono">Producto</span><span class="card-t">${esc(otro[1])}</span><span class="card-d">Compara las dos opciones de calentador solar.</span><span class="card-go">${icon.arrow}</span></a>
  <a class="card-doc" href="/calentadores-de-agua-solares/"><span class="card-tab mono">Catálogo</span><span class="card-t">Calentadores solares de agua</span><span class="card-d">Beneficios, funcionamiento e instalación profesional.</span><span class="card-go">${icon.arrow}</span></a>
  <a class="card-doc" href="/"><span class="card-tab mono">Grupo Sole</span><span class="card-t">Consultoría ambiental</span><span class="card-d">Permisos, licencias y cumplimiento ambiental para empresas y proyectos.</span><span class="card-go">${icon.arrow}</span></a>
</div></div></section>
${ctaSolar(path)}`,
  };
}

export const presurizado = producto({
  path: "/calentador-de-agua-solar-presurizado/",
  title: "Calentador de agua solar presurizado - Grupo Sole",
  description:
    "Calentador solar presurizado con flujo protegido, anticongelante y tubos de calor de metal-cobre. Descarga la ficha técnica y compra por WhatsApp.",
  nombre: "Calentador de agua solar presurizado",
  mainImg: `${U}/10/calentador-de-agua-solar-presurizado-grupo-sole.webp`,
  mainAlt: "calentador de agua solar presurizado - grupo sole",
  gal: GAL_PRES,
  pdfHref: PDF_PRES,
  pdfTxt: "Ficha técnica (PDF)",
  spec: `<p>El calentador de agua solar presurizado integrado forma parte de la gama de calentadores solares presurizados. Presenta tres características principales:</p>
  <ul class="list-check">
    <li>${icon.check}<span><strong>Sistema de flujo protegido:</strong> el agua no circula directamente a través de los tubos de vacío, lo que permite que el sistema continúe operando incluso si alguno de los tubos se rompe.</span></li>
    <li>${icon.check}<span><strong>Protección contra el frío:</strong> diseñado con anticongelante, es ideal para zonas con temperaturas extremadamente bajas.</span></li>
    <li>${icon.check}<span><strong>Material de alta calidad:</strong> utiliza tubos de calor de metal-cobre, garantizando una eficiencia óptima.</span></li>
  </ul>`,
  usos: [
    ["Residencial", "Calentamiento de agua para uso diario en hogares, como duchas y cocina."],
    ["Comercial", "Provisión de agua caliente en hoteles, restaurantes y gimnasios."],
    ["Industrial", "Calentamiento de agua en procesos de producción y limpieza en fábricas."],
    ["Piscinas", "Proporciona agua caliente para mantener la temperatura agradable."],
  ],
  faqs: [
    { q: "¿Cómo funciona un calentador de agua solar presurizado?", a: "El sistema utiliza tubos de vacío que capturan la energía solar para calentar agua. El agua se almacena en un tanque presurizado, lo que permite un suministro constante de agua caliente." },
    { q: "¿Es eficiente en climas fríos?", a: "Sí, está diseñado con anticongelante, lo que le permite funcionar eficazmente incluso en temperaturas extremadamente bajas." },
    { q: "¿Qué sucede si un tubo de vacío se rompe?", a: "El sistema sigue funcionando, ya que el agua no fluye directamente a través de los tubos de vacío, lo que permite que el calentador continúe operando con normalidad." },
    { q: "¿Requiere mantenimiento?", a: "Sí, es recomendable realizar un mantenimiento anual para verificar el estado de los tubos y el sistema en general, asegurando un rendimiento óptimo." },
    { q: "¿Cuánto tiempo tarda en calentar el agua?", a: "El tiempo de calentamiento varía según la intensidad solar y la temperatura inicial del agua, pero generalmente puede calentar el agua en pocas horas durante días soleados." },
    { q: "¿Cuál es la vida útil del calentador?", a: "Con un mantenimiento adecuado, un calentador de agua solar presurizado puede tener una vida útil de 15 a 25 años." },
    { q: "¿Cuánto ahorro puedo esperar en mis facturas de energía?", a: "El ahorro varía según el consumo de agua caliente y la ubicación, pero muchos usuarios reportan una reducción significativa en sus facturas de energía, a menudo del 50 % o más." },
  ],
  otro: ["/calentador-de-agua-solar-sin-presion/", "Calentador de agua solar despresurizado"],
});

export const despresurizado = producto({
  path: "/calentador-de-agua-solar-sin-presion/",
  title: "Calentador de agua solar despresurizadas - Grupo Sole",
  description:
    "Calentador solar despresurizado con termosifón: el agua se calienta de forma natural. Para hogares, riego, cabañas y piscinas. Ficha técnica y compra.",
  nombre: "Calentador de agua solar despresurizado",
  mainImg: `${U}/10/venta-de-calentador-de-agua-solar-despresurizado-grupo-sole.webp`,
  mainAlt: "venta de calentador de agua solar despresurizado - grupo sole",
  gal: GAL_DESP,
  pdfHref: PDF_DESP,
  pdfTxt: "Ficha técnica (PDF)",
  spec: `<p>Este innovador calentador utiliza el sistema de termosifón, aprovechando la diferencia de densidad entre el agua caliente y el agua fría para crear un ciclo de circulación eficiente.</p>
  <p>El agua caliente asciende de manera automática, mientras que el agua fría desciende, lo que permite que el agua del tanque de almacenamiento se caliente de forma natural.</p>`,
  usos: [
    ["Residencial", "Calentamiento de agua para uso diario en hogares, como duchas y cocina."],
    ["Sistemas de riego", "Utilizado para calentar agua en sistemas de riego de plantas y cultivos."],
    ["Áreas recreativas", "Perfecto para cabañas, campings o zonas rurales."],
    ["Piscinas", "Proporciona agua caliente para mantener la temperatura agradable."],
  ],
  faqs: [
    { q: "¿Cómo funciona un calentador de agua solar despresurizado?", a: "Utiliza el sistema de termosifón, donde el agua caliente asciende y el agua fría desciende, creando un ciclo natural de circulación." },
    { q: "¿Qué ventajas tiene sobre los calentadores tradicionales?", a: "Es más ecológico, reduce costos de energía y requiere menos mantenimiento." },
    { q: "¿Es adecuado para todos los climas?", a: "Sí, aunque su eficiencia es mayor en zonas soleadas. En climas fríos se recomienda un sistema de respaldo." },
    { q: "¿Cuánto tiempo tarda en calentar el agua?", a: "El tiempo de calentamiento depende de la cantidad de sol y la temperatura inicial del agua, pero generalmente es rápido en condiciones óptimas." },
    { q: "¿Se necesita mantenimiento?", a: "Requiere poco mantenimiento, como limpieza de los paneles y revisión ocasional de las conexiones." },
    { q: "¿Puedo usarlo para calentar agua de la piscina?", a: "Sí, es ideal para calentar el agua de piscinas, extendiendo la temporada de baño." },
    { q: "¿Qué tamaño de calentador necesito para mi hogar?", a: "Depende del número de personas y del consumo de agua caliente; con esos datos determinamos la capacidad adecuada." },
  ],
  otro: ["/calentador-de-agua-solar-presurizado/", "Calentador de agua solar presurizado"],
});
