import React from 'react'
import './index.css'

const AnswerField = (props) => {
  return (
    <div className='answer-card'>
      <input className='answer-checkbox' type='checkbox' />
      <input className='answer-input' type='text' placeholder={props.placeholder} />
    </div>
  )
}

export default AnswerField