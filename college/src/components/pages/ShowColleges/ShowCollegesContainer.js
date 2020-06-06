import React, { useContext } from 'react';
import ShowCollegePresenter from './ShowCollegesPresenter';

import AuthContext from '../../../contexts/AuthContext';

import { updateColleges } from '../../api/backendAPI';

function ShowCollegesContainer({ Searchedcolleges }) {
  //if checked then add to the database
  const { auth, colleges, AddColleges, DeleteColleges } = useContext(
    AuthContext
  );

  async function addFav(id) {
    /* 
    1. get colleges
    a. get colleges from context
    2. append colleges
    a. append colleges to context
    3. write to colleges to login ( this needs to be done never created)
    a. write colleges to db
    */
    console.log('before calling adding');
    console.log(colleges);
    AddColleges(id);
    console.log('in showcolelge container');
    console.log(colleges);

    var tempData = {
      id: '5edb67d6a5a6480a74fbb161',
      updatedColleges: colleges,
      name: 'gamjeonghan',
    };
    await updateColleges(tempData);
  }
  function deleteFav(id) {
    DeleteColleges(id);
  }
  return Searchedcolleges.map((Searchedcollege, i) => (
    <ShowCollegePresenter
      index={parseInt(Searchedcollege.collegeUnitId)}
      college={Searchedcollege}
      auth={auth}
      addFav={addFav}
      deleteFav={deleteFav}
    />
  ));
  //return <ShowCollegePresenter colleges={colleges} />;
}

export default ShowCollegesContainer;
