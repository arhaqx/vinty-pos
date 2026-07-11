import React from 'react';
import featuredImage from '../assets/primavera_featured.png';
import LineWaves from './LineWaves';

export default function FeaturedBanner() {
  return (
    <section className="featured-banner reveal-on-scroll">
      <div className="featured-banner-waves">
        <LineWaves
          speed={0.25}
          innerLineCount={32}
          outerLineCount={36}
          warpIntensity={0.8}
          rotation={-45}
          edgeFadeWidth={0.1}
          colorCycleSpeed={0.8}
          brightness={0.3}
          color1="#c99b66"
          color2="#ffffff"
          color3="#111111"
          enableMouseInteraction={true}
          mouseInfluence={1.5}
        />
      </div>
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

