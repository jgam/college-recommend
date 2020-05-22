import React, { useState } from 'react';
import MatchingCollegePresenter from './MatchingCollegePresenter';
import getColleges from '../api/CollegeApi';
import ShowColleges from '../pages/ShowColleges';

const initialFormData = {
  act: '',
  sat: '',
  gpa: '',
  colleges: {},
};

function MatchingCollegeContainer() {
  console.log('currently in container');
  const [formData, setFormData] = useState(initialFormData);

  //use api
  function getAPI(formData) {
    const params = {
      //two things: info_ids & filters
      filters: {
        schoolSize: ['large'],
        zipCode: '02111',
        distanceFromHomeMiles: [0, 500],
        satOverall: 1200,
        closeToMyScores: true,
      },
    };
    /*
    let colleges = await axios.get(
      'https://api.collegeai.com/v1/api/college-list?api_key=free_c2f12782a8449751c2c15f5891',
      { params }
    );
    */
    console.log('here is new api call');
    getColleges(params).then((data) => {
      console.log(data.data.colleges);
      //here I should update state to give this to college presenter
      setFormData({ ...formData, colleges: data.data.colleges });
    });
    //return colleges.data.colleges;
    //return [];
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('im in handlesubmit');

    try {
      getAPI(formData);
      //update colleges with setFormdata
      //reset the buttons
      console.log('this should be after college data');
    } catch (error) {
      console.log(error);
    } finally {
      console.log('in finally');
      setFormData({ ...formData });
    }
  };

  const handleChange = (e) => {
    console.log(e.target);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log('before the calling');
  console.log(formData);

  const { sat, act, gpa, colleges } = formData;
  console.log(colleges);
  console.log(colleges.length);
  return (
    <div>
      <MatchingCollegePresenter
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {colleges.length != undefined ? <ShowColleges colleges={colleges} /> : ''}
    </div>
  );
}

export default MatchingCollegeContainer;
