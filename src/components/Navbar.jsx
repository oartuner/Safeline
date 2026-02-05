import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'de', label: 'DE', flag: '🇩🇪' }
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const currentLang = languages.find(l => l.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem('language', code);
    setIsLangOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo">
          <span className="logo-safe">SAFE</span><span className="logo-line">LINE</span>
          <p className="logo-sub">LOJİSTİK</p>
        </a>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>{t('nav.home')}</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>{t('nav.about')}</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>{t('nav.services')}</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>{t('nav.contact')}</a></li>
          <li><a href="#contact" className="btn-nav-cta" onClick={() => setIsMenuOpen(false)}>{t('nav.quote')}</a></li>
        </ul>

        <div className="nav-actions">
          <div className="lang-switcher">
            <button className="lang-btn" onClick={() => setIsLangOpen(!isLangOpen)}>
              <span>{currentLang.flag}</span>
              <span>{currentLang.label}</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {isLangOpen && (
              <div className="lang-dropdown">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    className={`lang-option ${lang.code === i18n.language ? 'active' : ''}`}
                    onClick={() => changeLanguage(lang.code)}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .navbar {
          position: fixed;
          top: 0; left: 0;
          width: 100%;
          z-index: 1000;
          padding: 1.2rem 0;
          transition: var(--transition);
          background: transparent;
        }

        .navbar.scrolled {
          padding: 0.8rem 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow);
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          line-height: 1;
        }

        .logo-safe {
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          color: var(--primary);
        }

        .logo-line {
          font-family: 'Outfit', sans-serif;
          font-weight: 400;
          font-size: 1.5rem;
          color: var(--secondary);
        }

        .logo-sub {
          width: 100%;
          font-size: 0.5rem;
          letter-spacing: 0.4rem;
          color: var(--text-muted);
          margin-top: 2px;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2.5rem;
        }

        .nav-links a {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-main);
          letter-spacing: 0.05rem;
          position: relative;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: var(--secondary);
          transition: var(--transition);
        }

        .nav-links a:hover { color: var(--secondary); }
        .nav-links a:hover::after { width: 100%; }

        .btn-nav-cta {
          background: var(--secondary) !important;
          color: white !important;
          padding: 0.7rem 1.4rem !important;
          border-radius: 6px;
          box-shadow: 0 4px 12px var(--secondary-glow);
        }

        .btn-nav-cta::after { display: none !important; }

        .btn-nav-cta:hover {
          background: var(--secondary-light) !important;
          transform: translateY(-2px);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .lang-switcher {
          position: relative;
        }

        .lang-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: var(--bg-alt);
          border: 1px solid var(--border-light);
          padding: 0.5rem 0.8rem;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-main);
        }

        .lang-btn:hover {
          border-color: var(--secondary);
        }

        .lang-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 0.5rem;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 8px;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
          min-width: 100px;
        }

        .lang-option {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          width: 100%;
          padding: 0.6rem 1rem;
          background: none;
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--text-main);
          text-align: left;
        }

        .lang-option:hover {
          background: var(--bg-alt);
        }

        .lang-option.active {
          background: rgba(13, 148, 136, 0.1);
          color: var(--secondary);
        }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
        }

        .menu-toggle span {
          width: 24px; height: 2px;
          background: var(--primary);
          transition: var(--transition);
        }

        .menu-toggle.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
        .menu-toggle.active span:nth-child(2) { opacity: 0; }
        .menu-toggle.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

        @media (max-width: 992px) {
          .menu-toggle { display: flex; }

          .nav-links {
            position: fixed;
            top: 0; right: 0;
            width: 80%; max-width: 320px;
            height: 100vh;
            background: white;
            flex-direction: column;
            justify-content: center;
            gap: 2rem;
            transform: translateX(100%);
            transition: var(--transition);
            box-shadow: var(--shadow-xl);
          }

          .nav-links.open { transform: translateX(0); }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
