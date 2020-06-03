import React, { useState, useContext } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { saveToken } from '../../auth/tokens';
import { postLogin } from '../../components/api/backendAPI';

import AuthContext from '../../contexts/AuthContext';

const initialFormData = {
  useranme: '',
  password: '',
};

function LoginContainer() {
  const history = useHistory();
  //save the token in the web
  const [loginData, setLoginData] = useState(initialFormData);
  const { auth, getAuth, setAuth } = useContext(AuthContext);
  console.log('in login container');
  console.log(auth);
  console.log(setAuth);
  console.log(getAuth);

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }
  //   const loginStatus = useContext(ThemeContext);
  //   console.log(loginStatus);

  async function handleSubmit(e) {
    e.preventDefault();
    //get context

    try {
      //postLogin module
      const {
        data: { token },
      } = await postLogin({
        loginData,
      });
      //save Token to localStorage

      //here check if statement with token
      saveToken(token);
      //set true for authenticated
      setAuth();
      console.log('after set Auth');
      console.log(auth);
      //redirect to login page
      history.push('/');
    } catch (err) {
      console.log('error occurred in login');
      console.log(err);
    }
    console.log('login done');
  }
  return (
    <LoginPresenter
      loginData={loginData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginContainer;
