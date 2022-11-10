import React from 'react'
import { useNavigate } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  const navigate = useNavigate();

  const adminBtnClick = () => {
    navigate('/admin')
  }
  const userBtnClick = () => {
    navigate('/user')
  }

  return (
    <div className='home-page'>
      <div className='app-title'>Driving School App</div>
      <div className='button-group'>
        <div className='homepage-button admin' onClick={adminBtnClick}>Admin</div>
        <div className='homepage-button user' onClick={userBtnClick}>User</div>
      </div>
    </div>
  )
}

export default Homepage