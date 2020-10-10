import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import HomeScreen from '../components/homeScreen';
import { JankenScreen } from '../components/janken/JankenScreen';

export const AppRouter = () => {
  return (
    <Router>

      <div>

      <Switch>

        <Route exact path="/" component={ HomeScreen } />

        <Route exact path="/janken" component={ JankenScreen } />

        <Redirect to="/" />

      </Switch>

      </div>
      
    </Router>
  )
}
