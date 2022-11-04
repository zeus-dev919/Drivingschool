import React from 'react'
import Header from '../Header'
import './headerWrapper.css'

const HeaderWrapper = ({ children }) => {
  return (
    <div className='header-wrapper-container'>
      <Header />
      {children}
    </div>
  )

}

export default HeaderWrapper