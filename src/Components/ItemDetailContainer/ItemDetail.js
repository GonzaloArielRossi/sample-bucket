import React, { useContext, useState } from 'react';
import { HiTag, HiInformationCircle, HiArrowSmLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import './ItemDetail.css';

export const ItemDetail = ({
  key,
  name,
  description,
  category,
  price,
  img,
  details
}) => {
  return (
    <>
      <div>
        <div className="item-card --detail ">
          <img
            src={img}
            alt={`${name} ${description}`}
            className="item-card-img --img"
          ></img>

          <p className={`item-card-category --${category}`}>{category} </p>

          <p className="item-card-product-name">{name}</p>

          <p className="item-card-description --light">{details}</p>

          <p className="item-card-description">
            <HiInformationCircle className="item-card-icon" /> {description}
          </p>

          <p className="item-card-price --last">
            <HiTag className="item-card-icon" /> ${price}
          </p>
        </div>
      </div>
    </>
  );
};
