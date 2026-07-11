import React from 'react';
import VeloceLogo from './VeloceLogo';
import LineWaves from './LineWaves';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="featured-banner-waves">
        <LineWaves
          speed={0.15}
          innerLineCount={20}
          outerLineCount={24}
          warpIntensity={0.6}
          rotation={60}
          edgeFadeWidth={0.15}
          colorCycleSpeed={0.5}
          brightness={0.8}
          color1="#b0b0b0"
          color2="#cccccc"
          color3="#9c8b76"
          enableMouseInteraction={true}
          mouseInfluence={1.2}
        />
      </div>
      <div className="footer-main container">
        <div className="footer-logo-wrapper">
          <VeloceLogo className="footer-logo-giant" color="var(--color-black)" />
        </div>
        <p className="footer-tagline font-display text-uppercase">
          The Zero-Proof Aperitif for Modern Living.
        </p>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} VÉLOCE. All rights reserved.
        </p>
      </div>
      <div className="checkerboard" style={{ position: 'relative', zIndex: 1 }}></div>
    </footer>
  );
}
