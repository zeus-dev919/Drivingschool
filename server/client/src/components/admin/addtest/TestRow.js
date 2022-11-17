import React from 'react'
import toast from 'react-hot-toast'
import { deleteTest, readTest } from '../../../apis/test';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTests, setIndex } from '../../../actions/test';
import { getProblems } from '../../../actions/problem';

const TestRow = ({ num = '', count = '' }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  let number = '';
  if (num < 10)
    number = '0' + num;
  else
    number = '' + num
  const handleDeleteClick = async () => {
    const response = await deleteTest(num)
    dispatch(getTests())
    toast.success(response)
  }

  const handleEditClick = async () => {
    dispatch(setIndex(num))
    await dispatch(getProblems(num));
    navigate('/edit/1')
  }

  return (
    <div className='flex flex-row w-full shadow-xl px-10 py-3 justify-between items-center mb-4 bg-[#FBFBFB]'>
      <div className='flex flex-row items-center justify-center w-14 h-14 bg-[#3598DB] rounded-xl text-white text-2xl font-bold'>
        {number}
      </div>
      <div className='text-xl text-gray-500'>Test Oficiale de la DGT</div>
      <div className='flex flex-row gap-3 items-center'>
        <div className='text-xl text-gray-500'>Dificultad</div>
        <div className='flex flex-row gap-1 items-center'>
          <img src='/assets/icons/star.png' alt='star' />
          <img src='/assets/icons/star.png' alt='star' />
          <img src='/assets/icons/star.png' alt='star' />
          <img src='/assets/icons/star2.png' alt='star' />
          <img src='/assets/icons/star2.png' alt='star' />
        </div>
      </div>
      <div className='text-gray-500 text-xl'>Preguntas: {count}</div>
      <div className='flex flex-row items-center gap-3'>
        <div className='w-11 h-11 px-3 py-3 rounded-md text-center flex flex-row justify-center cursor-pointer bg-[#DB3546]' onClick={handleDeleteClick}>
          <img src='/assets/icons/Delete1.png' alt='delete' />
        </div>
        <div className='w-11 h-11 px-3 py-3 rounded-md text-center flex flex-row justify-center cursor-pointer bg-[#1F74E3]' onClick={handleEditClick}>
          <img src='/assets/icons/Edit.png' alt='edit' />
        </div>
      </div>
      <img src='/assets/icons/More.svg' alt='more' className='cursor-pointer' onClick={() => toast.success('Por favor, hágame saber qué hace este botón.')} />
    </div>
  )
}

export default TestRow