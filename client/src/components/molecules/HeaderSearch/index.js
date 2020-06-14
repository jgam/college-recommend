//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//atoms imports
import Button from '../../atoms/Button';
import HeaderMenu from '../../atoms/HeaderMenu';

//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

//styled-components
const HeaderSearchWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  padding-right: 10px;
`;

function HeaderSearch({ auth }) {
  return (
    <HeaderSearchWrapper>
      {auth ? (
        <Button content='logout' LinkTo='/logout' />
      ) : (
        <Button content='login' LinkTo='/login' />
      )}
      <HeaderMenu content='CUSTOMER' LinkTo='/' spacingSmaller={true} />
      <HeaderMenu
        content={<FontAwesomeIcon icon={faSearch} />}
        spacingSmaller={true}
      />
      {auth ? (
        <HeaderMenu
          content='Profiles'
          LinkTo='/profile'
          spacingSmaller={true}
        />
      ) : (
        ''
      )}
    </HeaderSearchWrapper>
  );
}

export default HeaderSearch;
