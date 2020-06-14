//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//styled-components declaration
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

function FooterContent() {
  return (
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
  );
}

export default FooterContent;
