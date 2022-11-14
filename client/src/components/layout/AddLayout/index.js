import React from 'react'
import MainAddPage from './MainPage'
import AddSideBar from './AddSideBar'

const AddLayout = () => {

  return (
    <form className='flex flex-row' encType='multipart/form-data'>
        <AddSideBar />
        <MainAddPage />
    </form>
  )
}

export default AddLayout 