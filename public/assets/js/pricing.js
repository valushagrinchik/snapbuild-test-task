(function () {
  var grid = document.querySelector('#pricing .nb-pricing-grid');
  if (!grid) return;

  var cards = grid.querySelectorAll('.nb-pricing-card');
  var status = document.getElementById('nb-pricing-status');
  var nameEl = document.getElementById('nb-pricing-plan-name');

  function select(card) {
    cards.forEach(function (c) {
      c.classList.remove('is-selected');
      c.setAttribute('aria-pressed', 'false');
    });
    card.classList.add('is-selected');
    card.setAttribute('aria-pressed', 'true');

    if (status && nameEl) {
      nameEl.textContent = card.getAttribute('data-plan') || '';
      status.classList.add('is-active');
    }
  }

  cards.forEach(function (card) {
    card.addEventListener('click', function (e) {
      if (e.target.closest('.nb-pricing-cta')) return;
      select(card);
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        select(card);
      }
    });
  });

  // Select Team (featured) plan by default
  var featured = grid.querySelector('.nb-pricing-card--featured');
  if (featured) select(featured);
})();
