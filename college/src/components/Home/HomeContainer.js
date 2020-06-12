import React, { useContext, useEffect, useCallback } from "react";
import HomePresenter from "./HomePresenter";

import AuthContext from "../../contexts/AuthContext";
import { saveToken } from "../../auth/tokens";
import { getLoginInfo } from "../../components/api/backendAPI";

function HomeContainer() {
  const { setAuth, setColleges } = useContext(AuthContext);

  const getLogin = useCallback(
    async (token) => {
      saveToken(token);
      const value = await getLoginInfo({ token });
      setAuth(true, value.data.info._id);
      setColleges(value.data.info.colleges);
    },
    [setAuth, setColleges]
  );

  useEffect(() => {
    if (window.document.cookie.startsWith("token=")) {
      getLogin(window.document.cookie.slice(6));
      //here check if statement with token
    } else {
      setAuth(false);
    }
  }, [getLogin, setAuth]);

  //here checking the token and set state to logged in!

  return (
    <>
      <HomePresenter />
    </>
  );
}

export default HomeContainer;
