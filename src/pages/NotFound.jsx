import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--color-surface)',
            padding: '24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorations */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle, rgba(214, 221, 54, 0.1) 0%, rgba(214, 221, 54, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />
            <div style={{
                position: 'absolute',
                bottom: '-10%',
                left: '-5%',
                width: '500px',
                height: '500px',
                background: 'radial-gradient(circle, rgba(0, 71, 171, 0.05) 0%, rgba(0, 71, 171, 0) 70%)',
                borderRadius: '50%',
                zIndex: 0
            }} />

            <div style={{ zIndex: 1, position: 'relative', maxWidth: '600px' }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        fontSize: 'clamp(6rem, 15vw, 10rem)',
                        fontWeight: 900,
                        color: 'var(--color-brand-blue-dark)',
                        lineHeight: 1,
                        marginBottom: '20px',
                        textShadow: '0 10px 30px rgba(0,0,0,0.05)'
                    }}
                >
                    404
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                        color: 'var(--color-text-body)',
                        marginBottom: '20px'
                    }}
                >
                    Página não encontrada
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        fontSize: '1.2rem',
                        color: 'var(--color-text-light)',
                        marginBottom: '40px'
                    }}
                >
                    Oops! Parece que a página que você está procurando não existe ou foi movida.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}
                >
                    <button
                        onClick={() => window.history.back()}
                        style={{
                            padding: '16px 32px',
                            background: 'white',
                            color: 'var(--color-brand-blue-dark)',
                            border: '1px solid #e2e8f0',
                            borderRadius: '12px',
                            fontWeight: 700,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                        }}
                    >
                        <ArrowLeft size={20} />
                        Voltar
                    </button>

                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <button
                            className="premium-hover-btn"
                            style={{
                                padding: '16px 32px',
                                background: 'var(--color-brand-blue-dark)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '12px',
                                fontWeight: 700,
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                transition: 'all 0.3s',
                                boxShadow: '0 4px 15px rgba(0, 71, 171, 0.3)',
                                overflow: 'hidden'
                            }}
                        >
                            <Home size={20} />
                            Ir para o Início
                        </button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
