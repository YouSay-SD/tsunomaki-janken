import React from 'react';
import { Container } from './styles/token';

export default function Token({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
