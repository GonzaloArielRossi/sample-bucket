import React, { useContext, useRef } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';

import { UserAuthContext } from '../../Context/UserAuthContext';
import { Toast } from '../../Helpers/swal2';
import { validateEmail } from '../../Helpers/validateEmail';

export const SignUp = () => {
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const { signUp } = useContext(UserAuthContext);
  const { push } = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    if (email.current.value.length < 3 || !validateEmail(email.current.value)) {
      Swal.fire({
        icon: 'error',
        title: 'Email',
        text: 'Enter a valid email'
      });
      return;
    }
    if (confirmPassword.current.value !== password.current.value) {
      Swal.fire({
        icon: 'error',
        title: 'Password',
        text: 'Passwords do not match'
      });
      return;
    }
    signUp(
      email.current.value,
      password.current.value,
      confirmPassword.current.value
    )
      .then(() => {
        Toast.fire({
          icon: 'success',
          title: 'Signed up successfully'
        });
        push('/');
      })
      .catch((err) =>
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: err.message
        })
      );
  };

  return (
    <div className="form-main">
      <div className="form-card">
        <form action="" onSubmit={handleSubmit}>
          <input
            ref={email}
            required
            className="form-input-text"
            name="email"
            placeholder="Input your email"
            type="email"
          />
          <input
            ref={password}
            required
            className="form-input-text"
            name="password"
            placeholder="Input your password"
            type="password"
          />
          <input
            ref={confirmPassword}
            required
            className="form-input-text"
            name="confirmPassword"
            placeholder="Input your password"
            type="password"
          />
          <button className="form-submit-btn " type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
