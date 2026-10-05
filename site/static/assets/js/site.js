/* Grupo Sole · interacción mínima, sin dependencias. */
(function () {
  "use strict";
  var WA = "573202336372";

  /* Menú móvil */
  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("nav");
  var header = document.querySelector("[data-header]");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      if (header) document.documentElement.style.setProperty("--nav-top", header.getBoundingClientRect().bottom + "px");
      document.body.style.overflow = open ? "hidden" : "";
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) toggle.click();
    });
  }

  /* Menú de servicios: Escape lo cierra y al elegir una opción se oculta enseguida */
  var mega = document.querySelector(".has-mega");
  if (mega) {
    mega.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { mega.classList.add("closed"); document.activeElement.blur(); }
    });
    mega.addEventListener("mouseleave", function () { mega.classList.remove("closed"); });
    mega.querySelectorAll(".mega a").forEach(function (a) {
      a.addEventListener("click", function () { mega.classList.add("closed"); });
    });
  }

  /* Analytics: clics a WhatsApp como evento de contacto */
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[data-wa]");
    if (a && typeof window.gtag === "function") {
      window.gtag("event", "contacto_whatsapp", { origen: a.getAttribute("data-wa") || location.pathname });
    }
  });

  /* Índice lateral: resalta la sección visible */
  var tocLinks = document.querySelectorAll(".toc a[href^='#']");
  if (tocLinks.length && "IntersectionObserver" in window) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove("on"); });
          var l = map[en.target.id];
          if (l) l.classList.add("on");
        }
      });
    }, { rootMargin: "-30% 0px -60% 0px" });
    Object.keys(map).forEach(function (id) { var s = document.getElementById(id); if (s) io.observe(s); });
  }

  /* Autodiagnóstico ambiental */
  var diag = document.querySelector("[data-diag]");
  if (diag) {
    var total = diag.querySelectorAll("fieldset").length;
    var prog = document.querySelector("[data-diag-prog]");
    var count = document.querySelector("[data-diag-count]");
    var out = document.querySelector("[data-diag-res]");
    diag.addEventListener("change", function () {
      var n = diag.querySelectorAll("input:checked").length;
      if (prog) prog.style.width = (n / total) * 100 + "%";
      if (count) count.textContent = n + " / " + total;
    });
    diag.addEventListener("submit", function (e) {
      e.preventDefault();
      var si = 0, nosabe = 0, pendientes = [], faltan = 0;
      diag.querySelectorAll("fieldset").forEach(function (f) {
        var v = f.querySelector("input:checked");
        var corto = f.getAttribute("data-corto");
        if (!v) { faltan++; return; }
        if (v.value === "si") si++;
        else { pendientes.push(corto + (v.value === "nose" ? " (no sé)" : "")); if (v.value === "nose") nosabe++; }
      });
      if (faltan) {
        out.hidden = false;
        out.removeAttribute("data-nivel");
        out.innerHTML = '<p class="mono">Faltan ' + faltan + " respuestas</p><p>Responde todas las preguntas para ver tu resultado.</p>";
        out.scrollIntoView({ behavior: "smooth", block: "center" });
        return;
      }
      var nivel, titulo, texto;
      if (si >= 7) { nivel = "bien"; titulo = "Vas bien."; texto = "Te recomendamos una revisión anual para no perder fechas."; }
      else if (si >= 4 && nosabe < 3) { nivel = "brechas"; titulo = "Hay brechas."; texto = "Algunas obligaciones podrían estar pendientes. Revisémoslas antes de que lo haga la autoridad."; }
      else { nivel = "prioridad"; titulo = "Atención prioritaria."; texto = "Tu empresa podría estar expuesta a requerimientos o sanciones. Hablemos hoy."; }
      var etiqueta = { bien: "Vas bien", brechas: "Hay brechas", prioridad: "Atención prioritaria" }[nivel];
      var msg = "Hola, hice el autodiagnóstico ambiental y obtuve: " + etiqueta + " (" + si + "/" + total + " en Sí)." +
        (pendientes.length ? " Respuestas 'No' o 'No sé': " + pendientes.join("; ") + "." : "");
      var href = "https://wa.me/" + WA + "?text=" + encodeURIComponent(msg);
      out.hidden = false;
      out.setAttribute("data-nivel", nivel);
      out.innerHTML =
        '<p class="mono">Resultado · ' + si + " de " + total + " en “Sí”</p><h2>" + titulo + "</h2><p>" + texto + "</p>" +
        (pendientes.length ? "<p><strong>Puntos a revisar:</strong></p><ul>" + pendientes.map(function (p) { return "<li>" + p + "</li>"; }).join("") + "</ul>" : "") +
        '<a class="btn ' + (nivel === "bien" ? "btn-line" : "btn-signal btn-lg") + '" target="_blank" rel="noopener" data-wa="autodiagnostico" href="' + href + '"><span>' +
        (nivel === "bien" ? "Programar revisión anual" : "Enviar resultado por WhatsApp") + "</span></a>";
      out.scrollIntoView({ behavior: "smooth", block: "start" });
      if (typeof window.gtag === "function") window.gtag("event", "autodiagnostico", { resultado: nivel, si: si });
    });
  }

  /* Formulario de contacto → mensaje de WhatsApp (no se guardan datos en el sitio) */
  var form = document.querySelector("[data-contacto]");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var d = new FormData(form);
      var partes = ["Hola Grupo Sole, soy " + d.get("nombre") + (d.get("empresa") ? " de " + d.get("empresa") : "") + "."];
      if (d.get("cargo")) partes.push("Cargo: " + d.get("cargo") + ".");
      if (d.get("ciudad")) partes.push("Ciudad / región: " + d.get("ciudad") + ".");
      if (d.get("servicio")) partes.push("Necesito: " + d.get("servicio") + ".");
      if (d.get("mensaje")) partes.push(d.get("mensaje"));
      var url = "https://wa.me/" + WA + "?text=" + encodeURIComponent(partes.join(" "));
      if (typeof window.gtag === "function") window.gtag("event", "contacto_whatsapp", { origen: "formulario", servicio: d.get("servicio") || "" });
      window.open(url, "_blank", "noopener");
    });
  }
})();
