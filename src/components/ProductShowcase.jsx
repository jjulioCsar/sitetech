import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Package, Shield, Truck, Droplets, FlaskConical, Filter } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { useLanguage } from '../context/LanguageContext';

const alimenticiaContext = import.meta.glob('../assets/arquivos/ALIMENTICIA/*.{jpg,jpeg,png,webp}', { eager: true });
const alimenticiaImages = Object.values(alimenticiaContext).map((mod) => mod.default);

const farmacosContext = import.meta.glob('../assets/arquivos/FARMACOS/*.{jpg,jpeg,png,webp}', { eager: true });
const farmacosImages = Object.values(farmacosContext).map((mod) => mod.default);

const saneantesContext = import.meta.glob('../assets/arquivos/SANEANTES/*.{jpg,jpeg,png,webp}', { eager: true });
const saneantesImages = Object.values(saneantesContext).map((mod) => mod.default);

const preformasContext = import.meta.glob('../assets/arquivos/PREFORMAS/*.{jpg,jpeg,png,webp}', { eager: true });
const preformasImages = Object.values(preformasContext).map((mod) => mod.default);

const ProductShowcase = () => {
    const { t } = useLanguage();
    const [lineIndex, setLineIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const categories = [
        {
            title: t('products.categories.alimenticia.title'),
            subtitle: t('products.categories.alimenticia.subtitle'),
            description: t('products.categories.alimenticia.description'),
            images: alimenticiaImages
        },
        {
            title: t('products.categories.farmacos.title'),
            subtitle: t('products.categories.farmacos.subtitle'),
            description: t('products.categories.farmacos.description'),
            images: farmacosImages
        },
        {
            title: t('products.categories.saneantes.title'),
            subtitle: t('products.categories.saneantes.subtitle'),
            description: t('products.categories.saneantes.description'),
            images: saneantesImages
        },
        {
            title: t('products.categories.preformas.title'),
            subtitle: t('products.categories.preformas.subtitle'),
            description: t('products.categories.preformas.description'),
            images: preformasImages
        }
    ];

    const handleNextLine = () => {
        setLineIndex((prev) => (prev + 1) % categories.length);
        setImageIndex(0);
    };

    const handlePrevLine = () => {
        setLineIndex((prev) => (prev - 1 + categories.length) % categories.length);
        setImageIndex(0);
    };

    const handleNextImage = () => {
        setImageIndex((prev) => (prev + 1) % categories[lineIndex].images.length);
    };

    const handlePrevImage = () => {
        setImageIndex((prev) => (prev - 1 + categories[lineIndex].images.length) % categories[lineIndex].images.length);
    };

    return (
        <SectionWrapper id="produtos" fluid={true}>
            <div style={{ padding: '0', background: 'white' }}>
                <div style={{ maxWidth: '100%', margin: '0', padding: '80px 24px' }}>

                    {/* Header Tabs/Toggle */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '60px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map((cat, i) => (
                            <motion.button
                                key={i}
                                onClick={() => { setLineIndex(i); setImageIndex(0); }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    padding: '15px 30px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: lineIndex === i ? 'var(--color-brand-blue-dark)' : 'white',
                                    color: lineIndex === i ? 'white' : 'var(--color-brand-blue-dark)',
                                    fontWeight: 800,
                                    fontSize: '0.85rem',
                                    letterSpacing: '1px',
                                    cursor: 'pointer',
                                    transition: 'background 0.3s, color 0.3s',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                                    textTransform: 'uppercase'
                                }}
                            >
                                {cat.title}
                            </motion.button>
                        ))}
                    </div>

                    {/* MAIN GALLERY DISPLAY */}
                    <div className="flex-responsive" style={{
                        gap: '60px',
                        alignItems: 'center',
                        background: '#f8fafc',
                        padding: '80px 40px',
                        minHeight: '600px',
                        position: 'relative',
                        borderRadius: '40px'
                    }}>

                        {/* Info Side */}
                        <div style={{ zIndex: 10, maxWidth: '600px' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={lineIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    style={{ flex: 1 }}
                                >
                                    <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.9rem', display: 'block', marginBottom: '10px' }}>
                                        {categories[lineIndex].subtitle}
                                    </span>
                                    <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '25px', fontFamily: 'var(--font-heading)', color: 'var(--color-brand-blue-dark)' }}>
                                        {categories[lineIndex].title}
                                    </h2>
                                    <p style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)', lineHeight: 1.6, color: '#475569', marginBottom: '40px', maxWidth: '600px' }}>
                                        {categories[lineIndex].description}
                                    </p>

                                    {/* Line Switcher Buttons */}
                                    <div style={{ display: 'flex', gap: '15px' }}>
                                        <button onClick={handlePrevLine} style={btnNavStyle}><ChevronLeft size={24} /></button>
                                        <button onClick={handleNextLine} style={btnNavStyle}><ChevronRight size={24} /></button>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Image/Gallery Side */}
                        <div style={{
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 'clamp(400px, 60vh, 650px)',
                            width: '100%',
                            padding: '20px'
                        }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${lineIndex}-${imageIndex}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    <ImageWithFade
                                        src={categories[lineIndex].images[imageIndex]}
                                        alt={categories[lineIndex].title}
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Internal Image Navigation */}
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            display: 'flex',
                            gap: '20px',
                            alignItems: 'center',
                            zIndex: 20
                        }}>
                            <button onClick={handlePrevImage} style={imgNavStyle}><ChevronLeft size={20} /></button>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#94a3b8', whiteSpace: 'nowrap' }}>
                                {imageIndex + 1} / {categories[lineIndex].images.length}
                            </div>
                            <button onClick={handleNextImage} style={imgNavStyle}><ChevronRight size={20} /></button>
                        </div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

const btnNavStyle = {
    width: '60px', height: '60px', borderRadius: '15px',
    background: 'white', border: '1px solid #e2e8f0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', transition: 'all 0.2s',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
};

const imgNavStyle = {
    width: '45px', height: '45px', borderRadius: '50%',
    background: 'white', border: '1px solid #e2e8f0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
};

const ImageWithFade = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {!loaded && (
                <div
                    className="skeleton-shimmer"
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        borderRadius: '24px',
                        zIndex: 1
                    }}
                />
            )}
            <motion.img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                loading="lazy"
                decoding="async"
                style={{
                    maxWidth: '120%',
                    maxHeight: '120%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))',
                    visibility: loaded ? 'visible' : 'hidden'
                }}
            />
        </div>
    );
};

export default ProductShowcase;
