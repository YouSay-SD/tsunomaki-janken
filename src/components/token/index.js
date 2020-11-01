import React from 'react';
import { Container, Image } from './styles/token';

export default function Token({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Token.Image = function TokenImage({ children, ...restProps }) {
  return <Image {...restProps}>{children}</Image>;
}



