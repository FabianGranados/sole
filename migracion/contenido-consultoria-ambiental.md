# Grupo Sole — Nuevo sitio de Consultoría Ambiental
## Documento de contenido para el agente de código

> **Qué es este documento:** la base de textos, estructura y conocimiento técnico para construir el nuevo **gruposole.com.co**. Grupo Sole deja de vender calentadores solares y pasa a ser una **firma de consultoría ambiental** liderada por un ingeniero ambiental (que no usará marca personal: la marca es **Grupo Sole**).
>
> Se analizaron cuatro referentes (Terra Consultores, EIA Consultoría, Hominum y la página de licenciamiento de hidrocarburos de la ANLA). **Ningún texto de esos sitios se copió**: aquí está lo mejor de cada uno en estructura, temas y estrategia, y **todo el copy es original**. Usa estos textos tal cual o ajústalos; no copies frases de los sitios de referencia.
>
> Fecha: 4 de octubre de 2026.

---

## 0. Reglas para el agente

1. **No inventar datos.** Donde aparece `[[ASÍ]]` es un dato que debe dar el dueño (años de experiencia, número de proyectos, clientes, matrícula profesional, teléfono, ciudad). Si no se tiene, **se omite el bloque**; nunca poner cifras de relleno.
2. **Marca:** "Grupo Sole". El ingeniero aparece en "Nosotros" como director técnico, con nombre y matrícula profesional (COPNIA), pero el sitio habla en plural ("nosotros", "nuestro equipo").
3. **Normativa:** citar las normas tal como están en la sección 11. Antes de publicar, el ingeniero debe validar que siguen vigentes (las normas ambientales cambian; por ejemplo, el Decreto 766 de 2026 acaba de modificar las reglas de residuos peligrosos).
4. **Tono:** técnico pero claro, para un gerente de planta, un constructor o un dueño de empresa que no es experto. Frases cortas. Siempre explicar la sigla la primera vez (ver glosario, sección 12).
5. **Conversión:** cada página termina en una llamada a WhatsApp con mensaje prellenado según el servicio. El canal principal de contacto es WhatsApp; formulario opcional.
6. **URLs viejas:** el sitio actual tiene URLs de calentadores solares indexadas en Google. Ver sección 4.3 (redirecciones 301).

---

## 1. Lo mejor de cada referente (qué tomar de cada uno)

| Referente | Qué hace bien | Qué tomamos para Grupo Sole |
|---|---|---|
| **Terra Consultores** (terraconsultores.com) | Portafolio organizado por **líneas de negocio** (estudios ambientales, gestión social, saneamiento, interventoría, monitoreos, capacitación). Integra lo ambiental con lo **social**. Tiene sección de **descargas/herramientas** y de clientes. Lema corto y memorable. | Organizar los servicios en **4 líneas** claras (no 25 servicios sueltos). Incluir un bloque de **recursos descargables** (guías/checklists) para captar contactos. Incluir la dimensión social y de comunidades en los estudios. |
| **EIA Consultoría** (eiaconsultoria.com) | Catálogo **muy completo**, con **una página por servicio** (excelente para SEO: cada trámite tiene su URL). Separa "estudios ambientales" de "estudios complementarios". Muestra **proyectos** y métricas de confianza. Blog. | **Una URL por servicio** con contenido profundo. Sección de **proyectos/casos**. Contadores de confianza (solo con datos reales). Blog técnico. |
| **Hominum** (página de cumplimiento ambiental) | La mejor página de servicio **orientada a conversión**: explica a quién aplica (con y sin licencia), **consecuencias** de no cumplir, **tabla de obligaciones por sector**, **autodiagnóstico interactivo** de 7 preguntas, **proceso en 7 pasos**, **preguntas frecuentes** y muchos llamados a la acción. | Copiar la **arquitectura** de esa página (no su texto) para las páginas de servicio principales: problema → a quién aplica → riesgos → qué hacemos → proceso → FAQ → CTA. Implementar el **autodiagnóstico** (sección 7). |
| **ANLA** (licenciamiento — hidrocarburos) | Fuente oficial: qué proyectos son competencia de la ANLA y qué **instrumentos** evalúa (NDAA, DAA, EIA, licencia, modificaciones, cesiones, PMA) bajo el Decreto 1076 de 2015, con términos de referencia por sector. | Explicar en el sitio **quién es la autoridad** de cada trámite (ANLA vs. CAR/autoridad urbana) y el **camino del licenciamiento**. Esto da autoridad y posiciona en búsquedas. |

**Lo que NO debemos replicar:** sitios lentos, menús con 25 ítems, textos en bloque sin estructura, métricas genéricas sin respaldo, ni promesas tipo "cero sanciones garantizadas".

---

## 2. Posicionamiento

**Para quién:** empresas, industrias, constructoras, comercios, proyectos de infraestructura y propietarios de predios en Colombia que necesitan **tramitar permisos, cumplir obligaciones ambientales o licenciar un proyecto**, y que quieren un aliado técnico que les evite sanciones y retrasos.

**Promesa central:** *Nos encargamos de la parte ambiental de tu proyecto o empresa —permisos, estudios, planes e informes— para que operes tranquilo y al día con la autoridad.*

**Diferenciales (reales, sin cifras inventadas):**
- **Atención directa del ingeniero a cargo**: no pasas por cinco intermediarios.
- **Visión completa**: desde el primer diagnóstico hasta la respuesta a la autoridad y el seguimiento.
- **Conocimiento de las autoridades**: ANLA, corporaciones autónomas regionales (CAR) y autoridades urbanas.
- **Entregables claros**: matrices, cronogramas y documentos listos para radicar.
- **Herencia en energía renovable**: Grupo Sole viene del mundo de la energía solar; eso nos da una mirada práctica de eficiencia, agua y energía.

**Opciones de lema (elegir uno):**
1. "Cumplimiento ambiental sin complicaciones."
2. "Tu proyecto, al día con la ley ambiental."
3. "Ingeniería ambiental que hace avanzar tus proyectos."

---

## 3. Mapa del sitio y URLs

### 3.1 Menú principal
`Inicio · Servicios (desplegable) · Sectores · Proyectos · Recursos · Nosotros · Contacto` + botón destacado **"Diagnóstico gratuito"**.

### 3.2 URLs nuevas (con slash final)
| Página | URL |
|---|---|
| Inicio | `/` |
| Servicios (índice) | `/servicios/` |
| Línea 1 — Permisos y trámites ambientales | `/servicios/permisos-ambientales/` |
| Concesión de aguas | `/servicios/permisos-ambientales/concesion-de-aguas/` |
| Permiso de vertimientos | `/servicios/permisos-ambientales/permiso-de-vertimientos/` |
| Permiso de emisiones atmosféricas | `/servicios/permisos-ambientales/permiso-de-emisiones-atmosfericas/` |
| Aprovechamiento forestal | `/servicios/permisos-ambientales/aprovechamiento-forestal/` |
| Ocupación de cauce | `/servicios/permisos-ambientales/ocupacion-de-cauce/` |
| Línea 2 — Cumplimiento ambiental empresarial | `/servicios/cumplimiento-ambiental/` |
| Matriz legal ambiental | `/servicios/cumplimiento-ambiental/matriz-legal-ambiental/` |
| Departamento de Gestión Ambiental (DGA) | `/servicios/cumplimiento-ambiental/departamento-de-gestion-ambiental/` |
| Residuos peligrosos (RESPEL) y RUA | `/servicios/cumplimiento-ambiental/residuos-peligrosos-respel/` |
| Programa de uso eficiente del agua (PUEAA) | `/servicios/cumplimiento-ambiental/pueaa/` |
| Informes de Cumplimiento Ambiental (ICA) | `/servicios/cumplimiento-ambiental/informes-ica/` |
| Línea 3 — Estudios y licenciamiento | `/servicios/licenciamiento-ambiental/` |
| Estudio de Impacto Ambiental (EIA) | `/servicios/licenciamiento-ambiental/estudio-de-impacto-ambiental/` |
| Diagnóstico Ambiental de Alternativas (DAA) | `/servicios/licenciamiento-ambiental/diagnostico-ambiental-de-alternativas/` |
| Plan de Manejo Ambiental (PMA) | `/servicios/licenciamiento-ambiental/plan-de-manejo-ambiental/` |
| Plan de gestión del riesgo para el manejo de vertimientos (PGRMV) | `/servicios/licenciamiento-ambiental/plan-gestion-riesgo-vertimientos/` |
| Compensaciones e inversión forzosa del 1 % | `/servicios/licenciamiento-ambiental/compensaciones-inversion-1/` |
| Línea 4 — Asesoría, auditoría y formación | `/servicios/asesoria-auditoria/` |
| Due diligence ambiental | `/servicios/asesoria-auditoria/due-diligence-ambiental/` |
| Interventoría y auditoría ambiental | `/servicios/asesoria-auditoria/interventoria-ambiental/` |
| Acompañamiento en requerimientos y procesos sancionatorios | `/servicios/asesoria-auditoria/requerimientos-y-sancionatorios/` |
| Capacitaciones ambientales | `/servicios/asesoria-auditoria/capacitaciones/` |
| Sectores | `/sectores/` |
| Proyectos | `/proyectos/` |
| Recursos (guías, checklist, blog) | `/recursos/` y `/blog/` |
| Autodiagnóstico | `/diagnostico-ambiental/` |
| Nosotros | `/nosotros/` |
| Contacto | `/contacto/` |
| Política de privacidad y tratamiento de datos | `/politica-de-privacidad/` |

> Si el dueño prefiere un sitio más pequeño al inicio: publicar las 4 páginas de línea + PMA + ICA + permisos + DGA/RESPEL y crecer después. La estructura de URLs ya queda lista para ampliar.

### 3.3 Redirecciones 301 desde el sitio viejo (calentadores solares)
| URL vieja | Redirigir a |
|---|---|
| `/calentadores-de-agua-solares/` | `/servicios/` |
| `/calentador-de-agua-solar-presurizado/` | `/servicios/` |
| `/calentador-de-agua-solar-sin-presion/` | `/servicios/` |
| `/quienes-somos/` | `/nosotros/` |
| `/shop/` y `/author/...` | `/` |
| `/wp-content/uploads/2024/11/Calentador-de-agua-solar-*.pdf` | `/servicios/` |

---

## 4. Página de inicio (copy completo)

### 4.1 Hero
- **Etiqueta:** CONSULTORÍA E INGENIERÍA AMBIENTAL EN COLOMBIA
- **H1:** Permisos, estudios y cumplimiento ambiental para tu empresa y tus proyectos
- **Párrafo:** Te acompañamos ante la ANLA, las corporaciones autónomas regionales y las autoridades ambientales urbanas. Diagnosticamos, tramitamos y hacemos seguimiento para que tu operación avance sin sanciones ni retrasos.
- **Botón principal:** Solicitar diagnóstico gratuito → WhatsApp
- **Botón secundario:** Ver servicios → `/servicios/`

### 4.2 Franja de confianza (4 puntos)
- Trámites ante ANLA, CAR y autoridades urbanas
- Atención directa del ingeniero a cargo
- Entregables listos para radicar
- Cobertura nacional `[[confirmar ciudades/regiones]]`

### 4.3 "¿Te suena alguna de estas situaciones?" (problemas → solución)
- "Me llegó un requerimiento de la autoridad ambiental y no sé cómo responderlo."
- "Voy a construir o ampliar y no sé qué permisos necesito."
- "Tengo licencia, pero no estoy seguro de estar cumpliendo el PMA ni de cuándo presentar el ICA."
- "Genero residuos peligrosos y no tengo claro el registro ni el reporte anual."
- "Voy a comprar una empresa o un predio y quiero saber si trae pasivos ambientales."

Cierre: **Para cada una tenemos una ruta clara. Escríbenos y te decimos por dónde empezar.**

### 4.4 Servicios (4 tarjetas, una por línea)
1. **Permisos y trámites ambientales** — Concesión de aguas, vertimientos, emisiones, aprovechamiento forestal y ocupación de cauce: preparamos la solicitud, los estudios de soporte y hacemos el seguimiento hasta la resolución.
2. **Cumplimiento ambiental empresarial** — Matriz legal, Departamento de Gestión Ambiental, residuos peligrosos, uso eficiente del agua e informes ICA. Te ponemos al día y te mantenemos así.
3. **Estudios y licenciamiento** — Estudio de Impacto Ambiental, Diagnóstico Ambiental de Alternativas, Plan de Manejo Ambiental, compensaciones e inversión del 1 %.
4. **Asesoría, auditoría y formación** — Due diligence ambiental, interventoría, respuesta a requerimientos y capacitación para tu equipo.

### 4.5 Cómo trabajamos (5 pasos)
1. **Diagnóstico** — Revisamos tu actividad, ubicación, permisos actuales y obligaciones.
2. **Ruta de cumplimiento** — Te entregamos qué falta, qué es urgente, quién es la autoridad y cuánto toma cada trámite.
3. **Estudios y documentos** — Hacemos los estudios técnicos, planes y formularios.
4. **Radicación y gestión** — Radicamos (en VITAL o ante la corporación) y respondemos los requerimientos de la autoridad.
5. **Seguimiento** — Calendario de obligaciones, informes periódicos y alertas de vencimientos.

### 4.6 Sectores (íconos)
Industria y manufactura · Construcción e inmobiliario · Infraestructura vial · Minería · Hidrocarburos · Energía (incluida solar) · Agroindustria · Comercio y servicios · Salud (residuos) · Entidades públicas.

### 4.7 Bloque de riesgo (por qué no dejarlo para después)
**Desde 2024 las multas ambientales pueden llegar a 100.000 salarios mínimos.** La Ley 2387 de 2024 endureció el régimen sancionatorio: además de multas, la autoridad puede suspender actividades, cerrar establecimientos o revocar permisos. Cumplir a tiempo siempre sale más barato que defenderse después.
Botón: **Haz el autodiagnóstico (2 minutos)** → `/diagnostico-ambiental/`

### 4.8 Proyectos (solo con casos reales)
3 tarjetas: tipo de cliente · reto · qué hicimos · resultado. `[[pedir al dueño 3 casos; si no hay, ocultar la sección]]`

### 4.9 Recursos
- Checklist: "Las 10 obligaciones ambientales que toda empresa debe revisar" (descargable a cambio del correo o WhatsApp).
- Guía: "¿ANLA o CAR? Cómo saber ante quién tramitar".
- Últimos 3 artículos del blog.

### 4.10 CTA final
**¿Tienes un trámite, un requerimiento o un proyecto en camino?** Cuéntanos en dos líneas y te respondemos con la ruta a seguir. → WhatsApp.

---

## 5. Plantilla de página de servicio (estructura tipo Hominum, copy propio)

Cada página de servicio debe tener, en este orden:
1. **H1** con la palabra clave + "en Colombia".
2. **Intro** (2–3 frases): qué es y por qué importa.
3. **¿Quién lo necesita?** (lista).
4. **¿Qué pasa si no lo tienes?** (riesgos concretos, sin exagerar).
5. **Qué incluye nuestro servicio** (lista de entregables).
6. **Cómo lo hacemos** (pasos).
7. **Normativa aplicable** (lista corta con enlaces a fuentes oficiales).
8. **Preguntas frecuentes** (3–6, con schema FAQPage).
9. **CTA** a WhatsApp con mensaje prellenado del servicio.
10. **Servicios relacionados** (3 tarjetas).

A continuación, el contenido de cada servicio.

---

### 5.1 Permisos y trámites ambientales (página de línea)
**H1:** Permisos ambientales para empresas y proyectos en Colombia
**Intro:** Casi cualquier actividad que use agua, descargue aguas residuales, emita gases o intervenga árboles o cauces necesita un permiso de la autoridad ambiental. Te ayudamos a identificar cuáles necesitas, preparamos la solicitud con sus estudios técnicos y la acompañamos hasta obtener la resolución.

**Permisos que tramitamos:**

| Permiso | Para qué sirve | Quién lo otorga (normalmente) |
|---|---|---|
| **Concesión de aguas** (superficiales o subterráneas) | Usar agua de un río, quebrada, pozo o aljibe para procesos, riego o consumo. | Corporación autónoma regional (CAR) o autoridad urbana; ANLA si hace parte de un proyecto licenciado por ella. |
| **Permiso de vertimientos** | Descargar aguas residuales a un cuerpo de agua o al suelo. | CAR / autoridad urbana; ANLA en proyectos de su competencia. |
| **Permiso de emisiones atmosféricas** | Operar calderas, hornos, plantas o procesos que emiten gases o partículas. | CAR / autoridad urbana. |
| **Aprovechamiento forestal** | Talar, podar o trasladar árboles, o aprovechar bosque. | CAR / autoridad urbana (en ciudad, la secretaría de ambiente). |
| **Ocupación de cauce** | Construir obras que intervengan un río o quebrada: puentes, box culverts, muros, captaciones. | CAR / autoridad urbana. |

**Qué incluye:** identificación de permisos según tu actividad · visita técnica · estudios de soporte (caracterización de aguas con laboratorio acreditado por el IDEAM, cálculos de demanda de agua, inventario forestal, estudios hidráulicos, modelaciones según el caso) · formularios y radicación · respuesta a requerimientos · seguimiento hasta la resolución · calendario de obligaciones del permiso.

**Preguntas frecuentes:**
- *¿Cuánto tarda un permiso?* Depende de la autoridad y de que la solicitud esté completa. La mayor causa de demora son las solicitudes incompletas: por eso entregamos el expediente completo desde el primer radicado.
- *¿El permiso es para siempre?* No. Los permisos tienen vigencia y obligaciones (informes, monitoreos, pagos de tasas). Te dejamos un calendario para no perder ninguna fecha.
- *¿Puedo operar mientras sale el permiso?* En general no: operar sin el permiso requerido expone a medidas preventivas y sanciones. Revisemos tu caso.

**Mensaje WhatsApp:** "Hola, necesito asesoría para tramitar un permiso ambiental (agua / vertimientos / emisiones / forestal / cauce)."

---

### 5.2 Cumplimiento ambiental empresarial (página de línea — la más importante comercialmente)
**H1:** Cumplimiento ambiental para empresas en Colombia
**Intro:** Tener o no tener licencia no te exime: toda empresa con impactos ambientales tiene obligaciones permanentes ante la autoridad. Hacemos un diagnóstico de dónde estás, cerramos las brechas y te mantenemos al día con un calendario claro de obligaciones.

**A quién aplica:**
- **Empresas con licencia ambiental o PMA:** deben ejecutar el plan, presentar Informes de Cumplimiento Ambiental (ICA), hacer monitoreos y cumplir las obligaciones de la resolución.
- **Empresas sin licencia:** igual deben tener los permisos que su actividad requiera (agua, vertimientos, emisiones), gestionar sus residuos, reportar al Registro Único Ambiental cuando aplique y, si son industriales, contar con Departamento de Gestión Ambiental.

**Riesgos de no cumplir:** multas de hasta 100.000 SMMLV (Ley 2387 de 2024) · suspensión de actividades o cierre · revocatoria de permisos · pérdida de contratos con clientes que exigen cumplimiento ambiental · problemas para acceder a financiación con criterios ambientales y sociales.

**Qué incluye:**
1. Diagnóstico de cumplimiento y matriz legal ambiental.
2. Inventario de permisos y vigencias.
3. Plan de cierre de brechas con prioridades y cronograma.
4. Conformación y registro del Departamento de Gestión Ambiental (DGA), si aplica.
5. Gestión de residuos y residuos peligrosos (plan, registro y reporte).
6. Programa de uso eficiente del agua (PUEAA), si tienes concesión.
7. Informes de Cumplimiento Ambiental (ICA) y respuesta a requerimientos.
8. Capacitación del personal.
9. Seguimiento mensual o trimestral (plan de acompañamiento).

**Tabla de obligaciones típicas por sector** (orientativa — cada caso depende de la resolución y la autoridad):

| Sector | Obligaciones más comunes |
|---|---|
| Industria y manufactura | Permisos de vertimientos y emisiones · DGA · residuos peligrosos y RUA · monitoreos de aguas y aire · ruido |
| Construcción | Plan de manejo ambiental de obra · aprovechamiento forestal · ocupación de cauce · residuos de construcción y demolición · control de material particulado |
| Infraestructura vial | Licencia o PMA según el proyecto · ICA · monitoreos de agua, aire y ruido · compensaciones |
| Minería | Licencia ambiental · PMA · ICA · monitoreos · compensación por pérdida de biodiversidad · plan de cierre |
| Hidrocarburos | Licencia (ANLA) · PMA · ICA · monitoreos · inversión forzosa del 1 % · plan de abandono |
| Energía | Licencia o PMA según capacidad · compensaciones · monitoreos bióticos · ICA |
| Agroindustria | Concesión de aguas · vertimientos · PUEAA · residuos (incluidos envases de agroquímicos) |
| Salud y laboratorios | Residuos peligrosos (hospitalarios) · plan de gestión integral de residuos · vertimientos |
| Comercio y servicios | Residuos · vertimientos (si aplica) · publicidad exterior y ruido en ciudad |

**Preguntas frecuentes:**
- *¿Qué es el ICA y cada cuánto se presenta?* Es el informe con el que demuestras a la autoridad que estás cumpliendo tu licencia o PMA. La periodicidad la fija la resolución o la autoridad; en la ANLA se radica por VITAL.
- *¿Qué es VITAL?* La Ventanilla Integral de Trámites Ambientales en Línea, el canal digital de la ANLA para radicar trámites e informes.
- *¿Mi empresa necesita Departamento de Gestión Ambiental?* Las empresas de nivel industrial que requieren licencia, permiso o concesión deben conformarlo y registrarlo ante la autoridad (Decreto 1299 de 2008, hoy compilado en el Decreto 1076 de 2015).
- *¿Qué pasa si la autoridad hace una visita y encuentra incumplimientos?* Normalmente emite un requerimiento con plazo para corregir; si no se atiende, puede abrir un proceso sancionatorio o imponer medidas preventivas. Responder bien y a tiempo es clave.
- *¿Hay beneficios tributarios por invertir en medio ambiente?* Existen incentivos para ciertas inversiones en control y mejoramiento ambiental, con requisitos y certificación de la autoridad. Lo evaluamos con tu contador.

**Mensaje WhatsApp:** "Hola, quiero un diagnóstico de cumplimiento ambiental para mi empresa."

---

### 5.3 Matriz legal ambiental
**H1:** Matriz legal ambiental para empresas
**Intro:** La matriz legal es el inventario de todas las normas ambientales que aplican a tu empresa y de cómo las estás cumpliendo. Es la base de cualquier sistema de gestión (incluida la ISO 14001) y lo primero que revisa un auditor.
**Incluye:** identificación de normas por actividad y ubicación · requisitos específicos · evidencia de cumplimiento · responsables · plan de acción · actualización periódica.

### 5.4 Departamento de Gestión Ambiental (DGA)
**H1:** Conformación y registro del Departamento de Gestión Ambiental
**Intro:** Las empresas de nivel industrial con permisos, concesiones o licencia deben tener un área responsable de la gestión ambiental, con funciones definidas y registrada ante la autoridad. Te ayudamos a conformarlo, documentarlo y registrarlo, aunque tu equipo sea pequeño.
**Incluye:** diagnóstico · definición de funciones y responsables · manual del DGA · registro ante la autoridad · capacitación · acompañamiento externo como apoyo del área.
**Norma:** Decreto 1299 de 2008 (compilado en el Decreto 1076 de 2015).

### 5.5 Residuos peligrosos (RESPEL) y Registro Único Ambiental (RUA)
**H1:** Gestión de residuos peligrosos y RUA para empresas
**Intro:** Si tu empresa genera aceites usados, envases contaminados, luminarias, baterías, residuos químicos u hospitalarios, tienes obligaciones específicas: plan de gestión, almacenamiento adecuado, entrega a gestores autorizados y reporte anual en el Registro Único Ambiental del IDEAM.
**Novedad 2026 (destacar):** el **Decreto 766 de 2026** modificó las reglas para generadores de residuos peligrosos: el plan de gestión se carga en digital a la plataforma del IDEAM, los certificados de los gestores se cruzan con lo reportado, la capacitación del personal es al menos anual, y el reporte anual ahora tiene **fechas según el último dígito del NIT** (0–4: del 1 de febrero al 15 de marzo; 5–9: del 15 de marzo al 30 de abril). *(Verificar fechas exactas antes de publicar.)*
**Incluye:** clasificación de residuos · categoría de generador · plan de gestión integral (PGIRESPEL) · inscripción y reporte en el RUA · revisión del almacenamiento · verificación de gestores autorizados · capacitación anual.

### 5.6 Programa de Uso Eficiente y Ahorro del Agua (PUEAA)
**H1:** Programa de Uso Eficiente y Ahorro del Agua (PUEAA)
**Intro:** Si tienes una concesión de aguas, debes presentar y ejecutar un programa con metas de reducción de pérdidas, ahorro y reúso. Lo diseñamos con metas realistas y medibles. *(Aquí encaja la herencia de Grupo Sole en eficiencia energética e hídrica.)*
**Norma:** Ley 373 de 1997 y su reglamentación (Decreto 1090 de 2018 y Resolución 1257 de 2018).

### 5.7 Informes de Cumplimiento Ambiental (ICA)
**H1:** Elaboración de Informes de Cumplimiento Ambiental (ICA)
**Intro:** El ICA demuestra a la autoridad que tu proyecto cumple su licencia o Plan de Manejo Ambiental. Un ICA incompleto o tardío es una de las causas más comunes de requerimientos y sanciones.
**Incluye:** revisión de obligaciones de la licencia y actos administrativos · recopilación de evidencias · formatos ICA · anexos y base de datos geográfica cuando la autoridad la exige · radicación (VITAL para ANLA) · respuesta a observaciones.
**Proceso:** planeación (recopilar información) → análisis y diligenciamiento de formatos → redacción y anexos → radicación → seguimiento.

### 5.8 Estudios y licenciamiento ambiental (página de línea)
**H1:** Licenciamiento ambiental y estudios de impacto en Colombia
**Intro:** Los proyectos que pueden causar impactos graves al ambiente necesitan una licencia ambiental antes de empezar. Te guiamos desde la pregunta inicial —¿necesito licencia y ante quién?— hasta la aprobación y el cumplimiento posterior.

**El camino del licenciamiento (infografía):**
1. **¿Necesita licencia?** Se revisa si la actividad está en la lista del Decreto 1076 de 2015.
2. **¿Ante quién?** ANLA (proyectos de gran escala: hidrocarburos, gran minería, grandes centrales de energía, puertos, aeropuertos, vías nacionales, entre otros) o la corporación autónoma regional / autoridad urbana (proyectos de menor escala en su jurisdicción).
3. **¿Necesita DAA?** Algunos proyectos deben presentar primero un Diagnóstico Ambiental de Alternativas (o solicitar a la autoridad que se pronuncie sobre si lo necesitan).
4. **Estudio de Impacto Ambiental (EIA)** según los términos de referencia de la autoridad para ese sector.
5. **Evaluación de la autoridad**, visita, solicitud de información adicional.
6. **Resolución de licencia**, con sus obligaciones, PMA, compensaciones e inversión del 1 % si aplica.
7. **Seguimiento**: ICA, monitoreos, modificaciones de licencia si el proyecto cambia.

**Servicios de esta línea:** EIA · DAA · PMA · PGRMV · compensación por pérdida de biodiversidad · inversión forzosa del 1 % · modificaciones y cesiones de licencia · planes de abandono y cierre.

### 5.9 Estudio de Impacto Ambiental (EIA)
**H1:** Estudio de Impacto Ambiental (EIA) para licencia ambiental
**Intro:** El EIA es el documento técnico con el que la autoridad decide si otorga la licencia. Describe el proyecto, levanta la línea base (física, biótica y socioeconómica), evalúa los impactos y propone cómo prevenirlos, mitigarlos, corregirlos y compensarlos.
**Incluye:** línea base abiótica, biótica y social · participación y socialización con comunidades · zonificación ambiental y de manejo · evaluación de impactos · PMA · plan de seguimiento y monitoreo · plan de contingencia · plan de abandono · compensaciones · cartografía y base de datos geográfica según el modelo de la autoridad.
**Nota:** algunos componentes (por ejemplo, colecta de especies para inventarios de fauna y flora) requieren permisos especiales de estudio; se coordinan como parte del proyecto.

### 5.10 Diagnóstico Ambiental de Alternativas (DAA)
**H1:** Diagnóstico Ambiental de Alternativas (DAA)
**Intro:** Para ciertos proyectos, antes del EIA se deben comparar alternativas (trazados, ubicaciones, tecnologías) para elegir la de menor impacto. Elaboramos el DAA o la solicitud para que la autoridad defina si tu proyecto lo necesita.

### 5.11 Plan de Manejo Ambiental (PMA)
**H1:** Plan de Manejo Ambiental (PMA)
**Intro:** El PMA es el conjunto de programas y medidas que pone en práctica la protección ambiental del proyecto: qué se hace, dónde, cuándo, con qué presupuesto y cómo se mide. Puede ser parte de una licencia o un instrumento exigido por sí solo.
**Estructura que entregamos:** fichas por programa (objetivo, impacto que atiende, acciones, lugar, cronograma, responsable, costo e indicadores) · jerarquía de la mitigación (primero prevenir, luego mitigar, corregir y, al final, compensar) · componente social · plan de seguimiento y monitoreo · medidas por fase (construcción, operación, cierre).

### 5.12 Plan de gestión del riesgo para el manejo de vertimientos (PGRMV)
**H1:** Plan de gestión del riesgo para el manejo de vertimientos
**Intro:** Quien solicita permiso de vertimientos debe presentar un plan que identifique qué puede salir mal en su sistema de tratamiento o descarga y cómo prevenirlo y responder.
**Norma:** Resolución 1514 de 2012.

### 5.13 Compensaciones e inversión forzosa del 1 %
**H1:** Compensación ambiental e inversión forzosa del 1 %
**Intro:** Los proyectos licenciados que afectan ecosistemas deben compensar la pérdida de biodiversidad, y los que usan agua de fuentes naturales deben invertir al menos el 1 % del valor del proyecto en la recuperación de la cuenca. Diseñamos y ejecutamos el plan para que cumpla y además aporte valor real al territorio.
**Normas:** parágrafo del artículo 43 de la Ley 99 de 1993; Decreto 2099 de 2016 (inversión del 1 %); Manual de compensaciones del componente biótico del Ministerio de Ambiente.

### 5.14 Due diligence ambiental
**H1:** Due diligence ambiental para compra de empresas y predios
**Intro:** Antes de comprar una empresa, un predio o un proyecto, verifica que no traiga pasivos: permisos vencidos, sanciones en curso, suelos contaminados u obligaciones pendientes. Te entregamos un informe claro de riesgos y su costo estimado de solución.

### 5.15 Interventoría y auditoría ambiental
**H1:** Interventoría y auditoría ambiental de proyectos
**Intro:** Verificamos en campo que el contratista o la obra cumplan el PMA y los permisos, con informes periódicos e indicadores. Ideal para entidades públicas y dueños de proyecto.

### 5.16 Acompañamiento en requerimientos y procesos sancionatorios
**H1:** Respuesta a requerimientos y procesos sancionatorios ambientales
**Intro:** Si recibiste un requerimiento, una medida preventiva o una apertura de proceso sancionatorio, el tiempo cuenta. Preparamos el soporte técnico, las pruebas y el plan de corrección, en coordinación con tu abogado.
**Dato útil (Ley 2387 de 2024):** la ley incluyó mecanismos de terminación anticipada por corrección o compensación, y reducciones de la multa cuando el presunto infractor reconoce la infracción en etapas tempranas. *(Que el abogado del cliente confirme cómo aplica a su caso.)*
**Aclaración en la página:** "Brindamos soporte técnico ambiental; la representación jurídica la realiza un abogado."

### 5.17 Capacitaciones ambientales
**H1:** Capacitaciones ambientales para empresas
**Temas:** manejo de residuos peligrosos (capacitación anual obligatoria) · uso eficiente del agua y la energía · obligaciones de la licencia para el personal de obra · respuesta a emergencias ambientales · cultura ambiental.

---

## 6. Sectores (página `/sectores/`)
Una sección por sector con: problemas típicos, obligaciones (usar la tabla de la sección 5.2) y servicios recomendados. Incluir **Energía solar y renovables** como sector propio: Grupo Sole conoce el sector y puede acompañar trámites ambientales de proyectos solares (por ejemplo, permisos de aprovechamiento forestal u ocupación de cauce en la construcción, y la licencia o el instrumento que aplique según la capacidad del proyecto, a confirmar caso a caso con la autoridad).

---

## 7. Autodiagnóstico interactivo (`/diagnostico-ambiental/`)
Inspirado en la idea de Hominum, con preguntas propias. Formulario de **8 preguntas Sí/No/No sé**, sin servidor (JS en el navegador):

1. ¿Tienes identificados todos los permisos que tu actividad necesita (agua, vertimientos, emisiones, forestal, cauce)?
2. ¿Todos tus permisos están vigentes?
3. ¿Si tienes licencia o PMA, presentas los ICA a tiempo?
4. ¿Tienes una matriz legal ambiental actualizada en el último año?
5. ¿Tu empresa tiene Departamento de Gestión Ambiental registrado (si es industrial)?
6. ¿Si generas residuos peligrosos, estás inscrito en el RUA y reportaste el último año?
7. ¿Tus monitoreos de agua, aire o ruido están al día y hechos por laboratorio acreditado?
8. ¿Respondiste a tiempo todos los requerimientos de la autoridad ambiental?

**Resultado:**
- 7–8 "Sí": **Vas bien.** "Te recomendamos una revisión anual para no perder fechas." → CTA suave.
- 4–6 "Sí": **Hay brechas.** "Algunas obligaciones podrían estar pendientes. Revisémoslas antes de que lo haga la autoridad." → CTA WhatsApp.
- 0–3 "Sí" o varios "No sé": **Atención prioritaria.** "Tu empresa podría estar expuesta a requerimientos o sanciones. Hablemos hoy." → CTA WhatsApp destacado.

El botón de WhatsApp envía el resultado: "Hola, hice el autodiagnóstico ambiental y obtuve: [resultado]. Respuestas 'No' o 'No sé': [lista]."

---

## 8. Nosotros (`/nosotros/`)
- **Título:** Ingeniería ambiental con trato directo
- **Texto:** Grupo Sole nació trabajando con energía solar y eficiencia. Hoy aplicamos esa misma mirada práctica a la consultoría ambiental: ayudamos a empresas y proyectos a cumplir sus obligaciones, obtener sus permisos y licenciar sus proyectos sin perder tiempo. Cada proyecto lo dirige un ingeniero ambiental con experiencia en `[[temas/sectores]]`, que responde directamente al cliente y coordina, cuando el proyecto lo requiere, a especialistas en biología, hidrología, geología, social y laboratorios acreditados.
- **Ficha del director técnico:** `[[nombre]]` · Ingeniero ambiental · Matrícula profesional COPNIA `[[número]]` · `[[años]]` años de experiencia · `[[estudios/especialización]]`.
- **Valores:** rigor técnico · transparencia (te decimos lo que no necesitas) · cumplimiento de fechas · respeto por las comunidades y el territorio.

---

## 9. FAQ general (para la página de inicio o contacto)
1. **¿Atienden en todo el país?** `[[confirmar]]` Sí; algunos servicios requieren visita de campo y se cotizan según la ubicación.
2. **¿Cuánto cuesta un trámite?** Depende del tipo de permiso o estudio, del tamaño del proyecto y de los estudios técnicos necesarios. Tras el diagnóstico te damos una propuesta cerrada.
3. **¿Ustedes pagan las tarifas de la autoridad?** Las tarifas de evaluación y seguimiento las paga el titular del trámite; te indicamos cuánto y cuándo.
4. **¿Cuál es la diferencia entre ANLA y la CAR?** La ANLA evalúa los proyectos de mayor escala definidos en el Decreto 1076 de 2015; las corporaciones autónomas regionales y las autoridades urbanas atienden los demás en su territorio.
5. **¿Trabajan con laboratorios?** Sí; los monitoreos y caracterizaciones se hacen con laboratorios acreditados por el IDEAM.

---

## 10. SEO
| Página | Title (≤60 car.) | Meta description (≤155 car.) | Palabra clave principal |
|---|---|---|---|
| Inicio | Consultoría Ambiental en Colombia \| Grupo Sole | Permisos, licencias, PMA, ICA y cumplimiento ambiental para empresas y proyectos. Diagnóstico gratuito por WhatsApp. | consultoría ambiental Colombia |
| Permisos | Permisos Ambientales en Colombia \| Grupo Sole | Tramitamos concesión de aguas, vertimientos, emisiones, aprovechamiento forestal y ocupación de cauce ante la CAR y la ANLA. | permisos ambientales |
| Cumplimiento | Cumplimiento Ambiental para Empresas \| Grupo Sole | Matriz legal, DGA, residuos peligrosos, PUEAA e ICA. Evita multas de hasta 100.000 SMMLV. Haz tu autodiagnóstico gratis. | cumplimiento ambiental empresas |
| Licenciamiento | Licencia Ambiental y Estudio de Impacto \| Grupo Sole | EIA, DAA, PMA, compensaciones e inversión del 1 %. Te acompañamos ante la ANLA y las CAR. | licencia ambiental |
| PMA | Plan de Manejo Ambiental (PMA) \| Grupo Sole | Elaboramos planes de manejo ambiental con fichas, indicadores y seguimiento para obras, industria e infraestructura. | plan de manejo ambiental |
| ICA | Informes de Cumplimiento Ambiental ICA \| Grupo Sole | Elaboramos y radicamos ICA ante la ANLA (VITAL) y las CAR, con formatos, anexos y respuesta a requerimientos. | informe de cumplimiento ambiental |
| RESPEL | Residuos Peligrosos RESPEL y RUA \| Grupo Sole | Plan de gestión, registro y reporte en el RUA del IDEAM, con los cambios del Decreto 766 de 2026. | residuos peligrosos empresas |
| DGA | Departamento de Gestión Ambiental (DGA) \| Grupo Sole | Conformamos y registramos el DGA de tu empresa ante la autoridad ambiental. | departamento de gestión ambiental |

- Schema: `ProfessionalService` (o `LocalBusiness`) para Grupo Sole; `Service` en cada página de servicio; `FAQPage` donde haya preguntas; `BreadcrumbList`.
- Blog (ideas de primeros 8 artículos): ¿ANLA o CAR? · Qué es el ICA y cómo presentarlo · Cambios del Decreto 766 de 2026 para residuos peligrosos · Ley 2387 de 2024: nuevas multas ambientales · Qué permisos necesita una obra en Colombia · Cómo conformar el DGA · PUEAA paso a paso · Inversión forzosa del 1 % explicada.

---

## 11. Normativa de referencia (verificar vigencia antes de publicar)
| Norma | Tema |
|---|---|
| Ley 99 de 1993 | Crea el Sistema Nacional Ambiental y el licenciamiento; art. 43 (inversión del 1 %). |
| Decreto 1076 de 2015 | Decreto Único Reglamentario del sector ambiente: licencias, permisos, DGA, residuos peligrosos, vertimientos, etc. |
| Ley 1333 de 2009, modificada por la Ley 2387 de 2024 | Procedimiento sancionatorio ambiental; multas hasta 100.000 SMMLV; terminación anticipada y reducciones por reconocimiento. |
| Decreto 766 de 2026 | Modifica el régimen de residuos peligrosos del Decreto 1076 (plan digital, certificados, capacitación anual, calendario de reporte por NIT). |
| Decreto 1299 de 2008 (compilado en el 1076) | Departamento de Gestión Ambiental. |
| Ley 373 de 1997 · Decreto 1090 de 2018 · Resolución 1257 de 2018 | Programa de uso eficiente y ahorro del agua (PUEAA). |
| Resolución 631 de 2015 | Parámetros y límites de vertimientos a cuerpos de agua superficiales. |
| Resolución 1514 de 2012 | Plan de gestión del riesgo para el manejo de vertimientos. |
| Resolución 909 de 2008 | Emisiones de fuentes fijas. |
| Resolución 2254 de 2017 | Calidad del aire. |
| Resolución 627 de 2006 | Ruido ambiental y emisión de ruido. |
| Decreto 2099 de 2016 | Inversión forzosa del 1 %. |

Fuentes oficiales para enlazar: ANLA (anla.gov.co, VITAL), Ministerio de Ambiente (minambiente.gov.co), IDEAM (ideam.gov.co, RUA), Función Pública (gestor normativo) y la corporación autónoma regional de la zona.

---

## 12. Glosario (usar en tooltips o en una página de glosario)
- **ANLA:** Autoridad Nacional de Licencias Ambientales.
- **CAR:** Corporación Autónoma Regional (autoridad ambiental de cada región).
- **EIA:** Estudio de Impacto Ambiental.
- **DAA / NDAA:** Diagnóstico Ambiental de Alternativas / solicitud para saber si se Necesita DAA.
- **PMA:** Plan de Manejo Ambiental.
- **ICA:** Informe de Cumplimiento Ambiental.
- **DGA:** Departamento de Gestión Ambiental.
- **RESPEL:** Residuos peligrosos.
- **RUA:** Registro Único Ambiental (IDEAM).
- **PUEAA:** Programa de Uso Eficiente y Ahorro del Agua.
- **PGRMV:** Plan de gestión del riesgo para el manejo de vertimientos.
- **VITAL:** Ventanilla Integral de Trámites Ambientales en Línea (ANLA).
- **SMMLV:** Salario mínimo mensual legal vigente.
- **COPNIA:** Consejo Profesional Nacional de Ingeniería (matrícula profesional).

---

## 13. Datos que debe entregar el dueño antes de publicar
- [ ] Nombre del ingeniero, matrícula COPNIA, formación y años de experiencia.
- [ ] Ciudad base y cobertura geográfica.
- [ ] WhatsApp y correo del nuevo negocio (el WhatsApp actual del sitio es 320 233 6372; confirmar si se mantiene).
- [ ] 3 casos o proyectos reales (o se oculta la sección).
- [ ] Logos de clientes con permiso (o se oculta).
- [ ] Qué servicios ofrece realmente desde el día uno (quitar los que no).
- [ ] Redes sociales reales (las actuales del sitio son genéricas).
- [ ] Fotos propias de campo (si no hay, usar fotos de stock con licencia, nunca imágenes de los sitios de referencia).

---

## Fuentes consultadas
- [Terra Consultores](https://www.terraconsultores.com/) y su página de [estudios ambientales](https://www.terraconsultores.com/estudios_ambientales_evaluacion_de_impacto_ambiental.html)
- [EIA Consultoría](https://www.eiaconsultoria.com/), páginas de [PMA](https://www.eiaconsultoria.com/planes-de-manejo-ambiental/), [ICA](https://www.eiaconsultoria.com/informes-de-cumplimiento-ambiental-ica/) y [permisos menores](https://www.eiaconsultoria.com/solicitud-de-permisos-menores/)
- [Hominum — Cumplimiento ambiental para empresas](https://www.hominum.com.co/servicios/cumplimiento-ambiental-empresas-colombia/)
- [ANLA — Evaluación de licenciamiento ambiental: hidrocarburos](https://www.anla.gov.co/01_anla/entidad/subdirecciones-y-oficinas/evaluacion-de-licenciamiento-ambiental/hidrocarburos)
- [Holland & Knight — Modificación del régimen sancionatorio ambiental (Ley 2387 de 2024)](https://www.hklaw.com/en/insights/publications/2024/08/modificacion-del-regimen-sancionatorio-ambiental-en-colombia)
- [ANLA — Ley 2387 de 2024](https://www.anla.gov.co/wanla/eureka/normativa/leyes/ley-2387-de-2024-procedimiento-sancionatorio-ambiental)
- [Lloreda Camacho — Decreto 766 de 2026 y generadores de RESPEL](https://lloredacamacho.com/decreto-766-de-2026-lo-que-cambia-para-generadores-de-respel/)
- [IDEAM — ¿Qué es el RUA?](https://ideam.gov.co/nuestra-entidad/estudios-ambientales/registros-ambientales/rua/que-es)
- [ANLA — Decreto 1299 de 2008 (DGA)](https://www.anla.gov.co/eureka/normativa/decretos/decreto-reglamentario-1299-de-2008-departamento-de-gestion-ambiental-dga)
