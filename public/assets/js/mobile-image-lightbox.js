(function(){
 var MQ = "(max-width: 767px)";
 var SELECTOR = "#hero .dds-app-preview-shot, #use-cases .dds-tabs-panel";
 var box = null, img = null, lastFocus = null, savedScrollY = 0;

 function isMobile(){ return window.matchMedia && window.matchMedia(MQ).matches; }

 function build(){
 box = document.createElement("div");
 box.className = "dds-lightbox";
 box.setAttribute("role", "dialog");
 box.setAttribute("aria-modal", "true");
 box.setAttribute("aria-label", "Просмотр изображения");
 box.innerHTML =
 '<div class="dds-lightbox-scroll"><img class="dds-lightbox-img" alt=""></div>' +
 '<button type="button" class="dds-lightbox-close" aria-label="Закрыть">✕</button>' +
 '<div class="dds-lightbox-caption">' +
 '<p class="dds-lightbox-caption-title"></p>' +
 '<p class="dds-lightbox-caption-desc"></p>' +
 '</div>';
 img = box.querySelector(".dds-lightbox-img");
 box.querySelector(".dds-lightbox-close").addEventListener("click", close);
 img.addEventListener("click", function(e){ e.stopPropagation(); toggleZoom(); });
 box.addEventListener("click", close);
 document.body.appendChild(box);
 }

 function toggleZoom(){
 var scroll = box.querySelector(".dds-lightbox-scroll");
 box.classList.toggle("is-zoomed");
 if (box.classList.contains("is-zoomed")) {
 scroll.scrollLeft = (scroll.scrollWidth - scroll.clientWidth) / 2;
 }
 }

 // The visible copy lives next to the image, not inside it: use-cases keeps a
 // single panel for every slide, so the caption comes from the active card.
 function captionFor(hit){
 if (hit.closest("#hero")) return { title: "Главная страница платформы", desc: "" };
 if (!hit.closest("#use-cases")) return null;
 var card = document.querySelector("#use-cases .dds-tabs-card--active");
 if (!card) return null;
 var title = card.querySelector(".dds-tabs-card-title");
 var desc = card.querySelector(".dds-tabs-card-desc");
 return {
 title: title ? title.innerText.trim() : "",
 desc: desc ? desc.innerText.trim() : ""
 };
 }

 function open(src, caption){
 if (!box) build();
 lastFocus = document.activeElement;
 savedScrollY = window.scrollY;
 var titleEl = box.querySelector(".dds-lightbox-caption-title");
 var descEl = box.querySelector(".dds-lightbox-caption-desc");
 titleEl.textContent = caption ? caption.title : "";
 descEl.textContent = caption ? caption.desc : "";
 box.classList.toggle("has-caption", !!(caption && (caption.title || caption.desc)));
 img.src = src;
 box.classList.remove("is-zoomed");
 box.classList.add("is-open");
 document.body.style.top = -savedScrollY + "px";
 document.documentElement.classList.add("dds-lightbox-locked");
 requestAnimationFrame(function(){ box.classList.add("is-visible"); });
 box.querySelector(".dds-lightbox-close").focus({ preventScroll: true });
 }

 function close(){
 if (!box || !box.classList.contains("is-open")) return;
 box.classList.remove("is-visible");
 document.documentElement.classList.remove("dds-lightbox-locked");
 document.body.style.top = "";
 // The page sets scroll-behavior:smooth globally; restoring the offset has
 // to be instant or closing animates the page back down.
 document.documentElement.style.scrollBehavior = "auto";
 window.scrollTo(0, savedScrollY);
 document.documentElement.style.scrollBehavior = "";
 window.setTimeout(function(){
 box.classList.remove("is-open", "is-zoomed");
 img.removeAttribute("src");
 }, 200);
 if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
 }

 document.addEventListener("click", function(e){
 if (!isMobile()) return;
 var hit = e.target.closest ? e.target.closest(SELECTOR) : null;
 if (!hit) return;
 // The tabs panel stacks every slide, so the active one has to be resolved
 // first — a combined selector would just return the first image in the DOM.
 var source = hit.matches("img")
 ? hit
 : hit.querySelector(".dds-tabs-media--active") || hit.querySelector("img");
 if (!source || !source.currentSrc && !source.src) return;
 e.preventDefault();
 open(source.currentSrc || source.src, captionFor(hit));
 });

 document.addEventListener("keydown", function(e){
 if (e.key === "Escape") close();
 });

 window.addEventListener("resize", function(){
 if (!isMobile()) close();
 });
})();