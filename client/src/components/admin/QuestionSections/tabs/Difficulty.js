import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateProblem } from '../../../../actions/problem'

const Star = ({ name = '', star_id, difficulty, setDifficulty }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const onChange = (e) => {
    if (e.target.checked === true) {
      setDifficulty(star_id)
      const data = {
        id: id,
        property: 'difficulty',
        value: star_id
      }

      dispatch(updateProblem(data))
    }
    else {
      setDifficulty(0)
      const data = {
        id: id,
        property: 'difficulty',
        value: 0
      }

      dispatch(updateProblem(data))
    }
  }
  return (
    <>
      <div className='relative py-7 cursor-pointer'>
        <input
          className='float-left w-4 h-4 m-1'
          type='checkbox'
          onChange={onChange}
          checked={star_id === difficulty}
        />
        <div className='ml-20 text-[#333333] text-lg'>{name}</div>
      </div>
    </>
  )
}

const Difficulty = () => {
  const { id } = useParams()
  const [difficulty, setDifficulty] = useState(0)
  const problem = useSelector(state => state.problemReducer.problems[id - 1])

  useEffect(() => {
    if (problem) {
      if (problem.difficulty)
        setDifficulty(problem.difficulty)
      else
        setDifficulty(0)
    }
    else
      setDifficulty(0)
  }, [id, problem])

  return (
    <div className='ml-10 mt-16 text-left'>
      <div className='uppercase underline font-bold text-xl'>
        difficultad
      </div>
      <>
        <Star difficulty={difficulty} setDifficulty={setDifficulty} star_id={1} name='1 star' />
        <Star difficulty={difficulty} setDifficulty={setDifficulty} star_id={2} name='2 star' />
        <Star difficulty={difficulty} setDifficulty={setDifficulty} star_id={3} name='3 star' />
        <Star difficulty={difficulty} setDifficulty={setDifficulty} star_id={4} name='4 star' />
        <Star difficulty={difficulty} setDifficulty={setDifficulty} star_id={5} name='5 star' />
      </>
    </div>
  )
}

export default Difficulty