import React from 'react'
import MainAddPage from '../Common/MainPage'
import EditSideBar from './EditSideBar'

const EditLayout = () => {

  return (
    <form className='flex flex-row' encType='multipart/form-data'>
      <EditSideBar />
      <MainAddPage />
    </form>
  )
}

export default EditLayout 