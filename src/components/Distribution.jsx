import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { MapPin } from 'lucide-react';

const Distribution = () => {
    return (
        <SectionWrapper
            id="distribuicao"
            subtitle="MÓDULO 07"
            title="Presença e Distribuição"
            dark={true}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
            }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{ maxWidth: '800px', marginBottom: '60px' }}
                >
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '24px', color: 'white' }}>Atendimento estratégico e regional</h3>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', lineHeight: '1.7' }}>
                        Como um dos maiores distribuidores de garrafas sopradas da região, nossa logística foi desenhada para a eficiência.
                        Direto de <strong>Maceió/AL</strong> para a linha de produção da sua empresa.
                    </p>
                </motion.div>

                {/* Map Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                    style={{
                        width: '100%',
                        maxWidth: '900px',
                        height: '400px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                    }}
                >
                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <MapPin size={48} color="var(--color-accent)" fill="var(--color-accent)" fillOpacity={0.2} />
                        <span style={{ color: 'white', fontWeight: 700, marginTop: '10px' }}>Maceió - AL</span>
                        <div style={{
                            width: '200px',
                            height: '200px',
                            border: '2px dashed var(--color-accent)',
                            borderRadius: '50%',
                            position: 'absolute',
                            top: '-90px',
                            opacity: 0.3,
                            animation: 'pulse 2s infinite'
                        }} />
                    </div>
                    <p style={{ position: 'absolute', bottom: '20px', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
                        Raio de atuação regional otimizado
                    </p>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Distribution;
