import React, { useContext, useEffect, useState } from 'react';
import MyCollegesPresenter from './MyCollegesPresenter';
import { getColleges } from '../api/CollegeApi';

import AuthContext from '../../contexts/AuthContext';

function MyCollegesContainer(props) {
  console.log('myCollege container');
  console.log(props);

  const { id, colleges } = useContext(AuthContext);

  console.log(id);
  console.log(colleges);
  //here I need to call apis to get colleges

  function getMyColleges(collegeList) {
    console.log('getMycolleges called');
    const params = {
      college_unit_ids: collegeList,
      //college_unit_ids=194824%2C166683
      info_ids: [
        'website',
        'shortDescription',
        'longDescription',
        'campus_image',
        'logo_image',
      ], //returned object's content
    };
    console.log(params);

    getColleges(params)
      .then((data) => {
        //here need to check colleges if it is in db.
        console.log('in my colleges');
        console.log(data);
        setResults(data.data.colleges);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }
  const [ResultsCollege, setResults] = useState('');

  useEffect(() => getMyColleges(colleges));

  console.log('current state result');
  console.log(ResultsCollege);

  return <MyCollegesPresenter />;
}

export default MyCollegesContainer;
