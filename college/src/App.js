import React, { useState, useEffect, useContext, createContext } from 'react';
import AuthRoute from './auth/AuthRoute';
import MatchingCollege from './components/matchingCollege';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import { Link } from 'react-router-dom';

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
  console.log('got in app.js');

  //check if user is loggedin
  const [user, setUser] = useState(null);
  //const authenticated = user != null;
  const { auth, setAuth, getAuth } = useContext(AuthContext);
  //here u need to call once everytime reloads, so useEffect
  //here get the token from the web
  //null if not found
  const token = window.localStorage.getItem('token');

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

  //const login = check();
  console.log('current Auth in app js');
  console.log(getAuth());
  console.log('auth variable');
  console.log(auth);
  //const ThemeContext = createContext(authenticated);
  return (
    <Router>
      <Header />
      <AuthProvider>
        <Switch>
          <AuthRoute
            authenticated={getAuth()}
            path='/profile'
            render={(props) => <Profile user={user} {...props} />}
          />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/college'} component={MatchingCollege} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/signup'} component={Signup} />
          <Redirect from={'*'} to={'/'} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
