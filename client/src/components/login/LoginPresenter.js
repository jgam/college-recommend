import React from 'react';

import LoginTemplate from '../templates/LoginTemplate';

function LoginPresenter({ loginData, handleChange, handleSubmit }) {
  console.log('loginData');
  console.log(loginData);
  return (
    <LoginTemplate
      title='Login Info'
      loginData={loginData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default LoginPresenter;
