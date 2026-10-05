// Utilidades compartidas: constantes de marca, escape, íconos y enlaces de WhatsApp.
import { readFileSync } from "node:fs";

export const SITE = {
  url: "https://gruposole.com.co",
  name: "Grupo Sole",
  tagline: "Consultoría Ambiental",
  // Etiqueta de Google (Site Kit) del sitio original — no cambiar.
  gtag: "GT-PJS7FBKV",
  // WhatsApp principal (consultoría y soporte)
  wa: "573202336372",
  waLabel: "320 233 6372",
  // WhatsApp de ventas de calentadores (botones "Comprar ahora" del sitio original)
  waSolar: "573108893614",
  waSolarLabel: "310 889 3614",
};

const IMGS = JSON.parse(readFileSync(new URL("../imagenes.json", import.meta.url)));

export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const wa = (msg, num = SITE.wa) => `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;

/** <img> con width/height reales (evita saltos de diseño) y carga diferida. */
export function img(src, alt, { cls = "", eager = false, sizes = "" } = {}) {
  const d = IMGS[src];
  if (!d) throw new Error(`Imagen sin dimensiones en imagenes.json: ${src}`);
  return `<img src="${src}" alt="${esc(alt)}" width="${d[0]}" height="${d[1]}"${cls ? ` class="${cls}"` : ""}${
    eager ? ' fetchpriority="high"' : ' loading="lazy"'
  } decoding="async"${sizes ? ` sizes="${sizes}"` : ""}>`;
}

const svg = (body, vb = "0 0 24 24", extra = "") =>
  `<svg class="i${extra ? " " + extra : ""}" viewBox="${vb}" aria-hidden="true" focusable="false">${body}</svg>`;
const stroke = (d) =>
  svg(`<path d="${d}" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="square" stroke-linejoin="miter"/>`);

export const icon = {
  arrow: stroke("M4 12h15M13 6l6 6-6 6"),
  arrowUp: stroke("M7 17L17 7M8 7h9v9"),
  plus: stroke("M12 5v14M5 12h14"),
  check: stroke("M5 12.5l4.5 4.5L19 7.5"),
  doc: stroke("M7 3h7l5 5v13H7zM14 3v5h5M10 13h6M10 17h6"),
  download: stroke("M12 4v11M7 10l5 5 5-5M5 20h14"),
  menu: stroke("M4 7h16M4 12h16M4 17h10"),
  close: stroke("M6 6l12 12M18 6L6 18"),
  // Font Awesome Free (CC BY 4.0) — fab-whatsapp
  whatsapp: svg(
    '<path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>',
    "0 0 448 512",
    "i-wa"
  ),
};

/** Botón/enlace a WhatsApp que además registra el evento en Google Analytics. */
export function waButton(label, msg, { cls = "btn btn-wa", num = SITE.wa, origen = "" } = {}) {
  return `<a class="${cls}" href="${wa(msg, num)}" target="_blank" rel="noopener" data-wa="${esc(origen)}">${icon.whatsapp}<span>${label}</span></a>`;
}

export const link = (href, label, cls = "btn") => `<a class="${cls}" href="${href}"><span>${label}</span>${icon.arrow}</a>`;
