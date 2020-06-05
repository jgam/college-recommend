import React, { useContext } from 'react';
import ShowCollegePresenter from './ShowCollegesPresenter';

import AuthContext from '../../../contexts/AuthContext';

function ShowCollegesContainer({ colleges }) {
  //if checked then add to the database
  const { auth, setAuth } = useContext(AuthContext);
  console.log('showcollegeasdfsfd container');
  console.log(auth);
  function addFav() {
    console.log('addFav clicked');
    //add to colleges in user ID

    /* 
    1. get colleges
    a. get colleges from context
    2. append colleges
    a. append colleges to context
    3. write to colleges to login ( this needs to be done never created)
    a. write colleges to db
    */
  }
  return colleges.map((college, i) => (
    <ShowCollegePresenter
      index={parseInt(college.collegeUnitId)}
      college={college}
      auth={auth}
      addFav={addFav}
    />
  ));
  //return <ShowCollegePresenter colleges={colleges} />;
}

export default ShowCollegesContainer;
