import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactChildren | string
  buttontype: 'normal' | 'google'
}

const Button: React.FC<Props> = props => {
  const buttonClass =
    props.buttontype === 'google' ? 'custom-button google' : 'custom-button'

  return (
    <button className={buttonClass} {...props}>
      {props.children}
    </button>
  )
}

export default Button
