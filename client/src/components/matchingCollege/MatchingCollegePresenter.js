import React from 'react';
import styled from 'styled-components';

//Input field for sat scores or act scores
//input field for gpa
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

function MatchingCollegePresenter({ formData, handleChange, handleSubmit }) {
  //formData.colleges = list of colleges and we should show them

  return (
    <Wrapper>
      <Title>Search Info</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type={'text'}
          placeholder={'ACT'}
          value={formData.act}
          name={'act'}
          onChange={handleChange}
        />
        <Input
          type={'text'}
          placeholder={'SAT'}
          value={formData.sat}
          name={'sat'}
          onChange={handleChange}
        />
        <Input
          type={'text'}
          placeholder={'GPA'}
          value={formData.gpa}
          name={'gpa'}
          onChange={handleChange}
        />
        <Button type={'submit'}> Submit </Button>
      </Form>
    </Wrapper>
  );
}

export default MatchingCollegePresenter;
