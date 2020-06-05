import { createContext } from 'react';

const AuthContext = createContext({
  auth: false,
  colleges: {},
  setAuth: () => {},
});

export default AuthContext;
