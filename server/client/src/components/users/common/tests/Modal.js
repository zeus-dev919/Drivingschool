import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Modal = ({ showModal, setShowModal }) => {
  const navigate = useNavigate()

  return (
    <>
      {
        showModal ? (
          <>
            <div className='fixed inset-0 z-50 overflow-y-auto'>
              <div
                className="fixed inset-0 w-full h-full bg-black opacity-50"
              ></div>
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none">
                <div className="my-6">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex justify-between items-center p-5 border-b border-solid border-gray-300">
                      <div className='flex flex-row space-x-16 items-center font-bold'>
                        <FaArrowLeft className='cursor-pointer' onClick={() => setShowModal(false)} />
                        <div className="text-2xl uppercase text-gray-600">test 01</div>
                      </div>
                      <div>
                        <img src='/assets/icons/More.png' alt='more' />
                      </div>
                    </div>
                    <div className='w-full h-0.5 bg-gray-200' />
                    <div className='2xl:px-80 xl:px-40 py-40 flex flex-row justify-center gap-20'>
                      <div className='flex flex-col gap-5'>
                        <div className='text-gray-300 uppercase text-lg text-left'>modo estudio</div>
                        <div className='flex flex-row justify-center items-center bg-[#3598DB] rounded-lg'>
                          <img src='/assets/icons/estudio.png' alt='estudio' className='mx-20 my-20' />
                        </div>
                        <div className='px-auto mt-2 font-bold py-4 text-[#3598DB] uppercase rounded-lg border border-[#3598DB] text-center hover:text-white hover:bg-[#3598DB] cursor-pointer' onClick={()=>navigate('/test/1')}>iniciar test</div>
                      </div>
                      <div className='flex flex-col gap-5'>
                        <div className='text-gray-300 uppercase text-lg text-left'>modo examen</div>
                        <div className='flex flex-row justify-center items-center bg-[#3598DB] rounded-lg'>
                          <img src='/assets/icons/examen.png' alt='estudio' className='mx-20 my-20' />
                        </div>
                        <div className='px-auto font-bold py-4 text-[#3598DB] uppercase rounded-lg border border-[#3598DB] text-center hover:text-white hover:bg-[#3598DB] cursor-pointer' onClick={()=>navigate('/exam/1')}>iniciar test</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null
      }
    </>
  )
}

export default Modal