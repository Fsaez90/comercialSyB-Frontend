import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalNotificaciones.css"

function MantencionesListas({render, setRender, clock, mmtoslistos, mmtoslistosLista}) {
  const [modal, setModal] = useState("modal-inactive")
  const [id, setId] = useState()
  const [nombre, setNombre] = useState()
  const [apellidos, setApellidos] = useState()
  const [telefono, setTelefono] = useState()
  const [email, setEmail] = useState()
  const [rut, setRut] = useState()
  const [tipo, setTipo] = useState()
  const [marca, setMarca] = useState()
  const [modelo, setModelo] = useState()
  const [serie, setSerie] = useState()
  const [observaciones, setObservaciones] = useState()
  const [espada, setEspada] = useState()
  const [cadena, setCadena] = useState()
  const [funda, setFunda] = useState()
  const [disco, setDisco] = useState()
  const [mantencion, setMantencion] = useState()
  const [revision, setRevision] = useState()
  const [mecanico, setMecanico] = useState()
  const [ingresoSistema, setIngresoSistema] = useState()
  const [fechaRevision, setFechaRevision] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [valorizacion, setValorizacion] = useState("$")
  const [aPresupuesto, setApresupuesto] = useState()
  const [prioritaria, setPrioritaria] = useState()
  const [esperaRepuesto, setEsperaRepuesto] = useState(false)
  const [repuestoField, setRepuestoField] = useState()
  const [fechaReparacion, setFechaReparacion] = useState()


  const navigate  = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setRender(!render)
    }, 500); 
  },[modal])

  function NotificadoHandle(n){
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          falla_encontrada: aPresupuesto,
          mmto_completado: true,
          status: "Cliente notificado para retiro de equipo",
          terminada: true,
          valorizacion: true,
          cliente_notificado_ppto: true,
          cliente_notificado_retiro: true,
          prioritaria: prioritaria,
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }

  function AprobadaHandle(n) {
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          falla_encontrada: aPresupuesto,
          mmto_completado: true,
          status: "Presupuesto aprobado, en espera de reparación y ensamblaje",
          aprobada: true,
          terminada: true,
          valorizacion: valorizacion,
          cliente_notificado_ppto: true,
          prioritaria: prioritaria,
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }

  function AprobadaEsperaRepuestoHandle(n){
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          revisado: true,
          status: "*Falla Econtrada* Presupuesto aprobado, en espera de repuesto",
          terminada: true,
          valorizacion: valorizacion,
          aprobada: true,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
          espera_repuesto: esperaRepuesto,
          repuesto_faltante: repuestoField,
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }

  function RechazadaHandle(n){
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          falla_encontrada: aPresupuesto,
          mmto_completado: true,
          status: "Presupuesto rechazado, en espera de ensamblaje",
          terminada: true,
          rechazada: true,
          valorizacion: valorizacion,
          cliente_notificado_ppto: true,
          prioritaria: prioritaria,
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }

  function NoRespondePptoHandle(n){
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          mmto_completado: true,
          status: "Presupuesto terminado, cliente no conesta",
          terminada: true,
          valorizacion: valorizacion,
          prioritaria: prioritaria,
          cliente_noresponde: true,
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }

  function NotificadoHandle(n) {
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          falla_encontrada: aPresupuesto,
          mmto_completado: true,
          status: "Cliente notificado para retiro de máquina",
          terminada: true,
          valorizacion: valorizacion,
          cliente_notificado_retiro: true,
          prioritaria: prioritaria,
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }

  function NoRespondeNotifHandle(n){
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          mmto_completado: true,
          status: "Mantenimiento terminado, cliente no conesta",
          terminada: true,
          valorizacion: valorizacion,
          prioritaria: prioritaria,
          cliente_noresponde: true,
          cliente_notificado_ppto: true
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }
  
  function GuardarHandle(n) {
    fetch(`http://127.0.0.1:8000/comercial/update/${n}/`, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          nombre: nombre,
          apellidos: apellidos,
          rut: rut,
          email: email,
          telefono: telefono,
          tipo: tipo,
          marca: marca,
          modelo: modelo,
          serie: serie,
          observaciones: observaciones,
          espada: espada,
          cadena: cadena,
          funda: funda,
          disco: disco,
          mantencion: mantencion,
          revision: revision,
          mecanico: mecanico,
          ingreso_sistema: ingresoSistema,
          diagnostico: diagnostico,
          comenzada: true,
          detalle_ppto: presupuesto,
          falla_encontrada: aPresupuesto,
          mmto_completado: true,
          status: "Mantenimiento terminado, notificar cliente",
          terminada: true,
          valorizacion: valorizacion,
          prioritaria: prioritaria,
          espera_repuesto: esperaRepuesto,
          repuesto_faltante: repuestoField
      })
    })
    setRender(!render)
    setTimeout(() => {
      setModal("modal-inactive")
      navigate('/notificaciones') 
    }, 500);
  }
  
  


  if (mmtoslistos !== 0) {
    return (
      <div className='frame'>
      <h1 className='title-component'>Mantenciones listas: </h1>
      <div >
      {mmtoslistosLista.map((x, index) => {
        return(
          <div className="list-section" key={index}>
              <p className='number-list'>Orden Nº {x.id}</p>
              <button className='button-list' onClick={() => 
                {setModal("modal")
                setId(x.id)
                setNombre(x.nombre)
                setApellidos(x.apellidos)
                setRut(x.rut)
                setTelefono(x.telefono)
                setEmail(x.email)
                setTipo(x.tipo)
                setMarca(x.marca)
                setModelo(x.modelo)
                setSerie(x.serie)
                setEspada(x.espada)
                setCadena(x.cadena)
                setFunda(x.funda)
                setDisco(x.disco)
                setObservaciones(x.observaciones)
                setMantencion(x.mantencion)
                setRevision(x.revision)
                setMecanico(x.mecanico)
                setDiagnostico(x.diagnostico)
                setPresupuesto(x.detalle_ppto)
                setFechaRevision(x.fecha_trabajo)
                setApresupuesto(x.falla_encontrada)
                setPrioritaria(x.prioritaria)
                setValorizacion(x.valorizacion)
                setIngresoSistema(x.ingreso_sistema)
                setFechaReparacion(x.fecha_reparacion)
              }
                }>Notificar</button>         
          </div> 
          )
      })}
      </div>
      <NavLink to="/notificaciones">Menú</NavLink>
      <div className={modal}>
          <div className='modal-content'>
            <div className='modal-details-taller'>
                <p className='sub-title'>Orden Nº:<span className='data-modal-taller'>{id}</span></p>
                <p className='sub-title'>Nombre:<span className='data-modal-taller'>{nombre} {apellidos} </span></p>
            </div>
            <div className='modal-machine-details-taller'>
               <div className='machine-detail-1'> 
                <p className='sub-detail'>Tipo:<span className='data-modal-taller'>{tipo}</span></p>
                <p className='sub-detail'>Modelo:<span className='data-modal-taller'>{modelo}</span></p>
                <p className='sub-detail'>Marca:<span className='data-modal-taller'>{marca}</span></p>
                <p className='sub-detail'>Serie:<span className='data-modal-taller'>{serie}</span></p>
              </div>
              <div className='machine-detail-2'>
                <p className='sub-detail'>Mecanico: <span className='data-modal-taller'>{mecanico}</span></p>
                {mantencion? <p className='sub-detail'><span className='data-modal-taller'>Mantención</span></p>: null}
                {revision? <p className='sub-detail'><span className='data-modal-taller'>Revisión</span></p>: null}
                <p className='sub-detail'>Fecha de revision: <span className='data-modal-taller'>{fechaRevision}</span></p>
                {aPresupuesto? null: <p className='sub-detail'>Fecha de mntención: <span className='data-modal-taller'>{fechaReparacion}</span></p>}
              </div>
            </div>
            
            {aPresupuesto? <div className='detalle-observaciones-falla'>**Falla encontrada**, informar a cliente sobre presupuesto</div>: null}
            
            <div className='detalle-observaciones'>
              Diagnóstico:
              <textarea className='diagnostico-field' value={diagnostico}/>
            </div>
            <div className='detalle-observaciones'>
              Detalle de reparación:
              <textarea className='detalle-field' value={presupuesto}/>
              <div>
                <input type="text" id="valorizacion" onChange={(e) => setValorizacion(e.target.value)} value={valorizacion}/>
                <label for="valorizacion">Favor indicar valorización de presupuesto</label>
              </div>
              {aPresupuesto?
              <div className='opcion-presupuesto'>
                <input type="checkbox" id="espera_repuesto" onChange={(e) => setEsperaRepuesto(!esperaRepuesto)} value={esperaRepuesto}/>
                <label for="espera_repuesto">Repuesto faltante</label>
                {esperaRepuesto? 
                  <div className='detalle-observaciones'>
                    Indicar repuestos faltantes + código:
                    <textarea className='diagnostico-field' onChange={(e) => setRepuestoField(e.target.value)} value={repuestoField}/>
                  </div>: null} 
              </div>:null}
            </div>
            <div className='modal-buttons-notificaciones'>
              {aPresupuesto?
              <div>
                {esperaRepuesto?
                <div>
                  <button className='button-list-aprobada' onClick={() => {
                    AprobadaEsperaRepuestoHandle(id) 
                    }}>Aprobada</button>
                  <button className='button-list-rechazada' onClick={() => {
                    RechazadaHandle(id) 
                    }}>Rechazada</button>
                </div>:
                <div>
                  <button className='button-list-aprobada' onClick={() => {
                    AprobadaHandle(id)
                    }}>Aprobada</button>
                  <button className='button-list-rechazada' onClick={() => {
                    RechazadaHandle(id)
                    }}>Rechazada</button>
                </div>
                } 
              <div>
                <button className='button-list-guardar' onClick={() => {
                  GuardarHandle(id)
                }}>Guardar, notificar después</button>
                <button className='button-list-noResponde' onClick={() => {
                  NoRespondePptoHandle(id)
                  }}>No responde</button>
                <button className='button-list-volver' onClick={()=> {
                   setModal("modal-inactive")
                   setPresupuesto("")
                   setDiagnostico("")
                   setValorizacion("$")
                   }}>Volver</button> 
              </div>
            </div>: 
              <div>
                <div>
                <button className='button-list-aprobada' onClick={() => {
                  NotificadoHandle(id) 
                  }}>Notificado</button>
                </div>
                <div>
                <button className='button-list-noResponde' onClick={() => {
                  NoRespondeNotifHandle(id) 
                  }}>No responde</button>
                <button className='button-list-volver' onClick={()=> {
                   setModal("modal-inactive")
                   setPresupuesto("")
                   setDiagnostico("")
                   setValorizacion("$")
                    }}>Volver</button>
              </div>
              </div>}
            </div>
          </div>
        </div>   
      
    </div>
    )
  } else {
    return (
      <div className='frame'>
        <h1 className='title-component'>Presupuesto listos por notificar y valorizar/ingresar a PC:</h1>
        <div>
          <p className='not-exist'>No hay notificaciones pendientes</p>
        </div>
        <NavLink to="/notificaciones">Menú</NavLink>
      </div>
    )
  }
}


export default MantencionesListas