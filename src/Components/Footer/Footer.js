import React from 'react';
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialYoutube
} from 'react-icons/ti';
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import FooterLogo from '../../Assets/Images/nav-logo.png';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-grid-container">
          <div className="footer-first-column">
            <img
              alt="sample bucket logo"
              className="footer-logo"
              src={FooterLogo}
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
            <Link className="footer-link" to="/signUp">
              Create Account
            </Link>
            <Link className="footer-link" to="/login">
              Login
            </Link>
            <Link className="footer-link" to="/cart">
              Cart
            </Link>
          </div>
          <div className="footer-column">
            <p className="footer-title">Company</p>
            <Link className="footer-link" to="/">
              About <span translate="no">Sample Bucket</span>
            </Link>
            <Link className="footer-link" to="/">
              Testimonials
            </Link>
            <Link className="footer-link" to="/">
              Featured In
            </Link>
          </div>
          <div className="footer-column">
            <p className="footer-title">Our Products</p>
            <Link className="footer-link" to="/products/TRAP">
              Trap Loops
            </Link>
            <Link className="footer-link" to="/products/RAP">
              Rap Loops
            </Link>
            <Link className="footer-link" to="/products/DRILL">
              Drill Loops
            </Link>
          </div>
        </div>
      </div>
      <div className="made-by">
        <p>Made by Gonzalo Ariel Rossi</p>
        <a
          href="https://github.com/GonzaloArielRossi/sample-bucket"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub className="footer-socials-logo --color" />
        </a>
        <a
          href="https://www.linkedin.com/in/gonzalo-ariel-rossi/"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillLinkedin className="footer-socials-logo --color" />
        </a>
      </div>
    </footer>
  );
};
