import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SignIn } from './pages/SignIn';
import { Home } from './pages/Home';

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
