import React from 'react';
import { useHistory } from 'react-router-dom';
import HeaderPresenter from './HeaderPresenter';

function HeaderContainer() {
  const history = useHistory();
  console.log(history);
  return (
    <>
      <HeaderPresenter />
    </>
  );
}

export default HeaderContainer;
