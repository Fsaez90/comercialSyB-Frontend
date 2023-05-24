import React, {useState, useRef} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import SignaturePad from "react-signature-canvas"
import '../static/formularioIngreso.css'
import AddHomeIcon from '@mui/icons-material/AddHome';

function Ingreso({setRender, render, date, lastId}) {

  const  navigate  = useNavigate();
  
  const [isDisable, setIsDisable] = useState("buttons")
  const [imageURL, setImageURL] = useState(null)
  const [success, setSuccess] = useState("overlay")
  const [succesMsg, setSuccessMsg] = useState("success-msg")
  const [mecanico, setMecanico] =useState()
  const [name, setName] = useState()
  const [lastname, setLastname] = useState()
  const [rut, setRut] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState("+569")
  const [tipo, setTipo] = useState()
  const [modelo, setModelo] = useState()
  const [marca, setMarca] = useState()
  const [serie, setSerie] = useState()
  const [espada, setEspada] = useState(false)
  const [cadena, setCadena] = useState(false)
  const [funda, setFunda] = useState(false)
  const [disco, setDisco] = useState(false)
  const [observaciones, setObservaciones] = useState()
  const [mantenimiento, setMantenimiento] = useState(false)
  const [revision, setRevision] = useState(false)
  const [garantia, setGarantia] = useState(false)
  const [status, setStatus] = useState()
  const sigCanvas = useRef({})
  const signButton = useRef({})
  const clear = () => sigCanvas.current.clear();
  const save = () => setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"))

  function crearOrden (e) {
    e.preventDefault();
    fetch("https://comercialsyb-backend-production.up.railway.app/comercial/crear/", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nombre: name,
        apellidos: lastname,
        rut: rut,
        email: email,
        telefono: phone,
        tipo: tipo,
        marca: marca,
        modelo: modelo,
        serie: serie,
        observaciones: observaciones,
        espada: espada,
        cadena: cadena,
        funda: funda,
        disco: disco,
        mantencion: mantenimiento,
        revision: revision,
        garantia: garantia,
        mecanico: mecanico,
        status: status,
        fecha_ingreso: date
      })
    })
    .then(response => {
      if (response.ok) {
        // Success
        setSuccess("overlay-active");
        setSuccessMsg("success-msg-active");
        setTimeout(() => {
          setRender(!render);
          navigate("/");
        }, 2500);
      } else {
        // Handle the error case
        throw new Error('Error creating order'); // Throw an error to be caught in the catch block
      }
    })
    .catch(error => {
      // Handle the error
      console.log('Error:', error);
      // Additional error handling
    });
  // ...
  }
 

  return (
    <div className='frame'>
      <h1 className='title-component'>Formulario Ingreso de equipo:</h1>
      <br /><br />
      <form className='form' onSubmit={(e) => crearOrden(e)}>
        <div className='subtitulos'>Datos cliente</div>
         <br />
         <input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} required/>
          <input type="text" placeholder='Apellidos' onChange={(e) => setLastname(e.target.value)} required/>
            <br /><br />
          <input type="text" placeholder='Rut' onChange={(e) => setRut(e.target.value)} required/>
          <input  type='text' placeholder='Teléfono' onChange={(e) => setPhone(e.target.value)} required/>
            <br /><br />
          <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <br /><br />
          <div className='subtitulos'>Datos del equipo</div>
            <br />
            <input type="text" placeholder='Tipo' onChange={(e) => setTipo(e.target.value)} required/>
            <input type="text" placeholder='Modelo' onChange={(e) => setModelo(e.target.value)} required/>
            <br /><br />
            <input type="text" placeholder='Marca' onChange={(e) => setMarca(e.target.value)} required/>
            <input type="text" placeholder='Serie' onChange={(e) => setSerie(e.target.value)} required/>
            <br />
            <br />
            <input type='checkbox' id="espada" onChange={(e) => setEspada(!espada)}/>
            <label for="espada">Espada</label><br />
            <input type='checkbox' id="cadena" onChange={(e) => setCadena(!cadena)}/>
            <label for="cadena">Cadena</label><br />
            <input type='checkbox' id="funda" onChange={(e) => setFunda(!funda)}/>
            <label for="funda">Funda</label><br />
            <input type='checkbox' id="disco" onChange={(e) => setDisco(!disco)}/>
            <label for="disco">Disco de Corte</label>
            <br /><br />
            <textarea className='observaciones' placeholder='Observaciones' onChange={(e) => setObservaciones(e.target.value)} value={observaciones}/>
            <br /><br />
            <label className='label' htmlFor="mantenimiento">Mantenimiento</label>
            <input type='radio' name='proposito' id="mantenimiento" onChange={(e) => {
              setMantenimiento(!mantenimiento)
              setRevision(false)
              setGarantia(false)
              setStatus("Equipo en espera de Mantención")
              }} value={mantenimiento} required/>
              <br />
            <label className='label' htmlFor="revision">Revisión</label>
            <input type='radio' name='proposito' id="revision" onChange={(e) => {
              setRevision(!revision)
              setMantenimiento(false)
              setGarantia(false)
              setStatus("Equipo en espera de Revision")
              }} value={revision}/>
              <br />
            <label className='label' htmlFor="revision">Garantía</label>
            <input type='radio' name='proposito' id="revision" onChange={(e) => {
              setGarantia(!garantia)
              setRevision(false)
              setMantenimiento(false)
              setStatus("Equipo en espera de Revision de Garantia")
              }} value={garantia}/>
            <br /><br />
            <label for="recepcion">Recepcionado por:</label>
          <select onChange={(e) => setMecanico(e.target.value)} id="recepcion" required>
            <option value="1">Seleccionar</option>
            <option value="1">Técnico 1</option>
            <option value="2">Técnico 2</option>
            <option value="Admin">Admin</option>
          </select>
        <br /><br />
      <Popup modal trigger={<div ref={signButton} className={isDisable} disabled={isDisable}>Firmar</div>} closeOnDocumentClick={false}>
        {close => (
          <div>
              <SignaturePad
                ref={sigCanvas} 
                canvasProps={{
                  className: "SignaturePad"
                }}
              />
              <div className='signature-pad-buttons'>
                <button className='buttons' onClick={() => {
                      save();
                      setIsDisable("notEnable")
                      close();
                    }}>Ok</button>
                <button className='buttons' onClick={close}>Volver</button>
                <button className='buttons' onClick={clear}>Corregir</button>
              </div>
          </div>
        )}
      </Popup>
        <br /><br />
      {imageURL ? (
            <Popup modal trigger={<div className='buttons'>Ver comprobante</div>} closeOnDocumentClick={false}>
            {close => (
              <div className='comprobante'>
                <div>
                  <div className='encabezado'>
                    <div className='about'>
                      <h1>Comercial S&B</h1>
                      <p>Servicio Técnico Autorizado</p>
                      <p>STIHL</p>
                      <p>Tres Carrera # 459, Los Andes</p>
                      <p>Fono: (34)229 54 12</p>
                      <p>Email: comercialsyb@gmail.com</p>
                    </div>
                  </div>
                  <div>
                    <p>Orden Nº: {lastId + 1}</p>
                    <p>Nombre: {name} </p>
                    <p>Apellidos: {lastname}</p>
                    <p>RUT: {rut}</p>
                    <p>Email: {email} </p>
                    <p>Teléfono: {phone} </p>
                    <p>Fecha: {date}</p>
                  </div>
                  <div className='miselaneus'>
                      <p>Las reparaciones se entregan en un plazo máximo de 10 días hábiles UNA VEZ APROBADO EL PRESUPUESTO.</p>
                      <p>Las reparaciones tienen garantía de 30 días sobre el trabajo realizado según guía de servicio.</p>
                      <p>NOTA:</p>
                      <p>Las máquinas no retiradas durante 60 días serán enviadas a bodega y la empresa no se responsabiliza por deterioros producidos.</p>
                      <p>Las máquinas no retiradas durante 1 año segun el Articulo 42 de la ley de comercio, será considerada como abandonada por sus propietarios, por lo que la empresa podrá disponer de ella.</p>
                      <p>El valor del presupuesto puede sufrir modificaciones si durante su preceso de reparación se detectan defectos no advertidos en el diagnostico original que impliquen gastos adicionales. Esta variación, en el caso de reparación, será informada al cliente antes de continuar con la reparación del equipo.</p>
                      <p>El presupuesto tiene una vigencia de 10 días desde la fecha de emisión.</p>
                      <p><span>El presupuesto rechazado tendrá un costo de $10.000 pesos (IVA Inc.), Equipos mayores $20.000 pesos (IVA Inc.).</span></p>
                  </div>
                  <div>
                    <p>Tipo: {tipo} </p>
                    <p>Modelo: {modelo} </p>
                    <p>Marca: {marca} </p>
                    <p>Serie: {serie} </p>
                    {espada ? (<p>Espada: Si</p>): null}
                    {cadena ? (<p>Cadena: Si</p>): null}
                    {funda ? (<p>Funda: Si</p>): null}
                    {disco ? (<p>Disco: Si</p>): null}
                  </div>
                  <p>Observaciones: {observaciones}</p>
                  <br />
                  {mantenimiento? (<p>Equipo a Mantenimiento</p>): <p>Equipo a Revisión</p>}
                  {garantia?<p>GARANTÍA</p>:null}
                  <b/>
                  <p>Equipo recibido por: {mecanico}</p>
                  <div className='firma-area'>
                  <img
                    src={imageURL}
                    alt= "Firma" 
                    style={{
                      display: "block",
                      margin: "0 auto",
                      borderBottom: "1px solid black",
                      width: "150px"
                    }}
                  />
                  <br/>
                  <p>Firma Cliente Sr/s: {name} {lastname}, Rut: {rut}</p>
                  </div>
                </div>
                <button onClick={close}>Cerrar</button>
              </div>
            )}
          </Popup>

      ): null}
      <br /><br />
      {imageURL ? (<input type='submit' className='buttons' value="IMPRIMIR" />): null}
      </form>
      <div className="return-menu">
        <NavLink to="/"><AddHomeIcon style={{color: "rgb(33, 33, 240)", fontSize: "30px"}} ></AddHomeIcon></NavLink>
      </div>
      <div id={success}>
        <p id={succesMsg}>Orden ingresada exitosamente!</p>
      </div>
    </div>
  )
}

export default Ingreso