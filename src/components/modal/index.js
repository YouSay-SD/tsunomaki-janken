import React from 'react';
import { Container, Form, Title, Background, Message } from './styles/modal';

export default function Modal({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Modal.Form = function ModalForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
}

Modal.Title = function ModalTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Modal.Background = function ModalBackground({ children, ...restProps }) {
  return <Background {...restProps}>{children}</Background>;
}

Modal.Message = function ModalMessage({ children, ...restProps }) {
  return <Message {...restProps}>{children}</Message>;
}
