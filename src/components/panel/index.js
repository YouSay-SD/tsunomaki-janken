import React from 'react';
import { Container, Title } from './styles/panel';

export default function Panel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Panel.Title = function PanelTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

