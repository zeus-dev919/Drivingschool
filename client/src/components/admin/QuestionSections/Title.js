import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertQuestion } from '../../../store/actions/question'
import { useParams } from 'react-router-dom'

const Title = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const question = useSelector(state => state.testReducer.questions[id - 1])
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (question) {
      if (question.title)
        setTitle(question.title)
      else
        setTitle('')
    }
    else {
      setTitle('')
    }
  }, [id, question])

  const onChange = (e) => {
    setTitle(e.target.value)
    const data = {
      id: id,
      property: 'title',
      value: e.target.value
    }
    dispatch(insertQuestion(data))
  }

  return (
    <>
      <input
        type='text'
        placeholder='Titulo de la pregunta'
        className='w-full px-8 py-8 text-3xl text-[#C4BEBE] text-center bg-[#F2F5FA] border-none focus:outline-none'
        value={title}
        onChange={onChange}
      />
    </>
  )
}

export default Title