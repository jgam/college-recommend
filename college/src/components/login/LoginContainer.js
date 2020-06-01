import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

  function saveToken(token) {
    //here save the token to webstorage
    const webStorage = window.localStorage;

    //if there is anything in the ls then remove
    if (webStorage.getItem('token')) {
      webStorage.removeItem('token');
    }

    //save
    webStorage.setItem('token', token);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('im in handlesubmit');
    try {
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
      };
      const {
        data: { token },
      } = await axios.post(
        'http://localhost:5000/api/auth/login',
        loginData,
        config
      );
      console.log('try done safely');
      console.log(token);
      //save Token to localStorage
      saveToken(token);

      //redirect to login page
      history.push('/login');
    } catch (err) {
      console.log('error occurred in login');
      console.log(err);
    }
    console.log('signup done');
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
