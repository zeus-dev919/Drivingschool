import React, { useState, useEffect } from 'react'
import './index.css'

const AnswerFields = props => {
  const [choices, setChoices] = useState({
    choice1: '',
    choice2: '',
    choice3: '',
    choice4: ''
  });
  const [answer, setAnswer] = useState('');

  const checkboxGroup = document.getElementsByClassName('answer-checkbox');
  const onChange = (e) => {
    Object.keys(checkboxGroup).map((key) => {
      if (checkboxGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          setAnswer(e.target.id)
          props.setProblem({ ...props.problem, answer: e.target.id })
        }
        else {
          setAnswer('');
          props.setProblem({ ...props.problem, answer: '' })
        }
      }
      else {
        checkboxGroup[key].checked = false
      }
      return 0;
    })
  }
  const handleChange = (event) => {
    const { name, value } = event.target;
    setChoices({ ...choices, [name]: value })
    props.setProblem({ ...props.problem, choices: choices })
  }

  useEffect(()=>{
    if(!props.problem.choices) {
      setChoices({
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: ''
      })
    }
    else
      setChoices(props.problem.choices)
  },[])
  return (
    <>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice1' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 1' name='choice1' value={choices.choice1} onChange={handleChange} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice2' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 2' name='choice2' value={choices.choice2} onChange={handleChange} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice3' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 3' name='choice3' value={choices.choice3} onChange={handleChange} />
      </div>
      <div className='answer-card'>
        <input className='answer-checkbox' type='checkbox' id='choice4' onChange={onChange} />
        <input className='answer-input' type='text' placeholder='Respuesta 4' name='choice4' value={choices.choice4} onChange={handleChange} />
      </div>
    </>
  )
}

export default AnswerFields