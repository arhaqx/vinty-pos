import React from 'react';
import VeloceLogo from './VeloceLogo';

export default function Footer() {
  return (
    <footer className="site-footer">
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
