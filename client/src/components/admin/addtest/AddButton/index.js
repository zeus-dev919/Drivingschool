import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import { initializeTest } from '../../../../store/actions/question'
import { useDispatch } from 'react-redux'

const AddButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(initializeTest())
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