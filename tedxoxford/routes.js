import React from 'react';
import { Home } from './src/Home';
import { About } from './views/About';
import { Talks } from './component'
import { NavBar } from './components/NavBar';
import { Route, Switch, Redirect } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/">
          <Redirect to="/Home" />
        </Route>
        <Route exact path="/About" component={About} />
        <Route exact path="/talks" component={Talks} />
      </Switch>
    </div>
  );
};