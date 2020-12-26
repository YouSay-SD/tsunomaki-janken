import React from 'react';
import { Container, Background } from './styles/image-slide';

export default function ImageSlide({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ImageSlide.Background = function ImageSlideBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}