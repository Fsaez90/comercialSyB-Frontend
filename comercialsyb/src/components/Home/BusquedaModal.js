import React, { useState } from 'react'
import ComprobanteRetiro from './ComprobanteRetiro'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function BusquedaModal({orden, setModal, date}) {
    const [modalComprobanteRetiro, setModalComprobanteRetiro] = useState("modal-inactive")
    const [ok, setOk] = useState("gar-inactive")

    const dateOfToday = new Date();
    const date2 = new Date(dateOfToday);
    date2.setDate(dateOfToday.getDate() - 30);
    const dateOf30DaysAgo = date2.toLocaleDateString()

    function garantiaHandle (n) {
        fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update-partial/${n}/`, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
              garantia: true,
              mantencion: null,
              revision: null,
              mmto_completado: false,
              cliente_notificado_retiro: false,
              cliente_notificado_ppto: false,
              fecha_reingreso: date,
              falla_encontrada: false,
              status: "Equipo reingresado por garantía"
          })
        })
        setOk("gar-active") 
    }

  return (
    <div>
        <div className='busqueda-modal'>
          <div className='cliente-data'>
            <div className='modal-elements'>
              <div className='title-consulta'>Nombre:<span className='orden-data'>{orden.nombre} {orden.apellidos}</span></div>
              <div className='title-consulta'>RUT:<span className='orden-data'>{orden.rut}</span></div>
            </div>
            <div className='modal-elements'>
              <div className='title-consulta'>Teléfono:<span className='orden-data'>{orden.telefono}</span></div>
              <div className='title-consulta'>Email:<span className='orden-data'>{orden.email}</span></div>
            </div>
          </div>
          <div className='cliente-data'>
            <div className='modal-elements'>
              <div className='title-consulta'>Tipo:<span className='orden-data'>{orden.tipo}</span></div>
              <div className='title-consulta'>Modelo:<span className='orden-data'>{orden.modelo}</span></div>
            </div>
            <div className='modal-elements'>
              <div className='title-consulta'>Marca:<span className='orden-data'>{orden.marca}</span></div>
              <div className='title-consulta'>Serie:<span className='orden-data'>{orden.serie}</span></div>
            </div>
          </div>
          <div className='cliente-data'>
            <div className='modal-elements'>
              <div className='title-consulta'>Observaciones:<span className='orden-data'>{orden.observaciones}</span></div>
              {orden.revision?
              <div className='title-consulta'>Propósito:<span className='orden-data'>Revisión</span></div>:
              <div className='title-consulta'>Propósito:<span className='orden-data'>Mantenimiento</span></div>
              }
            </div>
          </div>
            
          <div className='work-data'> 
            <div className='modal-elements'>
              <div className='title-consulta'>Fecha Ingreso:<span className='orden-data'>{orden.fecha_ingreso}</span></div>
              {orden.fecha_reingreso? <div className='title-consulta'>Fecha ingreso garantía:<span className='orden-data'>{orden.fecha_reingreso}</span></div>: null}
              {orden.fecha_trabajo? <div className='title-consulta'>Fecha Revisión/comienzo:<span className='orden-data'>{orden.fecha_trabajo}</span></div>: null}
              {orden.fecha_reparacion? <div className='title-consulta'>Fecha Reparación/término:<span className='orden-data'>{orden.fecha_reparacion}</span></div>: null}
              {orden.fecha_retiro? <div className='title-consulta'>Fecha Retiro:<span className='orden-data'>{orden.fecha_retiro}</span></div>: null}
              {orden.diagnostico? <div className='title-consulta'>Diagnóstico:<span className='orden-diagnostico'>{orden.diagnostico}</span></div>: null}
              {orden.valorizacion? <div className='title-consulta'>Valorización:<span className='orden-data'>{orden.valorizacion}</span></div>: null}
            </div>
            {orden.espera_repuesto?
            <div className='modal-elements'>
              <div>Repuestos</div>
              <textarea className='detalle-repuestos' value={orden.repuesto_faltante} />
            </div>:null}
            <div className='modal-elements'>
              <p className='data-consulta-status'>{orden.status}</p>
            </div>
            <br/>
            {orden.entregada?
              <div className='modal-elements'>
                <button className='buttons' onClick={() => setModalComprobanteRetiro("modal")}>Ver comprobante Retiro</button>
                <br/>
                <br/>
                {(orden.fecha_retiro > dateOf30DaysAgo && orden.garantia === false)? <div className='modal-elements'><button className='buttons' onClick={()=>garantiaHandle(orden.id)}>Garantía</button><div className={ok}><CheckCircleIcon style={{color: "green"}}></CheckCircleIcon></div></div>: null}
              </div>: null}
          </div> 
          <button className='button-close' onClick={()=> setModal("modal-inactive")}>Cerrar</button>
        </div>
        <br/>
        <br/>
        <div className={modalComprobanteRetiro}>
              <ComprobanteRetiro orden={orden} setModalComprobanteRetiro={setModalComprobanteRetiro}/>
        </div>
    </div>
  )
}

export default BusquedaModal