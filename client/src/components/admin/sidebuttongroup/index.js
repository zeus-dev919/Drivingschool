import React from 'react'
import './index.css'

const SideButtonGroup = () => {
  const handleClick = () => {
    document.getElementsByClassName('sidebuttongroup-view-button')
  }
  return (
    <div className='sidebuttongroup'>
      <div className='sidebuttongroup-container'>
        <div className='sidebuttongroup-button add-button' onClick={handleClick}>
          <div className='sidebuttongroup-text'>Agregar pregunta</div>
        </div>
        <div className='sidebuttongroup-view-button view-button'>
          <div className='sidebuttongroup-view-icons'>
            <img className='sidebuttongroup-view-icon' src='/assets/icons/Show.png' alt='show icon' />
            <img className='sidebuttongroup-view-icon' src='/assets/icons/Drag.png' alt='detail icon' />
          </div>
          <div className='sidebuttongroup-view-text'>Pregunta 1</div>
        </div>
        <div className='sidebuttongroup-button store-button'>
          <div className='sidebuttongroup-text'>Guardar prueba</div>
        </div>
      </div>
    </div>
  )
}

export default SideButtonGroup