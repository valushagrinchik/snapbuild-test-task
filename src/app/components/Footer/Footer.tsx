export default function Footer() {
  return (
    <section className="footer dds-footer" id="footer">
      <div className="dds-footer-top">
        <div className="dds-footer-brand">
          <a className="dds-footer-logo" href="/" aria-label="Снэпбилд">
            <img src="/assets/images/582db07d8ccd60da.svg" alt="Снэпбилд" width="153" height="22" />
          </a>
          <p className="dds-footer-tagline">Профессиональные материалы в фирменном стиле за минуты</p>
          <a className="dds-footer-email" href="mailto:demo@example.com">demo@example.com</a>
        </div>
        <nav className="dds-footer-links" aria-label="Подвал">
          <div className="dds-footer-column">
            <h4 className="dds-footer-title">Продукт</h4>
            <ul className="dds-footer-list">
              <li><a className="dds-footer-link" href="#process">Возможности</a></li>
              <li><a className="dds-footer-link" href="#features">Безопасность</a></li>
              <li><a className="dds-footer-link" href="#roadmap">Роадмап</a></li>
            </ul>
          </div>
          <div className="dds-footer-column">
            <h4 className="dds-footer-title">Ресурсы</h4>
            <ul className="dds-footer-list">
              <li><a className="dds-footer-link" href="#faq">FAQ</a></li>
              <li><a className="dds-footer-link" href="#docs">Документация</a></li>
              <li><a className="dds-footer-link" href="#blog">Блог</a></li>
            </ul>
          </div>
          <div className="dds-footer-column">
            <h4 className="dds-footer-title">Компания</h4>
            <ul className="dds-footer-list">
              <li><a className="dds-footer-link" href="#about">О нас</a></li>
              <li><a className="dds-footer-link" href="#careers">Карьера</a></li>
              <li><a className="dds-footer-link" href="#contact">Контакты</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="dds-footer-legal">
        <p className="dds-footer-copyright">© 2026 Снэпбилд. Все права защищены.</p>
        <a className="dds-footer-link" href="#privacy">Политика конфиденциальности</a>
      </div>
    </section>
  );
}
