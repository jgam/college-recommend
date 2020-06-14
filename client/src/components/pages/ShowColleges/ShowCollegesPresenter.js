import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: 'Chelsea Market';
`;
//background-image: url(${(props) => (props.logo ? props.logo : '')});

function ShowCollegesPresenter({
  index,
  college,
  auth,
  addFav,
  deleteFav,
  added,
}) {
  //console.log(colleges);
  //here only show the colleges with presenter
  console.log('show college presenter?');
  console.log(added);
  const [Added, setAdded] = useState(added);
  const collegeID = college.collegeUnitId;
  return (
    <Wrapper key={index} logo={college.logoImage}>
      <h2>{college.name}</h2>
      <img src={college.logoImage} alt='' width='300px' height='300px' />
      {auth ? (
        Added ? (
          <button
            onClick={() => {
              deleteFav(collegeID);
              setAdded(!Added);
            }}
          >
            Added already!
          </button>
        ) : (
          <button
            onClick={() => {
              addFav(collegeID);
              setAdded(!Added);
            }}
          >
            add to Favorites
          </button>
        )
      ) : (
        ''
      )}
      <img src={college.campusImage} alt='' width='400px' height='300px' />
      {college.shortDescription ? (
        <p>{college.shortDescription}</p>
      ) : (
        <p>This college is {college.name}</p>
      )}
    </Wrapper>
  );
}

export default ShowCollegesPresenter;
