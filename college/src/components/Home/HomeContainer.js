import React, { useContext, useEffect } from 'react';
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
    const value = await getLoginInfo({ token });
    setAuth(true, value.data.info._id);
    setColleges(value.data.info.colleges);
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
    </>
  );
}

export default HomeContainer;
