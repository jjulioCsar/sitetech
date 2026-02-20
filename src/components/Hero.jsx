import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

import logoImg from '../assets/logo.png';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            background: 'white',
            paddingTop: '0px',
            overflow: 'hidden'
        }}>

            {/* LOGO WATERMARK BACKGROUND */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.12, // Visible but not distracting
                zIndex: 0,
                pointerEvents: 'none'
            }}>
                <img src={logoImg} alt="" style={{ width: '70vw', maxWidth: '1200px', objectFit: 'contain' }} loading="eager" decoding="async" />
            </div>

            <div className="container" style={{
                maxWidth: 'var(--container-width)',
                margin: '0 auto',
                padding: '0 24px',
                zIndex: 10,
                textAlign: 'center',
                position: 'relative'
            }}>
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '30px', display: 'inline-block' }}
                >
                    <div style={{
                        background: 'rgba(11, 57, 146, 0.05)',
                        border: '1px solid rgba(11, 57, 146, 0.1)',
                        padding: '10px 25px',
                        borderRadius: '50px',
                        color: 'var(--color-brand-blue-dark)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: 'max(0.7rem, 2vw)'
                    }}>
                        A REFERÊNCIA REGIONAL
                    </div>
                </motion.div>

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                        color: 'var(--color-brand-blue-dark)',
                        marginBottom: '30px',
                        lineHeight: 1,
                        textTransform: 'uppercase',
                        fontWeight: 900,
                        fontFamily: 'var(--font-heading)',
                        fontSize: 'clamp(2.5rem, 8vw, 6rem)'
                    }}
                >
                    Há mais de <span style={{ color: 'var(--color-brand-green)' }}>15 anos</span><br />
                    <span style={{
                        background: 'linear-gradient(to right, var(--color-brand-blue-dark), var(--color-brand-blue-light))',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: 'clamp(3rem, 12vw, 9rem)',
                        fontFamily: 'var(--font-heading)',
                        letterSpacing: '-0.04em'
                    }}>
                        Moldando o Futuro
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{
                        maxWidth: '850px',
                        margin: '0 auto 60px',
                        color: '#475569',
                        fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)',
                        lineHeight: 1.5,
                        fontWeight: 400
                    }}
                >
                    Uma empresa genuinamente alagoana que une tradição, inovação e solidez para ser a força motriz por trás de grandes marcas.
                </motion.p>

            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, opacity: { duration: 1 } }}
                style={{ position: 'absolute', bottom: '40px', color: '#cbd5e1' }}
            >
                <ArrowDown size={32} />
            </motion.div>

        </section>
    );
};

export default Hero;
