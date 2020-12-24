import React from 'react';
import { Container, Button, Box, Title, Background } from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Button = function ModalButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}

Modal.Box = function ModalBox({ children, ...restProps }) {
  return <Box {...restProps}>{children}</Box>;
}

Modal.Title = function ModalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Modal.Background = function ModalBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}