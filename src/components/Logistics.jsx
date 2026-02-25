import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Truck, Warehouse, MapPin, Box, Globe as GlobeIcon, Instagram, Linkedin, Mail } from 'lucide-react';
import mapaBrasilImg from '../assets/mapa-brasil-oficial.webp';
import { useLanguage } from '../context/LanguageContext';

import fleetImg from '../assets/team/caminhoes.webp';
import { useState } from 'react';

const ImageWithFade = ({ src, alt, style }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {!loaded && (
                <div
                    className="skeleton-shimmer"
                    style={{
                        position: 'absolute',
                        top: 0, left: 0, right: 0, bottom: 0,
                        borderRadius: style?.borderRadius || '20px',
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
                transition={{ duration: 0.6 }}
                loading="lazy"
                decoding="async"
                style={{ ...style, visibility: loaded ? 'visible' : 'hidden' }}
            />
        </div>
    );
};

const Logistics = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="logistica" fluid={true}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                style={{
                    background: 'white',
                    padding: '80px 0 0',
                    position: 'relative'
                }}
            >
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <header style={{ marginBottom: '40px', textAlign: 'left', maxWidth: '1000px' }}>
                        <span style={{ color: 'var(--color-brand-green)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 800, fontSize: '0.9rem' }}>
                            {t('logistics.badge')}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginTop: '20px', color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                            {t('logistics.title')}
                        </h2>
                    </header>

                    <div className="flex-responsive" style={{ gap: '40px', alignItems: 'center', marginBottom: '80px' }}>
                        {/* Info Cards */}
                        <div style={{ display: 'grid', gap: '40px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Box size={30} color="var(--color-brand-blue-dark)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--color-brand-blue-dark)', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>{t('logistics.storage_title')}</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.5 }}>
                                        {t('logistics.storage_desc')}
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <GlobeIcon size={30} color="var(--color-brand-blue-dark)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--color-brand-blue-dark)', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>{t('logistics.dist_title')}</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.5 }}>
                                        {t('logistics.dist_desc')}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Brazil Map Side */}
                        <div style={{ position: 'relative', height: 'clamp(400px, 50vw, 750px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <ImageWithFade
                                src={mapaBrasilImg}
                                alt="Mapa do Brasil"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 20px 40px rgba(11, 57, 146, 0.15))',
                                    transform: 'scale(1.05)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* FULL WIDTH FLEET SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                style={{ background: 'var(--color-brand-blue-dark)', padding: '80px 0' }}
            >
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div className="flex-responsive" style={{ gap: '60px', alignItems: 'center', color: 'white' }}>
                        <div style={{ flex: 1.1 }}>
                            <div style={{ marginBottom: '40px' }}>
                                <span style={{
                                    color: 'var(--color-brand-green)',
                                    fontWeight: 800,
                                    textTransform: 'uppercase',
                                    letterSpacing: '3px',
                                    fontSize: '0.9rem',
                                    display: 'block',
                                    marginBottom: '10px'
                                }}>
                                    {t('logistics.own_fleet_label')}
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                    fontFamily: 'var(--font-heading)',
                                    color: 'white'
                                }}>
                                    {t('logistics.own_fleet_title')}
                                </h2>
                            </div>

                            <div style={{
                                fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
                                opacity: 0.9,
                                lineHeight: 1.7,
                                display: 'grid',
                                gap: '20px',
                                maxWidth: '650px'
                            }}>
                                <p dangerouslySetInnerHTML={{ __html: t('logistics.own_fleet_p1') }} />
                                <p>{t('logistics.own_fleet_p2')}</p>
                                <p style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--color-brand-green)',
                                    marginTop: '10px'
                                }}>
                                    {t('logistics.own_fleet_highlight')}
                                </p>
                            </div>
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            style={{
                                flex: 1,
                                height: 'clamp(350px, 45vw, 550px)',
                                borderRadius: '40px',
                                overflow: 'hidden',
                                boxShadow: '0 40px 80px rgba(0,0,0,0.4)',
                                position: 'relative'
                            }}
                        >
                            <ImageWithFade
                                src={fleetImg}
                                alt="Frota Techplast"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'brightness(1.05) contrast(1.1)'
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

export default Logistics;
