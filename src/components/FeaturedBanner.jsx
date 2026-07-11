import React from 'react';
import featuredImage from '../assets/primavera_featured.png';

export default function FeaturedBanner() {
  return (
    <section className="featured-banner reveal-on-scroll">
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
    </section>
  );
}

