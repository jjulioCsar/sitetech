import { motion } from 'framer-motion';
import { Users, Phone, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';
import team1 from '../assets/team/COMERCIAL 1.JPG';
import team2 from '../assets/team/COMERCIAL 2.JPG';
import team3 from '../assets/team/COMERCIAL 3.JPG';
import { useLanguage } from '../context/LanguageContext';


export const HumanCapital = () => {
    const { t } = useLanguage();

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ padding: '80px 0', background: 'white' }}
        >
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
                <div style={{ marginBottom: '60px' }}>
                    <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
                        {t('human.badge')}
                    </span>
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, marginTop: '20px', fontFamily: 'var(--font-heading)' }}>
                        {t('human.title')}
                    </h2>
                    <p className="lead" style={{ maxWidth: '900px', margin: '30px auto 0', color: '#475569', fontSize: 'clamp(1rem, 2vw, 1.4rem)', lineHeight: 1.5 }}>
                        {t('human.description')}
                    </p>
                </div>

                {/* PREMIUM TEAM GALLERY */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gridAutoRows: 'clamp(300px, 40vw, 500px)',
                    gap: '24px',
                }}>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', background: '#f1f5f9' }}
                    >
                        <img
                            src={team1}
                            alt="Equipe 1"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: 'rotate(270deg) scale(1.3)',
                                objectPosition: 'center'
                            }}
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', background: '#f1f5f9' }}
                    >
                        <img
                            src={team2}
                            alt="Equipe 2"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: 'center 20%'
                            }}
                            loading="lazy"
                        />
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        style={{ borderRadius: '30px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)', background: '#f1f5f9' }}
                    >
                        <img
                            src={team3}
                            alt="Equipe 3"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transform: 'rotate(270deg) scale(1.3)',
                                objectPosition: 'center'
                            }}
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer style={{ background: 'var(--color-brand-blue-dark)', color: 'white', padding: '100px 0 60px' }}>
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                <div className="flex-responsive" style={{ gap: '40px', marginBottom: '60px', alignItems: 'flex-start' }}>

                    {/* Business Column */}
                    <div style={{ flex: 1.5 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>{t('footer.about_title')}</h4>
                        <div style={{ display: 'grid', gap: '8px', opacity: 0.8, fontSize: '0.95rem', lineHeight: 1.6 }}>
                            <p style={{ fontWeight: 700, color: 'white' }}>Techplast Industria e Comercio de Plasticos LTDA.</p>
                            <p>CNPJ: 06.143.647/0002-30</p>
                            <p>
                                {t('footer.address')}<br />
                                CEP: 57073-489
                            </p>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>{t('footer.links_title')}</h4>
                        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
                            {[
                                { key: 'empresa', label: t('footer.nav.empresa') },
                                { key: 'produtos', label: t('footer.nav.produtos') },
                                { key: 'diferenciais', label: t('footer.nav.diferenciais') },
                                { key: 'logistica', label: t('footer.nav.logistica') }
                            ].map(item => (
                                <li key={item.key}>
                                    <a href={`#${item.key}`} style={{ color: 'white', textDecoration: 'none', opacity: 0.7, transition: '0.3s' }} onMouseEnter={e => e.target.style.opacity = 1} onMouseLeave={e => e.target.style.opacity = 0.7}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div style={{ flex: 1 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>{t('footer.social_title')}</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            {[
                                { icon: Instagram, url: 'https://www.instagram.com/techplastembalagens/' },
                                { icon: Linkedin, url: 'https://www.linkedin.com/company/techplastembalagens/posts/?feedView=all' }
                            ].map((item, i) => (
                                <motion.a
                                    key={i}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, color: 'var(--color-brand-green)', background: 'rgba(255,255,255,0.1)' }}
                                    style={{
                                        width: '45px', height: '45px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', transition: '0.3s'
                                    }}
                                >
                                    <item.icon size={20} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div style={{ flex: 1.5 }}>
                        <h4 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-brand-green)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>{t('footer.contact_title')}</h4>
                        <div style={{ display: 'grid', gap: '15px' }}>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.8 }}>
                                <Phone size={18} color="var(--color-brand-green)" />
                                <span>(82) 3374-2373 / 99190-0900</span>
                            </div>
                            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', opacity: 0.8 }}>
                                <Mail size={18} color="var(--color-brand-green)" />
                                <a href="mailto:comercial@techplastembalagens.com.br" style={{ color: 'white', textDecoration: 'none' }}>comercial@techplastembalagens.com.br</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '40px', textAlign: 'center' }}>
                    <p style={{ opacity: 0.4, fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Techplast. {t('footer.rights')} <a href="#" style={{ color: 'var(--color-brand-green)', textDecoration: 'none', fontWeight: 700 }}>Júlio César</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
