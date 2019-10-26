import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (data: any) => any
  label?: string
}

const FormInput: React.FC<Props> = props => (
  <div className="group">
    <input className="form-input" onChange={props.onChange} {...props} />
    {props.label && (
      <label className={props.value ? 'shrink' : ''}>{props.label}</label>
    )}
  </div>
)

export default FormInput
