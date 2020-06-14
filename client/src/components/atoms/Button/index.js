//react
import React from 'react';
import { Link } from 'react-router-dom';

//styled-components
import styled from 'styled-components';

//styled-components
const ButtonWrapper = styled.button``;

//props = {content, LinkTo}
function Button({ content = 'default', LinkTo = '/' }) {
  return (
    <ButtonWrapper>
      <Link to={LinkTo} style={{ textDecoration: 'inherit', color: 'inherit' }}>
        {content}
      </Link>
    </ButtonWrapper>
  );
}

export default Button;
