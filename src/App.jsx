import { useEffect, useState, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import LanguageSwitcher from './components/ui/LanguageSwitcher'
import Lenis from 'lenis'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useLocation } from 'react-router-dom'

// Utilities
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Components
import Header from './components/ui/Header'
import Hero from './components/Hero'
import MarketContext from './components/MarketContext'
import ProductShowcase from './components/ProductShowcase'
import StrategicPillars from './components/StrategicPillars'
import BrandVideo from './components/BrandVideo'
import Customization from './components/Customization'
import Logistics from './components/Logistics'
import LocationMap from './components/LocationMap'
import { Footer, HumanCapital } from './components/FooterComponents'
import FloatingButtons from './components/ui/FloatingButtons'
import NotFound from './pages/NotFound'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

// Assets
import logoImg from './assets/logo.png'

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    return () => lenis.destroy()
  }, [])

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>

              <LanguageSwitcher />
              <FloatingButtons />

              {/* Scroll Progress Bar */}
              <motion.div
                style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--color-brand-green)',
                  transformOrigin: '0%',
                  scaleX,
                  zIndex: 1001
                }}
              />

              <Header />

              <main style={{ position: 'relative', zIndex: 1, marginTop: '0px' }}>
                <Hero />
                <MarketContext />
                <StrategicPillars />
                <BrandVideo />
                <ProductShowcase />
                <Customization />
                <Logistics />
                <LocationMap />
                <HumanCapital />
              </main>

              <Footer />
            </div>
          } />
          <Route path="/blog" element={
            <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
              <LanguageSwitcher />
              <FloatingButtons />
              <Header />
              <main style={{ position: 'relative', zIndex: 1, marginTop: '0px' }}>
                <Blog />
              </main>
              <Footer />
            </div>
          } />
          <Route path="/blog/:id" element={
            <div className="app-container" style={{ position: 'relative', overflow: 'hidden' }}>
              <LanguageSwitcher />
              <FloatingButtons />
              <Header />
              <main style={{ position: 'relative', zIndex: 1, marginTop: '0px' }}>
                <BlogPost />
              </main>
              <Footer />
            </div>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
