import React from 'react';
import { Container, Button } from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Button = function ModalButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
}