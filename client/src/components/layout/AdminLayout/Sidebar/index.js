import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-logo' />
        <div className='sidebar-menu'>
          <div className='sidebar-menu-container'>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Entradas</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Anadir test</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Analitica</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Agregar profesor</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Agregar admin</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Test unico</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Inscribir estudiante</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Chat/Preguntas</div>
            </div>
            <div className='sidebar-menu-item'>
              <div className='sidebar-menu-icon'></div>
              <div className='sidebar-menu-text'>Cerrar sesion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar