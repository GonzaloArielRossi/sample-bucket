import React, { useContext, useState } from 'react';
import { HiTag, HiInformationCircle, HiArrowSmLeft } from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import './ItemDetail.css';

export const ItemDetail = ({
  id,
  name,
  description,
  category,
  price,
  stock,
  img,
  details
}) => {
  const { goBack } = useHistory();
  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart, cart, setCart } = useContext(CartContext);
  const [outOfStock, setOutOfStock] = useState(stock == 0);
  const modifyCartItem = (item) => {
    if (item.id == id) {
      item.quantity += quantity;
    }
  };

  const handleAddItemToCart = () => {
    if (!isInCart(id)) {
      const newItem = {
        id,
        name,
        description,
        category,
        price,
        stock,
        img,
        details,
        quantity
      };
      addToCart(newItem);
    } else {
      const newCart = [...cart];
      newCart.forEach((item) => modifyCartItem(item));
      setCart(newCart);
    }
  };
  
  const cartBtnClass = 'item-details-btn';

  return (
    <>
      <div>
        <HiArrowSmLeft
          className="go-back-icon"
          onClick={() => goBack()}
        ></HiArrowSmLeft>
        <div></div>
        <div className="item-card --detail">
          <img
            src={img}
            alt={`${name} ${description}`}
            className="item-card-img"
          ></img>
          <p className={`item-card-category --${category}`}>{category} </p>
          <p className="item-card-product-name">{name}</p>
          <p className="item-card-description">
            <HiInformationCircle className="item-card-icon" /> {description}
          </p>
          <p className="item-card-price">
            <HiTag className="item-card-icon" /> ${price}
          </p>
          <p className="item-card-description --details">{details}</p>
          <p className="stock-details">
            {stock ? `Stock: ${stock}` : 'Out of stock'}
          </p>
          {isInCart(id) ? (
            <Link to="/cart" className="item-details-btn --buy">
              GO TO CART
            </Link>
          ) : (
            <div className="cart-controls">
              <ItemCounter
                quantity={quantity}
                setQuantity={setQuantity}
                stock={stock}
              />
              <button
                className={`${cartBtnClass} --main {outOfStock && '--disabled'}`}
                onClick={handleAddItemToCart}
                disabled={outOfStock}
              >
                ADD TO CART
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
