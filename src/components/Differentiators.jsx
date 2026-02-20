import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Factory, Cpu, Box, FlaskConical } from 'lucide-react';

const Differentiators = () => {
    const cards = [
        {
            title: "5.000 m²",
            desc: "Parque Industrial",
            icon: <Factory />
        },
        {
            title: "100%",
            desc: "Automatizado",
            icon: <Cpu />
        },
        {
            title: "150 Mi",
            desc: "Produção/Ano",
            icon: <Box />
        },
        {
            title: "Sopro",
            desc: "Tecnologia PET/PEAD",
            icon: <FlaskConical />
        }
    ];

    return (
        <SectionWrapper id="diferenciais" className="bg-surface">
            <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '80px 24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Background Blur */}
                <div style={{
                    position: 'absolute',
                    top: '-20%', left: '-10%',
                    width: '500px', height: '500px',
                    background: 'radial-gradient(circle, rgba(12, 98, 170, 0.05) 0%, transparent 70%)',
                    borderRadius: '50%'
                }} />

                <div className="flex-responsive" style={{ gap: '60px', alignItems: 'flex-start' }}>

                    {/* Headline */}
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-brand-blue-dark)', marginBottom: '20px', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
                            Infraestrutura<br />Robusta
                        </h2>
                        <p className="lead" style={{ maxWidth: '400px', fontSize: '1.2rem', color: '#64748b' }}>
                            Maquinário 100% automatizado para garantir escala sem perder precisão.
                        </p>
                    </div>

                    {/* Grid Stats */}
                    <div style={{
                        flex: 1.5,
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '24px',
                        width: '100%'
                    }}>
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                style={{
                                    padding: '24px',
                                    background: 'white',
                                    borderRadius: '24px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.03)',
                                    border: '1px solid #f1f5f9'
                                }}
                            >
                                <div style={{
                                    color: 'var(--color-accent)',
                                    marginBottom: '15px'
                                }}>
                                    {card.icon}
                                </div>
                                <h3 style={{ fontSize: '1.8rem', marginBottom: '8px', color: 'var(--color-brand-blue-dark)', fontWeight: 800 }}>
                                    {card.title}
                                </h3>
                                <p style={{ color: '#64748b', fontWeight: 500, fontSize: '0.9rem', margin: 0 }}>{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Differentiators;
