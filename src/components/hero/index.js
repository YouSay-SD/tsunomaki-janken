import React from 'react';
import { Container, Image } from './styles/hero';

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Image = function HeroImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
}