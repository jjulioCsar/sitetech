import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';

const DNASection = () => {
    return (
        <SectionWrapper id="dna">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', padding: '100px 0' }}>

                {/* Text Side - Light Mode */}
                <div>
                    <span style={{ color: 'var(--color-brand-green)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                        DNA Industrial
                    </span>
                    <h2 style={{
                        color: 'var(--color-brand-blue-dark)',
                        lineHeight: 1.2,
                        marginBottom: '30px',
                        fontSize: '3rem',
                        fontWeight: 800
                    }}>
                        Alta Giro com<br />
                        <span style={{ color: 'var(--color-brand-blue-light)' }}>Precisão.</span>
                    </h2>

                    <div style={{ paddingLeft: '20px', borderLeft: '4px solid var(--color-brand-green)' }}>
                        <p style={{ marginBottom: '20px', fontSize: '1.2rem', color: '#1e293b' }}>
                            Oferecemos <strong>estabilidade estrutural</strong> e <strong>segurança de supply</strong>.
                        </p>
                        <p style={{ color: '#64748b', lineHeight: 1.6 }}>
                            Sua gôndola não pode parar. A Techplast entende a dinâmica do varejo e da indústria de volume. Entregamos embalagens que rodam suave na sua linha de envase e resistem à logística pesada do Brasil.
                        </p>
                    </div>
                </div>

                {/* Image Side - Simple Card */}
                <div style={{ position: 'relative' }}>
                    <div style={{
                        borderRadius: '12px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 50px rgba(11, 57, 146, 0.15)', // Blue Shadow
                        border: '1px solid #fff'
                    }}>
                        <img
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
                            alt="Production Line"
                            style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                    </div>
                </div>

            </div>
        </SectionWrapper>
    );
};

export default DNASection;
