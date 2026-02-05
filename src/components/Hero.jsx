import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      <div className="container hero-content">
        <span className="hero-badge animate-fade-in">🌍 {t('hero.badge')}</span>
        <h1 className="hero-title animate-fade-in-delay-1">
          <span className="line-1">{t('hero.title1')}</span>
          <span className="line-2">{t('hero.title2')}</span>
        </h1>
        <p className="hero-description animate-fade-in-delay-2">
          {t('hero.description')}
        </p>
        <div className="hero-btns animate-fade-in-delay-3">
          <a href="#services" className="btn-primary">
            <span>{t('hero.cta1')}</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            <span>{t('hero.cta2')}</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">150+</span>
            <span className="stat-label">{t('hero.stat1')}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">{t('hero.stat2')}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">{t('hero.stat3')}</span>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 8rem 0 4rem;
          background: linear-gradient(135deg, var(--bg-white) 0%, var(--bg-alt) 100%);
          overflow: hidden;
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.5;
        }

        .shape-1 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(13, 148, 136, 0.15) 0%, transparent 70%);
          top: -15%; right: -10%;
        }

        .shape-2 {
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(30, 58, 95, 0.1) 0%, transparent 70%);
          bottom: 10%; left: -5%;
        }

        .shape-3 {
          width: 200px; height: 200px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.1) 0%, transparent 70%);
          top: 40%; left: 30%;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(13, 148, 136, 0.1);
          border: 1px solid rgba(13, 148, 136, 0.2);
          color: var(--secondary);
          padding: 0.6rem 1.2rem;
          border-radius: 50px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .line-1 {
          display: block;
          color: var(--primary);
        }

        .line-2 {
          display: block;
          color: var(--secondary);
        }

        .hero-description {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 600px;
          margin-bottom: 2.5rem;
          line-height: 1.8;
        }

        .hero-btns {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          margin-bottom: 4rem;
        }

        .hero-stats {
          display: inline-flex;
          align-items: center;
          gap: 2.5rem;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 1.5rem 2.5rem;
          box-shadow: var(--shadow);
        }

        .stat-item { text-align: center; }

        .stat-number {
          display: block;
          font-family: 'Outfit', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--secondary);
          line-height: 1;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
          margin-top: 0.4rem;
          display: block;
        }

        .stat-divider {
          width: 1px; height: 40px;
          background: var(--border-light);
        }

        @media (max-width: 768px) {
          .hero { padding-top: 7rem; }
          .hero-btns { flex-direction: column; }
          .hero-stats { flex-direction: column; gap: 1.5rem; padding: 1.5rem; }
          .stat-divider { width: 50px; height: 1px; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
