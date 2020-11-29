import React from 'react';
import { Container, Content } from './styles/board';

export default function Board({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Board.Content = function BoardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
}