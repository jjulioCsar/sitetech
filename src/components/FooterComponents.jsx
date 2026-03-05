import { motion } from 'framer-motion';
import { Phone, Mail, Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import mural1 from '../assets/team/mural-1.webp';
import mural2 from '../assets/team/mural-2.webp';
import mural3 from '../assets/team/mural-3.webp';
import mural4 from '../assets/team/mural-4.webp';
import mural5 from '../assets/team/mural-5.webp';
import mural6 from '../assets/team/mural-6.webp';
import mural7 from '../assets/team/mural-7.webp';
import mural12 from '../assets/team/mural-12.webp';
import mural9 from '../assets/team/mural-9.webp';
import mural10 from '../assets/team/mural-10.webp';
import mural11 from '../assets/team/mural-11.webp';

export const HumanCapital = () => {
    const { t } = useLanguage();

    const muralImages = [
        { src: mural1, alt: "Eduardo - Comercial", rotate: true },
        { src: mural2, alt: "Equipe Techplast 2" },
        { src: mural3, alt: "Equipe Techplast 3" },
        { src: mural4, alt: "Katiucia - Qualidade" },
        { src: mural5, alt: "Equipe Techplast 5" },
        { src: mural6, alt: "Equipe Techplast 6" },
        { src: mural7, alt: "Equipe Techplast 7" },
        { src: mural12, alt: "Luciano - Comercial" },
        { src: mural9, alt: "Equipe Techplast 9" },
        { src: mural10, alt: "Equipe Techplast 10" },
        { src: mural11, alt: "Heleno" }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{ padding: '80px 0', background: 'white', position: 'relative', overflow: 'hidden' }}
        >
            <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', textAlign: 'center', padding: '0 24px' }}>
                <div style={{ marginBottom: '80px' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '15px' }}
                    >
                        {t('human.badge')}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}
                    >
                        {t('human.title')}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lead" style={{ maxWidth: '900px', margin: '30px auto 0', color: '#475569', fontSize: 'clamp(1rem, 1.5vw, 1.25rem)', lineHeight: 1.6, opacity: 0.9 }}
                    >
                        {t('human.description')}
                    </motion.p>
                </div>

                {/* AUTOMATIC TEAM CAROUSEL */}
                <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)', position: 'relative', overflow: 'hidden' }}>
                    <motion.div
                        animate={{
                            x: [0, -3850], // 11 images * (320px + 30px gap) = 3850px
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 15, // Further increased speed (from 20)
                                ease: "linear",
                            },
                        }}
                        style={{
                            display: 'flex',
                            gap: '30px',
                            padding: '20px 0',
                            width: 'fit-content'
                        }}
                    >
                        {[...muralImages, ...muralImages, ...muralImages].map((img, index) => (
                            <div
                                key={index}
                                style={{
                                    width: '320px',
                                    flexShrink: 0,
                                    borderRadius: '24px',
                                    overflow: 'hidden',
                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.08)',
                                    aspectRatio: '4/5', // Standard proportion
                                    background: '#f8fafc',
                                    position: 'relative',
                                }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transform: img.rotate ? 'rotate(270deg) scale(1.4)' : 'none',
                                    }}
                                    loading="lazy"
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0, bottom: 0,
                                    background: 'linear-gradient(to bottom, transparent 60%, rgba(11, 37, 85, 0.3))',
                                    opacity: 0.4,
                                }} />
                            </div>
                        ))}
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
                        © {new Date().getFullYear()} Techplast. {t('footer.rights')} <a href="https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-480738260/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-brand-green)', textDecoration: 'none', fontWeight: 700 }}>Júlio César</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};
