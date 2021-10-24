import React from 'react';
import '../ItemDetailContainer/ItemDetailContainer.css';

export const ItemCounter = ({ quantity, setQuantity, stock, outOfStock }) => {
  const cartBtnClasses = [
    'item-details-btn',
    '--quantity',
    outOfStock && '--disabled'
  ];
  return (
    <div className="item-counter-flex">
      <button
        className={cartBtnClasses.join(' ')}
        onClick={() => quantity > 1 && setQuantity(quantity - 1)}
        disabled={outOfStock}
      >
        -
      </button>
      <p className="item-details-counter">{quantity}</p>
      <button
        className={cartBtnClasses.join(' ')}
        onClick={() => quantity < stock && setQuantity(quantity + 1)}
        disabled={outOfStock}
      >
        +
      </button>
    </div>
  );
};
