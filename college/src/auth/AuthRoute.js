import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  console.log('in authroute ');
  console.log(authenticated);
  const { auth } = useContext(AuthContext);
  console.log('the auth variable in authRoute');
  console.log(auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }
    />
  );
}

export default AuthRoute;
