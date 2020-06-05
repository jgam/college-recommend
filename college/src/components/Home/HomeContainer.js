import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import HomePresenter from './HomePresenter';

import AuthContext from '../../contexts/AuthContext';

function HomeContainer() {
  console.log('here is Home Containerw auth should be true...');
  const { auth, colleges } = useContext(AuthContext);
  console.log(auth);
  console.log(colleges);
  console.log('in home container');

  return (
    <>
      <HomePresenter />
      <Link to={`/college`}>College Search</Link>
    </>
  );
}

export default HomeContainer;
