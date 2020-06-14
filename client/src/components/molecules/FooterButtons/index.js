//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//font-awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

//styled-components declaration
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

function FooterButtons() {
  return (
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
  );
}

export default FooterButtons;
