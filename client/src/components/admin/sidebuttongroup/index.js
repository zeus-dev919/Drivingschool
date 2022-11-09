import React from 'react'
import './index.css'

const SideButtonGroup = (problem = {}) => {
  const handleClick = () => {
    document.getElementById('viewbutton').classList.add('show')
    document.getElementById('addsection').style.display = 'block';
    document.getElementById('sidebuttongroup').style.height = '100%';
  }

  const handleSubmit = () => {
    const formData = new FormData();
    console.log('problem: ', problem)
  }
  return (
    <div className='sidebuttongroup' id='sidebuttongroup'>
      <div className='sidebuttongroup-container'>
        <div className='sidebuttongroup-button add-button' onClick={handleClick}>
          <div className='sidebuttongroup-text'>Agregar pregunta</div>
        </div>
        <div id='viewbutton' className='sidebuttongroup-view-button view-button'>
          <div className='sidebuttongroup-view-icons'>
            <img className='sidebuttongroup-view-icon' src='/assets/icons/Show.png' alt='show icon' />
            <img className='sidebuttongroup-view-icon' src='/assets/icons/Drag.png' alt='detail icon' />
          </div>
          <div className='sidebuttongroup-view-text'>Pregunta 1</div>
        </div>
        <div className='sidebuttongroup-button store-button'>
          <div className='sidebuttongroup-text' onClick = {handleSubmit}>Guardar prueba</div>
        </div>
      </div>
    </div>
  )
}

export default SideButtonGroup