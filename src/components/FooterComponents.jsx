import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { Users, Phone, Mail, MapPin } from 'lucide-react';
import team1 from '../assets/team/COMERCIAL 1.JPG';
import team2 from '../assets/team/COMERCIAL 2.JPG';
import team3 from '../assets/team/COMERCIAL 3.JPG';


export const HumanCapital = () => {
    return (
        <section style={{ padding: '80px 0', background: 'white' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
                <div style={{ marginBottom: '60px' }}>
                    <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        Capital Humano
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, marginTop: '20px', fontFamily: 'var(--font-heading)' }}>
                        Inteligência por trás das máquinas.
                    </h2>
                    <p className="lead" style={{ maxWidth: '900px', margin: '30px auto 0', color: '#475569', fontSize: 'clamp(1rem, 2vw, 1.4rem)', lineHeight: 1.5 }}>
                        O nosso maior diferencial não é feito de plástico, mas de pessoas. A Techplast conta com uma equipe altamente capacitada, pronta para oferecer suporte integral desde o primeiro contato comercial até o desenvolvimento final do seu envase.
                    </p>
                </div>

                {/* PREMIUM TEAM GALLERY - RESPONSIVE LAYOUT */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gridAutoRows: 'clamp(300px, 40vw, 500px)',
                    gap: '24px',
                }}>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        style={{
                            gridColumn: 'span 1',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            background: '#f1f5f9'
                        }}
                    >
                        <img
                            src={team1}
                            alt="Equipe Comercial 1"
                            loading="lazy"
                            decoding="async"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 15%',
                                filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
                            }}
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            background: '#f1f5f9'
                        }}
                    >
                        <img
                            src={team2}
                            alt="Equipe Comercial 2"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%',
                                filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
                            }}
                        />
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                            background: '#f1f5f9'
                        }}
                    >
                        <img
                            src={team3}
                            alt="Equipe Comercial 3"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 30%',
                                filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export const Footer = () => {
    return (
        <footer style={{ background: 'var(--color-brand-blue-dark)', color: 'white', padding: '100px 0 60px' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="flex-responsive" style={{ gap: '40px', marginBottom: '60px', alignItems: 'flex-start' }}>
                    {/* Business Column */}
                    <div style={{ flex: 1.5 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Sobre Nós</h4>
                        <div style={{ display: 'grid', gap: '8px', opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.6 }}>
                            <p style={{ fontWeight: 700, color: 'white', marginBottom: '4px' }}>Techplast Industria e Comercio de Plasticos LTDA.</p>
                            <p>CNPJ: 06.143.647/0002-30</p>
                            <p>
                                Rua R, Recanto do Mainá, 664, Lote 20/21 Q9<br />
                                Cidade Universitária, Maceió/AL - CEP: 57073-489
                            </p>
                        </div>
                    </div>

                    {/* Links Column */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Navegação</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '12px' }}>
                            {['Empresa', 'Produtos', 'Diferenciais', 'Logística', 'Contato'].map(item => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace('í', 'i')}`} style={{ color: 'white', textDecoration: 'none', opacity: 0.6, fontSize: '0.95rem', transition: '0.3s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.6}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div style={{ flex: 1.5 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>Fale Conosco</h4>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.8 }}>
                                <Phone size={18} color="var(--color-brand-green)" />
                                <span style={{ fontSize: '0.95rem' }}>(82) 3374-2373 / (82) 99190-0900</span>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.8 }}>
                                <Mail size={18} color="var(--color-brand-green)" />
                                <a href="mailto:comercial@techplastembalagens.com.br" style={{ fontSize: '0.95rem', color: 'white', textDecoration: 'none' }}>comercial@techplastembalagens.com.br</a>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', opacity: 0.8 }}>
                                <MapPin size={18} color="var(--color-brand-green)" style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ fontSize: '0.95rem', lineHeight: 1.4 }}>www.techplastembalagens.com.br</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    paddingTop: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    textAlign: 'center'
                }}>
                    <p style={{ opacity: 0.4, fontSize: '0.9rem', margin: 0 }}>
                        © {new Date().getFullYear()}. Todos os direitos reservados.
                    </p>
                    <p style={{ opacity: 0.6, fontSize: '0.9rem', margin: 0 }}>
                        Desenvolvido por <a href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-480738260/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-brand-green)', fontWeight: 700, textDecoration: 'none' }}>Júlio César</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
