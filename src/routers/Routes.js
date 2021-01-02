import React from 'react';
import { 
  useLocation,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { animated, useTransition } from 'react-spring';
import Home from '../pages/home';
import Janken from '../pages/janken';
import MessageBoard from '../pages/message-board';

export const Routes = () => {

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      position: 'absolute',
      width: '100%',
      opacity: 0,
      transform: 'translate(100%,0)'
    },
    enter: { opacity: 1, transform: 'translate(0%,0)' },
    leave: { opacity: 0, transform: 'translate(-50%,0)' }
  });

  return (
    <>
      {transitions.map(({item, props, key}) => (
        <animated.div style={props} key={key}>
          <Switch location={item}>
            <Route exact path="/" component={ Home } />
            <Route exact path="/janken" component={ Janken } />
            <Route exact path="/message-board" component={ MessageBoard } />
            <Redirect to="/" />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}
