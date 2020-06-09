import React from 'react';
import Carousel from 'react-elastic-carousel';
import styled from 'styled-components';
import SliderMain from '../../img/sliderMain.jpeg';
import Slider1 from '../../img/slider1.jpg';
import Slider2 from '../../img/slider2.jpg';
import Slider3 from '../../img/slider3.jpg';
import Slider4 from '../../img/slider4.jpg';

function HomePresenter() {
  //check webtoken to say hello or login button
  const Wrapper = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  `;

  const Item = styled.div`
    font-size: 100px;
    height: 400px;
    display: flex;
    align-items: center;
  `;

  const Img = styled.img`
    max-height: 100%;
    max-width: 100%;
  `;

  const LeftTitle = styled.div``;

  const RightContent = styled.div``;

  return (
    <>
      <Wrapper>
        <Carousel itemsToShow={1} enableAutoPlay={true}>
          <Item>
            <Img src={Slider1} alt=''></Img>
          </Item>
          <Item>
            <Img src={Slider2} alt=''></Img>
          </Item>
          <Item>
            <Img src={Slider3} alt=''></Img>
          </Item>
          <Item>
            <Img src={Slider4} alt=''></Img>
          </Item>
          <Item>My College?</Item>
        </Carousel>
      </Wrapper>
      <Wrapper>Academics?</Wrapper>
      <Wrapper>Sports?</Wrapper>
      <Wrapper>City?</Wrapper>
    </>
  );
}

export default HomePresenter;
