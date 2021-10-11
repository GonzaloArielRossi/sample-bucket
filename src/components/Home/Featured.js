import React from 'react';
import Billboard from '../../Assets/Images/featured-logos/billboard.svg';
import Complex from '../../Assets/Images/featured-logos/complex.svg';
import TheVerge from '../../Assets/Images/featured-logos/theverge.svg';
import Variety from '../../Assets/Images/featured-logos/variety.svg';
import Wired from '../../Assets/Images/featured-logos/wired.svg';
import './Featured.css';

export const Featured = () => {
  return (
    <section className="features-main">
      <div className="features-container">
        <div className="features-feature ">
          <div className="features-logo-flex">
            <h2 className="features-title">FEATURED IN</h2>
            <img
              src={Billboard}
              alt="billboard logo"
              className="features-img"
            ></img>
            <img
              src={Complex}
              alt="billboard logo"
              className="features-img"
            ></img>
            <img
              src={TheVerge}
              alt="billboard logo"
              className="features-img"
            ></img>
            <img
              src={Variety}
              alt="billboard logo"
              className="features-img"
            ></img>
            <img
              src={Wired}
              alt="billboard logo"
              className="features-img"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
