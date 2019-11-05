import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChildren | string
  buttontype: 'normal' | 'google' | 'inverted'
}

const Button: React.FC<Props> = props => {
  const buttonClass =
    props.buttontype !== 'normal'
      ? `custom-button ${props.buttontype}`
      : 'custom-button'

  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  )
}

export default Button
