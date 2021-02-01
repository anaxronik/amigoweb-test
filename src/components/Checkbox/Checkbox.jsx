import React from 'react'

import './Checkbox.css'

export default function Checkbox({ isCheched = false, onClick, children }) {
  return (
    <div className="checkbox">
      <span
        onClick={onClick}
        className={
          isCheched
            ? 'checkbox__checkbox checkbox__checkbox--cheked'
            : 'checkbox__checkbox'
        }
      ></span>
      <span className="checkbox__text">{children}</span>
    </div>
  )
}
