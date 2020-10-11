import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
// import { JankenScreen } from '../components/janken/JankenScreen';
import Home from '../pages/home';

export const AppRouter = () => {
  return (
    <Router>

      <div>

      <Switch>

        <Route exact path="/" component={ Home } />

        {/* <Route exact path="/janken" component={ JankenScreen } /> */}

        <Redirect to="/" />

      </Switch>

      </div>
      
    </Router>
  )
}
