import React from 'react';
import { Link } from 'react-router-dom';

function LoginPresenter({ loginData, handleChange, handleSubmit }) {
  return (
    <div>
      Hello, this is login
      <form onSubmit={handleSubmit}>
        <input
          type={'text'}
          placeholder={'type in id'}
          value={loginData.id}
          name={'username'}
          onChange={handleChange}
        />
        <input
          type={'text'}
          placeholder={'type in pw'}
          value={loginData.pw}
          name={'password'}
          onChange={handleChange}
        />
        <button>login</button>
        <button>
          <Link to={'/signup'}>Sign up</Link>
        </button>
      </form>
    </div>
  );
}

export default LoginPresenter;
