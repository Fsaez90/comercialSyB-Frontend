import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'


function Home({render, setRender, notificaciones, notificacionesTotal, esperaRepuesto}) {

  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[])

  return (
    <div className='frame-menu'>
        <h1 className='title-menu'>STIHL Los Andes</h1>
        <div className='menu'>
            <NavLink className='menu-button' to="/ingreso">Ingreso Equipo</NavLink>
            <div className='frame-menu'>
              <NavLink className='menu-button' to="/notificaciones">Notificaciones</NavLink>
              {notificacionesTotal > 0? <p id='not-count'>{notificacionesTotal}</p>: null}
            </div>
            <div className='frame-menu'>
              <NavLink className='menu-button' to="/otxingresar">Ingresos OT a PC</NavLink>
              {notificaciones > 0? <p id='not-count'>{notificaciones}</p>: null}
            </div>
            <NavLink className='menu-button' to="/estado">Estado de orden</NavLink>
            <NavLink className='menu-button' to="/espera-repuesto">Espera Repuesto ({esperaRepuesto})</NavLink>
            <NavLink className='menu-button' to="/entrega">Entrega Equipo</NavLink>
        </div>
        <br/>
        <div>
            <NavLink className='menu-button' to="/taller">Taller</NavLink>
        </div>
    </div>
  )
}

export default Home