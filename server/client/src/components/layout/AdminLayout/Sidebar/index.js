import React from 'react'
import { useNavigate } from 'react-router-dom'
import './sidebar.css'

const Sidebar = () => {
  const navigate = useNavigate()

  return (
    <div className='adminsidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-logo' />
        <div className='sidebar-menu'>
          <div className='sidebar-menu-container'>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/Entradas.png' alt='entradas' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/Group 120.png' alt='add test' />
              <img src='/assets/icons/Añadir test.png' alt='add test' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/analitica.png' alt='analitica' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/agregar profesor.png' alt='agregar professor' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/agregar admin.png' alt='agregar admin' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/test unico.png' alt='Test unico' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/Inscribir.png' alt='Inscribir estudiante' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/Chat.png' alt='Chat/Preguntas' />
            </div>
            <div className='sidebar-menu-item'>
              <img src='/assets/icons/Cerrar sesion.png' alt='Cerrar sesion' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar