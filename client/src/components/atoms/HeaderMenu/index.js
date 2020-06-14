//react
import React from 'react';
import { Link } from 'react-router-dom';

//styled-components
import styled from 'styled-components';

//styled-components declaration
const HeaderMenuWrapper = styled.div`
  margin: ${(props) => (props.spacingSmaller ? 0 : 'auto 10px')};
  padding: ${(props) => (props.spacingSmaller ? '0 10px' : '0 20px')};
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

//props = {LinkTo: 'Linked to url'}
function HeaderMenu(props) {
  return (
    <HeaderMenuWrapper spacingSmaller={props.spacingSmaller}>
      <Link
        to={props.LinkTo}
        style={{ textDecoration: 'inherit', color: 'inherit' }}
      >
        {props.content}
      </Link>
    </HeaderMenuWrapper>
  );
}

export default HeaderMenu;
