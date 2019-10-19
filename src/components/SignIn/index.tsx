import React, { useState } from 'react'

import Button from '../Button'
import FormInput from '../FormInput'

const SignIn: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    email: '',
    password: ''
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    console.log(credentials)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          className="form-input"
          id="email"
          label="Email"
          value={credentials.email}
          onChange={handleChange}
          required
        />
        <FormInput
          type="password"
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
        </div>
      </form>
    </div>
  )
}

export default SignIn
