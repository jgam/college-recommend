import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Header = styled.div`
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

const Logo = styled.div`
  height: 100px;
  width: 100px;
  font-size: 80px;
  padding: 0 30px;
`;
const HeaderMenus = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const Search = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const MenuBox = styled.div`
  margin: auto 10px;
  padding: 0 20px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Login = styled.button``;

const SearchCustomer = styled.div`
  margin: 0 10px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.div`
  margin: 0 10px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

function HeaderPresenter() {
  //if logged in then I need to put logout
  const { auth } = useContext(AuthContext);

  //with this compare login and logout

  return (
    <>
      <div>
        <Header>
          <Logo>
            <FontAwesomeIcon icon={faUniversity} />
          </Logo>
          <HeaderMenus>
            <MenuBox>Schools</MenuBox>
            <MenuBox>My Schools</MenuBox>
            <MenuBox>IR</MenuBox>
            <MenuBox>SNS</MenuBox>
            <MenuBox>RECRUIT</MenuBox>
          </HeaderMenus>
          <Search>
            <Login>
              <Link to={'/login'}>Login</Link>
            </Login>
            <SearchCustomer>CUSTOMER</SearchCustomer>
            <SearchIcon>
              <FontAwesomeIcon icon={faSearch} />
            </SearchIcon>
            <Link to='/profile'>Profiles</Link>
          </Search>
        </Header>
      </div>
    </>
  );
}

export default HeaderPresenter;
