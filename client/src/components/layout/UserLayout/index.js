import React from 'react'
import UserSideBar from './UserSideBar'
import UserHeader from './UserHeader'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='flex flex-row justify-center'>
      <div className='w-1/6 float-left'>
        <UserSideBar />
      </div>
      <div className='w-5/6'>
        <UserHeader />
        <Outlet />
      </div>
    </div>)
}

export default UserLayout