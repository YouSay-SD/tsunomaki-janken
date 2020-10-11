import React from 'react';
import { Menu } from '../components';
import { NavLink } from 'react-router-dom';

export function MenuContainer() {
  return (
    <Menu>
      <Menu.Logo>
        <img src="/images/logos/logo.png" title="watame-logo" alt="watame-logo" />
      </Menu.Logo>

      <Menu.Navbar>
        <NavLink 
          activeClassName="active"
          exact
          to="/janken"
        >
          Start Game!
        </NavLink>
      </Menu.Navbar>
    </Menu>
  )
}
