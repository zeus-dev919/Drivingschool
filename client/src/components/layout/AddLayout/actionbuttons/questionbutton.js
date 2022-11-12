import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuestionButton = ({ id = '', deleteClick }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate(`${id}`)
  }
  const viewClick = () => {
    navigate('/temp')
  }

  return (
    <div className='sidebuttongroup-question-button question-button' onClick={handleClick} id={id}>
      <div className='sidebuttongroup-question-icons'>
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Show.png' alt='show icon' onClick={viewClick} />
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Delete.png' alt='delete icon' id={`${id} delete`} onClick={deleteClick} />
      </div>
      <div className='sidebuttongroup-question-text' >Pregunta {id}</div>
    </div>
  )
}

export default QuestionButton