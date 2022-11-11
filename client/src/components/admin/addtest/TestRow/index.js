import React from 'react'
import './index.css'
import toast from 'react-hot-toast'

const TestRow = ({num=''}) => {
  return (
    <div className='test-item-row'>
      <div className='test-number-section'>
        <div className='test-number-text'>{num}</div>
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
        <div className='test-button delete' onClick={() => toast.success('Esto se implementará después del trabajo de la base de datos..')}>
          <img src='/assets/icons/Delete1.png' alt='delete' />
        </div>
        <div className='test-button edit' onClick={() => toast.success('Esto se implementará después del trabajo de la base de datos..')}>
          <img src='/assets/icons/Edit.png' alt='edit' />
        </div>
      </div>
      <img src='/assets/icons/More.svg' alt='more' className='more' onClick={() => toast.success('Por favor, hágame saber qué hace este botón.')} />
    </div>
  )
}

export default TestRow