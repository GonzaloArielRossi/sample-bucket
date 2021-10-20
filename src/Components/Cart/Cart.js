import React, { useContext } from 'react';
import { HiInformationCircle, HiTag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './cart.css';

export const Cart = () => {
  const { cart, emptyCart, removeItem, getTotal } = useContext(CartContext);

  return cart.length === 0 ? (
    <div className="cart-empty-flex">
      <h2 className="cart-empty-title">Your cart is empty</h2>
      <Link to="/products" className="btn-item-cart-delete --center">
        Check our products
      </Link>
    </div>
  ) : (
    <div className="item-cart-main">
      {cart.map((item, key) => (
        <div key={key}>
          <div className="item-cart-flex">
            <img
              src={item.img}
              alt={`${item.name} ${item.description}`}
              className="item-card-img --cart"
            ></img>
            <p className="item-card-product-name">{item.name}</p>
            <p className="item-card-description">
              <HiInformationCircle className="item-card-icon" />{' '}
              {item.description}
            </p>
            <p className="item-card-price">
              <HiTag className="item-card-icon" /> ${item.price}
            </p>
            <p className="item-card-price">{item.quantity}</p>
            <p className="item-card-price">{`$${
              item.quantity * item.price
            }`}</p>
            <button
              className="btn-item-cart-delete"
              onClick={() => removeItem(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="cartTotal">
        <p className="cart-total-text">{`Total: $${getTotal()}`}</p>
        <button className="btn-item-cart-delete" onClick={emptyCart}>
          Empty Cart
        </button>
        <button className="btn-item-cart-delete">Proceed to checkout</button>
      </div>
    </div>
  );
};
