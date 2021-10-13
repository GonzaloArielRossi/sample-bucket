import React from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export const CartWidget = () => {
  // Placeholder de variable para el futuro
  const itemsInCart = 1;

  return (
    <div className="shopping-cart-combo">
      <HiOutlineShoppingCart alt="shopping cart" className="shopping-cart" />
      <p className="items-in-cart">{itemsInCart}</p>
    </div>
  );
};
