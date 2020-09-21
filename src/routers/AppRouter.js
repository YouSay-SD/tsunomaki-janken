import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';

export const AppRouter = () => {
  return (
    <Router>

      <div>

      <Switch>

        <Route exact path="/" component={ HomeScreen } />

        <Redirect to="/" />

        {/* <Route path="/auth" component={  } /> */}

      </Switch>

      </div>
      
    </Router>
  )
}
