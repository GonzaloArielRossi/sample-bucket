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
              alt="billboard logo"
              className="features-img"
              src={Billboard}
            ></img>
            <img
              alt="billboard logo"
              className="features-img"
              src={Complex}
            ></img>
            <img
              alt="billboard logo"
              className="features-img"
              src={TheVerge}
            ></img>
            <img
              alt="billboard logo"
              className="features-img"
              src={Variety}
            ></img>
            <img
              alt="billboard logo"
              className="features-img"
              src={Wired}
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};
