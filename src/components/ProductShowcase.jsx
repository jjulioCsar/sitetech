import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

// --- LINHA ALIMENTICIA IMAGES ---
import imgAlim1 from '../assets/arquivos/ALIMENTICIA/PEAD YOGURT - 180ML.jpg';
import imgAlim2 from '../assets/arquivos/ALIMENTICIA/PET 28 - 300ML.jpg';
import imgAlim3 from '../assets/arquivos/ALIMENTICIA/PET KEETCHUP - 370ML.jpg';
import imgAlim4 from '../assets/arquivos/ALIMENTICIA/PET KETCHUP - 200ML.jpg';
import imgAlim5 from '../assets/arquivos/ALIMENTICIA/PET KETCHUP 200ML.jpg';
import imgAlim6 from '../assets/arquivos/ALIMENTICIA/PET MEL - 200ML.jpg';
import imgAlim7 from '../assets/arquivos/ALIMENTICIA/PET MEL - 500ML.jpg';
import imgAlim8 from '../assets/arquivos/ALIMENTICIA/PET PIMENTA.jpg';
import imgAlim9 from '../assets/arquivos/ALIMENTICIA/PET YOGURT - 900ML.jpg';
import imgAlim10 from '../assets/arquivos/ALIMENTICIA/PET YOGURT - BATALHA.jpg';

// --- PREFORMAS IMAGES ---
import imgPref1 from '../assets/arquivos/PREFORMAS/_DSC0068.jpg';
import imgPref2 from '../assets/arquivos/PREFORMAS/_DSC0069.jpg';
import imgPref3 from '../assets/arquivos/PREFORMAS/_DSC0073.jpg';
import imgPref4 from '../assets/arquivos/PREFORMAS/_DSC0074.jpg';
import imgPref5 from '../assets/arquivos/PREFORMAS/_DSC0077.jpg';
import imgPref6 from '../assets/arquivos/PREFORMAS/_DSC0079.jpg';
import imgPref7 from '../assets/arquivos/PREFORMAS/_DSC0081.jpg';
import imgPref8 from '../assets/arquivos/PREFORMAS/_DSC0083.jpg';
import imgPref9 from '../assets/arquivos/PREFORMAS/_DSC0086.jpg';
import imgPref10 from '../assets/arquivos/PREFORMAS/_DSC0087.jpg';

const ProductShowcase = () => {
    const [lineIndex, setLineIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const categories = [
        {
            title: "LINHA ALIMENTÍCIA",
            subtitle: "Segurança e Conservação",
            description: "Garantimos a total integridade do seu produto com embalagens PET e PEAD certificadas. Ideal para lácteos, molhos, mel e condimentos, oferecendo barreira protetora contra contaminações.",
            images: [imgAlim1, imgAlim2, imgAlim3, imgAlim4, imgAlim5, imgAlim6, imgAlim7, imgAlim8, imgAlim9, imgAlim10]
        },
        {
            title: "PREFORMAS",
            subtitle: "Tecnologia de Injeção",
            description: "Produzimos preformas de alta precisão com gramaturas e bocais variados, prontas para o seu processo de sopro. Qualidade técnica que otimiza sua linha de produção.",
            images: [imgPref1, imgPref2, imgPref3, imgPref4, imgPref5, imgPref6, imgPref7, imgPref8, imgPref9, imgPref10]
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
                <div style={{ maxWidth: '100%', margin: '0', padding: '120px 24px' }}>

                    {/* Header Tabs/Toggle */}
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '60px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => { setLineIndex(i); setImageIndex(0); }}
                                style={{
                                    padding: '12px 25px',
                                    borderRadius: '50px',
                                    border: 'none',
                                    background: i === lineIndex ? 'var(--color-brand-blue-dark)' : '#f1f5f9',
                                    color: i === lineIndex ? 'white' : '#64748b',
                                    fontSize: '0.9rem',
                                    fontWeight: 800,
                                    cursor: 'pointer',
                                    transition: 'all 0.3s'
                                }}
                            >
                                {cat.title}
                            </button>
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
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 30 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <span style={{
                                        color: 'var(--color-brand-green)',
                                        fontWeight: 800,
                                        textTransform: 'uppercase',
                                        letterSpacing: '2px',
                                        fontSize: '0.9rem',
                                        display: 'block',
                                        marginBottom: '15px'
                                    }}>
                                        {categories[lineIndex].subtitle}
                                    </span>
                                    <h3 style={{
                                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                                        fontWeight: 900,
                                        color: 'var(--color-brand-blue-dark)',
                                        marginBottom: '20px',
                                        lineHeight: 1.1,
                                        fontFamily: 'var(--font-heading)'
                                    }}>
                                        {categories[lineIndex].title}
                                    </h3>
                                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: '#475569', lineHeight: 1.5, marginBottom: '30px' }}>
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
                                    animate={{ opacity: 1, scale: 1.15 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                >
                                    <img
                                        src={categories[lineIndex].images[imageIndex]}
                                        alt="Product"
                                        loading="lazy"
                                        decoding="async"
                                        style={{
                                            maxWidth: '120%',
                                            maxHeight: '120%',
                                            objectFit: 'contain',
                                            filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))'
                                        }}
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Internal Image Navigation */}
                            <div style={{
                                position: 'absolute',
                                bottom: '-30px',
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

export default ProductShowcase;
