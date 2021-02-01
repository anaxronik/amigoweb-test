import React, { useState } from 'react'

import './Dropdown.css'

export default function Dropdown({ name, variants, placeholder, onSelect }) {
  const [value, setValue] = useState('')
  const [variantsVisible, setVariantsVisible] = useState(false)
  const [variantsList, setVariantsList] = useState(variants)

  const inputChangeHandler = (event) => {
    const value = event.target.value
    setVariantsVisible(true)
    setValue(value)
    if (value === '') {
      setVariantsList(variants)
    }
    setVariantsList(
      variants.filter((item) =>
        item.toLowerCase().startsWith(value.toLowerCase())
      )
    )
  }

  return (
    <div className="dropdown">
      <div className="dropdown__label">{name}</div>
      <div className="dropdown__input-block">
        <input
          type="text"
          className="dropdown__input"
          placeholder={placeholder}
          value={value}
          onChange={inputChangeHandler}
          onClick={() => {
            setVariantsVisible(!variantsVisible)
          }}
        />
        <span
          className={
            !variantsVisible
              ? 'dropdown__input-icon dropdown__input-icon--open'
              : 'dropdown__input-icon dropdown__input-icon--close'
          }
        ></span>
      </div>
      {variantsVisible && variantsList.length ? (
        <div className="dropdown__variants">
          {variantsList.map((item, index) => (
            <div
              key={index}
              className="dropdown__variant"
              onClick={(event) => {
                setValue(item)
                onSelect(item)
                setVariantsVisible(false)
              }}
            >
              {item}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
