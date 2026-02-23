import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import moldesImg from '../assets/moldes.webp';
import rotulosImg from '../assets/rotulos.png';
import { useState } from 'react';

const Customization = () => {
    return (
        <SectionWrapper id="diferenciais">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="container"
                style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}
            >
                {/* SECTION 1: ROTULAGEM */}
                <div className="flex-responsive" style={{
                    gap: '40px',
                    alignItems: 'center',
                    marginBottom: '100px',
                    background: 'white',
                    borderRadius: '40px',
                    padding: '40px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                }}>
                    <motion.div
                        style={{ flex: 1 }}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--color-brand-blue-dark)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Personalização Premium</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', margin: '20px 0', fontFamily: 'var(--font-heading)' }}>Rotulagem Integrada</h2>
                        <p style={{ fontSize: '1.2rem', color: '#44546a', lineHeight: 1.6 }}>Oferecemos a aplicação de rótulos (sleeve ou adesivo) em linha, garantindo que seu produto saia da fábrica pronto para gôndola. Elimine etapas logísticas e reduza seus custos de produção.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{ flex: 1.2, height: 'clamp(300px, 40vw, 500px)', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                    >
                        <ImageWithFade src={rotulosImg} alt="Rotulagem Premium" />
                    </motion.div>
                </div>

                {/* SECTION 2: MOLDES */}
                <div className="flex-responsive" style={{
                    gap: '40px',
                    alignItems: 'center',
                    padding: '40px',
                    flexDirection: 'row-reverse'
                }}>
                    <motion.div
                        style={{ flex: 1 }}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span style={{ color: 'var(--color-brand-blue-dark)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.85rem' }}>Desenvolvimento</span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', margin: '20px 0', fontFamily: 'var(--font-heading)' }}>Moldes Exclusivos</h2>
                        <p style={{ fontSize: '1.2rem', color: '#44546a', lineHeight: 1.6 }}>Nossa engenharia trabalha na criação de designs exclusivos para sua marca. Desenvolvemos moldes personalizados que unem estética premium à máxima performance técnica no sopro.</p>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{ flex: 1.2, height: 'clamp(300px, 40vw, 500px)', borderRadius: '30px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
                    >
                        <ImageWithFade src={moldesImg} alt="Desenvolvimento de Moldes" />
                    </motion.div>
                </div>
            </motion.div>
        </SectionWrapper>
    );
};

const ImageWithFade = ({ src, alt }) => {
    const [loaded, setLoaded] = useState(false);
    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            {!loaded && (
                <div className="skeleton-shimmer" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} />
            )}
            <motion.img
                src={src}
                alt={alt}
                onLoad={() => setLoaded(true)}
                initial={{ opacity: 0 }}
                animate={{ opacity: loaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
        </div>
    );
};

export default Customization;
