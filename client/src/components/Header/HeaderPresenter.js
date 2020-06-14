import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUniversity } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

//tests
import Logo from '../../components/atoms/logo';
import HeaderMenu from '../../components/atoms/HeaderMenu';
import HeaderLogin from '../../components/atoms/HeaderLogin';
import Button from '../../components/atoms/Button';

//molecules
import HeaderMenus from '../../components/molecules/HeaderMenus';

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

// const Logo = styled.div`
//   height: 100px;
//   width: 100px;
//   font-size: 80px;
//   padding: 0 30px;
// `;

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
          <Logo />
          <HeaderMenus auth={auth} />
          <Search>
            {auth ? (
              <Button content='logout' LinkTo='/logout' />
            ) : (
              <Button content='login' LinkTo='/login' />
            )}
            <HeaderLogin Content='customer' />

            <HeaderLogin Content={<FontAwesomeIcon icon={faSearch} />} />
            {auth ? <Link to='/profile'>Profiles</Link> : ''}
          </Search>
        </Header>
      </div>
    </>
  );
}

export default HeaderPresenter;
