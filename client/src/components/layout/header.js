import React from 'react'
import '../../styles/header.css'

const Header = () => {

  return (
    <div className='header'>
      <div className='header-container'>
        <div className='header-button'>Incio</div>
        <div className='header-top'>
          <div className='header-main'>
            <div className='header-letter'>
              <div className='header-title'>AutoescuelaApp</div>
              <div className='header-subtitle'>Admin</div>
            </div>  
          </div>
          <div className='header-logo-container'>
            <div className='header-logo-subcontainer'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header