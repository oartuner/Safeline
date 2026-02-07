import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import logo from '../assets/logo.webp';
import { Linkedin, Instagram, Twitter, Send } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-20">
      <div className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.5fr] gap-12 pb-16">

        {/* Brand Column */}
        <div className="flex flex-col">
          <div className="flex flex-wrap items-baseline mb-5">
            <div className="bg-white px-5 py-3 rounded-lg inline-block">
              <img src={logo} alt="Safeline Logistics" className="h-[50px] object-contain" style={{ height: '50px', width: 'auto' }} />
            </div>
          </div>
          <p className="text-white/60 text-sm leading-relaxed mb-6">{t('footer.description')}</p>
          <div className="flex gap-3">
            <a href="#" className="w-[38px] h-[38px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 transition-all hover:border-secondary hover:text-secondary hover:-translate-y-1" aria-label="LinkedIn">
              <Linkedin size={16} />
            </a>
            <a href="#" className="w-[38px] h-[38px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 transition-all hover:border-secondary hover:text-secondary hover:-translate-y-1" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href="#" className="w-[38px] h-[38px] bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-white/60 transition-all hover:border-secondary hover:text-secondary hover:-translate-y-1" aria-label="Twitter">
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] font-bold text-white mb-5">{t('footer.services')}</h4>
          <ul>
            <li className="mb-2.5"><a href="#services" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.sea')}</a></li>
            <li className="mb-2.5"><a href="#services" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.land')}</a></li>
            <li className="mb-2.5"><a href="#services" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.air')}</a></li>
            <li className="mb-2.5"><a href="#services" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.rail')}</a></li>
            <li className="mb-2.5"><a href="#services" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.project')}</a></li>
          </ul>
        </div>

        {/* Corporate Links */}
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] font-bold text-white mb-5">{t('footer.corporate')}</h4>
          <ul>
            <li className="mb-2.5"><a href="#about" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.about_us')}</a></li>
            <li className="mb-2.5"><a href="#about" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.mission_vision')}</a></li>
            <li className="mb-2.5"><a href="#about" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('footer.quality_policy')}</a></li>
            <li className="mb-2.5"><a href="#contact" className="text-white/60 text-[0.85rem] transition-all hover:text-secondary-light hover:pl-1">{t('contact.tag')}</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col">
          <h4 className="text-[0.95rem] font-bold text-white mb-5">{t('footer.newsletter_title')}</h4>
          <p className="text-white/60 text-[0.85rem] leading-relaxed mb-5">{t('footer.newsletter_desc')}</p>
          <div className="flex gap-2">
            <input type="email" placeholder={t('footer.newsletter_placeholder')} className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white text-[0.85rem] placeholder-white/40 focus:outline-none focus:border-secondary" />
            <button className="bg-secondary px-4 rounded-lg text-white hover:bg-secondary-light hover:-translate-y-0.5 transition-all">
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white/5 py-6">
        <div className="container mx-auto px-8 flex flex-col sm:flex-row justify-between items-center text-white/40 text-xs gap-4 sm:gap-0">
          <p>© 2026 Safeline Logistics. {t('footer.copyright')}</p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 transition-all hover:text-secondary-light">{t('footer.privacy')}</a>
            <a href="#" className="text-white/40 transition-all hover:text-secondary-light">{t('footer.cookies')}</a>
            <a href="#" className="text-white/40 transition-all hover:text-secondary-light">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
