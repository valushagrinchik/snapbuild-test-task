'use client';

import { useEffect } from 'react';
import AnimatedSection from './AnimatedSection';

export default function Home() {
  useEffect(() => {
    // Hero motion
    document.documentElement.classList.add('hero-motion-pending');
    document.documentElement.classList.remove('hero-motion-ready');
    
    setTimeout(() => {
      document.documentElement.classList.remove('hero-motion-pending');
      document.documentElement.classList.add('hero-motion-ready');
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-snap-bg text-snap-text pb-safe">
      <header className="dds-header fixed top-0 left-0 right-0 z-50 px-[calc(40/14.4*1vw)] py-4">
        <nav className="dds-main-bar flex items-center justify-between rounded-full bg-snap-surface/80 backdrop-blur-md px-5 py-3 shadow-sm">
          <a href="/" className="dds-main-logo text-lg font-semibold tracking-tight">
            Снэпбилд
          </a>
          <div className="dds-main-nav hidden md:flex items-center gap-8 text-sm font-medium text-snap-muted">
            <a href="#product" className="dds-main-link link-underline hover:text-snap-text transition-colors">Продукт</a>
            <a href="#features" className="dds-main-link link-underline hover:text-snap-text transition-colors">Возможности</a>
            <a href="#security" className="dds-main-link link-underline hover:text-snap-text transition-colors">Безопасность</a>
            <a href="#faq" className="dds-main-link link-underline hover:text-snap-text transition-colors">FAQ</a>
          </div>
          <button className="dds-main-burger md:hidden button-hover rounded-full bg-snap-surface text-snap-text p-2" aria-label="Menu">
            <svg className="dds-main-burger-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <a
            href="#ctapage/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c"
            className="dds-main-demo dds-btn button-hover rounded-full bg-snap-surface text-snap-text px-5 py-2.5 text-sm font-medium hover:bg-snap-border transition-colors"
          >
            Начать сейчас
          </a>
        </nav>
      </header>

      <main>
        <section className="dds-app-preview hero" id="hero">
          <div className="dds-app-preview-card">
            <div className="dds-app-preview-inner">
              <div className="dds-app-preview-intro">
                <div className="dds-app-preview-heading">
                  <h1 className="dds-app-preview-title" data-cms-key="hero.title">Платформа, где все создается в рамках вашего бренда и дизайн-системы</h1>
                  <p className="dds-app-preview-subtitle" data-cms-key="hero.subtitle">Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.</p>
                </div>
                <a className="dds-app-preview-cta" href="#ctapage/019f7fde-d606-7e57-beda-3b163e5f28f3/019f7fde-df04-7ed1-b554-24792c0e689c" target="_blank" rel="noopener noreferrer">
                  <span className="dds-app-preview-cta-text" data-cms-key="hero.cta">Начать сейчас</span>
                </a>
              </div>
              <div className="dds-app-preview-media">
                <img className="dds-app-preview-shot" data-cms-image="hero.app-screenshot" src="/assets/images/hero-snapbuild-2026-08-07-v2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="logos dds-logos dds-marquee" id="logos">
          <p className="dds-marquee-eyebrow">С платформой работают команды, для которых бренд — закон</p>
          <div className="dds-marquee-track">
            <div className="dds-marquee-content">
              <div className="dds-marquee-item dds-marquee-item-3">
                <img src="/assets/images/5cd01de0b6a5e001.svg" alt="" />
              </div>
              <div className="dds-marquee-item dds-marquee-item-4">
                <img src="/assets/images/ee341193d7cf46d6.svg" alt="" />
              </div>
              <div className="dds-marquee-item dds-marquee-item-7">
                <img src="/assets/images/logo-avito.svg" alt="" />
              </div>
              <div className="dds-marquee-item dds-marquee-item-8">
                <img src="/assets/images/logo-cian.svg" alt="" />
              </div>
              <div className="dds-marquee-item dds-marquee-item-10">
                <img src="/assets/images/logo-lenta.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection className="process dds-steps" id="process">
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
              <img src="/assets/images/afe03eb4a67d5dfb.webp" className="dds-steps-media dds-steps-media--3" alt="" />
              <div className="dds-steps-overlay">
                <div className="dds-steps-copy">
                  <h3 className="dds-steps-name">
                    <span className="dds-steps-wide">Соответствие по умолчанию</span>
                    <span className="dds-steps-narrow">Соответствие по умолчанию</span>
                  </h3>
                  <p className="dds-steps-desc">
                    <span className="dds-steps-wide">AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам</span>
                    <span className="dds-steps-narrow">AI не может нарушить бренд: сайты, изображения, видео, баннеры и презентации — строго по вашим правилам</span>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </AnimatedSection>

        <AnimatedSection className="features dds-why-safe" id="features">
          <h2 className="dds-why-safe-section-title">Безопасность без компромиссов</h2>
          <div className="dds-why-safe-points">
            <div className="dds-why-safe-point">
              <picture className="dds-why-safe-image">
                <source media="(max-width: 767px)" srcSet="/assets/images/security-approved-models-mobile-v2.jpg" />
                <img src="/assets/images/security-approved-models.webp" alt="" aria-hidden={true} />
              </picture>
              <div className="dds-why-safe-card"><span className="dds-why-safe-tile" aria-hidden={true}><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99967 14.1665C9.99967 12.9998 10.4025 12.0137 11.208 11.2082C12.0136 10.4026 12.9997 9.99984 14.1663 9.99984C12.9997 9.99984 12.0136 9.59706 11.208 8.7915C10.4025 7.98595 9.99967 6.99984 9.99967 5.83317C9.99967 6.99984 9.5969 7.98595 8.79134 8.7915C7.98579 9.59706 6.99967 9.99984 5.83301 9.99984C6.99967 9.99984 7.98579 10.4026 8.79134 11.2082C9.5969 12.0137 9.99967 12.9998 9.99967 14.1665ZM9.99967 18.2498C9.90245 18.2498 9.81217 18.2429 9.72884 18.229C9.64551 18.2151 9.56217 18.1943 9.47884 18.1665C7.60384 17.5415 6.11079 16.3853 4.99967 14.6978C3.88856 13.0103 3.33301 11.1943 3.33301 9.24984V5.31234C3.33301 4.96511 3.4337 4.65261 3.63509 4.37484C3.83648 4.09706 4.0969 3.89567 4.41634 3.77067L9.41634 1.89567C9.61079 1.82623 9.80523 1.7915 9.99967 1.7915C10.1941 1.7915 10.3886 1.82623 10.583 1.89567L15.583 3.77067C15.9025 3.89567 16.1629 4.09706 16.3643 4.37484C16.5656 4.65261 16.6663 4.96511 16.6663 5.31234V9.24984C16.6663 11.1943 16.1108 13.0103 14.9997 14.6978C13.8886 16.3853 12.3955 17.5415 10.5205 18.1665C10.4372 18.1943 10.3538 18.2151 10.2705 18.229C10.1872 18.2429 10.0969 18.2498 9.99967 18.2498ZM9.99967 16.5832C11.4441 16.1248 12.6386 15.2082 13.583 13.8332C14.5275 12.4582 14.9997 10.9304 14.9997 9.24984V5.31234L9.99967 3.43734L4.99967 5.31234V9.24984C4.99967 10.9304 5.4719 12.4582 6.41634 13.8332C7.36079 15.2082 8.55523 16.1248 9.99967 16.5832Z" fill="#000000"/></svg></span></div>
              <div className="dds-why-safe-point-text">
                <h3 className="dds-why-safe-point-title">Только одобренные модели</h3>
                <p className="dds-why-safe-point-desc">Работаем только с российскими и локализованными моделями, без экспортных ограничений</p>
              </div>
            </div>
            <div className="dds-why-safe-point">
              <picture className="dds-why-safe-image">
                <source media="(max-width: 767px)" srcSet="/assets/images/security-private-cloud-mobile-v2.jpg" />
                <img src="/assets/images/security-private-cloud.webp" alt="" aria-hidden={true} />
              </picture>
              <div className="dds-why-safe-card"><span className="dds-why-safe-tile" aria-hidden={true}><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.41634 16.6666C4.15245 16.6666 3.07259 16.2291 2.17676 15.3541C1.28092 14.4791 0.833008 13.4097 0.833008 12.1458C0.833008 11.0625 1.1594 10.0972 1.81217 9.24998C2.46495 8.40276 3.31912 7.86109 4.37467 7.62498C4.7219 6.3472 5.41634 5.31248 6.45801 4.52081C7.49967 3.72915 8.68023 3.33331 9.99967 3.33331C11.6247 3.33331 13.0031 3.89929 14.1351 5.03123C15.267 6.16317 15.833 7.54165 15.833 9.16665C16.7913 9.27776 17.5865 9.69095 18.2184 10.4062C18.8504 11.1215 19.1663 11.9583 19.1663 12.9166C19.1663 13.9583 18.8018 14.8437 18.0726 15.5729C17.3434 16.3021 16.458 16.6666 15.4163 16.6666H5.41634ZM5.41634 15H15.4163C15.9997 15 16.4927 14.7986 16.8955 14.3958C17.2983 13.993 17.4997 13.5 17.4997 12.9166C17.4997 12.3333 17.2983 11.8403 16.8955 11.4375C16.4927 11.0347 15.9997 10.8333 15.4163 10.8333H14.1663V9.16665C14.1663 8.01387 13.7601 7.03123 12.9476 6.21873C12.1351 5.40623 11.1525 4.99998 9.99967 4.99998C8.8469 4.99998 7.86426 5.40623 7.05176 6.21873C6.23926 7.03123 5.83301 8.01387 5.83301 9.16665H5.41634C4.61079 9.16665 3.92329 9.45137 3.35384 10.0208C2.7844 10.5903 2.49967 11.2778 2.49967 12.0833C2.49967 12.8889 2.7844 13.5764 3.35384 14.1458C3.92329 14.7153 4.61079 15 5.41634 15Z" fill="#000000"/></svg></span></div>
              <div className="dds-why-safe-point-text">
                <h3 className="dds-why-safe-point-title">Ваш контур, ваша юрисдикция</h3>
                <p className="dds-why-safe-point-desc">Развертывание в частном облаке с полным соответствием 152-ФЗ и внутренними ИБ-требованиями</p>
              </div>
            </div>
            <div className="dds-why-safe-point">
              <picture className="dds-why-safe-image">
                <source media="(max-width: 767px)" srcSet="/assets/images/security-ai-stack-mobile-v2.jpg" />
                <img src="/assets/images/security-ai-stack.webp" alt="" aria-hidden={true} />
              </picture>
              <div className="dds-why-safe-card"><span className="dds-why-safe-tile" aria-hidden={true}><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.66666C5.41667 1.66666 1.66667 5.41666 1.66667 10C1.66667 14.5833 5.41667 18.3333 10 18.3333C14.5833 18.3333 18.3333 14.5833 18.3333 10C18.3333 5.41666 14.5833 1.66666 10 1.66666ZM10 16.6666C6.31667 16.6666 3.33334 13.6833 3.33334 10C3.33334 6.31666 6.31667 3.33333 10 3.33333C13.6833 3.33333 16.6667 6.31666 16.6667 10C16.6667 13.6833 13.6833 16.6666 10 16.6666ZM10.8333 5.83333H9.16667V10.8333L13.5417 13.5417L14.375 12.1917L10.8333 10V5.83333Z" fill="#000000"/></svg></span></div>
              <div className="dds-why-safe-point-text">
                <h3 className="dds-why-safe-point-title">Собственный AI-стек</h3>
                <p className="dds-why-safe-point-desc">Вы сами определяете модели, хранилища, доступы и цепочки валидации</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="roadmap dds-rmap" id="roadmap">
          <header className="dds-rmap-header">
            <h2 className="dds-rmap-title">Каждый день — новый релиз</h2>
            <p className="dds-rmap-subtitle">Приоритизируем бэклог для ваших целей</p>
          </header>
          <div className="dds-rmap-scroller">
            <div className="dds-rmap-track">
              <article className="dds-rmap-item is-reached">
                <span className="dds-rmap-dot"><span className="dds-rmap-dot-halo"></span><span className="dds-rmap-dot-core"></span></span>
                <div className="dds-rmap-body">
                  <h3 className="dds-rmap-name">Сайты за 5 минут</h3>
                  <p className="dds-rmap-desc">Генерация корпоративных сайтов по вашей дизайн-системе — 100% консистентность, без разработчиков</p>
                  <p className="dds-rmap-date">Декабрь, 2025</p>
                </div>
              </article>
              <article className="dds-rmap-item is-reached">
                <span className="dds-rmap-dot"><span className="dds-rmap-dot-halo"></span><span className="dds-rmap-dot-core"></span></span>
                <div className="dds-rmap-body">
                  <h3 className="dds-rmap-name">Консистентные AI-иллюстрации</h3>
                  <p className="dds-rmap-desc">Настраиваете фирменный стиль один раз — графика для каждой секции сайта в едином виде через стилевые пресеты</p>
                  <p className="dds-rmap-date">Январь, 2026</p>
                </div>
              </article>
              <article className="dds-rmap-item is-reached">
                <span className="dds-rmap-dot"><span className="dds-rmap-dot-halo"></span><span className="dds-rmap-dot-core"></span></span>
                <div className="dds-rmap-body">
                  <h3 className="dds-rmap-name">Дизайн-система из вашего сайта</h3>
                  <p className="dds-rmap-desc">Сканируем существующие страницы и собираем из них готовую дизайн-систему; AI сам выстраивает структуру</p>
                  <p className="dds-rmap-date">Февраль, 2026</p>
                </div>
              </article>
              <article className="dds-rmap-item">
                <span className="dds-rmap-dot"><span className="dds-rmap-dot-halo"></span><span className="dds-rmap-dot-core"></span></span>
                <div className="dds-rmap-body">
                  <h3 className="dds-rmap-name">Режим изображений</h3>
                  <p className="dds-rmap-desc">Брендовая графика в один клик: управление стилями и темами, десятки параметров редактирования</p>
                  <p className="dds-rmap-date">Март, 2026</p>
                </div>
              </article>
              <article className="dds-rmap-item">
                <span className="dds-rmap-dot"><span className="dds-rmap-dot-halo"></span><span className="dds-rmap-dot-core"></span></span>
                <div className="dds-rmap-body">
                  <h3 className="dds-rmap-name">Генерация видео</h3>
                  <p className="dds-rmap-desc">Видео из ваших изображений с ключевыми кадрами; AI точнее на 78%, панель рассуждений и управление правами</p>
                  <p className="dds-rmap-date">Апрель, 2026</p>
                </div>
              </article>
              <article className="dds-rmap-item">
                <span className="dds-rmap-dot"><span className="dds-rmap-dot-halo"></span><span className="dds-rmap-dot-core"></span></span>
                <div className="dds-rmap-body">
                  <h3 className="dds-rmap-name">Ресайзы изображений</h3>
                  <p className="dds-rmap-desc">Одна фокус-точка → все форматы (16:9, 9:16, 1:1 и другие) с автоматическим бюджетом веса на экспорт</p>
                  <p className="dds-rmap-date">Май, 2026</p>
                </div>
              </article>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="faq dds-faq dds-accordion" id="faq">
          <div className="dds-accordion-header">
            <h2 className="dds-accordion-title">Часто задаваемые вопросы</h2>
            <p className="dds-accordion-subtitle">Ответы, которые помогут вам принять решение уверенно — без рисков для бренда и безопасности</p>
          </div>
          <div className="dds-accordion-list">
            <div className="dds-accordion-col">
              <div className="dds-accordion-item">
                <input type="checkbox" id="dds-faq-8" className="dds-accordion-state" />
                <label className="dds-accordion-head" htmlFor="dds-faq-8">
                  <p className="dds-accordion-question">Что можно создавать в Снэпбилде?</p>
                  <span className="dds-accordion-icon"><img src="/assets/images/c2663c497fb468e1.webp" alt="" /></span>
                </label>
                <div className="dds-accordion-panel">
                  <p className="dds-accordion-answer">Все основные форматы маркетинговых материалов — в едином фирменном стиле: Сайты — от промо-страниц до многостраничных корпоративных сайтов и веб-приложений: калькуляторов, дашбордов, панелей управления. Ограничений по масштабу нет. Изображения — рекламные материалы, иллюстрации, OG-изображения в фирменном стиле, до 4K, с автоматическим ресайзом под каждую площадку и плейсмент. Видео — генерация и редактирование роликов в стиле бренда; ключевые кадры создаются и меняются в режиме «Изображения», версии — под каждую платформу. Баннеры — рекламные креативы: мастер-баннер разворачивается в адаптации под площадки и плейсменты. Презентации — питч-деки и клиентские предложения в вашей дизайн-системе.</p>
                </div>
              </div>
              <div className="dds-accordion-item">
                <input type="checkbox" id="dds-faq-1" className="dds-accordion-state" />
                <label className="dds-accordion-head" htmlFor="dds-faq-1">
                  <p className="dds-accordion-question">Как работает анализ бренда?</p>
                  <span className="dds-accordion-icon"><img src="/assets/images/c2663c497fb468e1.webp" alt="" /></span>
                </label>
                <div className="dds-accordion-panel">
                  <p className="dds-accordion-answer">Система анализирует существующие интерфейсы, графические материалы и компоненты. Выделяются цветовые схемы, типографика, сетки, отступы и архитектура элементов. На основе этих данных формируется модель дизайн-системы, которая автоматически применяется ко всем новым интерфейсам.</p>
                </div>
              </div>
              <div className="dds-accordion-item">
                <input type="checkbox" id="dds-faq-2" className="dds-accordion-state" />
                <label className="dds-accordion-head" htmlFor="dds-faq-2">
                  <p className="dds-accordion-question">Можно ли экспортировать решение в существующую инфраструктуру?</p>
                  <span className="dds-accordion-icon"><img src="/assets/images/c2663c497fb468e1.webp" alt="" /></span>
                </label>
                <div className="dds-accordion-panel">
                  <p className="dds-accordion-answer">Да. Система формирует чистую структуру интерфейса, пригодную для интеграции в текущую среду разработки (React, Vue, Angular, HTML/CSS), интеграции с GitHub, GitLab, CI/CD. Поддерживается прямое подключение к корпоративным системам контроля версий и конвейерам сборки.</p>
                </div>
              </div>
              <div className="dds-accordion-item">
                <input type="checkbox" id="dds-faq-3" className="dds-accordion-state" />
                <label className="dds-accordion-head" htmlFor="dds-faq-3">
                  <p className="dds-accordion-question">Действительно ли интерфейс полностью соответствует дизайн-системе?</p>
                  <span className="dds-accordion-icon"><img src="/assets/images/c2663c497fb468e1.webp" alt="" /></span>
                </label>
                <div className="dds-accordion-panel">
                  <p className="dds-accordion-answer">Да. Каждый элемент формируется строго по правилам вашей архитектуры: цвета, типографика, отступы, состояния компонентов. Ручная проверка соответствия не требуется. Контроль встроен на уровне системы.</p>
                </div>
              </div>
            </div>
            <div className="dds-accordion-col">
              <div className="dds-accordion-item">
                <input type="checkbox" id="dds-faq-4" className="dds-accordion-state" />
                <label className="dds-accordion-head" htmlFor="dds-faq-4">
                  <p className="dds-accordion-question">В чем отличие от универсальных систем на базе искусственного интеллекта?</p>
                  <span className="dds-accordion-icon"><img src="/assets/images/c2663c497fb468e1.webp" alt="" /></span>
                </label>
                <div className="dds-accordion-panel">
                  <p className="dds-accordion-answer">Универсальные решения гибкие, но нестабильные в применении бренд-правил. Наша платформа строит интерфейсы в рамках корпоративной архитектуры, с учетом бизнес-логики и требований безопасности. Генерация — управляемая, а не случайная.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="cta dds-cta dds-launch" id="cta">
          <div className="dds-launch-dust" aria-hidden={true}>
            <img className="dds-launch-dust--d" src="/assets/images/c3714c375a04149c.webp" alt="" />
            <img className="dds-launch-dust--t" src="/assets/images/f38670cf14e4b7dd.webp" alt="" />
            <img className="dds-launch-dust--m" src="/assets/images/a4285c4b0717be2b.webp" alt="" />
          </div>
          <div className="dds-launch-shine" aria-hidden={true}></div>
          <div className="dds-launch-content">
            <div className="dds-launch-intro">
              <h2 className="dds-launch-title">
                <span className="dds-launch-title-desktop">Профессиональные материалы в&nbsp;фирменном стиле<br/>за&nbsp;минуты, а&nbsp;не&nbsp;дни</span>
                <span className="dds-launch-title-responsive">Профессиональные материалы в&nbsp;фирменном стиле за&nbsp;минуты, а&nbsp;не&nbsp;дни</span>
              </h2>
              <p className="dds-launch-subtitle">Выстройте маркетинг в единый поток — от первой идеи до финального взаимодействия с клиентом.</p>
            </div>
            <div className="dds-launch-actions">
              <a className="dds-launch-btn" href="#cta">
                <span className="dds-launch-btn-text">Начать сейчас</span>
              </a>
            </div>
          </div>
        </AnimatedSection>

        <section className="footer dds-footer" id="footer">
          <div className="dds-footer-top">
            <div className="dds-footer-brand">
              <a className="dds-footer-logo" href="/" aria-label="Снэпбилд">
                <img src="/assets/images/582db07d8ccd60da.svg" alt="Снэпбилд" width="153" height="22" />
              </a>
              <p className="dds-footer-tagline">Платформа, где все создается в рамках вашего бренда и дизайн-системы</p>
            </div>
            <nav className="dds-footer-links" aria-label="Подвал">
              <div className="dds-footer-col">
                <p className="dds-footer-col-title">Навигация</p>
                <div className="dds-footer-list">
                  <a className="dds-footer-link" href="#process"><span>Продукт</span></a>
                  <a className="dds-footer-link" href="#process"><span>Возможности</span></a>
                  <a className="dds-footer-link" href="#features"><span>Безопасность</span></a>
                  <a className="dds-footer-link" href="#roadmap"><span>Роадмап</span></a>
                  <a className="dds-footer-link" href="#faq"><span>Частые вопросы</span></a>
                </div>
              </div>
              <div className="dds-footer-col">
                <p className="dds-footer-col-title">Документация</p>
                <div className="dds-footer-list">
                  <a className="dds-footer-link" href="#privacy" target="_blank" rel="noopener noreferrer"><span>Политика конфиденциальности</span></a>
                  <a className="dds-footer-link" href="#faq"><span>FAQ</span></a>
                </div>
              </div>
              <div className="dds-footer-col">
                <p className="dds-footer-col-title">Контакты</p>
                <div className="dds-footer-list">
                  <a className="dds-footer-link" href="https://t.me/ochen_darya" target="_blank" rel="noopener noreferrer">Запросить демо</a>
                  <a className="dds-footer-link" href="https://t.me/snapbuild" target="_blank" rel="noopener noreferrer"><span>Telegram</span></a>
                  <a className="dds-footer-link dds-footer-email-mobile" href="mailto:demo@example.com">demo@example.com</a>
                </div>
              </div>
            </nav>
          </div>
          <div className="dds-footer-legal">
            <p className="dds-footer-copyright">© Сгенерировано в Снэпбилде. Все права защищены.</p>
            <a className="dds-footer-email" href="mailto:demo@example.com">demo@example.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}
