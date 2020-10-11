import React from 'react';
import { Hero } from '../components';

export function HeroContainer({ children }) {
  return (
    <Hero>{ children }</Hero>
  )
}
