import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Button = styled.button`
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

const Input = styled.input`
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

const Form = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function LoginPresenter({ loginData, handleChange, handleSubmit }) {
  return (
    <Wrapper>
      <Title>Login Info</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          placeholder={'type in id'}
          value={loginData.id}
          name={'username'}
          onChange={handleChange}
        />
        <Input
          type={'password'}
          placeholder={'type in pw'}
          value={loginData.pw}
          name={'password'}
          onChange={handleChange}
        />
        <Button typre={'submit'}>login</Button>
        <Button>
          <Link
            to={'/signup'}
            style={{ textDecoration: 'inherit', color: 'inherit' }}
          >
            Sign up
          </Link>
        </Button>
      </Form>
    </Wrapper>
  );
}

export default LoginPresenter;
