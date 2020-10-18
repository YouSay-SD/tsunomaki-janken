import React from 'react';
import { Container, Background } from './styles/heroStyled';

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Background = function HeroBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}