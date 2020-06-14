//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//molecules
import FooterButtons from '../../molecules/FooterButtons';
import FooterContent from '../../molecules/FooterContent';

//styled-components declaration
const Wrapper = styled.div`
  padding: 0 180px;
  height: 100px;

  background-color: #222222;
  display: flex;
  justify-content: space-between;
  font-family: 'Chelsea Market';
`;

function FooterPresenter() {
  return (
    <Wrapper>
      <FooterContent />
      <FooterButtons />
    </Wrapper>
  );
}

export default FooterPresenter;
