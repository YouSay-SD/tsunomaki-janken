import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from '../pages/home';
import Janken from '../pages/janken';

export const AppRouter = () => {
  return (
    <Router>

      <div>

      <Switch>

        <Route exact path="/" component={ Home } />

        <Route exact path="/janken" component={ Janken } />

        <Redirect to="/" />

      </Switch>

      </div>
      
    </Router>
  )
}
