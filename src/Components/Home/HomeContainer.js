import React, { useRef } from 'react';

import { Featured } from './Featured';
import { Hero } from './Hero';
import { Details } from './Details';
import { TestimonialsContainer } from './TestimonialsContainer';
import './HomeContainer.css';
import { PlayOnline } from './PlayOnline';

export const HomeContainer = () => {
  const heroRef = useRef();
  const featuredRef = useRef();
  const testimonialRef = useRef();

  return (
    <div>
      <Hero ref={heroRef} />
      <Details />
      <Featured ref={featuredRef} />
      <PlayOnline />
      <TestimonialsContainer ref={testimonialRef} />
    </div>
  );
};
