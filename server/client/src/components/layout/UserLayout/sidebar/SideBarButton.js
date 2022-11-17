import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBarButton = ({ id = '', name = '', icon = '', selectedMenu, setSelectedMenu }) => {
  const navigate = useNavigate()
  const onClick = () => {
    setSelectedMenu(id)
  }
  return (
    <>
      {
        selectedMenu === id ?
          <div className='p-4 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-[#3598DB] hover:text-white bg-[#3598DB] text-white' id={id} onClick={onClick}>
            {icon}
            < span className="text-[15px] ml-4 font-bold"> {name}</span >
          </div >
          :
          <div className='p-4 mt-1 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-400 hover:text-white text-gray-500' id={id} onClick={onClick}>
            {icon}
            < span className="text-[15px] ml-4 font-bold"> {name}</span >
          </div >
      }
    </>
  )
}

export default SideBarButton