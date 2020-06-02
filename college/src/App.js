import React, { useState } from 'react';
import AuthRoute from './auth/AuthRoute';
import MatchingCollege from './components/matchingCollege';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import { check } from './server/routes/api/auth/controller';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';

//<Route exact path={'/profile'} component={Profile} />;
function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;
  //const login = ;
  //here get the token from the web

  //null if not found
  const token = window.localStorage.getItem('token');

  //const login = check();

  return (
    <Router>
      <Switch>
        <AuthRoute
          authenticated={authenticated}
          path='/profile'
          render={(props) => <Profile user={user} {...props} />}
        />
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/college'} component={MatchingCollege} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/signup'} component={Signup} />
        <Redirect from={'*'} to={'/'} />
      </Switch>
    </Router>
  );
}

export default App;
