import React from 'react';
import { Featured } from './Featured';
import { Hero } from './Hero';
import { Details } from './Details';
import { TestimonialsContainer } from './TestimonialsContainer';
import './HomeContainer.css';

export const HomeContainer = () => {
  return (
    <div>
      <Hero />
      <Details />
      <Featured />
      <TestimonialsContainer />
    </div>
  );
};
