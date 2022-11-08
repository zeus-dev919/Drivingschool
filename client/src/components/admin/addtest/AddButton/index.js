import React from 'react'
import './index.css'
import {useNavigate} from 'react-router-dom'

const AddButton = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/testadd');
  }
  return (
    <div className='admin-add-button'>
      <div className='admin-add-icon-section'>
        <img className='admin-plus-icon' src='/assets/icons/Plus.png' alt='plus icon' />
      </div>
      <div className='admin-add-txt' onClick={handleClick}>Add</div>
    </div>
  )
}

export default AddButton