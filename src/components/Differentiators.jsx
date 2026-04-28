import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Factory, Cpu, Box, FlaskConical } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Differentiators = () => {
    const { t } = useLanguage();
    const cards = [
        {
            title: t('differentiators.cards.area.title'),
            desc: t('differentiators.cards.area.desc'),
            icon: <Factory />
        },
        {
            title: t('differentiators.cards.automation.title'),
            desc: t('differentiators.cards.automation.desc'),
            icon: <Cpu />
        },
        {
            title: t('differentiators.cards.production.title'),
            desc: t('differentiators.cards.production.desc'),
            icon: <Box />
        },
        {
            title: t('differentiators.cards.tech.title'),
            desc: t('differentiators.cards.tech.desc'),
            icon: <FlaskConical />
        }
    ];

    return (
        <SectionWrapper id="diferenciais" className="bg-surface">
            <div style={{
                background: 'var(--color-surface)',
                borderRadius: 'var(--radius-lg)',
                padding: '40px 24px',
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

                <div className="flex-responsive" style={{ gap: '40px', alignItems: 'flex-start' }}>

                    {/* Headline */}
                    <div style={{ flex: 1 }}>
                        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--color-brand-blue-dark)', marginBottom: '20px', fontWeight: 900, fontFamily: 'var(--font-heading)', whiteSpace: 'pre-line' }}>
                            {t('differentiators.title')}
                        </h2>
                        <p className="lead" style={{ maxWidth: '400px', fontSize: '1.2rem', color: '#64748b' }}>
                            {t('differentiators.subtitle')}
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
