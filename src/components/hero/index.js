import React from 'react';
import { Container } from './styles/hero';

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}