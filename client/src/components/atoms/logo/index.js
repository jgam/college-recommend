//react modules
import React from 'react';
import { Link } from 'react-router-dom';

//styled components
import styled from 'styled-components';

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversity } from '@fortawesome/free-solid-svg-icons';

//styled component
const LogoWrapper = styled.div`
  height: 100px;
  width: 100px;
  font-size: 80px;
  padding: 0 30px;
`;

function Logo({ LinkTo = '/' }) {
  return (
    <LogoWrapper>
      <Link to={LinkTo} style={{ textDecoration: 'inherit', color: 'inherit' }}>
        <FontAwesomeIcon icon={faUniversity} />
      </Link>
    </LogoWrapper>
  );
}

export default Logo;
