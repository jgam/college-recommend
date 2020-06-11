import React, { useState } from 'react';
import MatchingCollegePresenter from './MatchingCollegePresenter';
import getColleges from '../api/CollegeApi';
import ShowColleges from '../pages/ShowColleges';
import styled from 'styled-components';

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
        satOverall: formData.sat,
        actComposite: formData.act,
        gpaMinimumTenPercent: formData.gpa,
      },
      offset: 9, //if want to load more info than 20 this is page index
      info_ids: [
        'website',
        'shortDescription',
        'longDescription',
        'campus_image',
        'logo_image',
      ], //returned object's content
    };
    /*
    let colleges = await axios.get(
      'https://api.collegeai.com/v1/api/college-list?api_key=free_c2f12782a8449751c2c15f5891',
      { params }
    );
    */
    console.log('here is new api call');
    console.log(formData);
    getColleges(params).then((data) => {
      console.log(data.data.colleges);
      //here need to check colleges if it is in db.
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

  //update state regarding input value
  const handleChange = (e) => {
    console.log('handle change');
    console.log(e.target);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //destructing
  const { colleges } = formData;

  console.log(formData);

  //call ShowColleges based on state
  return (
    <div>
      <MatchingCollegePresenter
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {colleges.length !== undefined ? (
        <ShowColleges Searchedcolleges={colleges} />
      ) : (
        ''
      )}
    </div>
  );
}

export default MatchingCollegeContainer;
