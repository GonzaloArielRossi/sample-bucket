import React from 'react';
import { FcOk } from 'react-icons/fc';
import './Orders.css';

export const Order = ({ date, id, items, total, buyer }) => {
  const newDate = new Date(date * 1000);

  return (
    <div className="order-main">
      <div className="order-flex">
        <p className="line">Date: {newDate.toString()}</p>
        <p className="line">Mail: {buyer.email}</p>
        <p className="line">Order Id: {id}</p>

        {items.map((item) => (
          <div key={item.key} className="order-item">
            <p className="line">{`Item: ${item.id}`}</p>
            <p className="line">{`Quantity:${item.quantity}`}</p>
            <p className="line">{`Price: $${item.price}`}</p>
          </div>
        ))}

        <p className="line">Total: ${total}</p>
      </div>
      <div className="order-status-flex">
        <p className="success-text">
          An email with the download link has been sent successfully
        </p>
        <FcOk className="success-icon" />
      </div>
    </div>
  );
};
