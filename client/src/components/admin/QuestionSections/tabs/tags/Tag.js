import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { insertQuestion } from '../../../../../store/actions/question'
import { useParams } from 'react-router-dom'

const Tag = ({ name = '', tag_id = '' }) => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const question = useSelector(state => state.testReducer.questions[id - 1])

  const onChange = (e) => {
    setChecked(e.target.checked)
    const data = {
      id: id,
      property: tag_id,
      value: e.target.checked
    }
    dispatch(insertQuestion(data))
  }

  useEffect(() => {
    if (question) {
      if (question[tag_id])
        setChecked(question[tag_id])
      else
        setChecked(false)
    }
    else
      setChecked(false)
  }, [id, question])

  return (
    <>
      <div className='relative py-7 cursor-pointer'>
        <input
          className='float-left w-4 h-4 m-1'
          type='checkbox'
          onChange={onChange}
          checked={checked}
        />
        <div className='ml-20 text-[#333333] text-lg'>{name}</div>
      </div>
    </>
  )
}

export default Tag