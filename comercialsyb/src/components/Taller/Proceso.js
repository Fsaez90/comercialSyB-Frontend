import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build';

function Proceso({render, setRender, priComenzadas, revComenzadas, manComenzadas, garantiaCom,}) {
  
  useEffect(() => {
      setRender(!render)
  },[priComenzadas, revComenzadas, manComenzadas, garantiaCom])
  return (
    <div>
        <h1 className='title-menu'>Ordenes comenzadas:</h1>
        <br/><br/>
        <NavLink className='menu-button' to="/proceso-prioridad">Prioritarias ({priComenzadas})</NavLink>
        <NavLink className='menu-button' to="/proceso-revision">Revision ({revComenzadas})</NavLink>
        <NavLink className='menu-button' to="/proceso-mantencion">Mantenciones ({manComenzadas})</NavLink>
        <NavLink className='menu-button' to="/proceso-garantia">Garantias ({garantiaCom})</NavLink>
        <NavLink to="/taller"><BuildIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></BuildIcon></NavLink>
    </div>
  )
}

export default Proceso