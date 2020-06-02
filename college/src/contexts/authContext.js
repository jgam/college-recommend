import React, { createContext, useContext } from 'react';
import App from '../App';

const AppContext = createContext();

export const AuthContext = () => {
  const user = {
    authenticated: '',
  };

  return <AppContext.Provider value={user}></AppContext.Provider>;
};
