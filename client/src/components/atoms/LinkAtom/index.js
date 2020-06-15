//react
import React from 'react';
import { Link } from 'react-router-dom';

//style is not here because we want to manipulate with styles

//Search Box
function LinkAtom({ LinkTo, content }) {
  return (
    <Link to={LinkTo} style={{ textDecoration: 'inherit', color: 'inherit' }}>
      {content}
    </Link>
  );
}

export default LinkAtom;
