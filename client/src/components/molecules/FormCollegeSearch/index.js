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

function FormCollegeSearch({ formData, handleChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <FormInput
        type={'text'}
        placeholder={'ACT'}
        value={formData.act}
        name={'act'}
        onChange={handleChange}
      />
      <FormInput
        type={'text'}
        placeholder={'SAT'}
        value={formData.sat}
        name={'sat'}
        onChange={handleChange}
      />
      <FormInput
        type={'text'}
        placeholder={'GPA'}
        value={formData.gpa}
        name={'gpa'}
        onChange={handleChange}
      />
      <FormButton content='Search' type={'submit'} LinkTo='/college' />
    </Form>
  );
}

export default FormCollegeSearch;
