import React from 'react';
import { Container, Content, Title, Grid } from './styles/panel';

export default function Panel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Panel.Content = function PanelContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
}

Panel.Title = function PanelTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
}

Panel.Grid = function PanelGrid({ children, ...restProps }) {
  return <Grid {...restProps}>{children}</Grid>;
}


