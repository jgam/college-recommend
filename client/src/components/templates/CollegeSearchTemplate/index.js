import React from 'react';
import styled from 'styled-components';
import FormCollegeSearch from '../../molecules/FormCollegeSearch';

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

function CollegeSearchTemplate({
  title,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <FormCollegeSearch
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Wrapper>
  );
}

export default CollegeSearchTemplate;
