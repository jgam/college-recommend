//React
import React from 'react';

//atom imports
import Content from '../../atoms/Content';
import LinkAtom from '../../atoms/LinkAtom';
import ContentBox from '../../atoms/ContentBox';

function ContentsBox({
  title,
  firstContent,
  secondContent,
  thirdContent,
  LinkTo,
  LinkContent,
}) {
  return (
    <ContentBox
      content={title}
      HoverComponent={<LinkAtom LinkTo={LinkTo} content={LinkContent} />}
    >
      <Content content={firstContent} />
      <Content content={secondContent} />
      <Content content={thirdContent} />
    </ContentBox>
  );
}

export default ContentsBox;
