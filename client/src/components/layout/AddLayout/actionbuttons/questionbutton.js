import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const QuestionButton = ({ id = ''}) => {
  const navigate = useNavigate();
  const questions = useSelector(state => state.testReducer.questions)
  const handleClick = (e) => {
    navigate(`${id}`)
  }
  const viewClick = () => {
    navigate('/temp')
  }

  const deleteClick = () => {
    toast('This is delete button')
  }
  return (
    <div className='sidebuttongroup-question-button question-button' onClick={handleClick} id={id}>
      <div className='sidebuttongroup-question-icons'>
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Show.png' alt='show icon' onClick = {viewClick}/>
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Delete.png' alt='delete icon' onClick = {deleteClick} />
      </div>
      <div className='sidebuttongroup-question-text' >Pregunta {id}</div>
    </div>
  )
}

export default QuestionButton