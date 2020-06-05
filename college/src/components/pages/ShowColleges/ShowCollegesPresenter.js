import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(${(props) => (props.logo ? props.logo : '')});
`;

function ShowCollegesPresenter({ index, college, auth, addFav, added }) {
  //console.log(colleges);
  //here only show the colleges with presenter
  const [Added, setAdded] = useState(false);
  const collegeID = college.collegeUnitId;
  return (
    <Wrapper key={index} logo={college.logoImage}>
      <h2>{college.name}</h2>
      {auth ? (
        Added ? (
          <button>Added already!</button>
        ) : (
          <button onClick={() => addFav(collegeID)}>add to Favorites</button>
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
