import React, { useContext, useEffect } from 'react';
import LogoutPresenter from './LogoutPresenter';

import AuthContext from '../../contexts/AuthContext';
import { deleteToken } from '../../auth/tokens/index';

function LogoutContainer() {
  //context set auth
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    setAuth(false);
    deleteToken();
  }, []);

  return (
    <div>
      <LogoutPresenter />
    </div>
  );
}

export default LogoutContainer;
