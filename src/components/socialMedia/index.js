import React from 'react';
import { Container } from './styles/socialMedia';

export default function SocialMedia({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
