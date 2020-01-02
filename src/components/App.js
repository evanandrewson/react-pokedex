import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Header from './Header';
import AllPokemon from '../containers/AllPokemon';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/:page' component={AllPokemon}/>
      </Switch>
    </Router>
  );
};

export default App;
