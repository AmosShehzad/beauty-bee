import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo brand-font">
        <span className="logo-icon">🐝</span> Beauty Bee
      </div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-actions">
        <button className="cart-btn">
          🛒 Cart (0)
        </button>
      </div>
    </nav>
  );
}