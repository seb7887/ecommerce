import React, { useState } from 'react'

import { auth, signInWithGoogle } from '../../firebase'
import Button from '../Button'
import FormInput from '../FormInput'

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { email, password } = credentials

    try {
      await auth.signInWithEmailAndPassword(email, password)
    } catch (err) {
      // TODO: error message
      console.log(err.message)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setCredentials({ ...credentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          className="form-input"
          id="email"
          label="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
          name="password"
          className="form-input"
          id="password"
          label="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <div className="buttons-bar-container">
          <Button type="submit" value="Submit Form">
            Sign In
          </Button>
          <Button type="button" onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn
