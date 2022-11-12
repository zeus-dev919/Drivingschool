import React from 'react'
import { useNavigate } from 'react-router-dom'
import './homepage.css'

const Homepage = () => {
  const navigate = useNavigate();

  const adminBtnClick = () => {
    navigate('/admin')
  }
  const userBtnClick = () => {
    navigate('/user')
  }

  return (
    <div className='home-page'>
      <div className='app-title'>Aplicación de autoescuela</div>
      <div className='button-group'>
        <div className='homepage-button admin' onClick={adminBtnClick}>Administración</div>
        <div className='homepage-button user' onClick={userBtnClick}>estudiante</div>
      </div>
      <div className='homepage-narrator'>
        Aquí, habría una página de registro e inicio de sesión. Una vez que inician sesión, el administrador va a la página de administración y los usuarios (estudiantes) irán a las páginas de usuario.
      </div>
    </div>
  )
}

export default Homepage