//React
import React, { useContext, useEffect } from 'react';
import HomePresenter from './HomePresenter';

//context
import AuthContext from '../../../contexts/AuthContext';
import { saveToken } from '../../../auth/tokens';

//api
import { getLoginInfo } from '../../../components/api/backendAPI';

function HomeContainer() {
  //Context
  const { setAuth, setColleges } = useContext(AuthContext);

  //api function
  async function getLogin(token) {
    saveToken(token);
    const value = await getLoginInfo({ token });
    setAuth(true, value.data.info._id);
    setColleges(value.data.info.colleges);
  }

  //Effect hooks
  useEffect(() => {
    if (window.document.cookie.startsWith('token=')) {
      getLogin(window.document.cookie.slice(6));
      //here check if statement with token
    } else {
      setAuth(false);
    }
    return () => {
      console.log('unmounted');
    };
  }, []);
  return <HomePresenter />;
}

export default HomeContainer;
