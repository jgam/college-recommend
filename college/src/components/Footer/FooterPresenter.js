import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
  padding: 0 180px;
  height: 100px;

  background-color: #222222;
  display: flex;
  justify-content: space-between;
  font-family: 'Chelsea Market';
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FirstContent = styled.div`
  display: flex;
`;

const FCBlock = styled.div`
  display: flex;
`;

const FCTitle = styled.div`
  text-decoration: underline;
  color: white;
  &:last-child {
    cursor: pointer;
  }
`;

const FCContent = styled.div`
  margin-left: 5px;
  margin-right: 20px;
  color: grey;
`;

const SecondContent = styled.div`
  display: flex;
`;

const SCTitle = styled.div`
  color: white;
`;

const SCContent = styled.div`
  margin-left: 5px;
  color: grey;
`;

const ThirdContent = styled.div`
  color: grey;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const FirstButton = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: solid white 1px;
  color: white;
  cursor: pointer;
`;

const SecondButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Icon = styled.div`
  color: white;
  font-weight: 700;
  border-radius: 30px;
  width: 30px;
  height: 30px;
  background-color: rgba(103, 58, 183, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
function FooterPresenter() {
  return (
    <Wrapper>
      <Contents>
        <FirstContent>
          <FCBlock>
            <FCTitle>대표이사</FCTitle>
            <FCContent>자바스터디</FCContent>
          </FCBlock>
          <FCBlock>
            <FCTitle>사업자등록번호</FCTitle>
            <FCContent>01001001</FCContent>
          </FCBlock>
          <FCBlock>
            <FCTitle>대표전화</FCTitle>
            <FCContent>010112</FCContent>
          </FCBlock>
          <FCBlock>
            <FCTitle>FAX</FCTitle>
            <FCContent>0112331</FCContent>
          </FCBlock>
          <FCBlock>
            <FCTitle>개인정보처리방침</FCTitle>
          </FCBlock>
        </FirstContent>
        <SecondContent>
          <SCTitle>본사</SCTitle>
          <SCContent>〒158-0094 東京都世田谷区玉川１丁目１４−1</SCContent>
        </SecondContent>
        <ThirdContent>Copyright RAONSECURE All rights reserved.</ThirdContent>
      </Contents>
      <Buttons>
        <FirstButton>FAMILY SITE</FirstButton>
        <SecondButton>
          <Icon>b</Icon>
          <Icon>f</Icon>
          <Icon>
            <FontAwesomeIcon icon={faPlay} />
          </Icon>
        </SecondButton>
      </Buttons>
    </Wrapper>
  );
}

export default FooterPresenter;
