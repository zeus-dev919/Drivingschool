import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CreateButton from './Create'
import SaveButton from './Save'
import QuestionButton from './Question'
import { useLocation } from 'react-router-dom'

const AddSideBar = () => {
  const [lists, setLists] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if(location.state){
      setLists(location.state.total)
      setSelectedIndex(location.state.id)
    }
  }, [])

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