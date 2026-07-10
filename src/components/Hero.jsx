import React from 'react';
import heroImage from '../assets/hero_cocktails.png';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-text-block">
          <h1 className="hero-headline font-heading text-uppercase">
            The only spirit-free aperitif that tastes as good as it makes you feel.
          </h1>
          <a href="#products" className="btn-pill btn-pill-black hero-btn">
            Shop Now
          </a>
        </div>
        <div className="hero-image-block">
          <img 
            src={heroImage} 
            alt="Three cocktail glasses under dramatic shadows on marble" 
            className="hero-image" 
          />
        </div>
      </div>
    </section>
  );
}
