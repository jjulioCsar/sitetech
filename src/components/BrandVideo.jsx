import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, X } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import { createPortal } from 'react-dom';
import { useLanguage } from '../context/LanguageContext';

const BrandVideo = () => {
    const { t } = useLanguage();
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = '2BJR2voLv2k';
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    // Handle Escape key
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') setIsPlaying(false);
    };

    return (
        <SectionWrapper id="video" fluid={true}>
            <div style={{ padding: '0', background: 'white' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '60px 24px' }}>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: 'clamp(300px, 50vw, 700px)',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: '#000' // Base preta enquanto carrega o iframe
                        }}
                        onClick={() => setIsPlaying(true)}
                    >
                        {/* Background Video Iframe */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '150%', // Alarga o player 
                            height: '150%', // Estica para cortar as tarjas pretas padrão (pillarbox e letterbox) do YT
                            transform: 'translate(-50%, -50%)',
                            pointerEvents: 'none', // Remove interações do mouse para o clique vazar pro div pai
                            zIndex: 0
                        }}>
                            <iframe
                                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1&modestbranding=1`}
                                title="Background Video"
                                style={{ width: '100%', height: '100%', border: 'none' }}
                                allow="autoplay; encrypted-media"
                            />
                        </div>

                        {/* Dark Overlay Wrapper */}
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            background: 'rgba(0, 0, 0, 0.45)', // Ligeiramente mais escuro para o texto ler bem sobre o vídeo claro
                            transition: 'background 0.3s',
                            zIndex: 1
                        }} className="video-overlay" />

                        {/* Interactive Center Button Group */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                zIndex: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '15px'
                            }}
                        >
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                style={{
                                    width: '100px',
                                    height: '80px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.5))'
                                }}
                            >
                                <Clapperboard size={80} strokeWidth={1} />
                            </motion.div>
                            <h3 style={{
                                color: 'white',
                                fontWeight: 800,
                                fontSize: '1.5rem',
                                letterSpacing: '1px',
                                textShadow: '0 4px 10px rgba(0,0,0,0.8)'
                            }}>
                                {t('video.title')}
                            </h3>
                            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', marginTop: '10px', textShadow: '0 2px 5px rgba(0,0,0,0.8)' }}>
                                {t('video.desc')}
                            </p>
                        </motion.div>
                    </div>

                    {/* Modal do YouTube de Tela Cheia */}
                    {createPortal(
                        <AnimatePresence>
                            {isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={() => setIsPlaying(false)}
                                    style={{
                                        position: 'fixed',
                                        top: 0, left: 0, right: 0, bottom: 0,
                                        backgroundColor: 'rgba(0,0,0,0.95)',
                                        zIndex: 9999999,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '20px'
                                    }}
                                >
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setIsPlaying(false); }}
                                        style={{
                                            position: 'absolute',
                                            top: '30px', right: '30px',
                                            background: 'rgba(255,255,255,0.1)',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: '50%',
                                            width: '50px', height: '50px',
                                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                                            cursor: 'pointer',
                                            zIndex: 10
                                        }}
                                        aria-label={t('video.aria_close')}
                                    >
                                        <X size={28} />
                                    </button>

                                    <motion.div
                                        initial={{ scale: 0.8 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0.8 }}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            width: '100%',
                                            maxWidth: '1200px',
                                            aspectRatio: '16/9',
                                            background: 'black',
                                            borderRadius: '20px',
                                            overflow: 'hidden',
                                            boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
                                        }}
                                    >
                                        <iframe
                                            width="100%"
                                            height="100%"
                                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
                                            title={t('video.iframe_title')}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>,
                        document.body
                    )}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default BrandVideo;
