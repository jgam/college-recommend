import React, { useState, useEffect, useContext } from 'react';
import AuthRoute from './auth/AuthRoute';
import MatchingCollege from './components/matchingCollege';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Logout from './components/logout';

import { getLoginInfo } from './components/api/backendAPI';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';

import AuthContext from './contexts/AuthContext';
import AuthProvider from './components/contexts/Auth.Context';

//now need to use context

//<Route exact path={'/profile'} component={Profile} />;
function App() {
  //This loginc all needs to be in context?
  const [user, setUser] = useState(null);
  //const authenticated = user != null;
  const { auth } = useContext(AuthContext);

  const token = window.localStorage.getItem('token');

  //maybe use Context for this as well
  useEffect(() => {
    console.log('in useEffect boi!');
    async function getUserData() {
      const response = await getLoginInfo({ token });
      return response;
    }
    getUserData().then((response) => {
      setUser(response.data.info.username);
    });
  }, []);

  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <AuthRoute
            authenticated={auth}
            path='/profile'
            render={(props) => <Profile user={user} {...props} />}
          />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/college'} component={MatchingCollege} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/signup'} component={Signup} />
          <Route exact path={'/logout'} component={Logout} />
          <Redirect from={'*'} to={'/'} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
