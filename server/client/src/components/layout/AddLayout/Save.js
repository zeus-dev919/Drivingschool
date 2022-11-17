import React from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { saveTest } from '../../../apis/test'
import isFill from '../../../utils/isFill'
import { useNavigate } from 'react-router-dom'


const SaveButton = () => {
  const navigate = useNavigate()
  const problems = useSelector(state => state.problemReducer.problems)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (problems.length) {
      const res = isFill(problems[problems.length - 1])

      if (res.isFull) {
        const response = await saveTest(problems)
        toast.success(`Totalmente ${problems.length} de preguntas guardadas`)
        navigate('/admin')
      }
      else {
        toast.error(`Please Fill the Following Sections: ${res.details}`)
      }
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