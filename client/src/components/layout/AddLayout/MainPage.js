import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MainAddPage = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/admin')
  }
  return(
    <div className='text-center pr-40 w-4/5'>
      <div className='float-right mt-6 rounded-xl bg-[#26FF4A] text-white text-lg px-10 py-4 cursor-pointer' onClick={handleClick}>Incio</div>
      <div className='pt-32 px-20' >
        <Outlet />
      </div>
    </div>
  )
}

export default MainAddPage