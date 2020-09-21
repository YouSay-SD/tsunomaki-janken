import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { respondBelow } from '../helpers/breakPoints';

const NavbarStyled = styled.nav`
  text-align: center;

  a {
    font-size: 45px;
    color: ${ props => props.theme.colors.primary };

    /* Mobile */
    ${respondBelow.sm`
      font-size: 25px;
    `}
  }
`;

export const Navbar = () => {
  return (
    <NavbarStyled>

      <NavLink 
        activeClassName="active"
        exact
        to="/janken"
      >
        Start Game!
      </NavLink>
      
    </NavbarStyled>
  )
}
