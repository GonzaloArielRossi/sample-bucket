import React from 'react';

import Andrewhuang from '../../Assets/Images/testimonials/andrew-huang.png';
import Kshmr from '../../Assets/Images/testimonials/kshmr.png';
import KeshaLee from '../../Assets/Images/testimonials/kesha-lee.png';

import { Testimonials } from './Testimonials';

export const TestimonialsContainer = () => {
  return (
    <section className="testimonials-main">
      <div className="testimonials-grid">
        <h1 className="testimonials-title">
          What creators are saying about Sample Bucket
        </h1>
        <div className="testimonials-flex-container">
          <Testimonials
            content="I can always find what I’m looking for on Sample Bucket,
            whether it’s the exact sound I want or just a bit of inspiration."
            img={Andrewhuang}
            name="Andrew Huang"
          />
          <Testimonials
            content="Finally a way to buy samples that works.
          By paying a little at a time, producers can get legit access to the top sounds."
            img={Kshmr}
            name="Kshmr"
          />
          <Testimonials
            content="It’s been fun to dive into Sample Bucket’s creator community and explore tools
            that support my own creative process."
            img={KeshaLee}
            name="Kesha Lee"
          />
        </div>
      </div>
    </section>
  );
};
