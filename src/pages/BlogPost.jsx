import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { blogData } from '../data/blogData';
import { useLanguage } from '../context/LanguageContext';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t, lang } = useLanguage();
  const [artigoObj, setArtigoObj] = useState(null);
  
  // Slider states
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Scrolla para o topo sempre que entra no post
    window.scrollTo(0, 0);

    const foundArtigo = blogData.find(a => a.id === id);
    if (!foundArtigo) {
      navigate('/blog');
      return;
    }
    setArtigoObj(foundArtigo);
  }, [id, navigate]);

  useEffect(() => {
    if (!artigoObj) return;
    
    const artigo = artigoObj[lang] || artigoObj.pt;
    const articleUrl = `https://techplastembalagens.com.br/blog/${artigoObj.id}`;
    const ogImageUrl = 'https://techplastembalagens.com.br/og-image.jpg';

    // ===== TITLE =====
    document.title = `${artigo.title} | Techplast`;

    // ===== Helper: criar ou atualizar meta tag =====
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

    // ===== META TAGS BÁSICAS =====
    const metaDesc = setMeta('name', 'description', artigo.excerpt);
    const metaKeywords = setMeta('name', 'keywords', artigo.keywords);
    const metaRobots = setMeta('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large');
    const metaAuthor = setMeta('name', 'author', artigoObj.author);

    // ===== OPEN GRAPH (Facebook, LinkedIn, WhatsApp) =====
    const ogTitle = setMeta('property', 'og:title', artigo.title);
    const ogDesc = setMeta('property', 'og:description', artigo.excerpt);
    const ogUrl = setMeta('property', 'og:url', articleUrl);
    const ogType = setMeta('property', 'og:type', 'article');
    const ogImage = setMeta('property', 'og:image', ogImageUrl);
    const ogSiteName = setMeta('property', 'og:site_name', 'Techplast Embalagens');
    const ogLocale = setMeta('property', 'og:locale', lang === 'pt' ? 'pt_BR' : 'en_US');
    const articlePublished = setMeta('property', 'article:published_time', artigoObj.dateISO);
    const articleAuthorMeta = setMeta('property', 'article:author', artigoObj.author);

    // ===== TWITTER CARD =====
    const twCard = setMeta('name', 'twitter:card', 'summary_large_image');
    const twTitle = setMeta('name', 'twitter:title', artigo.title);
    const twDesc = setMeta('name', 'twitter:description', artigo.excerpt);
    const twImage = setMeta('name', 'twitter:image', ogImageUrl);

    // ===== CANONICAL URL =====
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = articleUrl;

    // ===== JSON-LD Estruturado (Google / AI / Rich Snippets) =====
    const existingJsonLd = document.getElementById('article-json-ld');
    if (existingJsonLd) existingJsonLd.remove();
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'article-json-ld';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": artigo.title,
      "description": artigo.excerpt,
      "keywords": artigo.keywords,
      "author": {
        "@type": "Organization",
        "name": artigoObj.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Techplast Embalagens",
        "logo": {
          "@type": "ImageObject",
          "url": ogImageUrl
        }
      },
      "datePublished": artigoObj.dateISO,
      "dateModified": artigoObj.dateISO,
      "image": ogImageUrl,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": articleUrl
      },
      "inLanguage": lang === 'pt' ? 'pt-BR' : 'en-US'
    });
    document.head.appendChild(script);

    // ===== LIMPEZA na saída =====
    return () => {
      document.title = "Techplast | Soluções em Embalagens PET e PEAD";
      const jsonLd = document.getElementById('article-json-ld');
      if (jsonLd) jsonLd.remove();
      // Remove metas OG / Twitter adicionadas
      [ogTitle, ogDesc, ogUrl, ogType, ogImage, ogSiteName, ogLocale,
       articlePublished, articleAuthorMeta,
       twCard, twTitle, twDesc, twImage,
       metaRobots, metaAuthor].forEach(tag => {
        if (tag && tag.parentNode) tag.parentNode.removeChild(tag);
      });
      if (canonical && canonical.parentNode) canonical.parentNode.removeChild(canonical);
    };
  }, [artigoObj, lang]);

  if (!artigoObj) return null;

  const artigo = artigoObj[lang] || artigoObj.pt;
  const hasImages = artigoObj.images && artigoObj.images.length > 0;

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % artigoObj.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + artigoObj.images.length) % artigoObj.images.length);
  };

  return (
    <div style={{ paddingTop: 'clamp(100px, 15vh, 140px)', paddingBottom: '100px', background: 'white', minHeight: '100vh' }}>
      <article className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Botão Voltar */}
        <Link 
          to="/blog" 
          style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            color: 'var(--color-brand-green)', 
            fontWeight: 700, 
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '40px',
            fontSize: '0.9rem'
          }}
        >
          <ArrowLeft size={18} /> {t('blog.back_button')}
        </Link>

        {/* Cabeçalho do Artigo */}
        <header style={{ marginBottom: '50px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span style={{ color: 'var(--color-brand-green)', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {artigoObj.category || t('blog.category')}
            </span>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>{artigo.date}</span>
            <span style={{ color: '#cbd5e1' }}>•</span>
            <span style={{ color: '#64748b', fontWeight: 600, fontSize: '0.9rem' }}>{t('blog.by_author')} {artigoObj.author}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 900, color: 'var(--color-brand-blue-dark)', lineHeight: 1.2, fontFamily: 'var(--font-heading)' }}>
            {artigo.title}
          </h1>
        </header>

        {/* Slider de Imagens Interativo */}
        {hasImages && (
          <div style={{ width: '100%', marginBottom: '50px' }}>
            <div 
              style={{ width: '100%', height: 'clamp(250px, 40vh, 450px)', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', cursor: 'pointer', backgroundColor: '#f1f5f9' }}
              onClick={() => setIsModalOpen(true)}
            >
              <AnimatePresence initial={false}>
                <motion.img
                  key={currentImageIndex}
                  src={artigoObj.images[currentImageIndex]}
                  alt={`${artigo.title} - foto ${currentImageIndex + 1}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                />
              </AnimatePresence>

              {/* Controles do Slider (só mostra se tiver mais de 1 foto) */}
              {artigoObj.images.length > 1 && (
                <>
                  <button onClick={prevImage} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ChevronLeft size={20} color="var(--color-brand-blue-dark)" />
                  </button>
                  <button onClick={nextImage} style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
                    <ChevronRight size={20} color="var(--color-brand-blue-dark)" />
                  </button>
                  <div style={{ position: 'absolute', bottom: '15px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px', zIndex: 10 }}>
                    {artigoObj.images.map((_, idx) => (
                      <div key={idx} style={{ width: '8px', height: '8px', borderRadius: '50%', background: idx === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)', transition: 'background 0.3s' }} />
                    ))}
                  </div>
                </>
              )}
              
              {/* Lupa Hint */}
              <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(0,0,0,0.4)', color: 'white', padding: '8px', borderRadius: '50%', backdropFilter: 'blur(4px)', display: 'flex' }}>
                <ZoomIn size={18} />
              </div>
            </div>
          </div>
        )}

        {/* Corpo do Texto */}
        <div 
          className="article-content"
          style={{ 
            fontSize: '1.2rem', 
            lineHeight: 1.8, 
            color: '#334155' 
          }}
          dangerouslySetInnerHTML={{ __html: artigo.content.replace(/### (.*?)(?:\r\n|\n)/g, '<h3 style="color: var(--color-brand-blue-dark); font-size: 1.8rem; font-weight: 800; margin-top: 50px; margin-bottom: 20px;">$1</h3>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" style="color: var(--color-brand-blue-light); text-decoration: underline; font-weight: bold;">$1</a>').replace(/(?:\r\n|\n){2,}/g, '<br/><br/>') }}
        />

      </article>

      {/* Modal de Zoom Fullscreen */}
      <AnimatePresence>
        {isModalOpen && hasImages && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.9)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setIsModalOpen(false)}
          >
            <button onClick={() => setIsModalOpen(false)} style={{ position: 'absolute', top: '30px', right: '30px', background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', zIndex: 10000 }}>
              <X size={32} />
            </button>
            
            {artigoObj.images.length > 1 && (
              <>
                <button onClick={prevImage} style={{ position: 'absolute', left: '30px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10000, color: 'white' }}>
                  <ChevronLeft size={30} />
                </button>
                <button onClick={nextImage} style={{ position: 'absolute', right: '30px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10000, color: 'white' }}>
                  <ChevronRight size={30} />
                </button>
              </>
            )}

            <img 
              src={artigoObj.images[currentImageIndex]} 
              alt={artigo.title} 
              style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain', userSelect: 'none' }} 
              onClick={(e) => e.stopPropagation()} 
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default BlogPost;
