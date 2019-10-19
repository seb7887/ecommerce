import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChildren | string
}

const Button: React.FC<Props> = props => (
  <button className="custom-button" {...props}>
    {props.children}
  </button>
)

export default Button
