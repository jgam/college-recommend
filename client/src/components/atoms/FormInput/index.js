import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.input`
  display: block;
  height: 20px;
  background-color: black;
  border: none;
  font-size: 20px;
  border-bottom: solid grey 1px;
  color: white;
  &:focus {
    outline: none;
  }
`;

function FormInput({ type, placeholder, value, name, onChange }) {
  return (
    <InputWrapper
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default FormInput;
