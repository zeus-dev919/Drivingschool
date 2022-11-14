import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Bottom from './exam/Bottom'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Preview = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let num;
  if (location.state.id < 10)
    num = '0' + location.state.id
  else
    num = location.state.id
  return (
    <>
      <div className='mt-8'>
        <img className='absolute ml-10 -mt-2' src='/assets/icons/logo.png' alt='logo' />
        <div className='bg-[#3598DB] flex flex-row justify-between pl-48 w-full h-8 pr-8 items-center'>
          <div className='text-white text-lg'>Autoescuela App Test 001</div>
          <div className='flex flex-row items-center gap-20'>
            <div className='text-white text-lg'>Pregunta {num}.</div>
            <div className='flex flex-row justify-center space-x-4 items-center'>
              <div className='text-white text-lg'>salir</div>
              <img className='cursor-pointer' src='/assets/icons/Logout.png' alt='' onClick={() => navigate(`/add/${location.state.id}`, { state: { id: location.state.id, total: location.state.total } })} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='flex flex-row w-full'>
          <div className='flex justify-center items-center w-1/2'>
            <img className='px-20 py-40' src='/assets/icons/image2.png' alt='test_image' />
          </div>
          <div className='flex flex-col gap-10 w-1/2 px-10'>
            <div className='mt-20 text-[32px] text-gray-500'>
              Si no existe espacio reservado para peatones, las personas que van en silla de ruedas, ?podran desplazarse por el arcen?
            </div>
            <div className='flex flex-row gap-10 items-center'>
              <div className='bg-[#3598DB] text-[32px] text-white px-5 py-10 rounded-xl cursor-pointer hover:bg-blue-300'>A</div>
              <div className='text-gray-500 text-[32px]'>Antes de repostar combustible es necesario...</div>
            </div>
            <div className='flex flex-row gap-10 items-center'>
              <div className='bg-[#3598DB] text-[32px] text-white px-5 py-10 rounded-xl cursor-pointer hover:bg-blue-300'>B</div>
              <div className='text-gray-500 text-[32px]'>Antes de repostar combustible es necesario...</div>
            </div>
            <div className='flex flex-row gap-10 items-center'>
              <div className='bg-[#3598DB] text-[32px] text-white px-5 py-10 rounded-xl cursor-pointer hover:bg-blue-300'>C</div>
              <div className='text-gray-500 text-[32px]'>Antes de repostar combustible es necesario...</div>
            </div>
            <div className='flex flex-row gap-10 justify-center items-center'>
              <div className='flex flex-row rounded-xl px-10 py-5 items-center gap-5 text-white bg-[#3598DB] cursor-pointer hover:bg-blue-300' onClick={() => navigate(-1)}>
                <FaChevronLeft />
                <div className='uppercase'>anterior</div>
              </div>
              <div className='flex flex-row rounded-xl px-10 py-5 items-center gap-5 text-white bg-[#3598DB] cursor-pointer hover:bg-blue-300' onClick={() => navigate(-1)}>
                <div className='uppercase'>siguiente</div>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        <Bottom />
      </div>
    </>
  )
}

export default Preview