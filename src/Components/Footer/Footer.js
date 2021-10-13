import React from 'react';
import FooterLogo from '../../Assets/Images/nav-logo.png';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti';
import { AiFillInstagram } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-grid-container">
        <div className="footer-first-column">
          <img
            src={FooterLogo}
            alt="sample bucket logo"
            className="footer-logo"
          ></img>
          <div className="footer-socials-flex">
            <TiSocialFacebook className="footer-socials-logo" />
            <TiSocialTwitter className="footer-socials-logo" />
            <TiSocialYoutube className="footer-socials-logo" />
            <AiFillInstagram className="footer-socials-logo" />
          </div>
          <p className="footer-text" translate="no">
            Copyright © 2021 by <span translate="no">Sample Bucket</span>,
            <br /> Inc. All rights reserved.
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-title">Contact Us</p>
          <p className="footer-text" translate="no">
            1833 Olga Cosettinni, Buenos Aires
          </p>
          <p className="footer-text">(851) 213-5090</p>
          <p className="footer-text" translate="no">
            support@samplebucket.com
          </p>
        </div>
        <div className="footer-column">
          <p className="footer-title">Account</p>
          <Link to="/sign-up" className="footer-link">
            Create Account
          </Link>
          <Link to="/login" className="footer-link">
            Login
          </Link>
          <Link to="/cart" className="footer-link">
            Cart
          </Link>
        </div>
        <div className="footer-column">
          <p className="footer-title">Company</p>
          <Link to="/-up" className="footer-link">
            About <span translate="no">Sample Bucket</span>
          </Link>
          <Link to="/" className="footer-link">
            Testimonials
          </Link>
          <Link to="/" className="footer-link">
            Featured In
          </Link>
        </div>
        <div className="footer-column">
          <p className="footer-title">Our Products</p>
          <Link to="/products/TRAP" className="footer-link">
            Trap Loops
          </Link>
          <Link to="/products/RAP" className="footer-link">
            Rap Loops
          </Link>
          <Link to="/products/DRILL" className="footer-link">
            Drill Loops
          </Link>
        </div>
      </div>
    </footer>
  );
};
