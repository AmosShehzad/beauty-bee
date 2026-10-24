import React, { useEffect } from 'react';

const featuredProducts = [
  {
    id: 1,
    name: "Glow & Radiance Face Wash",
    category: "Face Wash",
    price: "$18.00",
    rating: "★★★★★ (4.9)",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800",
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Rose Glow Fairness Cream",
    category: "Fairness Cream",
    price: "$24.00",
    rating: "★★★★★ (4.8)",
    image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Hydrating Honey Lotion",
    category: "Body Lotion",
    price: "$22.00",
    rating: "★★★★☆ (4.7)",
    image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&q=80&w=800",
    badge: "New"
  },
  {
    id: 4,
    name: "Vitamin C Brightening Serum",
    category: "Serum",
    price: "$29.00",
    rating: "★★★★★ (5.0)",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800",
    badge: "Trending"
  }
];

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content animate-fade">
          <span className="hero-badge">✨ 100% Organic & Gentle Care</span>
          <h1 className="hero-title">
            Unveil Your Natural <span>Glow</span> Every Day.
          </h1>
          <p className="hero-subtitle">
            Formulated with pure honey extract, floral oils, and dermatologically tested ingredients to give your skin the delicate care it deserves.
          </p>
          <a href="#products" className="btn-primary">Shop Collection</a>
        </div>

        <div className="hero-img-container">
          <img 
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=800" 
            alt="Beauty Bee Cosmetics" 
            className="hero-img-card animate-float" 
          />
        </div>
      </section>

      {/* Highlights Bar - Sleek Minimalist SVGs */}
      <section className="features">
        <div className="feature-card reveal reveal-delay-1">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 0 1 10 10c0 5.523-4.477 10-10 10S2 17.523 2 12A10 10 0 0 1 12 2z"/>
              <path d="M12 6v6l4 2"/>
            </svg>
          </div>
          <h4>100% Organic</h4>
          <p>Pure botanical extracts for sensitive skin</p>
        </div>

        <div className="feature-card reveal reveal-delay-2">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </div>
          <h4>Cruelty Free</h4>
          <p>Dermatologically formulated, never tested on animals</p>
        </div>

        <div className="feature-card reveal reveal-delay-3">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="15" height="13"/>
              <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
              <circle cx="5.5" cy="18.5" r="2.5"/>
              <circle cx="18.5" cy="18.5" r="2.5"/>
            </svg>
          </div>
          <h4>Free Express Shipping</h4>
          <p>Complimentary delivery on orders over $50</p>
        </div>

        <div className="feature-card reveal reveal-delay-4">
          <div className="feature-icon-wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          </div>
          <h4>Dermatologist Approved</h4>
          <p>Clinically tested and hypoallergenic formulas</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="products-section" id="products">
        <div className="section-header reveal">
          <h2>Our Bestsellers</h2>
          <p>Handpicked skincare essentials designed for smooth, glowing skin.</p>
        </div>

        <div className="products-grid">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className={`product-card reveal reveal-delay-${index + 1}`}>
              <div className="product-img-box">
                <span className="product-badge">{product.badge}</span>
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-title">{product.name}</h3>
                <div className="product-rating">{product.rating}</div>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button className="add-cart-btn">+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="about-section reveal" id="about" style={{ padding: '80px 8%', background: '#FFFFFF', textAlign: 'center' }}>
        <div className="section-header">
          <h2>About Beauty Bee</h2>
          <p style={{ maxWidth: '600px', margin: '15px auto 0', color: 'var(--text-muted)' }}>
            At Beauty Bee, we believe in celebrating natural radiance. All our formulas are crafted with cruelty-free, gentle ingredients designed to leave your skin healthy and blooming.
          </p>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer className="footer reveal" id="contact">
        <div className="footer-logo brand-font">🐝 Beauty Bee</div>
        <ul className="footer-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="copyright">© 2026 Beauty Bee Cosmetics. All Rights Reserved.</p>
      </footer>
    </div>
  );
}