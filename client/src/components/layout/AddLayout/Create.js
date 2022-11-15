import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import isFill from '../../../utils/isFill'
import toast from 'react-hot-toast'

const CreateButton = ({ lists, setLists, selectedIndex, setSelectedIndex }) => {
  const questions = useSelector(state => state.testReducer.questions)
  const navigate = useNavigate()

  const handleClick = () => {
    if (selectedIndex === 0) {
      setLists(lists + 1)
      setSelectedIndex(lists + 1)
      navigate(`${lists + 1}`)
    }
    else {
      if (questions.length === 0){
        console.log(questions.length)
        toast.error('Please fill all the question inputs.')
      }
      else {
        if (lists === questions.length) {
          console.log(questions[questions.length - 1])

          if (questions[questions.length - 1] === undefined) {
            toast.error('Please fill all the question inputs.')
          }
          else {
            console.log(questions[questions.length-1])
            const res = isFill(questions[questions.length - 1])
            if (res.isFull) {
              setLists(lists + 1)
              setSelectedIndex(lists + 1)
              navigate(`${lists + 1}`)
            }
            else {
              toast.error(`Please fill the following sections: ${res.details}`)
            }
          }
        } else {
          console.log('lists: ', lists)
          console.log(questions.length)
          toast.error('Please fill all the question inputs.')
        }
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