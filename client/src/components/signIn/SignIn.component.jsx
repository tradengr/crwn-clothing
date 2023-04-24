import React from 'react'

export default function SignIn() {
  const handleGoogleSignin = () => {
    window.open('http://localhost:3000/auth/google', '_self');
  }

  return (
    <div>
      <button onClick={handleGoogleSignin}>Sign In with Google</button>
    </div>
  )
}
