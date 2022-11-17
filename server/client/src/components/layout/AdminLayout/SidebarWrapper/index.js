import React from 'react'
import Sidebar from '../Sidebar'
import './sidebarWrapper.css'

const SidebarWrapper = ({ children }) => {
  return (
    <div className='sidebar-wrapper-container'>
      <Sidebar />
      <div className='sidebar-children'>
        {children}
      </div>
    </div>
  )

}

export default SidebarWrapper