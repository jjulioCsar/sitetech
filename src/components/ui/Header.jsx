import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImg from '../../assets/logo.png';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const { t } = useLanguage();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        setMobileOpen(false);

        // Se for clicar em blog, usamos o React Router
        if (id === 'blog') {
            navigate('/blog');
            return;
        }

        // Se estivermos em uma página diferente da Home, forçamos a volta para a Home na respectiva âncora
        if (location.pathname !== '/') {
            window.location.href = '/#' + id;
            return;
        }

        const el = document.getElementById(id);
        if (el) {
            // Compensate for fixed header height
            const headerOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    const navItems = [
        { label: t('footer.nav.inicio') || 'Início', id: 'inicio' },
        { label: t('footer.nav.empresa') || 'Empresa', id: 'dna' },
        { label: t('footer.nav.produtos') || 'Produtos', id: 'produtos' },
        { label: t('footer.nav.customizacao') || 'Soluções', id: 'customizacao' },
        { label: t('footer.nav.blog') || 'Blog', id: 'blog' },
        { label: t('footer.nav.localizacao') || 'Localização', id: 'localizacao' }
    ];

    return (
        <header
            className={scrolled ? 'glass-nav' : ''}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
                padding: scrolled ? '15px 0' : '30px 0'
            }}
        >
            <div className="container" style={{
                maxWidth: 'var(--container-width)',
                margin: '0 auto',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                {/* Logo removido - apenas espaço vazio para manter flexbox ou alinhamentos caso precise futuramente */}
                <div style={{ display: 'none' }}></div>

                {/* Desktop Menu */}
                <nav style={{ display: 'none' }} className="desktop-nav">
                    <ul style={{
                        listStyle: 'none',
                        display: 'flex',
                        gap: '40px',
                        margin: 0,
                        padding: 0,
                        alignItems: 'center'
                    }}>
                        {navItems.map((item, idx) => (
                            <li key={idx}>
                                <button
                                    onClick={() => scrollTo(item.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: scrolled ? 'var(--color-brand-blue-dark)' : 'var(--color-brand-blue-dark)',
                                        fontWeight: 700,
                                        fontSize: '0.95rem',
                                        cursor: 'pointer',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px',
                                        transition: 'color 0.2s'
                                    }}
                                    onMouseOver={(e) => e.target.style.color = 'var(--color-brand-green)'}
                                    onMouseOut={(e) => e.target.style.color = scrolled ? 'var(--color-brand-blue-dark)' : 'var(--color-brand-blue-dark)'}
                                >
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Mobile Toggle Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-brand-blue-dark)',
                        cursor: 'pointer'
                    }}
                >
                    {mobileOpen ? <X size={32} /> : <Menu size={32} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            style={{
                                position: 'absolute',
                                top: '100%',
                                left: 0,
                                right: 0,
                                background: 'white',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                padding: '30px 24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px',
                                borderTop: '1px solid #f1f5f9'
                            }}
                        >
                            {navItems.map((item, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => scrollTo(item.id)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        color: 'var(--color-brand-blue-dark)',
                                        fontWeight: 800,
                                        fontSize: '1.2rem',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}
                                >
                                    {item.label}
                                </button>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @media (min-width: 1024px) {
                    .desktop-nav { display: flex !important; }
                    .mobile-toggle { display: none !important; }
                }
                @media (max-width: 1023px) {
                    .mobile-toggle { display: block !important; }
                }
            `}} />
        </header>
    );
};

export default Header;
