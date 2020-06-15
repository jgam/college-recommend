//react
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

//presenter
import LoginPresenter from './LoginPresenter';

//Context
import AuthContext from '../../../contexts/AuthContext';
import { saveToken } from '../../../auth/tokens';
import { postLogin, getLoginInfo } from '../../../components/api/backendAPI';

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

      //redirect to login page
      //with token, call backend data and save it to context
      const value = await getLoginInfo({ token });
      //context savings
      setAuth(true, value.data.info._id);
      setColleges(value.data.info.colleges);
      history.push('/');
    } catch (err) {
      console.log(err);
      console.log(err.message);
    }
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
