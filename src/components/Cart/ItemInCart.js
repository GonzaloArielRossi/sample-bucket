import React from 'react';
import { HiInformationCircle, HiTag } from 'react-icons/hi';
import { fetchItems } from '../../Helpers/fetchItems';

export const ItemInCart = ({ id, name, description, category, price, img }) => {
  return (
    <div className="item-cart-main">
      <div className="item-cart-flex">
        <img
          src={img}
          alt={`${name} ${description}`}
          className="item-card-img --cart"
        ></img>
        <p className="item-card-product-name">{name}</p>
        <p className="item-card-description">
          <HiInformationCircle className="item-card-icon" /> {description}
        </p>
        <p className="item-card-price">
          <HiTag className="item-card-icon" /> ${price}
        </p>

        <button className="btn-item-cart-delete">Delete</button>
      </div>
    </div>
  );
};
