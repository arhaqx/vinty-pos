import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedBanner from './components/FeaturedBanner';
import ProductGrid from './components/ProductGrid';
import FindUs from './components/FindUs';
import Footer from './components/Footer';

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
