import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "../static/busqueda.css"
import AddHomeIcon from '@mui/icons-material/AddHome';
import BusquedaModal from './BusquedaModal';

function Busqueda({date}) {
    const [param, setParam] = useState("")
    const [orden, setOrden] = useState()
    const [modal, setModal] = useState("modal-inactive")
    const[modalData, setModalData] = useState({})
    const[notExist, setNotExist] = useState("")
  
    function getOrdenData() {
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/search-orden/${param}`)
            .then(response => {
            if(response.status === 200) { return response.json()}
            if(response.status === 404) { setNotExist("Orden no encontrada")}
            })
            .then(data => setOrden(data))
      }
    
      useEffect(() => {
        getOrdenData()
        },[param])
  
    if (orden && orden.length !== 0) {
      return (
        <div className='frame'>
          <h1 className='title-component'>Consulta estado de orden</h1>
          <input type="text" placeholder='NºOrden/Rut/Nombre' onChange={(e) => {
            setParam(e.target.value)
            }} value={param} />
          <div className='busqueda-modal'>
            <div className='cliente-data-render'>
            {orden.map((x) => {
                return (
                    <div key={x.id} className='modal-elements-busqueda' onClick={() => {
                        setModalData(x)
                        setModal("modal")
                        }}>
                        <div className='title-consulta'>Nº:<span className='orden-data'>{x.id}</span></div>
                        <div className='title-consulta'>Nombre:<span className='orden-data'>{x.nombre} {x.apellidos}</span></div>
                    </div>
                )
            })}
            </div>
            <div className={modal}>
                <BusquedaModal getOrdenData={getOrdenData} orden={modalData} date={date} setModal={setModal}/>
            </div>        
          </div>
          <button className='button-list button' onClick={() => {
                  setOrden(null)
                  setParam("")
                  }}>Refresh</button>  
          <br/>
          <br/>
          <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
      )
    } else {
  
      return (
        <div className='frame'>
          <h1 className='title-component'>Consulta estado de orden</h1>
          <input type="text" placeholder='NºOrden/Rut/Nombre' onChange={(e) => {
            setParam(e.target.value)
            setNotExist("")}} value={param} />
          <br/>
          <p className='not-exist'>{notExist}</p>
          <br/>
          <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
        </div>
      )
    } 
}

export default Busqueda