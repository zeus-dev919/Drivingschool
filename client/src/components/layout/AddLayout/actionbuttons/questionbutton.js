import React from 'react'

const QuestionButton = () => {
  return (
    <div className='sidebuttongroup-question-button question-button'>
      <div className='sidebuttongroup-question-icons'>
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Show.png' alt='show icon' />
        <img className='sidebuttongroup-question-icon' src='/assets/icons/Delete.png' alt='delete icon' />
      </div>
      <div className='sidebuttongroup-question-text'>Pregunta 1</div>
    </div>
  )
}

export default QuestionButton