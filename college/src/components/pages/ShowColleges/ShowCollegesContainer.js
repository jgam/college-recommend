import React from 'react';
import ShowCollegePresenter from './ShowCollegesPresenter';

function ShowCollegesContainer({ colleges }) {
  console.log('showcolelges container');
  console.log(colleges);
  return <ShowCollegePresenter colleges={colleges} />;
}

export default ShowCollegesContainer;
