import React, { useState } from 'react';
import CollegeSearchPresenter from './CollegeSearchPresenter';
import { getColleges } from '../../api/CollegeApi';
import ShowColleges from '../../pages/ShowColleges';

const initialFormData = {
  act: '',
  sat: '',
  gpa: '',
  colleges: {},
};

function CollegeSearchContainer() {
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
      //college_unit_ids=194824%2C166683
      offset: 9, //if want to load more info than 20 this is page index
      info_ids: [
        'website',
        'shortDescription',
        'longDescription',
        'campus_image',
        'logo_image',
      ], //returned object's content
    };

    getColleges(params).then((data) => {
      //here need to check colleges if it is in db.
      setFormData({ ...formData, colleges: data.data.colleges });
    });
    //return colleges.data.colleges;
    //return [];
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handlesubmit here');
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

  //call ShowColleges based on state
  return (
    <div>
      <CollegeSearchPresenter
        title='College Searchfß'
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

export default CollegeSearchContainer;
