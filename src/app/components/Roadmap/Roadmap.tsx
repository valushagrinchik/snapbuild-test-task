export default function Roadmap() {
  return (
    <section className="roadmap dds-rmap" id="roadmap">
      <header className="dds-rmap-header">
        <h2 className="dds-rmap-title">Каждый день — новый релиз</h2>
        <p className="dds-rmap-subtitle">Постоянное развитие платформы</p>
      </header>
      <div className="dds-rmap-scroller">
        <div className="dds-rmap-track">
          <article className="dds-rmap-item">
            <div className="dds-rmap-dot">
              <div className="dds-rmap-dot-halo"></div>
              <div className="dds-rmap-dot-core"></div>
            </div>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name">Декабрь 2025</h3>
              <p className="dds-rmap-desc">Запуск платформы</p>
              <time className="dds-rmap-date">2025-12</time>
            </div>
          </article>
          <article className="dds-rmap-item">
            <div className="dds-rmap-dot">
              <div className="dds-rmap-dot-halo"></div>
              <div className="dds-rmap-dot-core"></div>
            </div>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name">Январь 2026</h3>
              <p className="dds-rmap-desc">Интеграции с Figma</p>
              <time className="dds-rmap-date">2026-01</time>
            </div>
          </article>
          <article className="dds-rmap-item">
            <div className="dds-rmap-dot">
              <div className="dds-rmap-dot-halo"></div>
              <div className="dds-rmap-dot-core"></div>
            </div>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name">Февраль 2026</h3>
              <p className="dds-rmap-desc">API для разработчиков</p>
              <time className="dds-rmap-date">2026-02</time>
            </div>
          </article>
          <article className="dds-rmap-item">
            <div className="dds-rmap-dot">
              <div className="dds-rmap-dot-halo"></div>
              <div className="dds-rmap-dot-core"></div>
            </div>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name">Март 2026</h3>
              <p className="dds-rmap-desc">Командная работа</p>
              <time className="dds-rmap-date">2026-03</time>
            </div>
          </article>
          <article className="dds-rmap-item">
            <div className="dds-rmap-dot">
              <div className="dds-rmap-dot-halo"></div>
              <div className="dds-rmap-dot-core"></div>
            </div>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name">Апрель 2026</h3>
              <p className="dds-rmap-desc">Аналитика и метрики</p>
              <time className="dds-rmap-date">2026-04</time>
            </div>
          </article>
          <article className="dds-rmap-item">
            <div className="dds-rmap-dot">
              <div className="dds-rmap-dot-halo"></div>
              <div className="dds-rmap-dot-core"></div>
            </div>
            <div className="dds-rmap-body">
              <h3 className="dds-rmap-name">Май 2026</h3>
              <p className="dds-rmap-desc">Enterprise решения</p>
              <time className="dds-rmap-date">2026-05</time>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
