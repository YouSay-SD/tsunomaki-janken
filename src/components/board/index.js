import React from 'react';
import { Container } from './styles/board';

export default function Board({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// Board.Background = function BoardBackground({ children, ...restProps }) {
//   return <Background {...restProps}>{children}</Background>;
// }