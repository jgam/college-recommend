import { createContext } from 'react';

const AuthContext = createContext({
  auth: false,
  colleges: [],
  setAuth: () => {},
  setColleges: () => {},
  AddColleges: () => {},
  DeleteColleges: () => {},
});

export default AuthContext;
