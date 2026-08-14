
 (function () {
 var KEY = 'dds-cookie-consent';
 var banner = document.getElementById('dds-cookie');
 if (!banner) return;
 try { if (localStorage.getItem(KEY) === 'accepted') { banner.remove(); return; } } catch (e) {}
 banner.removeAttribute('hidden');
 requestAnimationFrame(function () {
 requestAnimationFrame(function () { banner.classList.add('is-visible'); });
 });
 function accept() {
 try { localStorage.setItem(KEY, 'accepted'); } catch (e) {}
 banner.classList.remove('is-visible');
 setTimeout(function () { banner.remove(); }, 300);
 }
 var btn = document.getElementById('dds-cookie-accept');
 if (btn) btn.addEventListener('click', accept);
 })();
 