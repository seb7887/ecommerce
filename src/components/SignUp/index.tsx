import React, { useState } from 'react'

import Button from '../Button'
import FormInput from '../FormInput'

interface SignUpState extends Credentials {
  displayName: string
  confirmPassword: string
}

const SignUp: React.FC = () => {
  const [credentials, setCredentials] = useState<SignUpState>({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords don't match")
      return
    }

    console.log(credentials)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name={credentials.displayName}
          value={credentials.displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={credentials.email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirm-password"
          value={credentials.confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  )
}

export default SignUp
