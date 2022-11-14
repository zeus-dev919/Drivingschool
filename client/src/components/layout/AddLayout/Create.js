import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import toast from 'react-hot-toast'

const CreateButton = ({ lists, setLists, selectedIndex, setSelectedIndex }) => {
  const questions = useSelector(state => state.testReducer.questions)
  const [question, setQuestion] = useState({})
  const navigate = useNavigate()

  const handleClick = () => {
    if (selectedIndex === 0) {
      console.log(selectedIndex)
      setLists(lists + 1)
      setSelectedIndex(lists + 1)
      navigate(`${lists + 1}`)
    }
    else {
      console.log(selectedIndex)
      setQuestion(questions[selectedIndex - 1])
      console.log(question)
      if (question === undefined || question === null || question === {})
        toast.error('Current question is null. Fill all the fields.')
      else if (question.title || question.image || question.choices || question.answer || question.category)
        toast.error('Fill the missing fields.')
      else {
        setLists(lists + 1)
        setSelectedIndex(lists + 1)
        navigate(`${lists + 1}`)
      }
    }
  }

  return (
    <div className='py-5 w-full flex flex-row justify-center items-center cursor-pointer bg-[#26FF4A] text-white text-lg' onClick={handleClick}>
      Agregar pregunta
    </div>
  )
}

export default CreateButton