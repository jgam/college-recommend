import React from 'react';
import styled from 'styled-components';

import CollegeSearchTemplate from '../templates/CollegeSearchTemplate';

//Input field for sat scores or act scores
//input field for gpa

function MatchingCollegePresenter({ formData, handleChange, handleSubmit }) {
  //formData.colleges = list of colleges and we should show them
  return (
    <CollegeSearchTemplate
      title='College Search'
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}
export default MatchingCollegePresenter;
