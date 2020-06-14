import React from "react";
import Carousel from "react-elastic-carousel";
import styled from "styled-components";
import Slider1 from "../../img/slider1.jpg";
import Slider2 from "../../img/slider2.jpg";
import Slider3 from "../../img/slider3.jpg";
import Slider4 from "../../img/slider4.jpg";

import { Link } from "react-router-dom";
const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  font-family: "Chelsea Market";
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
  align-items: center;
  &:hover {
    background-color: rgba(103, 58, 183, 0.5);
  }
  &:hover ${HoverSearch} {
    display: block;
  }
`;

const ContentsBox = styled.div`
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
      <Wrapper>
        {/* <Carousel itemsToShow={1} enableAutoPlay={true}> */}
        <Carousel itemsToShow={1}>
          <Item>
            <Img src={Slider1} alt=""></Img>
          </Item>
          <Item>
            <Img src={Slider2} alt=""></Img>
          </Item>
          <Item>
            <Img src={Slider3} alt=""></Img>
          </Item>
          <Item>
            <Img src={Slider4} alt=""></Img>
          </Item>
          <Item>My College?</Item>
        </Carousel>
      </Wrapper>
      <Wrapper>
        <CriteriaBox>
          Academics?
          <HoverSearch>
            <Link
              to={"/college"}
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              Search Colleges
            </Link>
          </HoverSearch>
          <ContentsBox>Curriculum</ContentsBox>
          <ContentsBox>Career path</ContentsBox>
          <ContentsBox>Number of majors</ContentsBox>
        </CriteriaBox>
        <CriteriaBox>
          Sports?
          <HoverSearch>
            <Link
              to={"/college"}
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              Search Colleges
            </Link>
          </HoverSearch>
          <ContentsBox>Sports opportunities</ContentsBox>
          <ContentsBox>Sports facilities</ContentsBox>
          <ContentsBox>intermullar activities</ContentsBox>
        </CriteriaBox>
        <CriteriaBox>
          City?
          <HoverSearch>
            <Link
              to={"/college"}
              style={{ textDecoration: "inherit", color: "inherit" }}
            >
              Search Colleges
            </Link>
          </HoverSearch>
          <ContentsBox>City vibes</ContentsBox>
          <ContentsBox>Weather</ContentsBox>
          <ContentsBox>What is there?</ContentsBox>
        </CriteriaBox>
      </Wrapper>
      <Wrapper>even more to it!</Wrapper>
    </>
  );
}

export default HomePresenter;
