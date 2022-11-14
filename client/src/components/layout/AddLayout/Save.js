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
    <div className='mb-8 py-5 w-full flex flex-row justify-center items-center cursor-pointer bg-[#DE3A3A] text-white text-lg' onClick={handleSubmit}>
      Guardar prueba
    </div>
  )
}

export default SaveButton