import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getProblem, updateProblems, deleteProblem } from '../../../actions/problem';

import toast from 'react-hot-toast'

const QuestionButton = ({ q_id = '', selectedIndex, setSelectedIndex, lists, setLists, }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    setSelectedIndex(q_id);
    navigate(`${q_id}`)
  }

  const deleteButtonClick = async () => {
    dispatch(deleteProblem(q_id))
    setLists(lists - 1)
  }

  const viewButtonClick = (e) => {
    e.stopPropagation();
    navigate('/preview', {state: {id: q_id }})
  }

  return (
    <>
      {
        q_id === selectedIndex ? (
          <div className='text-center bg-yellow-500 py-5 relative items-center cursor-pointer hover:bg-yellow-300' onClick={handleClick} id={q_id}>
            <div className='float-right right-0 flex flex-row gap-2 pr-2 absolute items-center justify-center py-1'>
              <img className='cursor-pointer' src='/assets/icons/Show.png' alt='show icon' onClick={viewButtonClick} />
              <img className='cursor-pointer' src='/assets/icons/Delete.png' alt='delete icon' onClick={deleteButtonClick} />
            </div>
            <div className='text-white text-lg' >Pregunta {q_id}</div>
          </div>
        ) : (
          <div className='text-center bg-[#ffffff] py-5 relative items-center cursor-pointer hover:bg-yellow-300' onClick={handleClick} id={q_id}>
            <div className='float-right right-0 flex flex-row gap-2 pr-2 absolute items-center justify-center py-1'>
              <img className='cursor-pointer' src='/assets/icons/Show.png' alt='show icon' onClick={viewButtonClick} />
              <img className='cursor-pointer' src='/assets/icons/Delete.png' alt='delete icon' onClick={deleteButtonClick} />
            </div>
            <div className='text-gray-500 text-lg' >Pregunta {q_id}</div>
          </div>
        )
      }
    </>
  )
}

export default QuestionButton