import SectionWrapper from './ui/SectionWrapper';
import logoImg from '../assets/logo.png';

const MarketContext = () => {
    return (
        <SectionWrapper id="dna" fluid={true}>
            <div style={{
                padding: '120px 0',
                background: '#f8fafc',
                width: '100%'
            }}>
                <div className="container" style={{
                    maxWidth: 'var(--container-width)',
                    margin: '0 auto',
                    padding: '0 24px'
                }}>
                    <div className="flex-responsive" style={{
                        gap: '60px',
                        alignItems: 'center'
                    }}>
                        {/* Text Side */}
                        <div style={{ flex: 1.2 }}>
                            <span style={{
                                color: 'var(--color-brand-blue-dark)',
                                fontWeight: 700,
                                letterSpacing: '4px',
                                textTransform: 'uppercase',
                                display: 'block',
                                marginBottom: '20px',
                                fontSize: '0.9rem'
                            }}>
                                Apresentação Institucional
                            </span>
                            <h2 style={{
                                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                                color: 'var(--color-brand-blue-dark)',
                                fontWeight: 900,
                                marginBottom: '30px',
                                lineHeight: 1.1,
                                fontFamily: 'var(--font-heading)'
                            }}>
                                O DNA da Marca
                            </h2>

                            <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)', lineHeight: 1.5, color: '#475569', maxWidth: '800px' }}>
                                Nossa missão é oferecer soluções eficientes e personalizadas em embalagens, garantindo a total satisfação dos nossos clientes. A <strong>Techplast</strong> nasceu com o compromisso de proteger a integridade do seu produto por meio de materiais seguros, resistentes e sustentáveis.
                            </p>
                        </div>

                        {/* Logo Side */}
                        <div style={{
                            flex: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: '40px 0'
                        }}>
                            <img
                                src={logoImg}
                                alt="Techplast Logo"
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    maxWidth: '450px',
                                    height: 'auto',
                                    filter: 'drop-shadow(0 20px 40px rgba(11, 57, 146, 0.12))'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default MarketContext;
