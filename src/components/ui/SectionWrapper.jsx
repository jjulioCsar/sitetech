import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className, fluid = false }) => {
    return (
        <section
            id={id}
            className={`section-wrapper ${className || ''}`}
            style={{
                padding: fluid ? '0' : '120px 0',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                background: 'var(--color-bg)', // Always white unless overridden
                overflow: 'hidden'
            }}
        >
            <div className="container" style={{
                maxWidth: fluid ? '100%' : 'var(--container-width)',
                margin: '0 auto',
                width: '100%',
                padding: fluid ? '0' : '0 40px',
                zIndex: 1,
                position: 'relative'
            }}>
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
