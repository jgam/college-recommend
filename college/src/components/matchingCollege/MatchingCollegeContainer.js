import React, { useState } from 'react';
import MatchingCollegePresenter from './MatchingCollegePresenter';

const initialFormData = {
  act: 0,
  sat: 0,
  gpa: 0,
  colleges: [],
};

function MatchingCollegeContainer() {
  console.log('currently in container');
  const [formData, setFormData] = useState(initialFormData);
  //use api

  function getAPI() {
    return 'done!';
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('im in handlesubmit');
    const data = await getAPI();
    console.log(data);
    //update colleges with setFormdata
    //reset the buttons
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    console.log(e.target);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  console.log(formData);

  return (
    <div>
      <MatchingCollegePresenter
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default MatchingCollegeContainer;
