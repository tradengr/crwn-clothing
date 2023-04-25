import SignIn from '../../components/signIn/SignIn.component'
import SignUp from '../../components/signUp/SignUp.component'

import './Auth.styles.scss';

export default function Auth() {
  return (
    <div className='auth-container'>
      <SignIn/>
      <SignUp/>
    </div>
  )
}
