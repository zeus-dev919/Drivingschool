import React, { useState, useEffect } from 'react'
import SideBarButton from './SideBarButton'

import {
  FaCarSide,
  FaYoutubeSquare,
  FaComments,
  FaEyeDropper,
  FaUsers,
  FaVideo,
  FaCarAlt,
  FaHome,
  FaBookDead,
  FaBookOpen
} from 'react-icons/fa'

const UserSideBar = () => {
  const [selectedMenu, setSelectedMenu] = useState('official')

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
      <div className='bg-gray-400 h-0.5 w-full' />
      <SideBarButton id='start' name='Incio' icon={<FaHome />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='official' name='Test oficales DGT' icon={<FaBookOpen />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='killertest' name='Test Killers' icon={<FaBookDead />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='tutorial' name='Video tutorials' icon={<FaYoutubeSquare />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='practice' name='Reservar práctica' icon={<FaCarAlt />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='liveclass' name='Clase en directo' icon={<FaVideo />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='question' name='Pregunta profesor' icon={<FaComments />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='groups' name='Groups' icon={<FaUsers />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <SideBarButton id='forums' name='Foros' icon={<FaEyeDropper />} selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
    </div>
  )
}

export default UserSideBar