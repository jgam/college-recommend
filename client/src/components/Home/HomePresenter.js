import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';

//imports
import Content from '../atoms/Content';
import LinkAtom from '../atoms/LinkAtom';
import ContentBox from '../atoms/ContentBox';

//import molecules
import Carousell from '../molecules/Carousel';
import ContentsBox from '../molecules/ContentsBox';

import HomeTemplate from '../templates/HomeTemplate';

const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Chelsea Market';
`;

const HoverSearch = styled.div`
  display: none;
  color: black;
  background-color: white;
  font-size: 15px;
  height: 10%;
  width: 50%;
  position: absolute;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  left: 0;
  right: 0;

  margin: 0 auto;
  padding-top: 15px;
  text-decoration: none;
`;
const CriteriaBox = styled.div`
  width: 400px;
  height: 400px;
  position: relative;

  background-color: rgba(103, 58, 183, 1);
  border-radius: 30px;
  text-align: center;
  font-size: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  aling-items: center;
  &: hover {
    background-color: rgba(103, 58, 183, 0.5);
  }
  &:hover ${HoverSearch} {
    display: block;
  }
`;

const ContentssBox = styled.div`
  font-size: 20px;
`;

// const LeftTitle = styled.div``;

// const RightContent = styled.div``;
function HomePresenter() {
  //check webtoken to say hello or login button

  /*
  const [autoPlay, setAuto] = useState(false);
  useEffect(() => {
    setAuto(!autoPlay);
  }, []);
  */

  return (
    <>
      <HomeTemplate />
    </>
  );

  /*
  return (
    <>
      <Wrapper>
        
        <Carousell />
      </Wrapper>
      <Wrapper>
        <ContentsBox
          title='Academics?!'
          firstContent='Curriculum'
          secondContent='Number of Majors'
          thirdContent='Career Path'
          LinkTo='/college'
          LinkContent='search Colleges'
        />
        <ContentsBox
          title='Sports?!'
          firstContent='Sports opportunities'
          secondContent='Sports Facilities'
          thirdContent='intermullar activities'
          LinkTo='/college'
          LinkContent='search Colleges'
        />
        <ContentsBox
          title='City?!'
          firstContent='City Vibes'
          secondContent='Weather'
          thirdContent='What is there?'
          LinkTo='/college'
          LinkContent='search Colleges'
        />
      </Wrapper>
      <Wrapper>even more to it!</Wrapper>
    </>
  );
}

*/
}
export default HomePresenter;
