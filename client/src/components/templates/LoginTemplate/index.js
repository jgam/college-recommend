import React from 'react';
import styled from 'styled-components';
import FormEmailPassword from '../../molecules/FormEmailPassword';

const Wrapper = styled.div`
  height: 400px;
  width: 300px;
  box-sizing: border-box;
  color: white;
  background-color: black;
  border-radius: 20px;
  padding: 20px;
  margin: 30px auto;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 400;
  margin-left: 23px;
`;

function LoginTemplate({ title, loginData, handleChange, handleSubmit }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <FormEmailPassword
        loginData={loginData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

export default LoginTemplate;
