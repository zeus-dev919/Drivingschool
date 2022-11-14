import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { insertQuestion } from '../../../../store/actions/question'
import { useParams } from 'react-router-dom'

const Star = ({ name = '', star_id, difficulty, setDifficulty }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const onChange = (e) => {
    console.log(star_id)
    if (e.target.checked === true) {
      setDifficulty(star_id)
      const data = {
        id: id,
        property: 'difficulty',
        value: star_id
      }

      dispatch(insertQuestion(data))
    }
    else {
      setDifficulty(0)
      const data = {
        id: id,
        property: 'difficulty',
        value: 0
      }

      dispatch(insertQuestion(data))
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
  const question = useSelector(state => state.testReducer.questions[id - 1])

  useEffect(() => {
    if (question) {
      if (question.difficulty)
        setDifficulty(question.difficulty)
      else
        setDifficulty(0)
    }
    else
      setDifficulty(0)
  }, [id, question])

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