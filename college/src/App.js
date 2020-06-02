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

import { AuthContext } from './contexts/authContext';

//now need to use context

//<Route exact path={'/profile'} component={Profile} />;
function App() {
  console.log('got in app.js');

  //check if user is loggedin
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  //here u need to call once everytime reloads, so useEffect
  //here get the token from the web
  //null if not found
  const token = window.localStorage.getItem('token');
  useEffect(() => {
    console.log('in useEffect boi!');
    async function getUserData() {
      console.log('before awaity call');
      const response = await getLoginInfo({ token });
      console.log('after await call');
      return response;
    }
    getUserData().then((response) => {
      console.log('here we can use the data');
      console.log(response.data.info.username);
      setUser(response.data.info.username);
      console.log('end of the data');
    });
    console.log('right before is the promise data');
  }, []);

  //const login = check();
  console.log('hello');
  console.log(user);
  console.log(authenticated);

  return (
    <Router>
      <Header />
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
