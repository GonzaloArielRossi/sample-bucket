import React from 'react';
import { CartWidget } from './CartWidget';
import navLogo from '../../Assets/Images/nav-logo.png';
import { NavLink, Link, useLocation } from 'react-router-dom';
import './NavBar.css';

export const NavBar = () => {
  // Get current location to change de nav background color
  const location = useLocation().pathname;

  return (
    <header>
      <nav className={`nav-menu ${location === '/' && '--home'}`}>
        <Link to="/" className="nav-logo-link">
          <img src={navLogo} alt="sample bucket logo" className="nav-logo" />
        </Link>
        <NavLink
          to="/home"
          activeClassName="nav-active-link"
          className="nav-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/products"
          activeClassName="nav-active-link"
          className="nav-link"
        >
          Products
        </NavLink>
        <NavLink
          to="/login"
          activeClassName="nav-active-link"
          className="nav-link"
        >
          Login
        </NavLink>
        <NavLink
          to="/sign-up"
          activeClassName="nav-active-link"
          className="nav-link"
        >
          Sign-Up
        </NavLink>
        <NavLink to="/cart" className="nav-link">
          <CartWidget />
        </NavLink>
      </nav>
    </header>
  );
};
