import React from 'react';
import MatchingCollege from './components/matchingCollege';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/college'} component={MatchingCollege} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
}

export default App;
