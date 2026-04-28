import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { artigosData } from '../data/artigosData';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // 3.5 segundos
    
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div style={{ width: '100%', height: '200px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', position: 'relative' }}>
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title} - image ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
        />
      </AnimatePresence>
    </div>
  );
};

const Artigos = () => {
  const { t, lang } = useLanguage();

  useEffect(() => {
    // Injetando SEO e Meta tags para a página de Artigos
    document.title = t('blog.seo_title');
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = t('blog.seo_desc');
    }
  }, [lang, t]);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '100px', background: '#f8fafc', minHeight: '100vh' }}>
      <div className="container" style={{ maxWidth: 'var(--container-width)', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header da Página */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span style={{ color: 'var(--color-brand-green)', fontWeight: 800, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '0.9rem', display: 'block', marginBottom: '15px' }}>
            {t('blog.badge')}
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', lineHeight: 1.1, fontFamily: 'var(--font-heading)' }}>
            {t('blog.title')}
          </h1>
          <p style={{ maxWidth: '700px', margin: '20px auto 0', color: '#475569', fontSize: '1.2rem', lineHeight: 1.6 }}>
            {t('blog.description')}
          </p>
        </motion.div>

        {/* Grid de Artigos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
          gap: '40px'
        }}>
          {artigosData.map((artigoObj, index) => {
            const artigo = artigoObj[lang] || artigoObj.pt;
            return (
            <motion.div
              key={artigoObj.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              style={{
                background: 'white',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid #f1f5f9'
              }}
            >
              <ImageCarousel images={artigoObj.images} title={artigo.title} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ color: 'var(--color-brand-green)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {t('blog.category')}
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 500 }}>
                  {artigo.date}
                </span>
              </div>
              
              <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-brand-blue-dark)', marginBottom: '15px', lineHeight: 1.3 }}>
                {artigo.title}
              </h2>
              
              <p style={{ color: '#475569', lineHeight: 1.6, marginBottom: '30px', flex: 1 }}>
                {artigo.excerpt}
              </p>
              
              <Link 
                to={`/artigos/${artigoObj.id}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  color: 'var(--color-brand-blue-dark)',
                  fontWeight: 800,
                  textDecoration: 'none',
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
              >
                {t('blog.read_more')}
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          );
          })}
        </div>

      </div>
    </div>
  );
};

export default Artigos;
