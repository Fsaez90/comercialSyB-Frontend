import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import AddHomeIcon from '@mui/icons-material/AddHome';

function ClientesXnotificar({pptosListos, solRep, mmtosListos, eqRep, eqArm, noContesta}) {
  
  return (
    <div className='frame-menu'>
    <h1 className='title-menu'>Notificaciones a Clientes por realizar:</h1>
    <div className='menu'>
      <div>
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/pptos-listos">Presupuestos Listos</NavLink>
          {pptosListos > 0? <p id='not-count'>{pptosListos}</p>: null}
        </div><br />
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/mmto-solicitud-rep">Solicitud Repuestos Mantenciones/Garantias</NavLink>
          {solRep > 0? <p id='not-count'>{solRep}</p>: null}
        </div>
        <br /><br />
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/mantenciones-listas">Mantenciones/Garantías Listas</NavLink>
          {mmtosListos > 0? <p id='not-count'>{mmtosListos}</p>: null}
        </div>
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/equipos-reparados">Equipos Reparados</NavLink>
          {eqRep > 0? <p id='not-count'>{eqRep}</p>: null}
        </div>
        <br /><br />
        <NavLink className='menu-button' to="/equipos-armados">Equipos Armados ({eqArm})</NavLink>
        <br /><br />
        <div className='frame-menu'>
          <NavLink className='menu-button' to="/no-contesta">No Contesta ({noContesta})</NavLink>
          {/* {(noContestappto + noContestaretiro) > 0? <p id="not-count">{noContestappto + noContestaretiro}</p>: null} */}
        </div>
      </div>
      
    </div>
    <br/><br/><br/>
    <div>
      <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
    </div>
</div>
  )
}

export default ClientesXnotificar