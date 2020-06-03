import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-image: url(${(props) => (props.logo ? props.logo : '')});
`;

function ShowCollegesPresenter({ index, college }) {
  console.log('showColleges presener');
  //console.log(colleges);
  //here only show the colleges with presenter
  return (
    <Wrapper key={index} logo={college.logoImage}>
      <h2>{college.name}</h2>
      <img src={college.campusImage} alt='' />
      <p>{college.shortDescription}</p>
    </Wrapper>
  );
}

export default ShowCollegesPresenter;
