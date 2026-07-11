import React from 'react';
import LineWaves from './LineWaves';

export default function About() {
  return (
    <section id="about" className="about-section reveal-on-scroll">
      <div className="featured-banner-waves">
        <LineWaves
          speed={0.18}
          innerLineCount={24}
          outerLineCount={28}
          warpIntensity={0.6}
          rotation={45}
          edgeFadeWidth={0.2}
          colorCycleSpeed={0.5}
          brightness={0.8}
          color1="#b0b0b0"
          color2="#cccccc"
          color3="#9c8b76"
          enableMouseInteraction={true}
          mouseInfluence={1.2}
        />
      </div>
      <div className="about-content container">
        <p className="about-text font-display text-uppercase">
          VÉLOCE is the zero-proof aperitif for modern living. 
          Crafted with super herbs and nutraceuticals to 
          elevate your well-being, without compromising the 
          sophisticated ritual of the aperitif.
        </p>
        <a href="#about-more" className="btn-pill btn-pill-white about-btn">
          About Us
        </a>
      </div>
    </section>
  );
}
