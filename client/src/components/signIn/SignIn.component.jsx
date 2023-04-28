import { useState } from 'react';

import FormInput from '../formInput/FormInput.component';
import { Button, GoogleButton } from '../button/Button.component';

import { httpSubmitSignIn } from '../../api/serverAPI';

import { userSignIn } from '../../redux/user/user.slice';
import { useDispatch } from 'react-redux';

import './SignIn.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const dispatch = useDispatch();

  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSignIn = async (event) => {
    event.preventDefault();

    const user = { email, password };
    
    dispatch(userSignIn(user));
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
