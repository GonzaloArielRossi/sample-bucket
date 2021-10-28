import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

import navLogo from '../../Assets/Images/nav-logo.png';
import { CartContext } from '../../Context/CartContext';

import { CartWidget } from './CartWidget';

import './NavBar.css';

export const NavBar = () => {
  // Get current location to change de nav background color
  const location = useLocation().pathname;
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const navClasses = ['nav-link', !showCart && '--margin-rigth'];

  useEffect(() => {
    setShowCart(cart.length !== 0);
  }, [cart]);

  return (
    <header>
      <nav className={`nav-menu ${location === '/' && '--home'}`}>
        <Link className="nav-logo-link" to="/">
          <img alt="sample bucket logo" className="nav-logo" src={navLogo} />
        </Link>
        <NavLink
          activeClassName="nav-active-link"
          className="nav-link"
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          activeClassName="nav-active-link"
          className="nav-link"
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          activeClassName="nav-active-link"
          className="nav-link"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          activeClassName="nav-active-link"
          className={navClasses.join(' ')}
          to="/sign-up"
        >
          Sign-Up
        </NavLink>
        {showCart && (
          <NavLink className="nav-link" to="/cart">
            <CartWidget />
          </NavLink>
        )}
      </nav>
    </header>
  );
};
