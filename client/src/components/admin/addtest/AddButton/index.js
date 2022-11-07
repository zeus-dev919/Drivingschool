import React from 'react'
import './index.css'

const AddButton = () => {
  return (
    <div className='admin-add-button'>
      <div className='admin-add-icon-section'>
        <img className='admin-plus-icon' src='/assets/icons/Plus.png' alt='plus icon' />
      </div>
      <div className='admin-add-txt'>Add</div>
    </div>
  )
}

export default AddButton