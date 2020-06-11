//this is provider for auth context

import React, { useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
//first declare functions and do state or setstate later
//need to use hooks!

const AuthProvider = ({ children }) => {
  //function we will use in child components
  const setAuth = (condition, uniqueID) => {
    setAuthContext((prevState) => {
      if (condition) {
        return {
          ...prevState,
          id: uniqueID,
          auth: true,
        };
      }
      return {
        ...prevState,
        id: '',
        auth: false,
      };
    });
  };

  const setColleges = ({ ids }) => {
    setAuthContext((prevState) => {
      return {
        ...prevState,
        colleges: ids,
      };
    });
  };

  const AddColleges = (colleges, collegeId) => {
    // console.log('add colleges in authcontext');
    // console.log(collegeId);
    // console.log('addColleges in authcontext');
    // console.log(auth.colleges);
    colleges.push(collegeId);
    setAuthContext((prevState) => {
      return {
        ...prevState,
        colleges: colleges,
      };
    });
  };

  const DeleteColleges = (colleges, collegeId) => {
    // console.log('deleted colleges');
    // console.log(auth.colleges);
    //colleges.filter((item) => item !== collegeId);
    colleges.splice(colleges.indexOf(collegeId), 1);
    setAuthContext((prevState) => {
      return {
        ...prevState,
        colleges: colleges,
      };
    });
  };

  const initialAuth = {
    auth: false,
    colleges: [],
    setAuth,
    setColleges,
    AddColleges,
    DeleteColleges,
  };

  const [auth, setAuthContext] = useState(initialAuth);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
