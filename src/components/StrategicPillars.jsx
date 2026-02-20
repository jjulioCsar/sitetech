import { motion } from 'framer-motion';
import { Factory, Award, PenTool, ShieldCheck } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const StrategicPillars = () => {
    return (
        <SectionWrapper id="strategy" fluid={true}>
            <div style={{ background: 'white', padding: '120px 0' }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>

                    {/* SECTION: NÚMEROS E PERFORMANCE */}
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                            Tecnologia e Know-how
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', color: 'var(--color-brand-blue-dark)', marginTop: '20px', fontWeight: 900, lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                            O que nos coloca à frente
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
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                            gap: '30px',
                            alignItems: 'stretch'
                        }}
                    >
                        {/* Text Block */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                            style={{
                                background: '#f8fafc',
                                padding: '40px 30px',
                                borderRadius: '30px',
                                border: '1px solid #e2e8f0',
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <p style={{ fontSize: '1.2rem', lineHeight: 1.5, color: '#334155', margin: 0 }}>
                                Operamos em um moderno parque industrial de mais de <strong>5.000 m²</strong>, equipado com maquinários 100% automatizados, garantindo uma capacidade produtiva de <strong>150 milhões de embalagens ao ano</strong>.
                            </p>
                        </motion.div>

                        {/* Card 1 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                            style={{
                                background: 'var(--color-brand-blue-dark)',
                                color: 'white',
                                padding: '50px 30px',
                                borderRadius: '30px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 20px 50px rgba(11, 57, 146, 0.15)'
                            }}
                        >
                            <Factory size={50} style={{ marginBottom: '20px', opacity: 0.3 }} />
                            <div style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1 }}>5.000 m²</div>
                            <div style={{ opacity: 0.8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginTop: '10px' }}>Parque Industrial</div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                            }}
                            style={{
                                background: 'var(--color-brand-green)',
                                color: 'var(--color-brand-blue-dark)',
                                padding: '50px 30px',
                                borderRadius: '30px',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                boxShadow: '0 20px 50px rgba(214, 221, 54, 0.15)'
                            }}
                        >
                            <div style={{ fontSize: 'clamp(3.5rem, 6vw, 4.5rem)', fontWeight: 900, lineHeight: 1 }}>150 Mi</div>
                            <div style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', marginTop: '10px' }}>Embalagens / Ano</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default StrategicPillars;
