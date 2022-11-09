import React, { useState } from 'react'
import './index.css'
import SideButtonGroup from '../../../components/admin/sidebuttongroup'
import MainAddSection from '../../../components/admin/mainaddsection'

const MainAdd = () => {
  const [problem, setProblem] = useState({});
  return (
    <form className='mainaddpage' encType='multipart/form-data'>
      <div className='mainaddpage-sidebar'>
        <SideButtonGroup problem={problem} />
      </div>
      <div className='mainaddpage-mainsection'>
        <MainAddSection setProblem = {setProblem} problem={problem}/>
      </div>
    </form>
  )
}

export default MainAdd 