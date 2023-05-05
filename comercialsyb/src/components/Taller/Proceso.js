import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

function Proceso({render, setRender, priComenzadas, revComenzadas, manComenzadas, garantiaCom,}) {
  
  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[])

  return (
    <div>
        <h1 className='title-menu'>Ordenes comenzadas:</h1>
        <br/><br/>
        <NavLink className='menu-button' to="/proceso-prioridad">Prioritarias ({priComenzadas})</NavLink>
        <NavLink className='menu-button' to="/proceso-revision">Revision ({revComenzadas})</NavLink>
        <NavLink className='menu-button' to="/proceso-mantencion">Mantenciones ({manComenzadas})</NavLink>
        <NavLink className='menu-button' to="/proceso-garantia">Garantias ({garantiaCom})</NavLink>
        <NavLink to="/taller">Menú</NavLink>
    </div>
  )
}

export default Proceso