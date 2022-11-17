import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateProblem } from '../../../actions/problem'

const Title = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const problem = useSelector(state => state.problemReducer.problems[id - 1])

  const [title, setTitle] = useState('')

  useEffect(() => {
    if (problem) {
      if (problem.title)
        setTitle(problem.title)
      else
        setTitle('')
    }
  }, [id, problem])

  const onChange = (e) => {
    setTitle(e.target.value)
    const data = {
      id: id,
      property: 'title',
      value: e.target.value
    }
    dispatch(updateProblem(data))
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