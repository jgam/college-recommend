import React, { useState } from 'react';
import SignupPresenter from './SignupPresenter';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const initialFormData = {
  username: '',
  password: '',
  name: '',
};

function SignupContainer() {
  let history = useHistory();
  const [SignupData, setSignupData] = useState(initialFormData);
  console.log(SignupData);
  function handleChange(e) {
    setSignupData({
      ...SignupData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    console.log('im in handlesubmit');
    try {
      var config = {
        headers: { 'Access-Control-Allow-Origin': '*' },
      };
      var token = await axios.post(
        'http://localhost:5000/api/auth/register',
        SignupData,
        config
      );
      console.log('try done safely');
      console.log(token);

      //redirect to login page
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
    console.log('signup done');
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
