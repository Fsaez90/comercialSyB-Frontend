import React, { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../static/modalNotificaciones.css"
import { Audio } from 'react-loader-spinner';

function NoContestapptos({render, setRender, date}) {
  const [lista, setLista] = useState([])
  const [refresh, setRefresh] = useState(false)
  const [loading, setLoading] = useState(true);
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
  const [fechaRevision, setFechaRevision] = useState()
  const [horaRevision, setHoraRevision] = useState()
  const [ingresoSistema, setIngresoSistema] = useState()
  const [diagnostico, setDiagnostico] = useState("")
  const [presupuesto, setPresupuesto] = useState("")
  const [valorizacion, setValorizacion] = useState("$")
  const [prioritaria, setPrioritaria] = useState()
  const [aPresupuesto, setApresupuesto] = useState()
  const [esperaRepuesto, setEsperaRepuesto] = useState(false)
  const [fechaReparacion, setFechaReparacion] = useState()
  const [repuestoField, setRepuestoField] = useState()
  const [categoria, setCategoria] = useState()
  const navigate  = useNavigate();

  useEffect(() => {
    getData()
},[refresh])

const getData = async () => {
  try {
    setLoading(true)
    const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/no_contesta_pptos/')
    const data = await result.json();
    setLista(data.slice().sort((a, b) => a.id - b.id))
    setLoading(false)
  } catch (error) {
    console.error('Error fetching data:', error);
    setLoading(false); // Ensure loading indicator is hidden in case of an error
  }
}

  async function AprobadaHandle(n){
    try {
      const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
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
            status: "Presupuesto aprobado, en espera de reparación y ensamblaje",
            terminada: true,
            cliente_noresponde: false,
            valorizacion: valorizacion,
            aprobada: true,
            prioritaria: prioritaria,
            cliente_notificado_ppto: true,
            categoria: categoria,
        })
      })
      if (response.ok) {
        setRender(!render)
        setRefresh(!refresh)
        setModal("modal-inactive")
        setEsperaRepuesto(false)
        setPresupuesto("")
        setDiagnostico("")
        setValorizacion("$")
        navigate('/no-contesta-pptos') 
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }

  async function AprobadaEsperaRepuestoHandle(n) {
    try {
      const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
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
          status: "Presupuesto aprobado, en espera de repuesto",
          terminada: true,
          valorizacion: valorizacion,
          aprobada: true,
          cliente_noresponde: false,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
          espera_repuesto: esperaRepuesto,
          repuesto_faltante: repuestoField,
          categoria: categoria
        })
      });
      if (response.ok) {
        setRender(!render);
        setRefresh(!refresh)
        setModal("modal-inactive");
        setEsperaRepuesto(false)
        setPresupuesto("")
        setDiagnostico("")
        setValorizacion("$")
        navigate('/no-contesta-pptos');
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
   
  async function RechazadaHandle(n) {
    try {
      const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
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
          status: "Presupuesto rechazado, en espera de ensamblaje de equipo",
          terminada: true,
          valorizacion: valorizacion,
          rechazada: true,
          cliente_noresponde: false,
          prioritaria: prioritaria,
          cliente_notificado_ppto: true,
          categoria: categoria
        })
      });
  
      if (response.ok) {
        setRender(!render);
        setRefresh(!refresh)
        setModal("modal-inactive");
        setEsperaRepuesto(false)
        setPresupuesto("")
        setDiagnostico("")
        setValorizacion("$")
        navigate('/no-contesta-pptos');
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
  
  async function NoRespondeHandle(n) {
    try {
      const response = await fetch(`https://comercialsyb-backend-production.up.railway.app/comercial/update/${n}/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
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
          status: "Presupuesto terminado, cliente no contesta",
          terminada: true,
          valorizacion: valorizacion,
          prioritaria: prioritaria,
          cliente_noresponde: true,
          ultimo_llamado: date,
          categoria
        })
      });
  
      if (response.ok) {
        setRender(!render);
        setRefresh(!refresh)
        setModal("modal-inactive");
        setEsperaRepuesto(false)
        setPresupuesto("")
        setDiagnostico("")
        setValorizacion("$")
        navigate('/no-contesta-pptos');
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  }
  
  if (lista.length !== 0) {
    return (
      <div>
        {loading ? (
          <div className='frame'>
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
          <div className='frame'>
          <h1 className='title-component'>Presupuesto listos por notificar y valorizar/ingresar a PC: </h1>
          <div >
          {lista.map((x, index) => {
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
                    setValorizacion(x.valorizacion)
                    setDiagnostico(x.diagnostico)
                    setPresupuesto(x.detalle_ppto)
                    setFechaRevision(x.fecha_trabajo)
                    setHoraRevision(x.hora_trabajo)
                    setPrioritaria(x.prioritaria)
                    setIngresoSistema(x.ingreso_sistema)
                    setApresupuesto(x.falla_encontrada)
                    setFechaReparacion(x.fecha_reparacion)
                    setCategoria(x.categoria)
                  }
                    }>Notificar</button>         
              </div> 
              )
          })}
          </div>
          <NavLink to="/notificaciones">Volver</NavLink>
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
                    <p className='sub-detail'>Categoría:<span className='data-modal-taller'>{categoria}</span></p>
                  </div>
                  <div className='machine-detail-2'>
                    <p className='sub-detail'>Mecanico: <span className='data-modal-taller'>{mecanico}</span></p>
                    {mantencion? <p className='sub-detail'><span className='data-modal-taller'>Mantención</span></p>: null}
                    {revision? <p className='sub-detail'><span className='data-modal-taller'>Revisión</span></p>: null}
                    {aPresupuesto? null: <p className='sub-detail'>Fecha de mantención: <span className='data-modal-taller'>{fechaReparacion}</span></p>}
                    <p className='sub-detail'>Fecha de revision: <span className='data-modal-taller'>{fechaRevision}</span></p>
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
                    <input type="text" id="valorizacion" value={valorizacion}/>
                    <label for="valorizacion">Valorización de presupuesto:</label>
                  </div>
                </div>
                <div className='opcion-presupuesto'>
                    <input type="checkbox" id="espera_repuesto" onChange={(e) => setEsperaRepuesto(!esperaRepuesto)} checked={esperaRepuesto} value={esperaRepuesto}/>
                    <label for="espera_repuesto">Repuesto faltante</label>
                    {esperaRepuesto? 
                    <div className='detalle-observaciones'>
                      Indicar repuestos faltantes + código:
                      <textarea className='diagnostico-field' onChange={(e) => setRepuestoField(e.target.value)} value={repuestoField}/>
                    </div>: null} 
                </div>
                <div className='modal-buttons-notificaciones'>
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
                    <button className='button-list-noResponde' onClick={() => {
                      NoRespondeHandle(id)
                      }}>No responde</button>
                    <button className='button-list-volver' onClick={()=> {
                       setModal("modal-inactive")
                       setPresupuesto("")
                       setDiagnostico("")
                       setValorizacion("$")
                       setEsperaRepuesto(false)
                      }}>Volver</button>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        )}
      </div>
    )
  } else {
    return (
      <div>
        {loading ? (
          <div className='frame'>
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
          <div className='frame'>
            <h1 className='title-component'>Clientes inubicados con presupuestos por notificar:</h1>
            <div>
              <p className='not-exist'>No hay notificaciones pendientes</p>
            </div>
            <NavLink to="/notificaciones">Volver</NavLink>
          </div>
        )}
      </div>
    )
  }

}

export default NoContestapptos