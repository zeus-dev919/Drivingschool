import React from 'react'

const CreateButton = () => {

  const handleClick = () => {
    document.getElementById('addsection').style.display = 'block';
    document.getElementById('sidebuttongroup').style.height = '100%';
  }

  return(
    <div className='sidebuttongroup-button add-button' onClick={handleClick}>
      <div className='sidebuttongroup-text'>Agregar pregunta</div>
    </div>
  )
}

export default CreateButton