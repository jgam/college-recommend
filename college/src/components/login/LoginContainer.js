import React, { useState, useContext } from 'react';
import LoginPresenter from './LoginPresenter';
import { useHistory } from 'react-router-dom';

import { saveToken, getToken } from '../../auth/tokens';
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
  const { setAuth } = useContext(AuthContext);

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
      setAuth(true);
      //redirect to login page
      //here you call with the token and get the information of colleges from backend and set it with setColleges();
      //here start fixing
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
