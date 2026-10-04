# Chunks de Elementor reconstruidos

El respaldo de Hostinger no incluía estos archivos que `elementor/assets/js/frontend.min.js`
(v4.1.1) carga bajo demanda. Sin ellos el carrusel, los acordeones y la sección estirada no
funcionan. Son reimplementaciones mínimas con los **mismos nombres e IDs de módulo webpack**
que espera `webpack.runtime.min.js`, construidas sobre las clases base que sí trae
`frontend-modules.min.js` (`elementorModules.frontend.handlers.*`).

| Archivo | Chunk | Módulos | Qué hace |
|---|---|---|---|
| section-frontend-handlers.d85ab872da118940910d.bundle.min.js | 77 | 2439 | Sección estirada (stretch_section) |
| shared-frontend-handlers.03caa53373b56d3bab67.bundle.min.js | 557 | 628, 3031 | Fondo slideshow / video (no se usan: no-op) |
| text-editor.45609661e409413f1cef.bundle.min.js | 212 | 5362 | Letra capital (no se usa: no-op) |
| image-carousel.6167d20b95b33386757b.bundle.min.js | 177 | 4315 | Carrusel de imágenes (Swiper) |
| toggle.2a177a3ef4785d3dfbc5.bundle.min.js | 775 | 3049 | Acordeón "toggle" |

`scripts/migrar.py` los copia a `public/wp-content/plugins/elementor/assets/js/`.
