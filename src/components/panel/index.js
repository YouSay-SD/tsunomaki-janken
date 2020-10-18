import React from 'react';
import { Container } from './styles/panel';

export default function Panel({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

// Menu.Logo = function MenuLogo({ children, ...restProps }) {
//   return <Logo {...restProps}>{children}</Logo>;
// }

