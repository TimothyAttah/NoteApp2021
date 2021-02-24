import React, {useState} from 'react'
import { Form, Button, } from 'semantic-ui-react';

import { signIn } from '../../redux/actions/userAction'
import history from '../../history'


const SignInForm = () => {
  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState( '' )
 
   
    const  renderSubmit = (e) => {
      e.preventDefault()
      const savedUser = {
        email,
        password
      } 
      
      history.push('/notes')
      }
  return (
    <div>
      <Form onSubmit={ renderSubmit }>
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
        <Button primary style={ { width: '100%' } }>Sign In</Button>
      </Form>
    </div>
  );
}

export default SignInForm;