import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const CookieConsent = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie_consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 3000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem('cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const declineCookies = () => {
        localStorage.setItem('cookie_consent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 md:p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                    {/* Icon & Text */}
                    <div className="flex items-start gap-4 flex-1">
                        <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0">
                            <Cookie className="text-primary" size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1">
                                {t('cookies.title') || 'Gizliliğinize Değer Veriyoruz'}
                            </h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {t('cookies.description') || 'Deneyiminizi geliştirmek için çerezleri kullanıyoruz. "Kabul Et"e tıklayarak çerez kullanımımızı onaylarsınız.'}
                            </p>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        <button
                            onClick={declineCookies}
                            className="flex-1 md:flex-none px-5 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-800 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            {t('cookies.decline') || 'Reddet'}
                        </button>
                        <button
                            onClick={acceptCookies}
                            className="flex-1 md:flex-none px-5 py-2.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors"
                        >
                            {t('cookies.accept') || 'Kabul Et'}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CookieConsent;
