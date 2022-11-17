import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { saveTest } from '../../../apis/test'

const SaveButton = () => {
  const problems = useSelector(state => state.problemReducer.problems)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (problems.length) {
      console.log('problems: ', problems)
  //    const res = await saveTest(problems)
  //    console.log('res: ', res);
      toast.success(`Totalmente ${problems.length} de preguntas guardadas`)
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