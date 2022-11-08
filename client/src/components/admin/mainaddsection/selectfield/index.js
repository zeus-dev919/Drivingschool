import React from 'react'
import './index.css'

const SelectField = (props) => {
  return (
    <div className = 'selectfield'>
      <input className='selectfield-checkbox' type='checkbox' />
      <div className='selectfield-text'>{props.text}</div>
    </div>
  )
}

export default SelectField;