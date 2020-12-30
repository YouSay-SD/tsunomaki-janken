import React from 'react';
import { 
  useLocation,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Home from '../pages/home';
import Janken from '../pages/janken';
import MessageBoard from '../pages/message-board';

export const Routes = () => {

  const location = useLocation();

  return (
    <>
      <Switch location={location}>
        <Route exact path="/" component={ Home } />
        <Route exact path="/janken" component={ Janken } />
        <Route exact path="/message-board" component={ MessageBoard } />
        <Redirect to="/" />
      </Switch>
    </>
  )
}
