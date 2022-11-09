import React from 'react'
import './index.css'
import { useNavigate } from 'react-router-dom'
import AnswerField from './answerfield'
import ImageUpload from './imageupload'
import TabSection from './tabsection'

const MainAddSection = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/admin/addtest')
  }

  return (
    <div className='addsection'>
      <div className='addsection-return-button' onClick={handleClick}>Incio</div>
      <div className='addsection-container' id='addsection'>
        <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' />
        <ImageUpload />
        <div className='addsection-answer-section'>
          <AnswerField placeholder='Respuesta 1' />
          <AnswerField placeholder='Respuesta 2' />
          <AnswerField placeholder='Respuesta 3' />
          <AnswerField placeholder='Respuesta 4' />
        </div>
        <TabSection />
      </div>
    </div>
  )
}

export default MainAddSection