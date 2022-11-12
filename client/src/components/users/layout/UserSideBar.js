import React from 'react'
import { FaCarSide, FaYoutubeSquare, FaComments, FaEyeDropper, FaUsers, FaVideo, FaCarAlt, FaHome, FaBookDead, FaBookOpen } from 'react-icons/fa'

const SideBarButton = ({name='', icon='',}) => (
  <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-500 hover:text-white text-gray-800'>
    {icon}
    <span className="text-[15px] ml-4 font-bold">{name}</span>
  </div>
)

const UserSideBar = () => {
  return (
    <div
      className="sidebar px-3 mt-4 overflow-y-auto text-center shadow-xl h-[100vh]"
    >
      <div className="text-gray-800 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <FaCarSide />
          <h1 className="font-bold text-[15px] ml-3">Driving App</h1>
        </div>
      </div>
      <SideBarButton name='Incio' icon={<FaHome />}/>
      <SideBarButton name='Test oficales DGT' icon={<FaBookOpen />} />
      <SideBarButton name='Test Killers' icon={<FaBookDead />} />
      <SideBarButton name='Video tutorials' icon={<FaYoutubeSquare />} />
      <SideBarButton name='Reservar práctica' icon={<FaCarAlt />} />
      <SideBarButton name='Clase en directo' icon={<FaVideo />} />
      <SideBarButton name='Pregunta profesor' icon={<FaComments />} />
      <SideBarButton name='Groups' icon={<FaUsers />} />
      <SideBarButton name='Foros' icon={<FaEyeDropper />} />
    </div>
  )
}

export default UserSideBar