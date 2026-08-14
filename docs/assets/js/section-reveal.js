(function(){
 var targets = document.querySelectorAll("#hero, #logos, #process, #use-cases, #pricing, #materials, #features, #testimonials, #roadmap, #contact, #faq, #integrations, #cta, #footer");
 if (!targets.length) return;
 if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
 if (!("IntersectionObserver" in window)) return;
 targets.forEach(function (el) { el.classList.add("dds-reveal"); });
 var io = new IntersectionObserver(function (entries) {
 entries.forEach(function (entry) {
 if (entry.isIntersecting) {
 entry.target.classList.add("is-visible");
 io.unobserve(entry.target);
 }
 });
 }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
 targets.forEach(function (el) { io.observe(el); });
})();