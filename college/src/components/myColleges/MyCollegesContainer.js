import React, { useContext } from 'react';
import MyCollegesPresenter from './MyCollegesPresenter';

import AuthContext from '../../contexts/AuthContext';

function MyCollegesContainer(props) {
  console.log('myCollege container');
  console.log(props);

  const { id, colleges } = useContext(AuthContext);

  console.log(id);
  console.log(colleges);
  return <MyCollegesPresenter />;
}

export default MyCollegesContainer;
