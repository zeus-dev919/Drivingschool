import React from 'react'
import './index.css'

const SelectField = ({ fnClick, fnChange, text = '', bold = false}) => {

  return (
    <div className='selectfield'>
      <input
        className='selectfield-checkbox'
        onClick={e => {
          if (fnClick !== undefined) fnClick(e.target.checked);
        }}
        onChange={e => {
          if (fnChange !== undefined) fnChange(e.target.checked);
        }}
        type='checkbox'
       />
      {
        bold === true ?
          <div className='selectfield-bold-text'>{text}</div> :
          <div className='selectfield-text'>{text}</div>
      }
    </div>
  )
}

export default SelectField;