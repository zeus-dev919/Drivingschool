import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'

const AddButton = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/add');
  }
  return (
    <div className='admin-add-button' onClick={handleClick}>
      <div className='admin-add-icon-section'>
        <img className='admin-plus-icon' src='/assets/icons/Plus.png' alt='plus icon' />
      </div>
      <div className='admin-add-txt' >Add</div>
    </div>
  )
}

export default AddButton