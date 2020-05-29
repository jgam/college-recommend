import React, { useState } from 'react';
import SignupPresenter from './SignupPresenter';
import axios from 'axios';

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
    try {
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
      };
      axios.post('http://localhost:5000/api/user', SignupData, config);
      console.log('try done safely');
    } catch (err) {
      console.log(err);
    }

    console.log('post done');
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
