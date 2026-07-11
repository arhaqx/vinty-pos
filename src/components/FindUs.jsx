import React from 'react';
import findUsImage from '../assets/find_us_hand.png';
import LineWaves from './LineWaves';

export default function FindUs() {
  return (
    <section id="stocklists" className="find-us-section">
      <div className="find-us-container">
        <div className="find-us-sidebar font-heading text-uppercase">
          <div className="sidebar-word">Lavande</div>
          <div className="sidebar-word">Spezia</div>
          <div className="sidebar-word">Primavera</div>
          <div className="sidebar-word highlighted">Find Us</div>
        </div>
        
        <div className="find-us-content">
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
          
          <div className="find-us-header-text">
            <p className="find-us-desc font-display text-uppercase">
              Experience the refined taste of VÉLOCE. Visit our premium stocklists for your next alcohol-free aperitif.
            </p>
          </div>
          
          <div className="find-us-image-container">
            <img 
              src={findUsImage} 
              alt="Hand holding a VÉLOCE cocktail glass" 
              className="find-us-img" 
            />
          </div>
          
          <div id="contact" className="find-us-footer">
            <div className="footer-links-col">
              <a href="#stocklists" className="footer-link font-display text-uppercase">Find Stocklists</a>
              <a href="#about" className="footer-link font-display text-uppercase">About</a>
            </div>
            <div className="footer-links-col contact-col">
              <a href="tel:0463554567" className="footer-link font-display text-uppercase">(046) 355-4567</a>
              <a href="mailto:hello@veloce.com" className="footer-link font-display text-uppercase">hello@veloce.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
