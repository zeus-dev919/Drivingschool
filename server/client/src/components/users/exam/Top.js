import React from 'react'
import { useNavigate } from 'react-router-dom'

const Top = ({ id = '' }) => {
  const navigate = useNavigate();
  let num;
  if (id < 10)
    num = '0' + id
  else
    num = id + ''
  return (
    <div className='mt-8'>
      <img className='absolute ml-10 -mt-2' src='/assets/icons/logo.png' alt='logo' />
      <div className='bg-[#3598DB] flex flex-row justify-between pl-48 w-full h-8 pr-8 items-center'>
        <div className='text-white text-lg'>Autoescuela App Test 001</div>
        <div className='flex flex-row items-center gap-20'>
          <div className='text-white text-lg'>Pregunta {num}.</div>
          <div className='flex flex-row justify-center space-x-4 items-center'>
            <div className='text-white text-lg'>salir</div>
            <img className='cursor-pointer' src='/assets/icons/Logout.png' alt='' onClick={() => navigate('/user/killertest')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Top