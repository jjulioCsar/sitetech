import { motion } from 'framer-motion';
import { MapPin, Navigation } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const LocationMap = () => {
    // Endereço exato fornecido
    const address = "Recanto do Mainá - Rua R.R, LOTE 20 E 21 QD 09, N 664 - Cidade Universitária, Maceió - AL, 57073-489";
    const mapDirectLink = "https://maps.app.goo.gl/2GcU5mVSiH89dnbe7";

    // URL codificada para iFrame embed
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURI("Recanto do Mainá - Rua R.R, 664 - Cidade Universitária, Maceió - AL, 57073-489")}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <SectionWrapper id="localizacao" fluid={true}>
            <div style={{ background: '#f8fafc', padding: '100px 0' }}>
                <div style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '15px' }}
                        >
                            Visite Nossa Fábrica
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}
                        >
                            Onde Estamos
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ maxWidth: '700px', margin: '20px auto 0', color: '#475569', fontSize: '1.2rem', lineHeight: 1.6 }}
                        >
                            Estamos localizados em um polo estratégico em Maceió/AL para garantir a melhor logística de escoamento e entrega em todo o Brasil.
                        </motion.p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', alignItems: 'center' }}>

                        {/* Interactive Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{
                                width: '100%',
                                maxWidth: '1000px',
                                background: 'white',
                                borderRadius: '24px',
                                padding: '30px',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '20px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(30, 144, 255, 0.1)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-brand-blue-light)'
                                }}>
                                    <MapPin size={28} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-brand-blue-dark)', marginBottom: '5px' }}>
                                        Endereço Completo
                                    </h4>
                                    <p style={{ color: '#64748b', fontSize: '1rem', maxWidth: '400px', lineHeight: 1.5 }}>
                                        {address}
                                    </p>
                                </div>
                            </div>

                            <motion.a
                                href={mapDirectLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '16px 32px',
                                    background: 'var(--color-brand-blue-dark)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    fontSize: '1rem',
                                    transition: 'background 0.3s'
                                }}
                            >
                                <Navigation size={20} />
                                Abrir no Aplicativo
                            </motion.a>
                        </motion.div>

                        {/* Map iframe UI */}
                        <motion.a
                            href={mapDirectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.01, boxShadow: '0 40px 80px rgba(0,0,0,0.15)' }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{
                                width: '100%',
                                maxWidth: '1200px',
                                height: 'clamp(400px, 50vh, 600px)',
                                borderRadius: '30px',
                                overflow: 'hidden',
                                boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'block',
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                        >
                            {/* Overlay transparente para interceptar o click e evitar que o iframe manipule o cursor */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, cursor: 'pointer' }} />

                            <iframe
                                src={mapEmbedUrl}
                                width="100%"
                                height="100%"
                                style={{ border: 0, pointerEvents: 'none' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização Techplast Maps"
                            />
                        </motion.a>

                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default LocationMap;
