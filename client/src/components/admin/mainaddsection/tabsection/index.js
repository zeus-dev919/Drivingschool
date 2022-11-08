import React from 'react'
import './index.css'
import SelectField from '../selectfield'

const TabSection = () => {
  return (
    <>
      <div className='tabs'>
        <div className='tabs-tab-section'>
          <div className='tabs-tab'>tags</div>
          <div className='slider'></div>
        </div>
        <div className='tabs-tab-section'>
          <div className='tabs-tab'>video</div>
          <div className='slider'></div>
        </div>
        <div className='tabs-tab-section'>
          <div className='tabs-tab'>dificultad</div>
          <div className='slider'></div>
        </div>
      </div>
      <div className='slider-line'></div>
      <SelectField text='I msmdfsdo' />
    </>
  )
}

export default TabSection