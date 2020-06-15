//react
import React from 'react';
import { Link } from 'react-router-dom';

//styled-components
import styled from 'styled-components';

//styled-components
const FormButtonWrapper = styled.button`
  border-radius: 30px;
  background-color: #57b846;
  color: white;
  display: block;
  font-size: 20px;
  width: 110px;
  height: 35px;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

//props = {content, LinkTo}
function FormButton({ content = 'default', LinkTo = '/' }) {
  return (
    <FormButtonWrapper>
      <Link to={LinkTo} style={{ textDecoration: 'inherit', color: 'inherit' }}>
        {content}
      </Link>
    </FormButtonWrapper>
  );
}

export default FormButton;
