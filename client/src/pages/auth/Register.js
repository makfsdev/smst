import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../middleware/firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    // console.log(email, password);
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className='container-fluid'>
      <div className='row my-5'>
        <div className='col-md-4 offset-md-4'>
          <h2>Register</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <div className='form-outline'>
            <input
              type='email'
              id='typeEmail'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className='form-label' htmlFor='typeEmail'>
              Email
            </label>
          </div>
          <div className='form-outline mt-3'>
            <input
              type='password'
              id='typePassword'
              className='form-control'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className='form-label' htmlFor='typePassword'>
              Password
            </label>
          </div>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-md-4 offset-md-4 mx-auto'>
          <button
            type='button'
            className='btn btn-primary btn-rounded'
            onClick={registerUser}
          >
            S'inscrire
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
