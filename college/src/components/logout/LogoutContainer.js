import React, { useContext, useEffect } from 'react';
import LogoutPresenter from './LogoutPresenter';
import { useHistory } from 'react-router-dom';

import AuthContext from '../../contexts/AuthContext';
import { deleteToken } from '../../auth/tokens/index';

function LogoutContainer() {
  //context set auth
  const { setAuth, setColleges, LogoutData } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    setAuth(false);
    //db udpate last for colleges

    //clear the colleges
    setColleges({ ids: [] });
    deleteToken();
    history.push('/');
  });

  return (
    <div>
      <LogoutPresenter />
    </div>
  );
}

export default LogoutContainer;
