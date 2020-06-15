//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//import Molecules
import Carousell from '../../molecules/Carousel';
import ContentsBox from '../../molecules/ContentsBox';

const Wrapper = styled.div``;
const BoxWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  font-family: 'Chelsea Market';
`;

function HomeTemplate(props) {
  return (
    <Wrapper>
      <Carousell />
      <BoxWrapper>
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
      </BoxWrapper>
      <div>even more to it</div>
    </Wrapper>
  );
}

export default HomeTemplate;
