//react
import React from 'react';
import { Link } from 'react-router-dom';

//styled-components
import styled from 'styled-components';

//styled-components declaration
const HeaderMenuWrapper = styled.div`
  margin: auto 10px;
  padding: 0 20px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

//props = {LinkTo: 'Linked to url'}
function HeaderMenu({ LinkTo = '/', Content = 'HeaderMenu' }) {
  console.log('in headermenu');
  console.log(LinkTo);
  return (
    <HeaderMenuWrapper>
      <Link to={LinkTo} style={{ textDecoration: 'inherit', color: 'inherit' }}>
        {Content}
      </Link>
    </HeaderMenuWrapper>
  );
}

export default HeaderMenu;
