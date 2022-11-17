import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProblem } from '../../../../../actions/problem'

import { useParams } from 'react-router-dom'

const Tag = ({ name = '', tag_id = '' }) => {
  const { id } = useParams();
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()
  const problem = useSelector(state => state.problemReducer.problems[id - 1])

  const onChange = (e) => {
    setChecked(e.target.checked)
    const data = {
      id: id,
      property: tag_id,
      value: e.target.checked
    }
    dispatch(updateProblem(data))
  }

  useEffect(() => {
    if (problem) {
      if (problem[tag_id])
        setChecked(problem[tag_id])
      else
        setChecked(false)
    }
    else
      setChecked(false)
  }, [id, problem])

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