import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

import LogoMarca from '../assets/logo.png'; // Fallback if needed, but we can just use a gradient

const ImageCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500);
    
    return () => clearInterval(interval);
  }, [images]);

  // Se não tem imagem, não renderiza nada
  if (!images || images.length === 0) return null;

  return (
    <div style={{ width: '100%', height: '220px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px', position: 'relative' }}>
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

const allCategories = ['GESTÃO E OPERAÇÃO', 'PESSOAS E CULTURA', 'MERCADO E NEGÓCIOS', 'EMBALAGENS E SOLUÇÕES', 'TECNOLOGIA E PRODUÇÃO'];
// Filtra apenas as categorias que tem pelo menos um artigo (tratando o acento de NEGÓCIOS se precisar)
const activeCategories = allCategories.filter(cat => 
  blogData.some(a => a.category === cat || (a.category === 'MERCADO E NEGOCIOS' && cat === 'MERCADO E NEGÓCIOS'))
);
const categoriesList = ['TODOS', ...activeCategories];

const Blog = () => {
  const { t, lang } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('TODOS');

  useEffect(() => {
    const pageUrl = 'https://techplastembalagens.com.br/artigos';
    const ogImageUrl = 'https://techplastembalagens.com.br/og-image.jpg';

    // ===== TITLE =====
    document.title = t('blog.seo_title');

    // ===== Helper =====
    const setMeta = (attr, attrValue, content) => {
      let tag = document.querySelector(`meta[${attr}="${attrValue}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, attrValue);
        document.head.appendChild(tag);
      }
      tag.content = content;
      return tag;
    };

    // ===== META TAGS =====
    const metaDesc = setMeta('name', 'description', t('blog.seo_desc'));
    const metaRobots = setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');
    const metaKeywords = setMeta('name', 'keywords', lang === 'pt'
      ? 'artigos, insights, indústria, embalagens, eficiência, Techplast, processos produtivos, PET, PEAD'
      : 'articles, insights, industry, packaging, efficiency, Techplast, production processes, PET, HDPE'
    );

    // ===== OPEN GRAPH =====
    const ogTitle = setMeta('property', 'og:title', t('blog.seo_title'));
    const ogDesc = setMeta('property', 'og:description', t('blog.seo_desc'));
    const ogUrl = setMeta('property', 'og:url', pageUrl);
    const ogType = setMeta('property', 'og:type', 'website');
    const ogImage = setMeta('property', 'og:image', ogImageUrl);
    const ogSiteName = setMeta('property', 'og:site_name', 'Techplast Embalagens');
    const ogLocale = setMeta('property', 'og:locale', lang === 'pt' ? 'pt_BR' : 'en_US');

    // ===== TWITTER CARD =====
    const twCard = setMeta('name', 'twitter:card', 'summary_large_image');
    const twTitle = setMeta('name', 'twitter:title', t('blog.seo_title'));
    const twDesc = setMeta('name', 'twitter:description', t('blog.seo_desc'));

    // ===== CANONICAL =====
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = pageUrl;

    // ===== JSON-LD CollectionPage =====
    const existingJsonLd = document.getElementById('artigos-json-ld');
    if (existingJsonLd) existingJsonLd.remove();

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'artigos-json-ld';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": t('blog.seo_title'),
      "description": t('blog.seo_desc'),
      "url": pageUrl,
      "publisher": {
        "@type": "Organization",
        "name": "Techplast Embalagens",
        "logo": {
          "@type": "ImageObject",
          "url": ogImageUrl
        }
      },
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": blogData.map((a, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "url": `https://techplastembalagens.com.br/blog/${a.id}`,
          "name": (a[lang] || a.pt).title
        }))
      }
    });
    document.head.appendChild(script);

    // ===== LIMPEZA =====
    return () => {
      document.title = "Techplast | Soluções em Embalagens PET e PEAD";
      const jsonLd = document.getElementById('artigos-json-ld');
      if (jsonLd) jsonLd.remove();
      [ogTitle, ogDesc, ogUrl, ogType, ogImage, ogSiteName, ogLocale,
       twCard, twTitle, twDesc, metaRobots, metaKeywords].forEach(tag => {
        if (tag && tag.parentNode) tag.parentNode.removeChild(tag);
      });
      if (canonical && canonical.parentNode) canonical.parentNode.removeChild(canonical);
    };
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

        {/* Filtro de Categorias */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          justifyContent: 'center',
          marginBottom: '50px'
        }}>
          {categoriesList.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              style={{
                padding: '10px 24px',
                borderRadius: '30px',
                border: 'none',
                background: selectedCategory === cat ? 'var(--color-brand-blue-dark)' : 'white',
                color: selectedCategory === cat ? 'white' : '#64748b',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                boxShadow: selectedCategory === cat ? '0 10px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de Artigos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 350px), 1fr))',
          gap: '40px'
        }}>
          {[...blogData]
            .filter(a => selectedCategory === 'TODOS' || a.category === selectedCategory || (a.category === 'MERCADO E NEGOCIOS' && selectedCategory === 'MERCADO E NEGÓCIOS'))
            .sort((a, b) => new Date(b.dateISO) - new Date(a.dateISO))
            .map((artigoObj, index) => {
            const artigo = artigoObj[lang] || artigoObj.pt;
            const hasImages = artigoObj.images && artigoObj.images.length > 0;
            
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
                border: '1px solid #f1f5f9',
                height: '100%' // Garante que preencha a altura do grid
              }}
            >
              <ImageCarousel images={artigoObj.images} title={artigo.title} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <span style={{ color: 'var(--color-brand-green)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {artigoObj.category || t('blog.category')}
                </span>
                <span style={{ color: '#94a3b8', fontSize: '0.85rem', fontWeight: 500 }}>
                  {artigo.date}
                </span>
              </div>
              
              <h2 style={{ 
                fontSize: '1.5rem', 
                fontWeight: 800, 
                color: 'var(--color-brand-blue-dark)', 
                marginBottom: '15px', 
                lineHeight: 1.3,
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {artigo.title}
              </h2>
              
              <p style={{ 
                color: '#475569', 
                lineHeight: 1.6, 
                marginBottom: '30px', 
                flex: 1,
                display: '-webkit-box',
                WebkitLineClamp: hasImages ? 4 : 12,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {artigo.content.replace(/### /g, '').replace(/\*\*/g, '') /* usamos content ao invés de excerpt para ter texto suficiente */}
              </p>
              
              <Link 
                to={`/blog/${artigoObj.id}`}
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

export default Blog;
