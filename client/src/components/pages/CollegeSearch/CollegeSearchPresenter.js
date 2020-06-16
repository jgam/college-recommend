//react
import React from 'react';

//import templtes
import CollegeSearchTemplate from '../../templates/CollegeSearchTemplate';

function CollegeSearchPresenter({
  title,
  formData,
  handleChange,
  handleSubmit,
}) {
  return (
    <CollegeSearchTemplate
      title={title}
      formData={formData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
}

export default CollegeSearchPresenter;
