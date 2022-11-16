import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { saveImage } from '../../../apis/test'

const SaveButton = () => {
  const questions = useSelector(state => state.testReducer.questions)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (questions.length) {
      const res = await saveImage(questions)
      console.log('res: ', res);
      toast.success(`Totalmente ${questions.length} de preguntas guardadas`)
    }
    else {
      toast.error('No se puede guardar la prueba vacía. Haz al menos una pregunta.')
    }
  }

  return (
    <button className='mb-8 py-5 w-full flex flex-row justify-center items-center cursor-pointer bg-[#DE3A3A] text-white text-lg' type="submit" onClick={handleSubmit}>
      Guardar prueba
    </button>
  )
}

export default SaveButton