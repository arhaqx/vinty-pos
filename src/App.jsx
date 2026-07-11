import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedBanner from './components/FeaturedBanner';
import ProductGrid from './components/ProductGrid';
import FindUs from './components/FindUs';
import Footer from './components/Footer';
import LineWaves from './components/LineWaves';

function App() {
  // Intersection Observer for scroll entrance animations
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    reveals.forEach((reveal) => {
      observer.observe(reveal);
    });

    // Clean up observer
    return () => {
      reveals.forEach((reveal) => {
        observer.unobserve(reveal);
      });
    };
  }, []);

  return (
    <>
      <div className="global-waves">
        <LineWaves
          speed={0.15}
          innerLineCount={28}
          outerLineCount={32}
          warpIntensity={0.8}
          rotation={-45}
          edgeFadeWidth={0.1}
          colorCycleSpeed={0.6}
          brightness={0.3}
          color1="#c99b66"
          color2="#ffffff"
          color3="#111111"
          enableMouseInteraction={true}
          mouseInfluence={1.5}
        />
      </div>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedBanner />
        <ProductGrid />
        <FindUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
