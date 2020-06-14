//react
import React, { useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';

//styled-components
import styled from 'styled-components';

//molecules
import HeaderMenus from '../../../components/molecules/HeaderMenus';
import HeaderSearch from '../../../components/molecules/HeaderSearch';
//atom
import Logo from '../../../components/atoms/logo';

//styled-components declarationa
const HeaderWrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  border-bottom: 1px solid #c7ecee;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Chelsea Market';
`;
function HeaderPresenter() {
  //here define Context
  const { auth } = useContext(AuthContext);
  return (
    <HeaderWrapper>
      <Logo />
      <HeaderMenus auth={auth} />
      <HeaderSearch auth={auth} />
    </HeaderWrapper>
  );
}

export default HeaderPresenter;
