import React from 'react';
import { Menu } from '../components';
import { NavLink } from 'react-router-dom';
import { animated, useSprings } from 'react-spring';


export function MenuContainer() {
  const text = [...'Start Game!'];

  const base = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { transform: 'translateX(100px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
  }

  const springs = useSprings(text.length, text.map((t, i) => ({ ...base, delay: 100 * i })))

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
          {springs.map((s, i) => (
            <animated.span key={`char${i}`} style={s}>
              {text[i] === ' ' ? <>&nbsp;</> : text[i]}
            </animated.span>
          ))}
        </NavLink>
      </Menu.Navbar>
    </Menu>
  )
}
