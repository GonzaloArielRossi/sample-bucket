import React from 'react';
import '../ItemDetailContainer/ItemDetailContainer.css';

export const ItemCounter = ({ quantity, setQuantity, stock }) => {
  return (
    <>
      <button
        className="item-details-btn --quantity"
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
      >
        -
      </button>
      <p className="item-details-counter">{quantity}</p>
      <button
        className="item-details-btn --quantity"
        onClick={() => quantity < stock && setQuantity(quantity + 1)}
      >
        +
      </button>
    </>
  );
};
