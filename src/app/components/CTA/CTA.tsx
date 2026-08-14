export default function CTA() {
  return (
    <section className="cta dds-cta dds-launch" id="cta">
      <div className="dds-launch-dust" aria-hidden={true}></div>
      <div className="dds-launch-shine" aria-hidden={true}></div>
      <div className="dds-launch-content">
        <div className="dds-launch-intro">
          <h2 className="dds-launch-title">
            <span className="dds-launch-title-desktop">Профессиональные материалы в фирменном стиле<br/>за минуты, а не дни</span>
            <span className="dds-launch-title-responsive">Профессиональные материалы в фирменном стиле за минуты, а не дни</span>
          </h2>
          <p className="dds-launch-subtitle">Выстройте маркетинг в единый поток — от первой идеи до финального взаимодействия с клиентом.</p>
        </div>
        <div className="dds-launch-actions">
          <a className="dds-launch-btn" href="#">
            <span className="dds-launch-btn-text">Начать сейчас</span>
          </a>
        </div>
      </div>
    </section>
  );
}
