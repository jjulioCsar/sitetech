import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Truck, Warehouse, MapPin } from 'lucide-react';
import mapaBrasilImg from '../assets/mapa-brasil.png';

import fleetImg from '../assets/team/caminhoes.webp';

const Logistics = () => {
    return (
        <SectionWrapper id="logistica" fluid={true}>
            <div style={{
                background: 'white',
                padding: '120px 0 0',
                position: 'relative'
            }}>
                <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <header style={{ marginBottom: '40px', textAlign: 'left', maxWidth: '1000px' }}>
                        <span style={{ color: 'var(--color-brand-green)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 800, fontSize: '0.9rem' }}>
                            Poder Logístico & Distribuição Nacional
                        </span>
                        <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, marginTop: '20px', color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
                            Eficiência que atravessa fronteiras.
                        </h2>
                    </header>

                    <div className="flex-responsive" style={{ gap: '80px', alignItems: 'center', marginBottom: '100px' }}>
                        {/* Info Cards */}
                        <div style={{ display: 'grid', gap: '40px', flex: 1 }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Warehouse size={30} color="var(--color-brand-blue-dark)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--color-brand-blue-dark)', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Armazenagem Estratégica</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.5 }}>
                                        Possuímos uma unidade fabril com ampla área de estocagem inteligente, garantindo despacho imediato.
                                    </p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ background: '#f1f5f9', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <MapPin size={30} color="var(--color-brand-blue-dark)" />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: 'clamp(1.4rem, 3vw, 1.8rem)', fontWeight: 800, color: 'var(--color-brand-blue-dark)', marginBottom: '10px', fontFamily: 'var(--font-heading)' }}>Distribuição Nacional</h3>
                                    <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.5 }}>
                                        Como um dos principais hubs de embalagens do Nordeste, nossa logística atende todo o Brasil com agilidade.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Brazil Map Side */}
                        <div style={{ position: 'relative', height: 'clamp(400px, 50vw, 750px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <img
                                src={mapaBrasilImg}
                                alt="Mapa do Brasil"
                                loading="lazy"
                                decoding="async"
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0 20px 40px rgba(11, 57, 146, 0.15))',
                                    transform: 'scale(1.1)'
                                }}
                            />
                            {/* Maceió Indicator overlay */}
                            <div style={{ position: 'absolute', top: '38%', right: '12%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--color-brand-green)', borderRadius: '50%', boxShadow: '0 0 20px var(--color-brand-green)' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FULL WIDTH FLEET SECTION */}
            <div style={{ background: 'var(--color-brand-blue-dark)', padding: '100px 0' }}>
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
                                    Logística Própria
                                </span>
                                <h2 style={{
                                    fontSize: 'clamp(2.5rem, 5vw, 3.8rem)',
                                    fontWeight: 900,
                                    lineHeight: 1.1,
                                    fontFamily: 'var(--font-heading)',
                                    color: 'white'
                                }}>
                                    Excelência em cada quilômetro.
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
                                <p>
                                    Entendemos que a embalagem é o último passo antes do seu produto chegar ao consumidor, e o cumprimento de prazos é vital para o sucesso do seu negócio. Por isso, a <strong>Techplast</strong> não terceiriza a sua tranquilidade.
                                </p>
                                <p>
                                    Contamos com uma frota própria moderna e uma equipe de motoristas rigorosamente treinados, especializados no manuseio de produtos plásticos. Esse controle total sobre a distribuição nos permite garantir que cada pedido chegue à sua fábrica com integridade absoluta, sem avarias e rigorosamente dentro do cronograma combinado.
                                </p>
                                <p style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 700,
                                    color: 'var(--color-brand-green)',
                                    marginTop: '10px'
                                }}>
                                    Mais que uma entrega, oferecemos a segurança de que sua operação nunca irá parar.
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
                            <img
                                src={fleetImg}
                                alt="Frota Techplast"
                                loading="lazy"
                                decoding="async"
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
            </div>
        </SectionWrapper>
    );
};

export default Logistics;
