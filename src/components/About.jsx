import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../data/siteData';

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="about-grid">
          <div className="about-visual">
            <div className="image-main">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" alt="Logistics" />
              <div className="experience-badge">
                <span className="number">20<sup>+</sup></span>
                <span className="text">YIL</span>
              </div>
            </div>
            <div className="floating-card">
              <div className="fc-icon">🌍</div>
              <div className="fc-text">
                <strong>150+ Acente</strong>
                <span>Global Ağ</span>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="section-tag">{t('about.tag')}</span>
            <h2 className="section-title">{t('about.title')}</h2>
            <p className="lead">{SITE_DATA.about.description}</p>

            <div className="mv-cards">
              <div className="mv-card">
                <span className="mv-icon">🎯</span>
                <h4>{t('about.mission_title')}</h4>
                <p>{SITE_DATA.about.mission}</p>
              </div>
              <div className="mv-card">
                <span className="mv-icon">🚀</span>
                <h4>{t('about.vision_title')}</h4>
                <p>{SITE_DATA.about.vision}</p>
              </div>
            </div>

            <div className="values-section">
              <h4>{t('about.values_title')}</h4>
              <div className="values-grid">
                {SITE_DATA.about.values.map((val, i) => (
                  <span key={i} className="value-tag">{val}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="policies-grid">
          <div className="policy-card">
            <span className="policy-icon">✅</span>
            <h3>{t('about.quality_title')}</h3>
            <p>{SITE_DATA.policies.quality}</p>
          </div>
          <div className="policy-card">
            <span className="policy-icon">🤝</span>
            <h3>{t('about.satisfaction_title')}</h3>
            <p>{SITE_DATA.policies.satisfaction}</p>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 5rem;
          align-items: center;
          margin-bottom: 5rem;
        }

        .about-visual {
          position: relative;
        }

        .image-main {
          position: relative;
        }

        .image-main img {
          width: 100%;
          height: 450px;
          object-fit: cover;
          border-radius: 16px;
          box-shadow: var(--shadow-lg);
        }

        .experience-badge {
          position: absolute;
          bottom: -20px; right: -20px;
          background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 12px 32px var(--secondary-glow);
        }

        .experience-badge .number {
          font-family: 'Outfit', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: white;
          line-height: 1;
        }

        .experience-badge .number sup { font-size: 1.2rem; }

        .experience-badge .text {
          display: block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.9);
          margin-top: 0.3rem;
        }

        .floating-card {
          position: absolute;
          top: 20px; left: -30px;
          background: white;
          border: 1px solid var(--border-light);
          padding: 1rem 1.2rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          box-shadow: var(--shadow);
          animation: float 4s ease-in-out infinite;
        }

        .fc-icon { font-size: 1.5rem; }

        .fc-text strong {
          display: block;
          font-size: 0.9rem;
          color: var(--primary);
        }

        .fc-text span {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .lead {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }

        .mv-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .mv-card {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 1.2rem;
          transition: var(--transition);
        }

        .mv-card:hover {
          border-color: var(--secondary);
        }

        .mv-icon {
          font-size: 1.3rem;
          margin-bottom: 0.5rem;
          display: block;
        }

        .mv-card h4 {
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: var(--secondary);
          margin-bottom: 0.5rem;
        }

        .mv-card p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .values-section h4 {
          font-size: 0.8rem;
          letter-spacing: 1px;
          color: var(--primary);
          margin-bottom: 1rem;
        }

        .values-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .value-tag {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          padding: 0.4rem 0.8rem;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--text-muted);
          transition: var(--transition);
        }

        .value-tag:hover {
          border-color: var(--secondary);
          color: var(--secondary);
        }

        .policies-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .policy-card {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 2rem;
          transition: var(--transition);
        }

        .policy-card:hover {
          border-color: var(--success);
          box-shadow: var(--shadow);
        }

        .policy-icon {
          font-size: 1.8rem;
          margin-bottom: 1rem;
          display: block;
        }

        .policy-card h3 {
          font-size: 0.9rem;
          letter-spacing: 1px;
          color: var(--success);
          margin-bottom: 0.8rem;
        }

        .policy-card p {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        @media (max-width: 992px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .experience-badge { right: 10px; bottom: -15px; }
          .floating-card { left: 10px; }
          .policies-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 576px) {
          .mv-cards { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default About;
