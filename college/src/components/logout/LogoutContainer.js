import React, { useContext, useEffect } from 'react';
import LogoutPresenter from './LogoutPresenter';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import { deleteToken } from '../../auth/tokens/index';

function LogoutContainer() {
  //context set auth
  const { auth, setAuth } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    setAuth(false);
    deleteToken();
    history.push('/');
  }, []);

  return (
    <div>
      <LogoutPresenter />
    </div>
  );
}

export default LogoutContainer;
