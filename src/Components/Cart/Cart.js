import React, { useContext } from 'react';
import { HiInformationCircle, HiTag } from 'react-icons/hi';
import { ImArrowDown2, ImArrowUp2 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import './cart.css';

export const Cart = () => {
  const { cart, setCart, emptyCart, removeItem, getTotal } =
    useContext(CartContext);

  const handleQuantityMinus = (id) => {
    const newCart = [...cart];
    newCart.map((item) => {
      if (item.quantity > 1) {
        item.id === id && (item.quantity -= 1);
      }
    });
    setCart(newCart);
  };
  const handleQuantityPlus = (id) => {
    const newCart = [...cart];
    newCart.map((item) => {
      if (item.quantity < item.stock) {
        item.id === id && (item.quantity += 1);
      }
    });
    setCart(newCart);
  };

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
            <Link to={`/productDetails/${item.id}`} className="nav-link">
              <img
                src={item.img}
                alt={`${item.name} ${item.description}`}
                className="item-card-img --cart"
              ></img>
            </Link>
            <Link
              to={`/productDetails/${item.id}`}
              className="nav-link --underline"
            >
              <p className="item-card-product-name">{item.name}</p>
            </Link>
            <p className="item-card-description">
              <HiInformationCircle className="item-card-icon" />
              {item.description}
            </p>
            <p className="item-card-price ">
              <HiTag className="item-card-icon" /> ${item.price}
            </p>

            <div className="quantity">
              <button className="quantity-btn">
                <ImArrowDown2
                  className="qty-icon"
                  onClick={() => handleQuantityMinus(item.id)}
                />
              </button>
              <p className="item-card-price --qty">{`Qty: ${item.quantity}`}</p>

              <button className="quantity-btn">
                <ImArrowUp2
                  className="qty-icon"
                  onClick={() => handleQuantityPlus(item.id)}
                />
              </button>
            </div>

            <p className="item-card-price">{`Subtotal: $${
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
      <div className="cart-total">
        <p className="cart-total-text">{`Total: $${getTotal()}`}</p>
        <button className="btn-item-cart-delete" onClick={emptyCart}>
          Empty Cart
        </button>
        <button className="btn-item-cart-delete">Proceed to checkout</button>
      </div>
    </div>
  );
};
