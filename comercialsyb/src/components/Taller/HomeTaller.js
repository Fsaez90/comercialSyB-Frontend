import React, { useEffect} from 'react'
import { NavLink } from 'react-router-dom'
 
function HomeTaller({render, setRender, prioridad, revision, mantencion, aprobadas, rechazadas, totalProceso, repRecibidosMmto }) {
  
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[])

  return (
    <div>
        <h1 className='title-menu'>STIHL Panel Taller</h1>
        <br/>
        <div className='menu'>
          <div className='frame-menu'>
            <NavLink className='menu-button' to="/prioridad">Prioridad</NavLink>
            {prioridad > 0? <p id='not-count'>{prioridad}</p>: null}
          </div>
          <div className='frame-menu'>
            <NavLink className='menu-button' to="/proceso">En proceso ({totalProceso})</NavLink>
          </div>
            <br/><br/><br/><br/>
            <NavLink className='menu-button' to="/revision">X Revisar ({revision})</NavLink>
            <NavLink className='menu-button' to="/mantenimiento">Mantención ({mantencion})</NavLink>
            <br/><br/><br/><br/>
            <NavLink className='menu-button' to="/mmto-rep-listos">Mantención+Rep ({repRecibidosMmto})</NavLink>
            <NavLink className='menu-button' to="/aprobadas">Aprobadas ({aprobadas})</NavLink>
            <NavLink className='menu-button' to="/rechazadas">Rechazadas ({rechazadas})</NavLink>
        </div>
    </div>
  )
}

export default HomeTaller