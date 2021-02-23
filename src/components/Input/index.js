export { default } from './Input'
import './Input.css'

import React from 'react'
import './Input.css'

export default function Input({ labelText, placeholder, name }) {
  return (
    <label className="Input">
      {labelText}
      <input name={name} placeholder={placeholder} type="text" />
    </label>
  )
}
