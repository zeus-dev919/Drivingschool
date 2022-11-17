import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = () => {
  const navigate = useNavigate();

  const adminBtnClick = () => {
    navigate('/admin')
  }
  const userBtnClick = () => {
    navigate('/user/todotest')
  }

  return (
    <div className='bg-[#48b1f7] h-screen text-center'>
      <div className='text-white text-[72px] p-12'>Aplicación de autoescuela</div>
      <div className='flex flex-row justify-center gap-12 text-white'>
        <div className='flex justify-center items-center text-xl w-56 h-16 rounded-xl text-center cursor-pointer bg-red-500' onClick={adminBtnClick}>Administración</div>
        <div className='flex justify-center items-center text-xl w-56 h-16 rounded-xl text-center cursor-pointer bg-green-500' onClick={userBtnClick}>estudiante</div>
      </div>
      <div className='text-white text-4xl m-24'>
        Aquí, habría una página de registro e inicio de sesión. Una vez que inician sesión, el administrador va a la página de administración y los usuarios (estudiantes) irán a las páginas de usuario.
      </div>
    </div>
  )
}

export default Homepage