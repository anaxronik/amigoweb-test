import React from 'react'

import './TextField.css'

export default function TextField({
  name = '',
  errorText = '',
  placeholder = '',
  type = 'text',
  value,
  onChange,
}) {
  return (
    <div className="textField">
      <div className="textField_label">{name}</div>
      <input
        type={type}
        placeholder={placeholder}
        className="textField_input"
        value={value}
        onChange={onChange}
      />
      {errorText ? <div className="textField_error">{errorText}</div> : null}
    </div>
  )
}
