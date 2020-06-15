//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//styled-components declaration
const HoverElement = styled.div`
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
const ContentBoxWrapper = styled.div`
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
  &:hover ${HoverElement} {
    display: block;
  }
`;
//content Box
function ContentBox({ content, children, HoverComponent }) {
  return (
    <ContentBoxWrapper>
      {content}
      <HoverElement>{HoverComponent}</HoverElement>
      {children}
    </ContentBoxWrapper>
  );
}

export default ContentBox;
