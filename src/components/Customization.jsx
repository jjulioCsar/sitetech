import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Palette, PenTool, Layers } from 'lucide-react';

import moldesImg from '../assets/moldes.webp';
import rotulosImg from '../assets/rotulos.jpg';

const Customization = () => {
    return (
        <SectionWrapper
            id="personalizacao"
            fluid={true}
        >
            <div style={{ background: 'var(--color-brand-blue-dark)', padding: '100px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>

                    {/* SECTION 1: ROTULAGEM */}
                    <div className="flex-responsive" style={{
                        gap: '60px',
                        alignItems: 'center',
                        marginBottom: '100px'
                    }}>
                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                flex: 1,
                                height: 'clamp(300px, 45vw, 600px)',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                            }}
                        >
                            <img
                                src={rotulosImg}
                                alt="Tipos de Rótulos"
                                loading="lazy"
                                decoding="async"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: 1.2 }}
                        >
                            <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem' }}>
                                Diferencial Industrial
                            </span>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'white', marginTop: '20px', marginBottom: '30px', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                                Rotulagem Premium
                            </h2>
                            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                                Sempre pensando na comodidade dos clientes a <strong>TECHPLAST</strong> oferta em seu processo de produção o serviço de rotulação podendo ela ser termoencolhível ou <strong>BOPP</strong>.
                            </p>
                        </motion.div>
                    </div>

                    {/* SECTION 2: MOLDES */}
                    <div className="flex-responsive" style={{
                        gap: '60px',
                        alignItems: 'center',
                        flexDirection: 'row-reverse' // This will naturally be handled by flex-responsive's column stacking order if we aren't careful, but since we manually set flex-direction in CSS, we should follow standard order or add a helper
                    }}>
                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{ flex: 1.2 }}
                        >
                            <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem' }}>
                                Exclusividade & Design
                            </span>
                            <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'white', marginTop: '20px', marginBottom: '30px', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                                Desenvolvimento de Moldes
                            </h2>
                            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>
                                Se sua embalagem ideal ainda não está aqui a <strong>TECHPLAST</strong> oferta aos seus parceiros comerciais o serviço de exclusividade, desenvolvendo a embalagem de acordo com as especificações e necessidades do cliente.
                            </p>
                        </motion.div>

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            style={{
                                flex: 1,
                                height: 'clamp(300px, 45vw, 600px)',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: '40px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.3)'
                            }}
                        >
                            <img
                                src={moldesImg}
                                alt="Desenvolvimento de Moldes"
                                loading="lazy"
                                decoding="async"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </motion.div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Customization;
