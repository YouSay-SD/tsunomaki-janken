import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes } from './Routes';

export const AppRouter = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}
