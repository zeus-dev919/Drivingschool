import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import './index.css'
import CreateButton from './actionbuttons/createbutton'
import SaveButton from './actionbuttons/savebutton'

const AddLayout = () => {
  const navigate = useNavigate()
  const [lists, setLists] = useState([])
  const handleClick = () => {
    navigate('/admin')
  }
  return (
    <form className='addpage' encType='multipart/form-data'>
      <div className='addpage-left'>
        <div className='leftbuttongroup'>
          <div className='sidebuttongroup-container'>
            <CreateButton lists={lists} setLists={setLists} />
            {
            Object.keys(lists).map((key) => 
              lists[key]
            )
            }
            <SaveButton />
          </div>
        </div>
      </div>
      <div className='addpage-right'>
        <div className='addsection'>
          <div className='addsection-return-button' onClick={handleClick}>Incio</div>
          <div className='addsection-container' >
            <Outlet />
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddLayout 