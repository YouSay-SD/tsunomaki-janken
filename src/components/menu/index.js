import React from 'react';
import { Container, Logo, Navbar } from './styles/menuStyled';

export default function Menu({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Menu.Logo = function MenuLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
}

Menu.Navbar = function MenuNavbar({ children, ...restProps }) {
  return <Navbar {...restProps}>{children}</Navbar>;
}


