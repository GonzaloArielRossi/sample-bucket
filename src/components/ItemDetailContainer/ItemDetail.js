import React from 'react';
import { HiTag, HiInformationCircle, HiArrowSmLeft } from 'react-icons/hi';
import { Link, useHistory } from 'react-router-dom';
import { SamplePad } from './SamplePads';

export const ItemDetail = ({ id, name, description, category, price, img }) => {
  const { goBack, push } = useHistory();
  return (
    <>
      <div className="item-detail-conatiner">
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
          <p className={`item-card-category --${category}`}>{category}</p>
          <p className="item-card-product-name">{name}</p>
          <p className="item-card-description">
            <HiInformationCircle className="item-card-icon" /> {description}
          </p>
          <p className="item-card-price">
            <HiTag className="item-card-icon" /> ${price}
          </p>
          <button className="item-card-btn">ADD TO CART</button>
        </div>
      </div>
    </>
  );
};
