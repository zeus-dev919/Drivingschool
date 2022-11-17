import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { updateTest } from '../../../apis/test'
import { useNavigate } from 'react-router-dom'

const UpdateButton = () => {
  const navigate = useNavigate()
  const problems = useSelector(state => state.problemReducer.problems)
  const id = useSelector(state => state.todoReducer.index)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (problems.length) {
      const res = await updateTest(id, problems)
      toast.success(`Totalmente ${problems.length} de preguntas guardadas`)
      navigate('/admin')
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

export default UpdateButton