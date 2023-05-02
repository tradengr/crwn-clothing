import { useState, FormEvent, ChangeEvent } from 'react'
import { useAppDispatch } from '../../redux/hooks';

import FormInput from '../formInput/FormInput.component';
import { Button } from '../button/Button.component';
import { userSignUp } from '../../redux/user/user.slice';

import './SignUp.styles.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export default function SignUp() {
  const dispatch = useAppDispatch();
  const [ formFields, setFormFields ] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({...formFields, [name]: value});
  }

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Password does not match.');
      return;
    }

    dispatch(userSignUp(formFields));
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
          minLength={8}
          />
        <FormInput
          label='Confirm Password' 
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          minLength={8}
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  )
}
