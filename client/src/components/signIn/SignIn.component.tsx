import { useState, FormEvent, ChangeEvent } from 'react';

import FormInput from '../formInput/FormInput.component';
import { Button, GoogleButton } from '../button/Button.component';

import { userEmailSignIn, userGoogleSignIn } from '../../redux/user/user.slice';
import { useAppDispatch } from '../../redux/hooks';

import './SignIn.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

export default function SignIn() {
  const dispatch = useAppDispatch();
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSignIn = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(userEmailSignIn(formFields));
  }

  const handleGoogleSignin = () => {
    dispatch(userGoogleSignIn());
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
