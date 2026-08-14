'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`header dds-header dds-main ${isScrolled ? 'is-scrolled' : ''}`} id="header">
      <input 
        className="dds-main-toggle" 
        id="dds-main-toggle" 
        type="checkbox" 
        checked={isMenuOpen}
        onChange={toggleMenu}
        aria-hidden={true} 
      />
      <div className="dds-main-bar">
        <a className="dds-main-logo" href="/" aria-label="Снэпбилд">
          <img src="/assets/images/582db07d8ccd60da.svg" alt="Снэпбилд" width="153" height="22" />
        </a>
        <nav className="dds-main-nav" aria-label="Основная навигация">
          <a className="dds-main-link" href="#process" onClick={() => setIsMenuOpen(false)}>Продукт</a>
          <a className="dds-main-link" href="#use-cases" onClick={() => setIsMenuOpen(false)}>Возможности</a>
          <a className="dds-main-link" href="#features" onClick={() => setIsMenuOpen(false)}>Безопасность</a>
          <a className="dds-main-link" href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
        </nav>
        <div className="dds-main-actions">
          <a className="dds-btn dds-btn--l dds-btn--secondary dds-main-demo" href="#cta" onClick={() => setIsMenuOpen(false)}>Начать сейчас</a>
          <label 
            className="dds-main-burger" 
            htmlFor="dds-main-toggle" 
            role="button" 
            tabIndex={0} 
            aria-controls="dds-main-menu" 
            aria-expanded={isMenuOpen}
            aria-label="Открыть меню"
            onClick={toggleMenu}
          >
            <span className="dds-main-burger-icon"></span>
          </label>
        </div>
      </div>
      <nav 
        className={`dds-main-menu ${isMenuOpen ? '' : 'dds-main-menu-hidden'}`} 
        id="dds-main-menu" 
        aria-label="Мобильная навигация" 
        aria-hidden={!isMenuOpen}
      >
        <a className="dds-main-menu-link" href="#use-cases" onClick={() => setIsMenuOpen(false)}>Возможности</a>
        <a className="dds-main-menu-link" href="#process" onClick={() => setIsMenuOpen(false)}>Продукт</a>
        <a className="dds-main-menu-link" href="#features" onClick={() => setIsMenuOpen(false)}>Безопасность</a>
        <a className="dds-main-menu-link" href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</a>
        <a className="dds-btn dds-btn--l dds-btn--secondary" href="#cta" onClick={() => setIsMenuOpen(false)}>Начать сейчас</a>
      </nav>
    </section>
  );
}
