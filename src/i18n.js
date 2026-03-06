// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
    en: {
        translation: {
            projects: 'Projects',
            about: 'About',
            contact: 'Contact',
            description: 'This is a simple translation example.',
        },
    },
    da: {
        // Danish translation
        translation: {
            projects: 'Projekter',
            about: 'Om mig',
            contact: 'Kontakt',
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'da', // Default language
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
