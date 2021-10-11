import React from 'react';
import './Testimonials.css';

export const Testimonials = ({ img, name, content }) => {
  return (
    <div>
      <div className="testimonials-flex">
        <img src={img} alt={name} className="testimonials-img"></img>
        <p className="testimonials-text">{content}</p>
        <p className="testimonials-name">{name}</p>
      </div>
    </div>
  );
};
