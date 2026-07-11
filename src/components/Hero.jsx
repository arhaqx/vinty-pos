import React from 'react';
import heroImage from '../assets/hero_cocktails.png';
import SplitText from '../bits';
import GradualBlur from './GradualBlur';

export default function Hero() {
  return (
    <section className="hero-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="hero-container">
        <div className="hero-text-block">
          <SplitText
            text="The only spirit-free aperitif that tastes as good as it makes you feel."
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            delay={60}
            duration={1.2}
            className="hero-headline font-heading"
          />
          <a href="#products" className="btn-pill btn-pill-white hero-btn">
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
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={3}
        divCount={5}
        curve="bezier"
        exponential={true}
        opacity={1}
      />
    </section>
  );
}
