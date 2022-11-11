import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const SaveButton = () => {
  const test = useSelector(state => state.testReducer.questions)
  const handleSubmit = () => {
    const length = test.length
    console.log('test: ', test)
    toast.success(`Totally ${length} questions saved`)    
  }

  return(
    <div className='sidebuttongroup-button store-button'>
      <div className='sidebuttongroup-text' onClick={handleSubmit}>Guardar prueba</div>
    </div>
  )
}

export default SaveButton