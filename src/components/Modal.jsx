import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Modal = ({ isOpen, onClose, title, content, icon, image, features = [] }) => {
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-primary/50 backdrop-blur-lg"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-2xl rounded-[2rem] shadow-2xl overflow-hidden z-10 my-8"
            onClick={e => e.stopPropagation()}
          >
            {/* Close Button - Always visible */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all z-30 border border-gray-100"
            >
              <X size={20} className="text-gray-600" />
            </button>

            {/* Image Section - Full width header */}
            {image && (
              <div className="relative w-full h-72 sm:h-80 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover object-top"
                />
                {/* Subtle gradient for smooth transition */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>
            )}

            {/* Content Section - Clean white background */}
            <div className={`relative bg-white ${image ? '-mt-8 rounded-t-[2rem] relative z-10' : 'pt-16'}`}>
              {/* Icon Badge */}
              <div className="flex justify-center">
                <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-xl shadow-primary/30 ${image ? '-mt-8' : ''}`}>
                  {icon ? React.cloneElement(icon, { size: 28 }) : <CheckCircle2 size={28} />}
                </div>
              </div>

              {/* Text Content Area */}
              <div className="px-6 sm:px-10 pt-6 pb-8">
                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-primary text-center leading-tight mb-6">
                  {title}
                </h3>

                {/* Separator Line */}
                <div className="w-16 h-1 bg-gradient-to-r from-secondary to-secondary-light mx-auto rounded-full mb-6" />

                {/* Body Content */}
                <div className="space-y-5">
                  {/* Plain text content */}
                  {content && !features?.length && (
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-center">
                      {content}
                    </p>
                  )}

                  {/* Feature list */}
                  {features && features.length > 0 && (
                    <div className="grid gap-3 max-h-[300px] overflow-y-auto pr-2">
                      {features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.04 }}
                          className="group flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-secondary/30 hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                          <div className="mt-0.5 p-1 rounded-full bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300 flex-shrink-0">
                            <CheckCircle2 size={14} />
                          </div>
                          <span className="text-gray-700 font-semibold text-sm sm:text-base leading-relaxed">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Footer CTA */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href="#contact"
                    onClick={onClose}
                    className="flex items-center justify-center gap-3 w-full py-4 px-6 bg-primary text-white rounded-xl font-bold text-sm sm:text-base tracking-wider uppercase hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/30 group"
                    style={{ color: '#FFFFFF' }}
                  >
                    <span style={{ color: '#FFFFFF' }}>{t('hero.cta2') || 'CONTACT US'}</span>
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" style={{ color: '#FFFFFF' }} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
