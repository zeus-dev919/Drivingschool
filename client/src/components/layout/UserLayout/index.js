import React from 'react'
import UserSideBar from './UserSideBar'
import UserHeader from './UserHeader'
import Tabs from './Tabs'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
  return (
    <div className='flex flex-row justify-center'>
      <div className='w-1/6 float-left'>
        <UserSideBar />
      </div>
      <div className='w-5/6'>
        <UserHeader />
        <div className='xl:px-10 2xl:px-32'>
          <Tabs />
          <Outlet />
        </div>
      </div>
    </div>)
}

export default UserLayout