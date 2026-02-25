import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Users, Package, Map, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const StrategicPillars = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="strategy" fluid={true}>
            <div style={{ background: 'white', padding: '80px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>

                    {/* SECTION: NÚMEROS E PERFORMANCE */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            {t('pillars.badge')}
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-brand-blue-dark)', marginTop: '20px', fontWeight: 900, lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                            {t('pillars.title')}
                        </h2>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '20px',
                        }}
                    >
                        {/* Stats Card 1 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                            }}
                            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                            style={{
                                background: 'white',
                                color: 'var(--color-brand-blue-dark)',
                                padding: '40px 30px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                cursor: 'default'
                            }}
                        >
                            <Users size={32} style={{ marginBottom: '20px', opacity: 0.2 }} />
                            <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1 }}>+ 600</div>
                            <div style={{ opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', marginTop: '10px' }}>{t('pillars.clients')}</div>
                        </motion.div>

                        {/* Stats Card 2 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.1 } }
                            }}
                            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                            style={{
                                background: 'var(--color-brand-blue-dark)',
                                color: 'white',
                                padding: '40px 30px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 10px 30px rgba(11, 57, 146, 0.1)',
                                cursor: 'default'
                            }}
                        >
                            <Package size={32} style={{ marginBottom: '20px', opacity: 0.3 }} />
                            <div style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 900, lineHeight: 1 }}>200.000.000</div>
                            <div style={{ opacity: 0.7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', marginTop: '10px' }}>{t('pillars.packaging')}</div>
                        </motion.div>

                        {/* Stats Card 3 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.2 } }
                            }}
                            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                            style={{
                                background: 'white',
                                color: 'var(--color-brand-blue-dark)',
                                padding: '40px 30px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                border: '1px solid rgba(0,0,0,0.05)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                cursor: 'default'
                            }}
                        >
                            <Map size={32} style={{ marginBottom: '20px', opacity: 0.2 }} />
                            <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1 }}>+ 300</div>
                            <div style={{ opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', marginTop: '10px' }}>{t('pillars.cities')}</div>
                        </motion.div>

                        {/* Stats Card 4 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, scale: 0.95 },
                                visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3 } }
                            }}
                            whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                            style={{
                                background: 'var(--color-brand-blue-dark)',
                                color: 'white',
                                padding: '40px 30px',
                                borderRadius: '24px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 10px 30px rgba(11, 57, 146, 0.1)',
                                cursor: 'default'
                            }}
                        >
                            <Globe size={32} style={{ marginBottom: '20px', opacity: 0.3 }} />
                            <div style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 900, lineHeight: 1 }}>+ 18</div>
                            <div style={{ opacity: 0.7, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.75rem', marginTop: '10px' }}>{t('pillars.states')}</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default StrategicPillars;
