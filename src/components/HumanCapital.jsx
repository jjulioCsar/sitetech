import { motion } from 'framer-motion';
import SectionWrapper from './ui/SectionWrapper';
import { UserCheck, Users, Headphones } from 'lucide-react';

const HumanCapital = () => {
    return (
        <SectionWrapper
            id="humano"
            subtitle="MÓDULO 08"
            title="Inteligência por trás das máquinas"
        >
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr',
                gap: '60px',
                alignItems: 'center'
            }}>
                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '20px'
                    }}
                >
                    <div style={{ height: '240px', background: '#e5e7eb', borderRadius: 'var(--radius-md) 0 0 var(--radius-md)', backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80")', backgroundSize: 'cover' }}></div>
                    <div style={{ height: '240px', background: '#d1d5db', borderRadius: '0 var(--radius-md) var(--radius-md) 0', marginTop: '40px', backgroundImage: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80")', backgroundSize: 'cover' }}></div>
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p style={{ fontSize: '1.5rem', fontWeight: 300, color: 'var(--color-primary)', marginBottom: '30px' }}>
                        "O nosso maior diferencial não é feito de plástico, mas de pessoas."
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-body)', lineHeight: '1.7', marginBottom: '32px' }}>
                        A Techplast conta com uma equipe altamente capacitada, oferecendo suporte integral desde o primeiro contato comercial até o desenvolvimento de moldes personalizados.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Users color="var(--color-accent-hover)" />
                            <span style={{ fontWeight: 600 }}>Equipe Técnica Especializada</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <UserCheck color="var(--color-accent-hover)" />
                            <span style={{ fontWeight: 600 }}>Suporte Operacional Dedicado</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                            <Headphones color="var(--color-accent-hover)" />
                            <span style={{ fontWeight: 600 }}>Atendimento Consultivo</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default HumanCapital;
