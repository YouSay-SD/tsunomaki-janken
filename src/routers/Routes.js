import React, { useEffect } from 'react';
import { 
  useLocation,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { firebase } from '../firebase/firebase-config';
import { animated, useTransition } from 'react-spring';
import Home from '../pages/home';
import Janken from '../pages/janken';
import MessageBoard from '../pages/message-board';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';

export const Routes = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    firebase.auth().onAuthStateChanged(( user ) => {
      if ( user?.uid ) {
        dispatch(login( user.uid, user.displayName, user.photoURL ));
      }
    })
  }, [dispatch])

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
            <Route exact path="/janken" component={ Janken } />
            <Route exact path="/message-board" component={ MessageBoard } />
            <Route exact path="/" component={ Home } />
            <Redirect to="/" />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}
