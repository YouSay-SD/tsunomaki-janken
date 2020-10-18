import React from 'react';
import { Container } from './styles/video';

export default function Video({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}