import React from 'react';
import LineWaves from './LineWaves';

export default function About() {
  return (
    <section id="about" className="about-section reveal-on-scroll">
      <div className="featured-banner-waves">
        <LineWaves
          speed={0.2}
          innerLineCount={28}
          outerLineCount={32}
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
