import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhonePage from './pages/PhonePage';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/:phoneId">
        <PhonePage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;