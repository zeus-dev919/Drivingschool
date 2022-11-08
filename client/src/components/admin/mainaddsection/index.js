import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import AnswerField from './answerfield'

const MainAddSection = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/admin/addtest')
  }

  return (
    <div className='addsection'>
      <div className='addsection-return-button' onClick={handleClick}>Incio</div>
      <div className='addsection-container'>
        <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' />
        <div className='addsection-image-section'>
          <img src='/assets/icons/Main Image.png' alt='mainImage' />
          <img className='upload-image' src='/assets/icons/Upload Cloud.png' alt='uploadImage' />
          <div className='upload-text'>Drag and Drop or <a >Browse</a> to upload</div>
        </div>
        <div className='addsection-answer-section'>
          <AnswerField placeholder='Respuesta 1' />
          <AnswerField placeholder='Respuesta 2' />
          <AnswerField placeholder='Respuesta 3' />
          <AnswerField placeholder='Respuesta 4' />
        </div>
      </div>
    </div>
  )
}

export default MainAddSection