import React from 'react'
import { useNavigate } from 'react-router-dom'
import { initializeProblems } from '../../../actions/problem'
import { useDispatch } from 'react-redux'

const AddButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(initializeProblems())
    navigate('/add');
  }
  return (
    <div className='w-32 bg-[#3598DB] p-2 float-right flex flex-row cursor-pointer items-center' onClick={handleClick}>
      <div className='w-10 h-10 bg-[#4b71b8] flex flex-row justify-center px-3 py-3'>
        <img src='/assets/icons/Plus.png' alt='plus icon' />
      </div>
      <div className='text-lg text-white flex items-center text-center mx-auto' >Add</div>
    </div>
  )
}

export default AddButton