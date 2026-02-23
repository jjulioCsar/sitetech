import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(() => {
        // Try to get from localStorage or default to 'pt'
        return localStorage.getItem('techplast_lang') || 'pt';
    });

    useEffect(() => {
        localStorage.setItem('techplast_lang', lang);
        document.documentElement.lang = lang;
    }, [lang]);

    const t = (path) => {
        const keys = path.split('.');
        let result = translations[lang];

        for (const key of keys) {
            if (result && result[key]) {
                result = result[key];
            } else {
                return path; // Fallback to key name if not found
            }
        }

        return result;
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
