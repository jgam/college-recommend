//this is provider for auth context

import React, { useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

//first declare functions and do state or setstate later
//need to use hooks!

const AuthProvider = ({ children }) => {
  //function we will use in child components
  const setAuth = () => {
    setAuthContext((prevState) => {
      console.log('in setAuth Context function');
      console.log(prevState);
      return {
        ...prevState,
        auth: !prevState.auth,
      };
    });
  };

  const getAuth = () => {
    return auth;
  };

  const initialAuth = {
    auth: false,
    setAuth,
    getAuth,
  };

  const [auth, setAuthContext] = useState(initialAuth);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
