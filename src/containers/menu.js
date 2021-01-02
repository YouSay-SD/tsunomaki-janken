import React from 'react';
import { Menu } from '../components';
import { animated, useSprings } from 'react-spring';
import { ModalContainer } from './modal';
import { useDispatch } from 'react-redux';
import { startGoogleLogin } from '../actions/auth';
import { startFacebookLogin } from '../actions/auth';
import { NavLink } from 'react-router-dom';

export function MenuContainer() {
  const dispatch = useDispatch();
  const text = [...'Start Game!'];

  const base = {
    config: { mass: 5, tension: 2000, friction: 200 },
    from: { transform: 'translateX(100px)', opacity: 0 },
    to: { transform: 'translateX(0px)', opacity: 1 },
  }

  const springs = useSprings(text.length, text.map((t, i) => ({ ...base, delay: 100 * i })))

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const handleFacebookLogin = async () => {
    await dispatch(startFacebookLogin());
    
  }

  return (
    <Menu>
      <Menu.Logo>
        <img src="/images/logos/logo.png" title="watame-logo" alt="watame-logo" />
      </Menu.Logo>

      <Menu.Navbar>
        <ModalContainer 
          button={
            <div style={{cursor: 'pointer'}}>
              {springs.map((s, i) => (
                <animated.span key={`char${i}`} style={s}>
                  {text[i] === ' ' ? <>&nbsp;</> : text[i]}
                </animated.span>
              ))}
            </div>
          } 
        >
          <button onClick={handleGoogleLogin}>Login Google</button>
          <button onClick={handleFacebookLogin}>Login Facebook</button>
        </ModalContainer>

        <NavLink
          activeClassName="active"
          exact
          to="/janken"
        >
          janken
        </NavLink>

        <NavLink
          activeClassName="active"
          exact
          to="/message-board"
        >
          message board
        </NavLink>
      </Menu.Navbar>
    </Menu>
  )
}
