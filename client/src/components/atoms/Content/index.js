//react
import React from 'react';

//styled-components
import styled from 'styled-components';

//styled-components declaration
const ContentWrapper = styled.div`
  font-size: 20px;
`;

function Content({ content }) {
  return <ContentWrapper>{content}</ContentWrapper>;
}

export default Content;
