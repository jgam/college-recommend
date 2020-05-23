import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

function ShowCollegesPresenter({ index, college }) {
  console.log('showColleges presener');
  console.log(index);
  //console.log(colleges);
  //here only show the colleges with presenter
  return <div key={index}>{college.name}</div>;
}

export default ShowCollegesPresenter;
