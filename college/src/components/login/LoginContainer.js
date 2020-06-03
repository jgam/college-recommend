import React, { useState, useContext } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

import { saveToken } from '../../auth/tokens';
import { postLogin } from '../../components/api/backendAPI';

const initialFormData = {
  useranme: '',
  password: '',
};

function LoginContainer() {
  const history = useHistory();
  //save the token in the web
  const [loginData, setLoginData] = useState(initialFormData);

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }
  const loginStatus = useContext(ThemeContext);
  console.log(loginStatus);

  async function handleSubmit(e) {
    e.preventDefault();
    //get context

    console.log('im in handlesubmit');
    try {
      //postLogin module
      const {
        data: { token },
      } = await postLogin({
        loginData,
      });
      console.log('try done safely');
      console.log(token);
      //save Token to localStorage
      saveToken(token);
      //set true for authenticated

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
