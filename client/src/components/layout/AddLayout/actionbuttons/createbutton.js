import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QuestionButton from './questionbutton'

const CreateButton = () => {
  const navigate = useNavigate()
  const questions = useSelector(state=> state.testReducer.questions)

  const handleClick = () => {
    const id = questions.length + 1
    navigate(`/add/${id}`);
    document.getElementById('question-button').innerHTML += <QuestionButton />
  }

  return(
    <div className='sidebuttongroup-button add-button' onClick={handleClick}>
      <div className='sidebuttongroup-text'>Agregar pregunta</div>
    </div>
  )
}

export default CreateButton