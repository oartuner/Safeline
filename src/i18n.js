import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import de from './locales/de.json';

const resources = {
    en: { translation: en },
    de: { translation: de }
};

// Validate and clean up language selection
const supportedLanguages = ['en', 'de'];
const savedLanguage = localStorage.getItem('language');
const defaultLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';

// Clean up localStorage if invalid language is detected
if (savedLanguage && !supportedLanguages.includes(savedLanguage)) {
    localStorage.setItem('language', 'en');
}

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,
        fallbackLng: 'en',
        supportedLngs: supportedLanguages,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;

