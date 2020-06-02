import React from 'react';
import { Link } from 'react-router-dom';
import HomePresenter from './HomePresenter';

function HomeContainer() {
  return (
    <>
      <HomePresenter />
      <Link to={`/college`}>College Search</Link>
    </>
  );
}

export default HomeContainer;
