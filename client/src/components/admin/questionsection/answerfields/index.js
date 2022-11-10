import React, { useState, useEffect } from 'react'
import './index.css'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../store/actions/question'

const AnswerFields = props => {
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id - 1])
  const dispatch = useDispatch()

  const [choices, setChoices] = useState({});
  const [answer, setAnswer] = useState('');

  const checkboxGroup = document.getElementsByClassName('answer-checkbox');
  const onChange = (e) => {
    Object.keys(checkboxGroup).map((key) => {
      if (checkboxGroup[key].id === e.target.id) {
        if (e.target.checked === true) {
          setAnswer(e.target.id)
          const data = {
            id: id,
            property: 'answer',
            value: e.target.id
          }
          dispatch(insertQuestion(data))
        }
        else {
          setAnswer('');
          const data = {
            id: id,
            property: 'answer',
            value: ''
          }
          dispatch(insertQuestion(data))
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
    const data = {
      id: id,
      property: 'choices',
      value: choices
    }
    dispatch(insertQuestion(data))
  }

  useEffect(() => {
    if (question) {
       question.choices ? setChoices(question.choices) : <></>
    }  
  }, [])

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