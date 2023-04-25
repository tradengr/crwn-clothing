import { useState } from 'react';

import FormInput from '../formInput/FormInput.component';
import { Button, GoogleButton } from '../button/Button.component';

import { httpSubmitSignIn } from '../../api/serverAPI';

import './SignIn.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSignIn = async (event) => {
    event.preventDefault();

    const user = { email, password };

    const res = await httpSubmitSignIn(user);
    if (res === undefined) {
      alert('Invalid Username or Password')
      return;
    }
    if (res.status === 200) window.location.assign('http://localhost:5173/');
  }

  const handleGoogleSignin = () => {
    window.open('http://localhost:3000/auth/google', '_self');
  }

  

  return (
    <div className='signin-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your Email or Google</span>
      <form onSubmit={handleSignIn}>
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
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <GoogleButton type='button' onClick={handleGoogleSignin}>Google Sign In</GoogleButton>
        </div>
      </form>
    </div>
  )
}
