import React, { createContext, useContext } from 'react';

const AuthContext = createContext({
  auth: false,
  setAuth: () => {},
  getAuth: () => {},
});

export default AuthContext;
