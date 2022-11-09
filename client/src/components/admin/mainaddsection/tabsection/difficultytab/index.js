import React from 'react'
import './index.css'
import SelectField from '../../selectfield'

const DifficultyTab = () => {
  return (
    <div>
      <div className='tag-tabs-underline'>Dificultad</div>
      <SelectField text='1 star' />
      <SelectField text='2 star' />
      <SelectField text='3 star' />
      <SelectField text='4 star' />
      <SelectField text='5 star' />
    </div>
  )
}

export default DifficultyTab