import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../store/actions/question'

const Title = () => {
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id-1])
  const dispatch = useDispatch()
 
  const [title, setTitle] = useState('')
  const handleChange = async (e) => {
    setTitle(e.target.value)
    const data = {
      id: id,
      property: 'title',
      value: e.target.value
    }
    dispatch(insertQuestion(data))
  }
  useEffect(() => {
    if (question)
      question.title ? setTitle(question.title) : setTitle('')
    else
      setTitle('')
  }, [])
  return (
    <>
      <input type='text' placeholder='Titulo de la pregunta' className='addsection-title' value={title} onChange={handleChange} />
    </>
  )
}

export default Title