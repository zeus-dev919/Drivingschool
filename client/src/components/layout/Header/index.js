import React from 'react'
import './header.css'

const Header = () => {

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-button'>Incio</div>
        <div className='header-top'>
          <div className='header-main'>
            <div className='header-rectangle' />
            <div className='header-logo-title'>
              <div className='header-logo-container'>
                <div className='header-logo-image'></div>
              </div>
              <div className='header-title'>
                <div className='header-title-main'>AutoescuelaApp</div>
                <div className='header-title-sub'>Admin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header