import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuestionButton = ({ id = ''}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${id}`)
  }
  return (
    <div className='sidebuttongroup-question-button question-button'>
      <div className='sidebuttongroup-question-icons'>
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Show.png' alt='show icon' />
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Delete.png' alt='delete icon' />
      </div>
      <div className='sidebuttongroup-question-text' onClick = {handleClick}>Pregunta {id}</div>
    </div>
  )
}

export default QuestionButton