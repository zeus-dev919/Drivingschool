import React from 'react'
import './index.css'

const AnswerFields = props => {
  const checkboxGroup = document.getElementsByClassName('answer-checkbox');
  const onChange = (e) => {
    Object.keys(checkboxGroup).map((key) => {
      if (checkboxGroup[key].id === e.target.id) {
        if (e.target.checked === true)
          props.setProblem({ ...props.problem, answer: e.target.id })
        else
          props.setProblem({ ...props.problem, answer: null })
      }
      else {
        checkboxGroup[key].checked = false
      }
      return 0;
    })
  }
  const handleChange = (event) => {
    const { name, value } = event.target
    props.setProblem({ ...props.problem, [name]: value })
  }
  return (
    <>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice1' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 1' name='choice1' onChange={handleChange} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice2' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 2' name='choice2' onChange={handleChange} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice3' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 3' name='choice3' onChange={handleChange} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice4' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 4' name='choice4' onChange={handleChange} />
      </div>
    </>
  )
}

export default AnswerFields