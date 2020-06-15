import React, { useState, useContext } from 'react';
import LoginPresenter from './LoginPresenter';
import { useHistory } from 'react-router-dom';
import AuthContext from '../../contexts/AuthContext';

import { saveToken } from '../../auth/tokens';
import { postLogin, getLoginInfo } from '../../components/api/backendAPI';

const initialFormData = {
  useranme: '',
  password: '',
};

function LoginContainer() {
  const history = useHistory();
  //save the token in the web
  const [loginData, setLoginData] = useState(initialFormData);
  const { setAuth, setColleges } = useContext(AuthContext);

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
      console.log('in try');
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

      //here save id

      //redirect to login page
      //with token, call backend data and save it to context
      const value = await getLoginInfo({ token });
      //context savings
      setAuth(true, value.data.info._id);
      setColleges(value.data.info.colleges);
      //console.log(value.data.info.colleges);
      history.push('/');
    } catch (err) {
      console.log('error occurred in login');
      console.log(err);
      console.log(err.message);
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
