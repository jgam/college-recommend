//this is provider for auth context

import React, { useState } from 'react';
import AuthContext from '../../contexts/AuthContext';
import AuthRoute from '../../auth/AuthRoute';

//first declare functions and do state or setstate later
//need to use hooks!

const AuthProvider = ({ children }) => {
  //function we will use in child components
  const setAuth = (condition, uniqueID) => {
    setAuthContext((prevState) => {
      console.log('in setAuth Context function');
      console.log(prevState);
      if (condition) {
        console.log('condition is here');
        return {
          ...prevState,
          id: uniqueID,
          auth: true,
        };
      }
      console.log('false condition');
      return {
        ...prevState,
        id: '',
        auth: false,
      };
    });
  };

  const setColleges = ({ ids }) => {
    console.log('in setCollleges');
    console.log(ids);
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
    console.log(colleges);
    console.log(collegeId);
    colleges.push(collegeId);
    console.log(colleges);
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
    console.log('deltecolelges function');
    console.log(colleges);
    //colleges.filter((item) => item !== collegeId);
    colleges.splice(colleges.indexOf(collegeId), 1);
    console.log('after filter');
    console.log(colleges);
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
  console.log('in auth.context auth colleges');
  console.log(auth);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
