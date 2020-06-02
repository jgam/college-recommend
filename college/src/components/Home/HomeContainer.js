import React from 'react';
import { Link } from 'react-router-dom';
import HomePresenter from './HomePresenter';
import { useHistory } from 'react-router-dom';

function HomeContainer() {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <HomePresenter />
      <Link to={`/college`}>College Search</Link>
    </>
  );
}

export default HomeContainer;
