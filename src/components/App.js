import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import AllPokemon from '../containers/AllPokemon';
import Detail from './detail/Detail';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={AllPokemon}/>
        <Route exact path='/detail/:id' component={Detail} />
        <Route exact path='/:search/:page' component={AllPokemon}/>
      </Switch>
    </Router>
  );
};

export default App;
