//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//react-elastic-carousel
import Carousel from 'react-elastic-carousel';

//slider imports
import Slider1 from '../../../img/slider1.jpg';
import Slider2 from '../../../img/slider2.jpg';
import Slider3 from '../../../img/slider3.jpg';
import Slider4 from '../../../img/slider4.jpg';

//styled-components declaration
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

function Carousell({ itemsToShow = 1 }) {
  return (
    <Carousel itemsToShow={itemsToShow}>
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
  );
}

export default Carousell;
