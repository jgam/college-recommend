//react
import React from 'react';

//atom imports
import HeaderMenu from '../../atoms/HeaderMenu';

//styled-components
import styled from 'styled-components';

//styled-components
const HeaderMenusWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

function HeaderMenus({ auth }) {
  return (
    <HeaderMenusWrapper>
      <HeaderMenu content='School' LinkTo='/college' />
      {auth ? <HeaderMenu content='mySchools' LinkTo='/mycolleges' /> : ''}
      <HeaderMenu content='IR' LinkTo='/' />
      <HeaderMenu content='SNS' LinkTo='/' />
      <HeaderMenu content='RECRUIT' LinkTo='/' />
    </HeaderMenusWrapper>
  );
}

export default HeaderMenus;
