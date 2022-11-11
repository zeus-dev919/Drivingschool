import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const SaveButton = () => {
  const test = useSelector(state => state.testReducer.questions)
  const handleSubmit = () => {
    if (test.length){
      const length = test.length
      console.log('test: ', test)
      toast.success(`Totally ${length} questions saved`)
    }
    else {
      toast.error('Can not save empty test. Create at least one question.')
    }
  }

  return(
    <div className='sidebuttongroup-button store-button' onClick={handleSubmit}>
      <div className='sidebuttongroup-text'>Guardar prueba</div>
    </div>
  )
}

export default SaveButton