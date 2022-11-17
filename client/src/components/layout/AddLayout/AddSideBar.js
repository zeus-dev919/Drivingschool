import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import CreateButton from './Create'
import SaveButton from './Save'
import QuestionButton from './Question'
import { useSelector, useDispatch } from 'react-redux'
import { getProblems } from '../../../actions/problem'

const AddSideBar = () => {
  const {id} = useParams()
  const problems = useSelector(state => state.problemReducer.problems)
  const loading = useSelector(state => state.problemReducer.loading)

  const [lists, setLists] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setLists(problems.length)
    setSelectedIndex(Number(id))
  }, [loading])

  // useEffect(() => {
  //   setLists(problems.length)
  // }, [loading])

  const getQuestions = () => {
    const result = [];
    for (let i = 0; i < lists; i++) {
      result.push(<div key={i + 1}><QuestionButton q_id={i + 1} lists={lists} setLists={setLists} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} /></div>)
    }
    return result
  }
  return (
    <div className='bg-[#3598DB] overflow-y-auto w-1/5 min-h-screen'>
      <div className='pt-28 px-6'>
        <div className='flex flex-col gap-6'>
          <CreateButton lists={lists} setLists={setLists} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
          {
            getQuestions()
          }
          <SaveButton />
        </div>
      </div>
    </div>
  )
}

export default AddSideBar