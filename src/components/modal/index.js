import React from 'react';
import { Container, Background, Box } from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Box = function ModalBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
}

Modal.Background = function ModalBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}