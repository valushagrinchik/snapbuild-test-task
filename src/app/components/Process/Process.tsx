export default function Process() {
  return (
    <section className="process dds-steps" id="process">
      <div className="dds-steps-header">
        <h2 className="dds-steps-title">
          <span className="dds-steps-wide">Одна платформа — весь маркетинг</span>
          <span className="dds-steps-narrow">Одна платформа —<br/>весь маркетинг</span>
        </h2>
        <p className="dds-steps-subtitle">Сайты, изображения, видео, баннеры и презентации — из одной идеи, в вашем стиле</p>
      </div>
      <div className="dds-steps-grid">
        <article className="dds-steps-card">
          <img src="/assets/images/84a4450b3827bc21.webp" className="dds-steps-media dds-steps-media--1" alt="" style={{objectFit: 'cover'}} />
          <div className="dds-steps-overlay">
            <div className="dds-steps-copy">
              <h3 className="dds-steps-name">
                <span className="dds-steps-wide">Дизайн-система — ядро платформы</span>
                <span className="dds-steps-narrow">Дизайн-система Снэпбилд</span>
              </h3>
              <p className="dds-steps-desc">
                <span className="dds-steps-wide">Ваши компоненты, цвета и шрифты — единственный источник стиля</span>
                <span className="dds-steps-narrow">Ваши компоненты, цвета и шрифты — единственный источник стиля</span>
              </p>
            </div>
          </div>
        </article>
        <article className="dds-steps-card">
          <picture className="dds-steps-picture">
            <source media="(max-width: 767px)" srcSet="/assets/images/process-flexible-configuration-mobile.webp" />
            <source media="(max-width: 1023px)" srcSet="/assets/images/process-flexible-configuration-tablet.webp" />
            <img src="/assets/images/process-flexible-configuration.webp" className="dds-steps-media dds-steps-media--2" alt="" />
          </picture>
          <div className="dds-steps-overlay">
            <div className="dds-steps-copy">
              <h3 className="dds-steps-name">
                <span className="dds-steps-wide">Гибкая конфигурация</span>
                <span className="dds-steps-narrow">Гибкая конфигурация</span>
              </h3>
              <p className="dds-steps-desc">
                <span className="dds-steps-wide">Правила бренда задаются один раз — работают в каждой генерации</span>
                <span className="dds-steps-narrow">Правила бренда задаются один раз — работают в каждой генерации</span>
              </p>
            </div>
          </div>
        </article>
        <article className="dds-steps-card">
          <img src="/assets/images/84a4450b3827bc21.webp" className="dds-steps-media dds-steps-media--3" alt="" style={{objectFit: 'cover'}} />
          <div className="dds-steps-overlay">
            <div className="dds-steps-copy">
              <h3 className="dds-steps-name">
                <span className="dds-steps-wide">Мгновенная генерация</span>
                <span className="dds-steps-narrow">Мгновенная генерация</span>
              </h3>
              <p className="dds-steps-desc">
                <span className="dds-steps-wide">От идеи до готового материала за минуты</span>
                <span className="dds-steps-narrow">От идеи до готового материала за минуты</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
