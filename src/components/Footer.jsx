import React from 'react';
import VeloceLogo from './VeloceLogo';
import LineWaves from './LineWaves';

export default function Footer() {
  return (
    <footer className="site-footer">
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
      <div className="footer-main container">
        <div className="footer-logo-wrapper">
          <VeloceLogo className="footer-logo-giant" color="var(--color-white)" />
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
