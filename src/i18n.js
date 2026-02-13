import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import de from './locales/de.json';
import tr from './locales/tr.json';

const resources = {
    en: { translation: en },
    de: { translation: de },
    tr: { translation: tr }
};

const supportedLanguages = ['en', 'de', 'tr'];

// Check localStorage first — user's manual choice always wins
const savedLanguage = localStorage.getItem('language');
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

// Clean up invalid saved values
if (savedLanguage && !supportedLanguages.includes(savedLanguage)) {
    localStorage.setItem('language', 'en');
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: initialLanguage,
        fallbackLng: 'en',
        supportedLngs: supportedLanguages,
        interpolation: {
            escapeValue: false
        }
    });

// Geo-based language detection — only on first visit (no saved preference)
if (!savedLanguage) {
    fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            const countryCode = data?.country_code;
            let detectedLang = 'en'; // default

            if (countryCode === 'DE' || countryCode === 'AT' || countryCode === 'CH') {
                detectedLang = 'de'; // Germany, Austria, Switzerland → German
            } else if (countryCode === 'TR') {
                detectedLang = 'tr'; // Türkiye → Turkish
            }

            if (detectedLang !== 'en') {
                i18n.changeLanguage(detectedLang);
                localStorage.setItem('language', detectedLang);
            }
        })
        .catch(() => {
            // Silently fail — keep English as default
        });
}

export default i18n;
