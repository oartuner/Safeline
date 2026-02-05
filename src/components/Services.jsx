import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../data/siteData';

const serviceIcons = {
  sea: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 17L6 20L12 14L18 20L21 17M5 12L12 5L19 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  land: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="7" width="18" height="10" rx="2" />
      <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
    </svg>
  ),
  air: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 16V8L12 4L3 8V16L12 20L21 16Z" strokeLinejoin="round" />
      <path d="M12 12L21 8M12 12V20M12 12L3 8" />
    </svg>
  ),
  rail: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4" width="16" height="14" rx="2" />
      <path d="M4 10H20M9 18L7 21M15 18L17 21M9 4V10M15 4V10" />
    </svg>
  ),
  project: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" strokeLinejoin="round" />
      <path d="M2 17L12 22L22 17M2 12L12 17L22 12" />
    </svg>
  )
};

const Services = () => {
  const { t } = useTranslation();

  // Fetch lists as objects/arrays
  const sectors = t('services.sectors_list', { returnObjects: true }) || [];

  // Merge structural data (icons) with i18n data
  const services = SITE_DATA.services.map(s => {
    const i18nData = t(`services.items.${s.id}`, { returnObjects: true });
    return {
      ...s,
      ...i18nData // title, features array
    };
  });

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">{t('services.tag')}</span>
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.subtitle')}</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className="service-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="card-icon">{serviceIcons[service.id]}</div>
              <h3 className="card-title">{service.title}</h3>
              <ul className="card-features">
                {service.features && service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <a href="#contact" className="card-link">
                <span>{t('services.cta')}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <div className="sectors-section">
          <div className="sectors-header">
            <span className="section-tag">{t('services.sectors_tag')}</span>
            <h2 className="section-title">{t('services.sectors_title')}</h2>
          </div>
          <div className="sectors-grid">
            {sectors.map((sector, i) => (
              <div key={i} className="sector-card">{sector}</div>
            ))}
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .services-section {
          background: var(--bg-light);
        }

        .section-header, .sectors-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }

        .service-card {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 16px;
          padding: 2rem;
          transition: var(--transition);
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .service-card:hover {
          border-color: var(--secondary);
          box-shadow: var(--shadow-lg);
          transform: translateY(-6px);
        }

        .card-icon {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, var(--secondary) 0%, var(--secondary-light) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          box-shadow: 0 6px 16px var(--secondary-glow);
        }

        .card-icon svg {
          width: 26px; height: 26px;
          color: white;
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: var(--primary);
        }

        .card-features {
          margin-bottom: 1.5rem;
        }

        .card-features li {
          color: var(--text-muted);
          font-size: 0.85rem;
          padding: 0.4rem 0;
          border-bottom: 1px solid var(--border-light);
          padding-left: 1rem;
          position: relative;
        }

        .card-features li::before {
          content: '→';
          position: absolute;
          left: 0;
          color: var(--secondary);
          font-size: 0.75rem;
        }

        .card-features li:last-child { border-bottom: none; }

        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          color: var(--secondary);
          font-size: 0.85rem;
          font-weight: 600;
        }

        .card-link:hover { gap: 0.8rem; }

        .sectors-section {
          margin-top: 6rem;
        }

        .sectors-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.8rem;
        }

        .sector-card {
          background: white;
          border: 1px solid var(--border-light);
          padding: 0.8rem 1.5rem;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-main);
          letter-spacing: 1px;
          transition: var(--transition);
        }

        .sector-card:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: rgba(245, 158, 11, 0.05);
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Services;
