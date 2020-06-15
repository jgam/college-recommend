//reacts
import React, { useState, useEffect, useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

//AuthRoute + contexts
import AuthRoute from './auth/AuthRoute';
import AuthContext from './contexts/AuthContext';
import AuthProvider from '../src/contexts/components/Auth.Context';

//cookies
import { getToken } from './auth/tokens';

//templates
import MatchingCollege from './components/matchingCollege';
import Login from './components/login';
import Signup from './components/signup';
import Profile from './components/profile';
import Logout from './components/logout';
import MyColleges from './components/myColleges';

import { getLoginInfo } from './components/api/backendAPI';

import Home from './components/pages/Home';

import Header from './components/templates/Header';
import Footer from './components/templates/Footer';

//now need to use context

//<Route exact path={'/profile'} component={Profile} />;
function App() {
  //This loginc all needs to be in context?
  const [user, setUser] = useState(null);
  //const authenticated = user != null;
  const { auth } = useContext(AuthContext);

  const token = getToken('token');

  async function getUserData() {
    const response = await getLoginInfo({ token });
    return response;
  }
  console.log('before use effect');

  useEffect(() => {
    console.log('inside useEffect');
    if (auth) {
      getUserData().then((response) => {
        setUser(response.data.info.username);
      });
    }
  });

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
          <AuthRoute
            authenticated={auth}
            path='/mycolleges'
            render={(props) => <MyColleges {...props} />}
          />
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/college'} component={MatchingCollege} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/signup'} component={Signup} />
          <Route exact path={'/logout'} component={Logout} />
          <Redirect from={'*'} to={'/'} />
        </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
