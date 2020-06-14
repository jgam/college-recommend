//react
import React from 'react';
import { Link } from 'react-router-dom';

//styled-components
import styled from 'styled-components';

//styled-components
const CustomerWrapper = styled.div`
  margin: 0 10px;
  cursor: pointer;
  height: 100%;
  display: flex;
  align-items: center;
`;

function HeaderLogin({ Content = 'default', LinkTo = '/' }) {
  return (
    <CustomerWrapper>
      <Link to={LinkTo} style={{ textDecoration: 'inherit', color: 'inherit' }}>
        {Content}
      </Link>
    </CustomerWrapper>
  );
}

export default HeaderLogin;
