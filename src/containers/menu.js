import React from 'react';
import { Menu } from '../components';
import { NavLink } from 'react-router-dom';
import { animated, useSprings } from 'react-spring';


export function MenuContainer() {
  const text = [...'Start Game!']
  const from = { transform: 'translateX(100px) scale(3)', opacity: 0 }
  const to = { transform: 'translateX(0px) scale(1)', opacity: 1 }

  const base = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: from,
    to: to,
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
