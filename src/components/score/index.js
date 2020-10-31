import React from 'react';
import { Container, Box } from './styles/score';

export default function Score({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Score.Box = function ScoreBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
}
