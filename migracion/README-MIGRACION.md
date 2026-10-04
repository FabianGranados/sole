# Grupo Sole (gruposole.com.co) — Paquete de migración WordPress → código

Extraído el 2026-10-04 del sitio en vivo (textos, SEO, HTML) y del **respaldo completo de Hostinger** (archivos originales sin pérdida: imágenes, PDF, CSS, JS, fuentes). El agente en la nube no puede acceder al sitio; aquí está todo.

## 0. Prioridades
1. **Todas las URLs idénticas** (tabla de la sección 2, con slash final).
2. **No perder ninguna información**: textos, títulos, <title>, meta description, imágenes con su alt, fichas técnicas PDF, enlaces de WhatsApp y la etiqueta de Google (sección 6).
3. El diseño puede rehacerse; el actual queda documentado (sección 4) como referencia.

## 1. Cómo está construido hoy
- WordPress 6.7.9 · Tema **Wastix** (plantilla comprada de "recolección de basuras", adaptada) · **Elementor 4.1.1 + Elementor Pro** · WooCommerce 10.3.8 (instalado pero **sin productos**) · All in One SEO 5.0.1.1 · Site Kit by Google.
- Plugins en el front: wpsection, profile-master (panel de colores del tema), YITH Wishlist y Compare, Cookie Notice (aviso de cookies), **Social Chat de QuadLayers** (botón flotante de WhatsApp).
- Encabezado del tema (`header.mr_main-header`): logo + menú **Grupo Sole · Quienes Somos · Calentadores de Agua**.
- Pie de página: plantilla de Elementor id 16 (`.elementor-16`): logo blanco, menú, "Contáctanos — WhatsApp: 320 2336372", íconos de redes y "© 2024 Todos los Derechos Reservados." Detalle exacto en `paginas/_header-footer.json`.

## 2. URLs
| # | Ruta | En sitemap | <title> | meta description |
|---|---|---|---|---|
| 1 | / | sí | Energía solar sostenible para hogares y empresas | GRUPO SOLE | GRUPO SOLE ofrece soluciones de energía solar sostenible para hogares y empresas. Ahorra en costos y contribuye al medio ambiente con nuestras tecnologías accesibles y eficientes. |
| 2 | /calentadores-de-agua-solares/ | sí | Calentadores Solares de Agua | Eficiencia y Sostenibilidad | Descubre los mejores calentadores solares de agua para tu hogar o empresa. Ahorra energía y obtén eficiencia y durabilidad con nuestras soluciones ecológicas. |
| 3 | /calentador-de-agua-solar-presurizado/ | sí | Calentador de agua solar presurizado - Grupo Sole | Calentador de agua solar presurizado Calentador de agua solar presurizado Comprar Ahora Especificaciones del producto Calentador de agua solar presurizado El calentador de agua solar presurizado integrado forma parte de la gama de calentadores solares presurizados.Presenta tres características principales:Sistema de flujo protegido: El agua no circula directamente a través de los tubos de vacío, lo |
| 4 | /calentador-de-agua-solar-sin-presion/ | sí | Calentador de agua solar despresurizadas - Grupo Sole | Calentador de agua solar despresurizado Calentador de agua solar despresurizado Comprar Ahora Especificaciones del producto Calentador de agua solar despresurizado Este innovador calentador utiliza el sistema de termosifón, aprovechando la diferencia de densidad entre el agua caliente y el agua fría para crear un ciclo de circulación eficiente. El agua caliente asciende de manera automática, |
| 5 | /quienes-somos/ | sí | Quienes Somos - Grupo Sole | GRUPO SOLE QUIENES SOMOS En GRUPO SOLE, somos pioneros en la transformación energética de Colombia. Con más de 10 años de experiencia, nos dedicamos a la venta e instalación de tecnología de energía solar, ofreciendo soluciones sostenibles y de alta calidad. Nuestro compromiso con la innovación y la excelencia nos ha permitido completar exitosamente más |
| 6 | /shop/ | NO | Tienda – Grupo Sole |  |

- **/shop/** es la página automática de WooCommerce y hoy muestra el aviso "Great things are on the horizon / Something big is brewing! Our store is in the works…" (tienda "próximamente", en inglés). No está en el sitemap. Decidir con el dueño: redirigir 301 a /calentadores-de-agua-solares/ o eliminar.
- **/author/publicidad-decoloungegmail-com/** responde 200 y expone un correo en la URL → redirigir 301 a /.
- /?s=… (buscador) y las 404 se guardaron en html-original/ solo como referencia de diseño.
- El sitemap índice también lista **sitemaps de plantillas de demostración del tema** (`?page_templates=garbage-pickup`, `dumpster-rental`, `waste-collection`, `?block_templates=…`, `?header_templates=header-01`, etc.). Son basura del tema Wastix: **no migrarlas** y no incluirlas en el sitemap nuevo.

## 3. Contenido y contacto
- WhatsApp principal: **+57 320 233 6372** (pie de página y botón flotante).
- WhatsApp de ventas: **+57 310 889 3614** (botones "Comprar Ahora" y "WhatsApp" en las páginas de calentadores).
- **Fichas técnicas PDF** (botones en /calentadores-de-agua-solares/): `wp-originales/wp-content/uploads/2024/11/Calentador-de-agua-solar-presurizado.pdf` y `…/Calentador-de-agua-solar-despresurizado.pdf`. Conservar sus rutas `/wp-content/uploads/2024/11/…pdf` o redirigirlas, porque pueden estar enlazadas desde fuera.
- El botón "Características Técnicas" de las páginas de producto apunta a "#" (no lleva a ningún lado).
- Redes sociales del pie: Facebook, Twitter, Instagram, LinkedIn apuntan a las **páginas genéricas** (facebook.com/, twitter.com/…), no a cuentas de Grupo Sole. Preguntar al dueño las URLs reales o quitarlas.
- No hay formularios de contacto, ni teléfonos tel:, ni correos mailto, ni videos de YouTube.

## 4. Diseño actual (referencia, medido a 1920 px)
- Fuentes: **Open Sans** (cuerpo), **Gabarito** (títulos grandes, H2 de 65 px peso 700), **Poppins** (menú y textos secundarios), Fraunces/Roboto en algunos widgets.
- Colores: verde de marca **#3A9E1E** (variable --theme-color), verde oscuro **#175C45**, naranja **#FF8A00** y **#F39C12**, azul noche **#101A30**, gris de texto **#888888**, blanco.
- Logo: `logos/Grupo-Sole-scaled.webp` (encabezado, se ve a 180×61 px) y `logos/Grupo-sole-logo-blanco.png` (pie de página).
- CSS/JS originales con su ruta en `wp-originales/` (tema Wastix, Elementor, plugins). CSS por página de Elementor en `wp-originales/wp-content/uploads/elementor/css/post-<ID>.css`.

## 5. Botón flotante de WhatsApp
Plugin Social Chat (QuadLayers). Configuración exacta en `whatsapp-config.json`: burbuja abajo a la derecha, color #25D366, número 573202336372, etiqueta "Soporte", mensaje prellenado: «¡Hola Grupo Sole! Vengo desde su página web y me gustaría recibir más información sobre sus soluciones de energía solar.» (el nombre del contacto quedó como "John Doe" de ejemplo: no copiarlo).

## 6. Etiquetas de seguimiento (verificado en el navegador)
| Etiqueta | ID | Cómo se carga | Acción |
|---|---|---|---|
| Etiqueta de Google (gtag.js) | **GT-PJS7FBKV** | Site Kit, en el <head> | Instalar igual |
| Google Analytics 4 | **G-DD41N7LS6K** | Destino de GT-PJS7FBKV | Viene con la etiqueta anterior |
| Google Tag Manager / Google Ads / Meta Pixel | — | No hay | — |

## 7. SEO: cosas a corregir en el sitio nuevo
- **El inicio y /quienes-somos/ no tienen H1**; las páginas de producto solo tienen como H1 "Comienza a Ahorrar Hoy Mismo" y /calentadores-de-agua-solares/ tiene 3 H1. Poner un H1 único y descriptivo por página.
- Hay textos pegados sin espacio en el inicio ("completade", "paratransformar", "medioambiente"): vienen así del sitio actual.

## 8. Estructura del paquete
- `paginas/` — ficha .md por URL (SEO, Open Graph, JSON-LD, todo el texto en orden, botones con enlace, imágenes con alt) + .json. `_header-footer.json`.
- `html-original/` — HTML completo de cada URL tal como se sirve hoy + `_indice.json` con códigos HTTP.
- `wp-originales/` — 304 archivos originales con su ruta exacta (imágenes, PDF, CSS, JS, fuentes). Fotos de más de 350 KB recomprimidas a máx. 1920 px, calidad 82 % (detalle en `imagenes-manifest.csv`).
- `logos/`, `whatsapp-config.json`, `sitemaps/` (incluye robots.txt).

## 9. Lo que no existe
- 39 archivos que los CSS del tema/plugins piden pero **no existen en el servidor** (íconos de tarjetas de crédito, fuentes Font Awesome en formatos viejos, `Wastix/style.min.css`, `customicon/eicons.css`): no hacen falta.
- No hay productos en WooCommerce, ni blog, ni formularios.
