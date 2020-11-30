import React from 'react';
import { Container, Content, Grid } from './styles/board';

export default function Board({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Board.Content = function BoardContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
}

Board.Grid = function BoardGrid({ children, ...restProps }) {
  return <Grid className="js-masonry-grid" {...restProps}>{children}</Grid>;
}