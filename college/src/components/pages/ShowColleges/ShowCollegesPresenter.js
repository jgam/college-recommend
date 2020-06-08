import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(${(props) => (props.logo ? props.logo : '')});
`;

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
      <img src={college.campusImage} alt='' />
      <p>{college.shortDescription}</p>
    </Wrapper>
  );
}

export default ShowCollegesPresenter;
