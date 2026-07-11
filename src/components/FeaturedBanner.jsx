import React from 'react';
import featuredImage from '../assets/primavera_featured.png';
import GradualBlur from './GradualBlur';

export default function FeaturedBanner() {
  return (
    <section className="featured-banner reveal-on-scroll" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="featured-container container">
        <div className="featured-badge font-display text-uppercase">New</div>
        <div className="featured-image-wrapper">
          <img 
            src={featuredImage} 
            alt="Primavera featured aperitif glass" 
            className="featured-image" 
          />
          <h2 className="featured-title font-heading text-uppercase">Primavera</h2>
        </div>
        <p className="featured-subtitle font-display text-uppercase">
          A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.
        </p>
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

