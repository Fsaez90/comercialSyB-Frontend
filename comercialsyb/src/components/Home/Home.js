import React from 'react'
import { NavLink } from 'react-router-dom'
import BuildIcon from '@mui/icons-material/Build';
import { Audio } from 'react-loader-spinner';


function Home({nextorden, nototal, esperarep, not, loading}) {

  return (
    <div>
      {loading ? (
        <div className="App">
          <Audio
            height="70"
            width="70"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      ) : (
        <div className='frame-menu'>
          <h1 className='title-menu'>STIHL Los Andes</h1>
          <div className='menu'>
              <NavLink className='menu-button' to="/ingreso">Ingreso Equipo [{nextorden}]</NavLink>
              <div className='frame-menu'>
                <NavLink className='menu-button' to="/notificaciones">Notificaciones</NavLink>
                {nototal > 0? <p id='not-count'>{nototal}</p>: null}
              </div>
              <div className='frame-menu'>
                <NavLink className='menu-button' to="/otxingresar">Ingresos OT a PC</NavLink>
                {not > 0? <p id='not-count'>{not}</p>: null}
              </div>
              <NavLink className='menu-button' to="/estado">Estado de orden</NavLink>
              <NavLink className='menu-button' to="/espera-repuesto">Espera Repuesto ({esperarep})</NavLink>
              <NavLink className='menu-button' to="/entrega">Entrega Equipo</NavLink>
          </div>
          <br/>
          <div>
            <NavLink to="/taller"><BuildIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></BuildIcon></NavLink>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home