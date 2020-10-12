import React from 'react';
import { Container, Title, Background } from './styles/hero';

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Background = function HeroBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

