import React, { useState, useEffect } from 'react'
import { FaCarSide, FaYoutubeSquare, FaComments, FaEyeDropper, FaUsers, FaVideo, FaCarAlt, FaHome, FaBookDead, FaBookOpen } from 'react-icons/fa'

const SideBarButton = ({ id = '', name = '', icon = '', selectedMenu, setSelectedMenu }) => {
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

const UserSideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState('S2')

  return (
    <div
      className="sidebar fixed px-3 mt-4 top-0 bottom-0 overflow-y-auto text-center shadow-xl w-1/6"
    >
      <div className="text-gray-800 text-2xl">
        <div className="p-2.5 mt-1 flex items-center">
          <FaCarSide />
          <h1 className="font-bold text-[15px] ml-3">Driving Exam</h1>
        </div>
      </div>
      <SideBarButton id='S1' name='Incio' icon={<FaHome />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S2' name='Test oficales DGT' icon={<FaBookOpen />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S3' name='Test Killers' icon={<FaBookDead />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S4' name='Video tutorials' icon={<FaYoutubeSquare />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S5' name='Reservar práctica' icon={<FaCarAlt />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S6' name='Clase en directo' icon={<FaVideo />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S7' name='Pregunta profesor' icon={<FaComments />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S8' name='Groups' icon={<FaUsers />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='S9' name='Foros' icon={<FaEyeDropper />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
    </div>
  )
}

export default UserSideBar