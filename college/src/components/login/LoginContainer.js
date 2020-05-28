import React, { useState } from 'react';
import LoginPresenter from './LoginPresenter';

const initialFormData = {
  id: '',
  pw: '',
};

function LoginContainer(e) {
  const [loginData, setLoginData] = useState(initialFormData);

  function handleChange(e) {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log('im in handlesubmit');
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
