import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomePresenter from './HomePresenter';

import AuthContext from '../../contexts/AuthContext';
import { saveToken } from '../../auth/tokens';
import { getLoginInfo } from '../../components/api/backendAPI';

function HomeContainer() {
  console.log('here is Home Containerw auth should be true...');
  const { auth, colleges, setAuth, setColleges } = useContext(AuthContext);
  console.log(auth);
  console.log(colleges);
  console.log('in home container');

  async function getLogin(token) {
    saveToken(token);
    //set true for authenticated

    //here save id

    //redirect to login page

    //with token, call backend data and save it to context
    const value = await getLoginInfo({ token });
    //context savings
    setAuth(true, value.data.info._id);
    console.log(value.data.info.colleges);
    setColleges(value.data.info.colleges);
    //console.log(value.data.info.colleges);
  }
  useEffect(() => {
    if (window.document.cookie.startsWith('token=')) {
      getLogin(window.document.cookie.slice(6));
      //here check if statement with token
    } else {
      setAuth(false);
    }
  }, []);

  //here checking the token and set state to logged in!

  return (
    <>
      <HomePresenter />
      <Link to={`/college`}>College Search</Link>
    </>
  );
}

export default HomeContainer;
