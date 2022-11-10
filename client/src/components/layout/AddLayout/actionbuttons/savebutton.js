import React from 'react'
import toast from 'react-hot-toast'

const SaveButton = () => {
  const handleSubmit = () => {
    toast.success('Success')    
  }

  return(
    <div className='sidebuttongroup-button store-button'>
      <div className='sidebuttongroup-text' onClick={handleSubmit}>Guardar prueba</div>
    </div>
  )
}

export default SaveButton