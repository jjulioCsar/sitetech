import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { useLanguage } from '../context/LanguageContext';

const MarketContext = () => {
    const { t } = useLanguage();

    return (
        <SectionWrapper id="dna" fluid={true}>
            <div style={{
                padding: '80px 0',
                background: '#f8fafc',
                width: '100%'
            }}>
                <div className="container" style={{
                    maxWidth: 'var(--container-width)',
                    margin: '0 auto',
                    padding: '0 24px'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}
                    >
                        {/* Text Side */}
                        <span style={{
                            color: 'var(--color-brand-blue-dark)',
                            fontWeight: 700,
                            letterSpacing: '4px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '20px',
                            fontSize: '0.9rem',
                            opacity: 0.8
                        }}>
                            {t('market.badge')}
                        </span>
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            color: 'var(--color-brand-blue-dark)',
                            fontWeight: 900,
                            marginBottom: '30px',
                            lineHeight: 1.1,
                            fontFamily: 'var(--font-heading)'
                        }}>
                            {t('market.title')}
                        </h2>

                        <p
                            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.5, color: '#475569', margin: '0 auto' }}
                            dangerouslySetInnerHTML={{ __html: t('market.description') }}
                        />
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MarketContext;
