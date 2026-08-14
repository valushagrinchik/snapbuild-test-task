(function(){
 var root = document.getElementById("use-cases");
 if (!root) return;
 var TAB_COUNT = 5;
 var DURATION = 8000;
 var tabIndex = 0;
 var pointIndex = 0;
 var rafId = null;
 var startTime = null;

 var sets = root.querySelectorAll(".dds-tabs-points-set");
 var mediaEls = root.querySelectorAll(".dds-tabs-media");

 function activeCard() {
 var set = sets[tabIndex];
 return set ? set.children[pointIndex] : null;
 }

 function applyState() {
 var radio = document.getElementById("uc-tab-" + (tabIndex + 1));
 if (radio) radio.checked = true;
 var tabGroup = root.querySelector(".dds-tabs-group");
 var activeTab = radio ? root.querySelector('label[for="' + radio.id + '"]') : null;

 if (tabGroup && activeTab && window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches) {
 var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 var targetLeft = activeTab.offsetLeft - (tabGroup.clientWidth - activeTab.offsetWidth) / 2;
 tabGroup.scrollTo({ left: Math.max(0, targetLeft), behavior: reduceMotion ? "auto" : "smooth" });
 }
 var activeMedia = null;
 for (var si = 0; si < sets.length; si++) {
 var cards = sets[si].children;
 for (var ci = 0; ci < cards.length; ci++) {
 var isActive = si === tabIndex && ci === pointIndex;
 cards[ci].classList.toggle("dds-tabs-card--active", isActive);
 var fill = cards[ci].querySelector(".dds-tabs-card-progress-fill");
 if (fill) fill.style.transform = "scaleX(0)";
 if (isActive) activeMedia = cards[ci].getAttribute("data-media");
 }
 }
 for (var mi = 0; mi < mediaEls.length; mi++) {
 mediaEls[mi].classList.toggle("dds-tabs-media--active", mediaEls[mi].getAttribute("data-media") === activeMedia);
 }
 }

 function tick(ts) {
 if (startTime === null) startTime = ts;
 var progress = Math.min((ts - startTime) / DURATION, 1);
 var card = activeCard();
 if (card) {
 var fill = card.querySelector(".dds-tabs-card-progress-fill");
 if (fill) fill.style.transform = "scaleX(" + progress + ")";
 }
 if (progress >= 1) {
 pointIndex++;
 if (pointIndex >= 4) {
 pointIndex = 0;
 tabIndex = (tabIndex + 1) % TAB_COUNT;
 }
 applyState();
 startTime = null;
 rafId = requestAnimationFrame(tick);
 } else {
 rafId = requestAnimationFrame(tick);
 }
 }

 function restart() {
 if (rafId) cancelAnimationFrame(rafId);
 startTime = null;
 applyState();
 rafId = requestAnimationFrame(tick);
 }

 function goTo(newTab, newPoint) {
 tabIndex = newTab;
 pointIndex = newPoint;
 restart();
 }

 for (var i = 1; i <= TAB_COUNT; i++) {
 (function (idx) {
 var radio = document.getElementById("uc-tab-" + idx);
 if (!radio) return;
 radio.addEventListener("change", function () {
 goTo(idx - 1, 0);
 });
 })(i);
 }

 for (var s = 0; s < sets.length; s++) {
 (function (setIdx, cards) {
 for (var c = 0; c < cards.length; c++) {
 (function (cardIdx, el) {
 el.setAttribute("tabindex", "0");
 el.setAttribute("role", "button");
 el.addEventListener("click", function () {
 goTo(setIdx, cardIdx);
 });
 el.addEventListener("keydown", function (e) {
 if (e.key === "Enter" || e.key === " ") {
 e.preventDefault();
 goTo(setIdx, cardIdx);
 }
 });
 })(c, cards[c]);
 }
 })(s, sets[s].children);
 }

 // Mobile swipe. The panel shows one slide at a time, so a horizontal drag
 // walks the same flat sequence the autoplay does, wrapping across tabs.
 var POINTS_PER_TAB = 4;

 function step(delta) {
 var total = TAB_COUNT * POINTS_PER_TAB;
 var flat = tabIndex * POINTS_PER_TAB + pointIndex + delta;
 flat = ((flat % total) + total) % total;
 goTo(Math.floor(flat / POINTS_PER_TAB), flat % POINTS_PER_TAB);
 }

 var panel = root.querySelector(".dds-tabs-panel");
 if (panel) {
 var startX = 0, startY = 0, axis = null, swiped = false, swipeAnimTimer = null;

 panel.addEventListener("touchstart", function (e) {
 if (e.touches.length !== 1 || !window.matchMedia("(max-width: 767px)").matches) {
 axis = "off";
 return;
 }
 startX = e.touches[0].clientX;
 startY = e.touches[0].clientY;
 axis = null;
 swiped = false;
 }, { passive: true });

 // touch-action:pan-y lets the browser keep vertical scrolling while the
 // horizontal axis stays ours, so these can all stay passive.
 panel.addEventListener("touchmove", function (e) {
 if (axis !== null || e.touches.length !== 1) return;
 var dx = e.touches[0].clientX - startX;
 var dy = e.touches[0].clientY - startY;
 if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
 axis = Math.abs(dx) > Math.abs(dy) ? "x" : "y";
 }, { passive: true });

 panel.addEventListener("touchend", function (e) {
 if (axis !== "x") return;
 var dx = e.changedTouches[0].clientX - startX;
 if (Math.abs(dx) < 40) return;
 swiped = true;
 panel.setAttribute("data-swipe", dx < 0 ? "next" : "prev");
 step(dx < 0 ? 1 : -1);
 // Drop the direction once the slide-in is done, so the autoplay's own
 // changes go back to switching without a directional animation.
 window.clearTimeout(swipeAnimTimer);
 swipeAnimTimer = window.setTimeout(function () {
 panel.removeAttribute("data-swipe");
 }, 280);
 }, { passive: true });

 // A drag must not also count as a tap that opens the lightbox.
 panel.addEventListener("click", function (e) {
 if (!swiped) return;
 swiped = false;
 e.preventDefault();
 e.stopPropagation();
 }, true);
 }

 applyState();
 rafId = requestAnimationFrame(tick);
})();