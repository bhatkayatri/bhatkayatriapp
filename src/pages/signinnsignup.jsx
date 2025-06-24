import React from 'react';

import SignIn from '../components/Sign-in';
import SignUp from '../components/sign-up';

import './signinnsignup.scss';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;