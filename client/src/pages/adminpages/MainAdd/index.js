import React from 'react'
import './index.css'
import SideButtonGroup from '../../../components/admin/sidebuttongroup'
import MainAddSection from '../../../components/admin/mainaddsection'

const MainAdd = () => {
  return(
    <div className='mainaddpage'>
      <div className='mainaddpage-sidebar'>
        <SideButtonGroup />
      </div>
      <div className='mainaddpage-mainsection'>
        <MainAddSection />
      </div>
    </div>
  )
}

export default MainAdd 