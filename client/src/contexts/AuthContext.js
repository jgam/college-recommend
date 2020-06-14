import { createContext } from 'react';

const AuthContext = createContext({
  auth: false,
  id: '',
  colleges: [],
  setAuth: () => {},
  setColleges: () => {},
  AddColleges: () => {},
  DeleteColleges: () => {},
});

export default AuthContext;
