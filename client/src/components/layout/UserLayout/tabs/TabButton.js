import React from 'react'
import { useNavigate } from 'react-router-dom'

const TabButton = ({ text = '', id = '', selectedTab, setSelectedTab }) => {
  const navigate = useNavigate()

  const onClick = (e) => {
    setSelectedTab(e.target.id)
    navigate(`/user/${id}`)
  }
  return (
    <div className='flex flex-col text-center'>
      <div className='py-4 px-2 bg-[#3598DB] w-48 text-base text-white rounded-sm uppercase cursor-pointer hover:bg-blue-400' id={id} onClick={onClick}>
        {text}
      </div>
      {
        selectedTab === id ? <div className='mt-3 h-0.5 w-48 bg-[#3598DB]' /> : <div className='mt-3 h-1 w-48 bg-[#3598DB] hidden' />
      }
    </div>
  )
}

export default TabButton