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

export const Routes = () => {

  const location = useLocation();
  const transitions = useTransition(location, location => location.pathname, {
    from: {opacity: 0},
    enter: {opacity: 1},
    leave: {opacity: 0},
  });

  return (
    <>
      {transitions.map(({item: location, props, key}) => (
        <animated.div style={props} key={key}>
          <Switch location={location}>
            <Route exact path="/" component={ Home } />
            <Route exact path="/janken" component={ Janken } />
            <Redirect to="/" />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}
