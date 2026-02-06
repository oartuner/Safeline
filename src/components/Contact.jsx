import React from 'react';
import { useTranslation } from 'react-i18next';
import { SITE_DATA } from '../data/siteData';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">{t('contact.tag')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <span className="info-icon">📍</span>
              <div className="info-content">
                <h4>{t('contact.main_office')}</h4>
                <p>{t('contact.address')}</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">🇰🇿</span>
              <div className="info-content">
                <h4>{t('contact.kz_office')}</h4>
                <p>{SITE_DATA.contact.kazakhstan}</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📞</span>
              <div className="info-content">
                <h4>{t('contact.phone')}</h4>
                <p>{SITE_DATA.contact.phone}</p>
                <p className="sub">Fax: {SITE_DATA.contact.fax}</p>
              </div>
            </div>

            <div className="info-card">
              <span className="info-icon">📧</span>
              <div className="info-content">
                <h4>{t('contact.email')}</h4>
                <p>{SITE_DATA.contact.email}</p>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>{t('contact.form_name')}</label>
                <input type="text" placeholder="..." />
              </div>
              <div className="form-group">
                <label>{t('contact.form_email')}</label>
                <input type="email" placeholder="..." />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>{t('contact.form_phone')}</label>
                <input type="tel" placeholder="+90" />
              </div>
              <div className="form-group">
                <label>{t('contact.form_service')}</label>
                <select>
                  <option value="">{t('contact.form_select')}</option>
                  {SITE_DATA.services.map(s => (
                    <option key={s.id} value={s.id}>{t(`services.items.${s.id}.title`)}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group full">
              <label>{t('contact.form_message')}</label>
              <textarea rows="5" placeholder="..."></textarea>
            </div>
            <button type="submit" className="btn-primary full-width">
              <span>{t('contact.form_submit')}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      <style jsx="true">{`
        .contact-section {
          background: white;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .info-card {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 12px;
          padding: 1.2rem;
          display: flex;
          gap: 1rem;
          transition: var(--transition);
        }

        .info-card:hover {
          border-color: var(--secondary);
          transform: translateX(5px);
        }

        .info-icon {
          font-size: 1.3rem;
          width: 44px; height: 44px;
          background: var(--bg-alt);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-content h4 {
          font-size: 0.85rem;
          color: var(--primary);
          margin-bottom: 0.2rem;
        }

        .info-content p {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        .info-content .sub {
          font-size: 0.75rem;
          opacity: 0.7;
        }

        .contact-form {
          background: white;
          border: 1px solid var(--border-light);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: var(--shadow);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group.full {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: var(--text-muted);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          border-radius: 8px;
          padding: 0.9rem 1rem;
          color: var(--text-dark);
          font-family: inherit;
          font-size: 0.95rem;
          transition: var(--transition);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--secondary);
          box-shadow: 0 0 0 3px var(--secondary-glow);
        }

        .form-group select {
          cursor: pointer;
        }

        .btn-primary.full-width {
          width: 100%;
          justify-content: center;
          padding: 1rem 2rem;
        }

        @media (max-width: 992px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Contact;
