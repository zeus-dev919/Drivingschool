import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import isFill from '../../../utils/isFill'
import toast from 'react-hot-toast'
import { addProblem, getProblem, updateProblems } from '../../../actions/problem'

const CreateButton = ({ lists, setLists, selectedIndex, setSelectedIndex }) => {
  const problems = useSelector(state => state.problemReducer.problems)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const newProblem = {
    id: lists + 1,
    title: '',
    image: '',
    choices: ['', '', '', ''],
    answer: 0,
    killertest: false,
    gemela: false,
    newpregunta: false,
    tema: '',
    category: '',
    video: '',
    difficulty: 0
  }

  const handleClick = () => {
    if(problems.length !== 0){
      const res = isFill(problems[problems.length - 1])
      console.log(res)
      if (res.isFull) {
        dispatch(addProblem(newProblem))
        setLists(lists + 1)
        setSelectedIndex(lists + 1)
        navigate(`${lists + 1}`)
      }
      else {
        toast.error(`Please Fill the Following Sections: ${res.details}`)
      }
    }
    else{
      dispatch(addProblem(newProblem))
      setLists(lists + 1)
      setSelectedIndex(lists + 1)
      navigate(`${lists + 1}`)
    }
    
  }
    // if (questions.length === 0){
    //   console.log(questions.length)
    //   toast.error('Please fill all the question inputs.')
    // }
    // else {
    //   if (lists === questions.length) {

    //     if (questions[questions.length - 1] === undefined) {
    //       toast.error('Please fill all the question inputs.')
    //     }
    //     else {
    //       const res = isFill(questions[questions.length - 1])
    //       if (res.isFull) {
    //         setLists(lists + 1)
    //         setSelectedIndex(lists + 1)
    //         navigate(`${lists + 1}`)
    //       }
    //       else {
    //         toast.error(`Please fill the following sections: ${res.details}`)
    //       }
    //     }
    //   } else {
    //     toast.error('Please fill all the question inputs.')
    //   }
    // }

return (
  <div className='py-5 w-full flex flex-row justify-center items-center cursor-pointer bg-[#26FF4A] text-white text-lg' onClick={handleClick}>
    Agregar pregunta
  </div>
)
}

export default CreateButton