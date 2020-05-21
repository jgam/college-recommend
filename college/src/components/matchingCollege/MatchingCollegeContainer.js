import React, { useState } from 'react';
import MatchingCollegePresenter from './MatchingCollegePresenter';
import axios from 'axios';

const initialFormData = {
  act: '',
  sat: '',
  gpa: '',
  colleges: [],
};

function MatchingCollegeContainer() {
  console.log('currently in container');
  const [formData, setFormData] = useState(initialFormData);

  //use api
  async function getAPI(formData) {
    const params = {
      filters: {
        schoolSize: ['large'],
        zipCode: '02111',
        distanceFromHomeMiles: [0, 500],
        satOverall: 1200,
        closeToMyScores: true,
      },
    };
    let colleges = await axios.get(
      'https://api.collegeai.com/v1/api/college-list?api_key=free_c2f12782a8449751c2c15f5891',
      { params }
    );
    return colleges;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('im in handlesubmit');
    const data = await getAPI(formData);
    console.log(data);
    //update colleges with setFormdata
    //reset the buttons
    setFormData(initialFormData);
  };

  const handleChange = (e) => {
    e.preventDefault();
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
