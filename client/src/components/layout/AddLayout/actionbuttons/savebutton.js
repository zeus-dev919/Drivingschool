import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'

const SaveButton = () => {
  const test = useSelector(state => state.testReducer.questions)
  const handleSubmit = () => {
    if (test.length){
      const length = test.length
      console.log('test: ', test)
      toast.success(`Totalmente ${length} de preguntas guardadas`)
    }
    else {
      toast.error('No se puede guardar la prueba vacía. Haz al menos una pregunta.')
    }
  }

  return(
    <div className='sidebuttongroup-button store-button' onClick={handleSubmit}>
      <div className='sidebuttongroup-text'>Guardar prueba</div>
    </div>
  )
}

export default SaveButton