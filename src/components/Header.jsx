import React, { useState } from 'react';
import VeloceLogo from './VeloceLogo';

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="site-header">
      <div className="header-main container">
        <a href="/" className="header-logo-link">
          <VeloceLogo className="header-logo" color="var(--color-white)" height="42px" />
        </a>
        
        <div className="header-right">
          <div className="header-tagline font-display text-uppercase">
            The Zero-Proof Aperitif for Modern Living.
          </div>
          <div className="header-divider-line"></div>
          <nav className="header-nav">
            <a href="#about" className="nav-link font-display text-uppercase">About</a>
            <a href="#stocklists" className="nav-link font-display text-uppercase">Find Stocklists</a>
            <a href="#contact" className="nav-link font-display text-uppercase">Contact</a>
          </nav>
        </div>

        {/* Mobile menu button */}
        <button 
          className={`mobile-menu-toggle ${menuActive ? 'active' : ''}`} 
          onClick={() => setMenuActive(!menuActive)}
          aria-label="Toggle Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile nav overlay */}
      <nav className={`mobile-nav ${menuActive ? 'active' : ''}`}>
        <a href="#about" onClick={() => setMenuActive(false)} className="mobile-nav-link font-display text-uppercase">About</a>
        <a href="#stocklists" onClick={() => setMenuActive(false)} className="mobile-nav-link font-display text-uppercase">Find Stocklists</a>
        <a href="#contact" onClick={() => setMenuActive(false)} className="mobile-nav-link font-display text-uppercase">Contact</a>
      </nav>

      <div className="checkerboard"></div>
    </header>
  );
}
