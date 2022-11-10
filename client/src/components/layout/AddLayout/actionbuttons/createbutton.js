import React from 'react'
import { useNavigate } from 'react-router-dom'
const CreateButton = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    console.log('Create')
    navigate('/add/1')
  }

  return(
    <div className='sidebuttongroup-button add-button' onClick={handleClick}>
      <div className='sidebuttongroup-text'>Agregar pregunta</div>
    </div>
  )
}

export default CreateButton