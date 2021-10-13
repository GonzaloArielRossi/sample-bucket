import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-main">
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-info-container">
            <h1 className="hero-info-main-text">
              Professional, high quality samples. Made for modern producers.
            </h1>
            <h2 className="hero-info-secondary-text">
              The best choice for making the tedious process of picking your
              samples, easy. Simple, yet robust kits, made by industry leaders.
            </h2>
            {/* <button className="hero-info-btn --cta">Check Our Products</button> */}
            <Link to={`/products`} className="hero-info-btn --cta">
              Try Sample Packs
            </Link>
            <button className="hero-info-btn --more-info">Learn More 👇</button>
          </div>
          <img src={logo} className="hero-image"></img>
        </div>
      </div>
    </section>
  );
};
