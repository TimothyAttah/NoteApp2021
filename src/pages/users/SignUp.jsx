import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

import {Modal} from '../../components/modal/Modal'
import { Title, PTag, CloseBtn, GoogleBox, Wrapper } from './Styles';
import history from '../../history';
import Backdrop from '../../components/Backdrop'
import SignUpForm from '../../components/forms/SignUpForm';
import {images} from '../../components/images'
import Home from '../home/Home';

const SignUp = () => {
  return (
    <>
      <Backdrop onClick={ () => history.push( '/' ) } />
      <Home />
      <Modal>
        <div onClick={ () => history.push( '/' ) }>
          <CloseBtn> <Icon name='close' /></CloseBtn>
        </div>
        <Title>Note3Sixty</Title>
        <PTag primary>Create your Account</PTag>
          <PTag>Enter your personal details to start your journey</PTag>
        <Link to='/api/auth/google'>
          <GoogleBox>
            <Wrapper>
              <span>
                <img src={ images.GoogleIcon } alt='Goggle' width='25px' />
              </span>
              <p>Log in with Google</p>
            </Wrapper>
          </GoogleBox>
        </Link>
        <PTag or>Or</PTag>
        <SignUpForm />
        <PTag link>Already have an account? <Link to='/user/sign-in'>Sign in here</Link></PTag>
      </Modal>
    </>
  );
}

export default SignUp;
