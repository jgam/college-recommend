import React from 'react';
import styled from 'styled-components';

//atom imports
import FormButton from '../atoms/FormButton';
import FormInput from '../atoms/FormInput';

//styled-components Declaration
const Form = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function FormRegister({ loginData, handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type={'text'}
        placeholder={'type in id'}
        value={loginData.id}
        name={'username'}
        onChange={handleChange}
      />
      <FormInput
        type={'password'}
        placeholder={'type in pw'}
        value={loginData.pw}
        name={'password'}
        onChange={handleChange}
      />
      <FormInput
        type={'text'}
        placeholder={'type in name'}
        value={loginData.pw}
        name={'name'}
        onChange={handleChange}
      />
      <FormButton content='Register' type={'submit'} />
    </Form>
  );
}

export default FormRegister;
