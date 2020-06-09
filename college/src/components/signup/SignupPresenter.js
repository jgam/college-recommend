import React from 'react';

function SignupPresenter({ SignupData, handleChange, handleSubmit }) {
  return (
    <div>
      Hello, im signup presenter
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder={'type in username'}
          value={SignupData.useranme}
          name={'username'}
          onChange={handleChange}
        />
        <input
          type={'password'}
          placeholder={'type in pw'}
          value={SignupData.password}
          name={'password'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          placeholder={'type in name'}
          value={SignupData.name}
          name={'name'}
          onChange={handleChange}
        />
        <button onSubmit={handleSubmit}>Signup</button>
      </form>
    </div>
  );
}

export default SignupPresenter;
