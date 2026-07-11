import React from 'react';
import lavandeImg from '../assets/product_lavande.png';
import primaveraImg from '../assets/product_primavera.png';
import speziaImg from '../assets/product_spezia.png';
import LineWaves from './LineWaves';

const products = [
  {
    id: 'lavande',
    title: 'Lavande',
    image: lavandeImg,
    description: 'A delicate floral aperitif with notes of lavender and camomile.',
    link: '#stocklists'
  },
  {
    id: 'primavera',
    title: 'Primavera',
    image: primaveraImg,
    description: 'A spiced and herbal drink with notes of citrus and spices.',
    link: '#stocklists'
  },
  {
    id: 'spezia',
    title: 'Spezia',
    image: speziaImg,
    description: 'A bold, spiced aperitif with notes of cinnamon and orange.',
    link: '#stocklists'
  }
];

export default function ProductGrid() {
  return (
    <section id="products" className="product-grid-section">
      <div className="featured-banner-waves">
        <LineWaves
          speed={0.12}
          innerLineCount={28}
          outerLineCount={32}
          warpIntensity={0.5}
          rotation={-30}
          edgeFadeWidth={0.1}
          colorCycleSpeed={0.4}
          brightness={0.8}
          color1="#e0e0e0"
          color2="#cccccc"
          color3="#9c8b76"
          enableMouseInteraction={true}
          mouseInfluence={1.0}
        />
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card reveal-on-scroll">
            <div className="product-card-header">
              <h3 className="product-title font-heading text-uppercase">{product.title}</h3>
            </div>
            <div className="product-image-container">
              <img src={product.image} alt={product.title} className="product-img" />
            </div>
            <div className="product-card-footer">
              <p className="product-desc">{product.description}</p>
              <a href={product.link} className="product-link font-display text-uppercase">
                View Product <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
        {/* Aesthetic 4th cell for visual balance in the 2x2 grid */}
        <div className="product-card grid-brand-cell reveal-on-scroll">
          <div className="brand-cell-content">
            <h4 className="brand-cell-tagline font-heading text-uppercase">Zero-Proof.</h4>
            <p className="brand-cell-text font-display text-uppercase">100% Sophistication.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
