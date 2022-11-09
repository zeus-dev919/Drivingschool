import React from 'react'
import './index.css'

const TestRow = () => {
  return (
    <div className='test-item-row'>
      <div className='test-number-section'>
        <div className='test-number-text'>01</div>
      </div>
      <div className='test-text'>Test Oficiale de la DGT</div>
      <div className='test-difficulty-section'>
        <div className='test-difficulty-text'>Dificultad</div>
        <div className='test-difficulty-star-section'>
          <img src='/assets/icons/star.png' alt='star' />
          <img src='/assets/icons/star.png' alt='star' />
          <img src='/assets/icons/star.png' alt='star' />
          <img src='/assets/icons/star2.png' alt='star' />
          <img src='/assets/icons/star2.png' alt='star' />
        </div>
      </div>
      <div className='test-problem-section'>Preguntas:30</div>
      <div className='test-button-group'>
        <div className='test-button delete'>
          <img src='/assets/icons/Delete1.png' alt='delete' />
        </div>
        <div className='test-button edit'>
          <img src='/assets/icons/Edit.png' alt='edit' />
        </div>
      </div>
      <img src='/assets/icons/More.svg' alt='more'/>
    </div>
  )
}

export default TestRow