import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
    const [isZoomed, setIsZoomed] = useState(false);

    // Lock body scroll when zoomed and handle Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsZoomed(false);
            }
        };

        if (isZoomed) {
            document.body.style.overflow = 'hidden';
            document.documentElement.classList.add('lenis-stopped'); // Force lenis to stop scrolling
            window.addEventListener('keydown', handleKeyDown);
        } else {
            document.body.style.overflow = '';
            document.documentElement.classList.remove('lenis-stopped');
            window.removeEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = '';
            document.documentElement.classList.remove('lenis-stopped');
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isZoomed]);

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

                    {/* Zoom Modal (Lightbox) */}
                    {createPortal(
                        <AnimatePresence>
                            {isZoomed && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsZoomed(false)}
                                    style={{
                                        position: 'fixed',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        backgroundColor: 'rgba(0, 0, 0, 0.95)',
                                        zIndex: 999999, // Ensure it's above header (999) and everything else
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        cursor: 'zoom-out',
                                        backdropFilter: 'blur(10px)'
                                    }}
                                >
                                    <button
                                        className="lightbox-close-btn"
                                        onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                                        style={{
                                            position: 'absolute',
                                            top: '30px',
                                            right: '30px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '50%',
                                            width: '50px',
                                            height: '50px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            color: 'white',
                                            fontSize: '24px',
                                            cursor: 'pointer',
                                            zIndex: 1000000,
                                            transition: 'all 0.3s'
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
                                        aria-label="Fechar zoom"
                                    >
                                        ✕
                                    </button>

                                    {/* Lightbox internal navigation */}
                                    <button
                                        className="lightbox-nav-btn left"
                                        onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                        style={{
                                            position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)',
                                            ...lightboxBtnStyle
                                        }}
                                    >
                                        <ChevronLeft size={32} />
                                    </button>

                                    <button
                                        className="lightbox-nav-btn right"
                                        onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                        style={{
                                            position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)',
                                            ...lightboxBtnStyle
                                        }}
                                    >
                                        <ChevronRight size={32} />
                                    </button>

                                    <motion.img
                                        key={imageIndex} // Adicionado key para forçar re-render na navegação webp
                                        src={categories[lineIndex].images[imageIndex]}
                                        alt={categories[lineIndex].title}
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                                        onClick={(e) => e.stopPropagation()} // Prevent close when clicking image itself
                                        style={{
                                            maxHeight: '90vh',
                                            maxWidth: '90vw',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.5))',
                                            cursor: 'default'
                                        }}
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                    )}

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
                                className="premium-hover-btn"
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
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    overflow: 'hidden'
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
                                    <div
                                        onClick={() => setIsZoomed(true)}
                                        style={{ width: '100%', height: '100%', cursor: 'zoom-in', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        <ImageWithFade
                                            src={categories[lineIndex].images[imageIndex]}
                                            alt={categories[lineIndex].title}
                                        />
                                    </div>
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
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    color: 'var(--color-brand-blue-dark)'
};

const imgNavStyle = {
    width: '45px', height: '45px', borderRadius: '50%',
    background: 'white', border: '1px solid #e2e8f0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    cursor: 'pointer', boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    color: 'var(--color-brand-blue-dark)'
};

const lightboxBtnStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    cursor: 'pointer',
    zIndex: 10000,
    transition: 'all 0.3s'
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
                    visibility: loaded ? 'visible' : 'hidden',
                    pointerEvents: 'auto'
                }}
            />
        </div>
    );
};

export default ProductShowcase;
