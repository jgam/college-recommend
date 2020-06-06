import React, { useContext } from 'react';
import ShowCollegePresenter from './ShowCollegesPresenter';

import AuthContext from '../../../contexts/AuthContext';

function ShowCollegesContainer({ colleges }) {
  //if checked then add to the database
  const { auth, AddColleges, DeleteColleges } = useContext(AuthContext);

  function addFav(id) {
    /* 
    1. get colleges
    a. get colleges from context
    2. append colleges
    a. append colleges to context
    3. write to colleges to login ( this needs to be done never created)
    a. write colleges to db
    */

    AddColleges(id);
  }
  function deleteFav(id) {
    DeleteColleges(id);
  }
  return colleges.map((college, i) => (
    <ShowCollegePresenter
      index={parseInt(college.collegeUnitId)}
      college={college}
      auth={auth}
      addFav={addFav}
      deleteFav={deleteFav}
    />
  ));
  //return <ShowCollegePresenter colleges={colleges} />;
}

export default ShowCollegesContainer;
