import { useState } from 'react'

import FormInput from '../formInput/FormInput.component.jsx';
import { Button } from '../button/Button.component.jsx';
import { httpSubmitSignUp } from '../../api/serverAPI.js';

import './SignUp.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function SignUp() {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSignUp = async (event) => {
    event.preventDefault();
  
    if (password !== confirmPassword) {
      alert('Password does not match.');
      return;
    } 

    const user = {
      displayName,
      email,
      password,
    };

    const res = await httpSubmitSignUp(user);
    if (res.status === 200) window.location.reload();
  }
 
  return (
    <div className='signup-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSignUp}>
        <FormInput 
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          label='Email' 
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password' 
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <FormInput
          label='Confirm Password' 
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
