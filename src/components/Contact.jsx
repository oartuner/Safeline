import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Clock, ShieldCheck, FileCheck, Phone, ChevronDown, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';

const serviceKeys = ['sea', 'air', 'land', 'rail', 'project', 'warehouse'];

const Contact = () => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    origin: '',
    destination: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = t('contact.form_required');
    if (!form.company.trim()) errs.company = t('contact.form_required');
    if (!form.email.trim()) errs.email = t('contact.form_required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = t('contact.form_invalid_email');
    if (!form.service) errs.service = t('contact.form_required');
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    // Database connection will be added later
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', company: '', email: '', phone: '', service: '', origin: '', destination: '', details: '' });
      setShowMore(false);
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-gray-50 border rounded-lg px-4 py-3 text-sm text-gray-800 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:border-secondary placeholder:text-gray-400 ${errors[field] ? 'border-red-400 bg-red-50/30' : 'border-gray-200'}`;

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[50%] h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 rounded-full bg-secondary/10 text-secondary text-xs font-black tracking-[0.2em] mb-6 border border-secondary/20">
            {t('contact.tag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-primary mb-4 tracking-tight">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white border border-gray-100 rounded-2xl p-8 sm:p-10 shadow-lg shadow-gray-100/50"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Success Message */}
            {status === 'success' && (
              <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl p-4 mb-6 text-sm font-medium">
                <CheckCircle2 size={20} className="shrink-0" />
                <span>{t('contact.form_success')}</span>
              </div>
            )}

            {/* Error Message */}
            {status === 'error' && (
              <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm font-medium">
                <AlertCircle size={20} className="shrink-0" />
                <span>{t('contact.form_error')}</span>
              </div>
            )}

            {/* Required Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_name')} *</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} className={inputClass('name')} />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_company')} *</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} className={inputClass('company')} />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_email')} *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} className={inputClass('email')} />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_service')} *</label>
                <select name="service" value={form.service} onChange={handleChange} className={inputClass('service')}>
                  <option value="">{t('contact.form_select')}</option>
                  {serviceKeys.map(key => (
                    <option key={key} value={key}>{t(`services_bento.${key}.title`)}</option>
                  ))}
                </select>
                {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
              </div>
            </div>

            {/* Progressive Disclosure Toggle */}
            <button
              type="button"
              onClick={() => setShowMore(!showMore)}
              className="flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-primary transition-colors mb-4 mt-2"
            >
              <span>{showMore ? t('contact.less_details') : t('contact.more_details')}</span>
              <ChevronDown size={16} className={`transition-transform duration-200 ${showMore ? 'rotate-180' : ''}`} />
            </button>

            {/* Optional Fields — Progressive Disclosure */}
            {showMore && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_phone')}</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+49" className={inputClass('phone')} />
                  </div>
                  <div className="hidden sm:block" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_origin')}</label>
                    <input type="text" name="origin" value={form.origin} onChange={handleChange} placeholder={t('contact.form_origin_placeholder')} className={inputClass('origin')} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_destination')}</label>
                    <input type="text" name="destination" value={form.destination} onChange={handleChange} placeholder={t('contact.form_destination_placeholder')} className={inputClass('destination')} />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-[11px] font-bold tracking-wider text-gray-400 mb-1.5">{t('contact.form_details')}</label>
                  <textarea name="details" rows="3" value={form.details} onChange={handleChange} placeholder={t('contact.form_details_placeholder')} className={inputClass('details') + ' resize-none'} />
                </div>
              </motion.div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-white font-bold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm sm:text-base mt-2"
            >
              <span>{status === 'sending' ? t('contact.form_sending') : t('contact.form_submit')}</span>
              <Send size={18} className={status === 'sending' ? 'animate-pulse' : ''} />
            </button>
          </motion.form>

          {/* Trust Sidebar */}
          <motion.div
            className="space-y-6 lg:pt-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Trust Items */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-emerald-600" />
                </div>
                <span className="text-sm font-bold text-gray-700">{t('contact.trust_24h')}</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                  <FileCheck size={20} className="text-blue-600" />
                </div>
                <span className="text-sm font-bold text-gray-700">{t('contact.trust_no_obligation')}</span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-purple-600" />
                </div>
                <span className="text-sm font-bold text-gray-700">{t('contact.trust_secure')}</span>
              </div>
            </div>

            {/* Direct Contact */}
            <div className="border border-gray-100 rounded-xl p-6 bg-white">
              <p className="text-sm font-bold text-gray-500 mb-3">{t('contact.trust_call')}</p>
              <a href={`tel:${SITE_DATA.contact.phone}`} className="flex items-center gap-3 text-primary font-bold hover:text-secondary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-secondary/10 transition-colors">
                  <Phone size={18} className="text-primary group-hover:text-secondary transition-colors" />
                </div>
                <span>{SITE_DATA.contact.phone}</span>
              </a>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-400">{t('contact.email')}: {SITE_DATA.contact.email}</p>
              </div>
            </div>

            {/* Office Address */}
            <div className="border border-gray-100 rounded-xl p-6 bg-white">
              <p className="text-sm font-bold text-gray-500 mb-1">{t('contact.main_office')}</p>
              <p className="text-sm text-gray-600">{t('contact.address')}</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
