import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Top from './Top'
import Bottom from './Bottom'

const DisplayButton = ({ num = '' }) => {
  return (
    <>
      <div className='border border-gray-600 bg-gray-400 text-white text-center items-center w-28 py-6 text-[32px] rounded-xl cursor-pointer'>
        {num}
      </div>
    </>
  )
}
const Exam = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  let rows = [];
  function Rows() {
    let i = 0
    let len = 15;
    while (++i <= len) rows.push(i);
  }
  Rows()

  const onPreviousClick = () => {
    if (Number(id) !== 1) {
      const previous = Number(id) - 1
      navigate(`/exam/${previous}`)
    }
  }
  const onNextClick = () => {
    if (Number(id) !== 30) {
      const next = Number(id) + 1
      navigate(`/exam/${next}`)
    }
  }
  return (
    <>
      <Top id={id} />
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
              <div className='flex flex-row rounded-xl px-10 py-5 items-center gap-5 text-white bg-[#3598DB] cursor-pointer hover:bg-blue-300' onClick={onPreviousClick}>
                <FaChevronLeft />
                <div className='uppercase'>anterior</div>
              </div>
              <div className='flex flex-row rounded-xl px-10 py-5 items-center gap-5 text-white bg-[#3598DB] cursor-pointer hover:bg-blue-300' onClick={onNextClick}>
                <div className='uppercase'>siguiente</div>
                <FaChevronRight />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 flex flex-col space-y-10'>
          <div className='flex flex-row px-5 justify-between'>
            {
              rows.map((row, key) => {
                return <DisplayButton num={row} key={key} />
              })
            }
          </div>
          <div className='flex flex-row px-5 justify-between'>
            {
              rows.map((row, key) => {
                return <DisplayButton num={row + 15} key={key} />
              })
            }
          </div>
        </div>
        <Bottom />
      </div>
    </>
  )
}

export default Exam