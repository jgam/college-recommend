import React from 'react';
import ProfilePresenter from './ProfilePresenter';

function ProfileContainer(props) {
  console.log('profile container');
  console.log(props);
  return (
    <div>
      <ProfilePresenter />
    </div>
  );
}

export default ProfileContainer;
