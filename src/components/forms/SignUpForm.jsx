import React, {useState} from 'react'
import { Form, Button } from 'semantic-ui-react';

import {signUp} from '../../redux/actions/userAction'


const SignUpForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState( '' )
   
    const  renderSubmit = (e) => {
      e.preventDefault()
      const savedUser = {
        firstName,
        lastName,
        email,
        password
      }
       console.log(savedUser)
     
      }
  return (
    <div>
      <Form onSubmit={ renderSubmit }>
        <Form.Field>
          <label>First Name:</label>
          <input
            type='text'
            name='firstName'
            placeholder='Enter your first name'
            value={ firstName }
            onChange={ ( e ) => setFirstName( e.target.value ) }
          />
        </Form.Field>
        <Form.Field>
        <label>Last Name:</label>
          <input
            type='text'
            name='lastName'
            placeholder='Enter your last name'
            value={ lastName }
            onChange={ ( e ) => setLastName( e.target.value ) }
          />
        </Form.Field>
        <Form.Field>
        <label>Email Address:</label>
          <input
            type='email'
            name='email'
            placeholder='email@example.com'
            value={ email }
            onChange={ ( e ) => setEmail( e.target.value ) }
          />
        </Form.Field>
        <Form.Field>
        <label>Password:</label>
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={ password }
            onChange={ ( e ) => setPassword( e.target.value ) }
          />
        </Form.Field>
        <Button primary style={ { width: '100%' } }>Sign Up</Button>
      </Form>
    </div>
  );
}

export default SignUpForm;