import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
    const { lang, setLang } = useLanguage();

    const flags = {
        pt: "https://flagcdn.com/w40/br.png",
        en: "https://flagcdn.com/w40/us.png"
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{
                position: 'fixed',
                top: '30px',
                right: '30px',
                zIndex: 2000,
                display: 'flex',
                gap: '12px',
                background: 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(10px)',
                padding: '8px',
                borderRadius: '50px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid rgba(0,0,0,0.05)'
            }}
        >
            {Object.entries(flags).map(([key, url]) => (
                <motion.button
                    key={key}
                    onClick={() => setLang(key)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        width: '35px',
                        height: '35px',
                        borderRadius: '50%',
                        border: lang === key ? '2px solid var(--color-brand-blue-dark)' : '2px solid transparent',
                        overflow: 'hidden',
                        cursor: 'pointer',
                        padding: 0,
                        background: 'none',
                        transition: '0.3s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src={url}
                        alt={key}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: lang !== key ? 'grayscale(0.5) opacity(0.7)' : 'none'
                        }}
                    />
                </motion.button>
            ))}
        </motion.div>
    );
};

export default LanguageSwitcher;
