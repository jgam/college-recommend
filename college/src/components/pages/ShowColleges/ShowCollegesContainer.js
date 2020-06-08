import React, { useContext } from 'react';
import ShowCollegePresenter from './ShowCollegesPresenter';

import AuthContext from '../../../contexts/AuthContext';

import { updateColleges } from '../../api/backendAPI';

function ShowCollegesContainer({ Searchedcolleges }) {
  //if checked then add to the database
  const { id, auth, colleges, AddColleges, DeleteColleges } = useContext(
    AuthContext
  );
  console.log(
    'current colleges after login in showcollegescontainer..should be init'
  );
  console.log(colleges);

  async function addFav(collegeid) {
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
    AddColleges(colleges, collegeid);
    console.log('in showcolelge container');
    console.log(colleges);
    console.log(id);

    //now from the context, we need to find id of current user
    var tempData = {
      id: id,
      updatedColleges: colleges,
    };
    console.log('updateColleges called!');
    console.log(tempData);
    await updateColleges(tempData);
  }
  async function deleteFav(collegeid) {
    DeleteColleges(collegeid);
    var tempData = {
      id: id,
      updatedColleges: colleges,
    };
    await updateColleges(tempData);
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
