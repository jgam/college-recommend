//this is provider for auth context

import React, { useState } from 'react';
import AuthContext from '../../contexts/AuthContext';

//first declare functions and do state or setstate later
//need to use hooks!

const AuthProvider = ({ children }) => {
  //function we will use in child components
  const setAuth = (condition) => {
    setAuthContext((prevState) => {
      console.log('in setAuth Context function');
      console.log(prevState);
      if (condition) {
        console.log('condition is here');
        return {
          ...prevState,
          auth: true,
        };
      }
      console.log('false condition');
      return {
        ...prevState,
        auth: false,
      };
    });
  };

  const initialAuth = {
    auth: false,
    setAuth,
  };

  const [auth, setAuthContext] = useState(initialAuth);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
