import React from 'react';
import {Route} from 'react-router-dom';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUpPage from '../../pages/signuppage/signuppage';

//import './signinpage.styles.scss';

const SignInPage = () => (
  <div className='sign-in'>
    <SignIn />
    
  </div>
);

export default SignInPage;