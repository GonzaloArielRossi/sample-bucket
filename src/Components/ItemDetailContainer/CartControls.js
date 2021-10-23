import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ItemCounter } from '../ItemCounter/ItemCounter';
import { CartContext } from '../../Context/CartContext';

export const CartControls = ({
  key,
  id,
  name,
  description,
  category,
  price,
  stock,
  img,
  details
}) => {
  const [outOfStock, setOutOfStock] = useState(true);

  useEffect(() => {
    stock == 0 ? setOutOfStock(true) : setOutOfStock(false);
  }, [outOfStock, stock]);

  const [quantity, setQuantity] = useState(1);
  const { addToCart, isInCart, cart, setCart } = useContext(CartContext);
  const cartBtnClasses = ['item-details-btn', outOfStock && '--disabled'];

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

  const modifyCartItem = (item) => {
    if (item.id == id) {
      item.quantity += quantity;
    }
  };

  return (
    <div className="cart-controls">
      <ItemCounter
        quantity={quantity}
        setQuantity={setQuantity}
        stock={stock}
      />

      <button
        className={cartBtnClasses.join(' ')}
        onClick={handleAddItemToCart}
        disabled={outOfStock}
      >
        {isInCart(id) ? 'ADD MORE' : 'ADD TO CART'}
      </button>

      <Link
        to={outOfStock ? '#' : '/cart'}
        className={cartBtnClasses.join(' ')}
        disabled={outOfStock}
        onClick={!isInCart(id) && handleAddItemToCart}
      >
        BUY
      </Link>

      <p className="stock-details">
        {stock ? `Stock: ${stock}` : 'Out of stock'}
      </p>
    </div>
  );
};
