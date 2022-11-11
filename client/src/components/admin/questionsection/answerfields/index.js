import React from 'react'
import './index.css'

const AnswerFields = ({ choices = {}, handleChangeAnswerField, onChangeAnswer }) => {
  return (
    <div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice1' onChange={onChangeAnswer} />
        <input className='answer-input' type='text' placeholder='Respuesta 1' name='choice1' value={choices.choice1} onChange={handleChangeAnswerField} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice2' onChange={onChangeAnswer} />
        <input className='answer-input' type='text' placeholder='Respuesta 2' name='choice2' value={choices.choice2} onChange={handleChangeAnswerField} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice3' onChange={onChangeAnswer} />
        <input className='answer-input' type='text' placeholder='Respuesta 3' name='choice3' value={choices.choice3} onChange={handleChangeAnswerField} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice4' onChange={onChangeAnswer} />
        <input className='answer-input' type='text' placeholder='Respuesta 4' name='choice4' value={choices.choice4} onChange={handleChangeAnswerField} />
      </div>
    </div>
  )
}

export default AnswerFields