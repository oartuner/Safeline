import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../assets/logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="logo footer-logo">
            <img src={logo} alt="Safeline Logistics" className="logo-img" />
          </div>
          <p className="brand-desc">{t('footer.description')}</p>
          <div className="social-links">
            <a href="#" className="social-link" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" /></svg>
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 011.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772 4.915 4.915 0 01-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" /></svg>
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h4>{t('footer.services')}</h4>
          <ul>
            <li><a href="#services">{t('footer.sea')}</a></li>
            <li><a href="#services">{t('footer.land')}</a></li>
            <li><a href="#services">{t('footer.air')}</a></li>
            <li><a href="#services">{t('footer.rail')}</a></li>
            <li><a href="#services">{t('footer.project')}</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>{t('footer.corporate')}</h4>
          <ul>
            <li><a href="#about">{t('footer.about_us')}</a></li>
            <li><a href="#about">{t('footer.mission_vision')}</a></li>
            <li><a href="#about">{t('footer.quality_policy')}</a></li>
            <li><a href="#contact">{t('contact.tag')}</a></li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h4>{t('footer.newsletter_title')}</h4>
          <p>{t('footer.newsletter_desc')}</p>
          <div className="newsletter-form">
            <input type="email" placeholder={t('footer.newsletter_placeholder')} />
            <button className="btn-newsletter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© 2026 Safeline Logistics. {t('footer.copyright')}</p>
          <div className="legal-links">
            <a href="#">{t('footer.privacy')}</a>
            <a href="#">{t('footer.cookies')}</a>
            <a href="#">{t('footer.terms')}</a>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background: var(--primary);
          color: white;
          padding-top: 5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.5fr;
          gap: 3rem;
          padding-bottom: 4rem;
        }

        .logo {
          display: flex;
          flex-wrap: wrap;
          align-items: baseline;
          margin-bottom: 1.2rem;
        }

        .footer-logo {
          background: white;
          padding: 0.8rem 1.2rem;
          border-radius: 8px;
          display: inline-block;
        }

        .logo-img {
          height: 50px;
          object-fit: contain;
        }

        .brand-desc {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 0.8rem;
        }

        .social-link {
          width: 38px; height: 38px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          transition: var(--transition);
        }

        .social-link svg { width: 16px; height: 16px; }

        .social-link:hover {
          border-color: var(--secondary);
          color: var(--secondary);
          transform: translateY(-3px);
        }

        .footer-links h4, .footer-newsletter h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
          margin-bottom: 1.2rem;
        }

        .footer-links ul li {
          margin-bottom: 0.6rem;
        }

        .footer-links ul li a {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          transition: var(--transition);
        }

        .footer-links ul li a:hover {
          color: var(--secondary-light);
          padding-left: 4px;
        }

        .footer-newsletter p {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.85rem;
          line-height: 1.6;
          margin-bottom: 1.2rem;
        }

        .newsletter-form {
          display: flex;
          gap: 0.5rem;
        }

        .newsletter-form input {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.7rem 1rem;
          color: white;
          font-size: 0.85rem;
        }

        .newsletter-form input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .newsletter-form input:focus {
          outline: none;
          border-color: var(--secondary);
        }

        .btn-newsletter {
          background: var(--secondary);
          padding: 0 1rem;
          border-radius: 8px;
          color: white;
        }

        .btn-newsletter:hover {
          background: var(--secondary-light);
          transform: translateY(-2px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem 0;
        }

        .bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          font-size: 0.8rem;
        }

        .legal-links {
          display: flex;
          gap: 1.5rem;
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.4);
          transition: var(--transition);
        }

        .legal-links a:hover { color: var(--secondary-light); }

        @media (max-width: 992px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
        }

        @media (max-width: 576px) {
          .footer-grid { grid-template-columns: 1fr; }
          .bottom-content { flex-direction: column; gap: 1rem; text-align: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
