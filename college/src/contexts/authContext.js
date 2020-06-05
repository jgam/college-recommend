import { createContext } from 'react';

const AuthContext = createContext({
  auth: false,
  colleges: [],
  setAuth: () => {},
  setColleges: () => {},
});

export default AuthContext;
