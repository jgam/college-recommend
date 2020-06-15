import React from 'react';
import styled from 'styled-components';

//atom imports
import FormButton from '../../atoms/FormButton';
import FormInput from '../../atoms/FormInput';

//styled-components Declaration
const Form = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

function FormEmailPassword({ loginData, handleChange, handleSubmit }) {
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
      <FormButton content='login' type={'submit'} />
      <FormButton content='signup' LinkTo='/signup' />
    </Form>
  );
}

export default FormEmailPassword;
