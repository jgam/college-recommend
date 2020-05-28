import React, { useState } from 'react';
import SignupPresenter from './SignupPresenter';

const initialFormData = {
  username: '',
  password: '',
  name: '',
};

function SignupContainer() {
  const [SignupData, setSignupData] = useState(initialFormData);
  console.log(SignupData);
  function handleChange(e) {
    setSignupData({
      ...SignupData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log('im in handlesubmit');
  }
  return (
    <SignupPresenter
      SignupData={SignupData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default SignupContainer;
