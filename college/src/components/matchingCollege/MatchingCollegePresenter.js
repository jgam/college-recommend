import React from 'react';

//input field for sat scores or act scores
//input field for gpa

function MatchingCollegePresenter({ formData, handleChange, handleSubmit }) {
  //formData.colleges = list of colleges and we should show them
  console.log('in college presenter!');
  return (
    <div>
      currently in matchingCollegePresenter
      <h1>tell me ur stats!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder={'type in act score'}
          value={formData.act}
          name={'act'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          placeholder={'type in sat score'}
          value={formData.sat}
          name={'sat'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          placeholder={'type in GPA'}
          value={formData.gpa}
          name={'gpa'}
          onChange={handleChange}
        />
        <button type={'submit'}> Submit </button>
      </form>
    </div>
  );
}

export default MatchingCollegePresenter;
