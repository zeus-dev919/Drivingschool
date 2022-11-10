import React from 'react'

const SaveButton = () => {
  const handleSubmit = () => {
    const formData = new FormData();
  }

  return(
    <div className='sidebuttongroup-button store-button'>
      <div className='sidebuttongroup-text' onClick={handleSubmit}>Guardar prueba</div>
    </div>
  )
}

export default SaveButton