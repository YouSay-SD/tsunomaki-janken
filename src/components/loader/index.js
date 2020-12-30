import React from 'react';
import { Container } from './styles/loader';

export default function Loader({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}