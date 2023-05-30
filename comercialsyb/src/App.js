import React, { useState, useEffect } from "react";
import "./index.css";
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import ClientesXnotificar from '../src/components/Home/ClientesXnotificar'
import OTxingresar from "../src/components/Home/OTxingresar"
import Entrega from "../src/components/Home/Entrega"
import Ingreso from "../src/components/Home/Ingreso"
import Home from "../src/components/Home/Home";
import HomeTaller from "./components/Taller/HomeTaller";
import Prioridad from "./components/Taller/Prioridad";
import Mantenimiento from "./components/Taller/Mantenimiento";
import Revision from "./components/Taller/Revision";
import Aprobadas from "./components/Taller/Aprobadas";
import Rechazadas from "./components/Taller/Rechazadas";
import Proceso from "./components/Taller/Proceso";
import PrioritariasProc from "./components/Taller/PrioritariasProc";
import RevisionProc from "./components/Taller/RevisionProc";
import MantencionProc from "./components/Taller/MantencionProc";
import PptosListos from "./components/Home/PptosListos";
import MantencionesListas from "./components/Home/MantencionesListas";
import EquiposReparados from "./components/Home/EquiposReparados";
import EquiposArmados from "./components/Home/EquiposArmados";
import NoContesta from "./components/Home/NoContesta";
import NoContestapptos from "./components/Home/NoContestapptos";
import NoContestaRetiro from "./components/Home/NoContestaRetiro";
import SolicitudRepuestos from "./components/Home/SolicitudRepuestos";
import MmtoRepListos from "./components/Taller/mmtoRepListos";
import EsperaRepuesto from "./components/Home/EsperaRepuesto";
import Garantias from "./components/Taller/garantias";
import GarantiaProceso from "./components/Taller/GarantiaProceso";
import Busqueda from "./components/Home/Busqueda";


function App() {
  const [orden, setOrden] = useState([]);
  const [render, setRender] = useState(false)
  const [notificaciones, setNotificaciones] = useState()
  const [listaOt, setListaOt] = useState([])
  const [date, setDate] = useState()
  const [clock, setClock] = useState()
  
  //taller data states//
  const [prioLista, setPriolista] = useState([])
  const [procPrioLista, setProcPrioLista] = useState([])
  const [procRevLista, setProcRevLista] = useState([])
  const [procManLista, setProcManLista] = useState([])
  const [proGarLista, setProGarLista] = useState([])
  const [revLista, setRevlista] = useState([])
  const [manLista, setManlista] = useState([])
  const [aprLista, setAprlista] = useState([])
  const [rechLista, setRechlista] = useState([])
  const [prioridad, setPrioridad] = useState()
  const [garantia, setGarantia] = useState()
  const [revision, setRevision] = useState()
  const [mantencion, setMantencion] = useState()
  const [aprobadas, setAprobadas] = useState()
  const [rechazadas, setRechazadas] = useState()
  const [priComenzadas, setPriComenzadas] = useState()
  const [revComenzadas, setRevComenzadas] = useState()
  const [manComenzadas, setManComenzadas] = useState()
  const [totalProceso, setTotalProceso] = useState()
  const [notificacionesTotal, setTotalNotificaciones] = useState()
  const [pptoslistosLista, setpptoslistosLista] = useState([])
  const [mmtoslistosLista, setmmtoslistosLista] = useState([])
  const [eqreparadosLista, seteqreparadosLista] = useState([])
  const [eqarmadosLista, seteqarmadosLista] = useState([])
  const [noContestaRetiroLista, setNoContestaRetiroLista] = useState([])
  const [noContestaPptoLista, setNoContestaPptoLista] = useState([])
  const [pptoslistos, setpptoslistos] = useState()
  const [mmtoslistos, setmmtoslistos] = useState()
  const [eqreparados, seteqreparados] = useState()
  const [eqarmados, seteqarmados] = useState()
  const [noContestaretiro, setNoContestaretiro] = useState()
  const [noContestappto, setNoContestappto] = useState()
  const [solicitudRepuestos, setSolicitudRepuestos] = useState()
  const [solicitudRepuestosLista, setSolicitudRepuestosLista] = useState([])
  const [repRecibidosMmto, setRepRecibidosMmto] = useState()
  const [repRecibidosMmtoLista, setRepRecibidosMmtoLista] = useState([])
  const [esperaRepuesto, setEsperaRepuesto] = useState()
  const [esperaRepuestoLista, setEsperaRepuestoLista] = useState([])
  const [garantiaLista, setGarantiaLista] = useState([])
  const [garantiaCom, setGarantiaCom] = useState([])
  const [lastId, setLastid] = useState()
  const [nocontestaTotal, setnocontestaTotal] = useState()
  
  useEffect(() => {  
      fetchData();
  },[render])   
console.log(mantencion) 
  const fetchData = async () => {  
    const date = new Date();
    setClock(date.toLocaleTimeString());
    setDate(date.toLocaleDateString());

    try {
      const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/orden-list/');
      const data = await result.json();
      setOrden(data);

      if (Array.isArray(data) && data.length > 0) {
        const lastObject = data[data.length - 1];
        setLastid(lastObject.id);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
   
    let lista = orden.filter(function(x){
      return x.ingreso_sistema === false
    })
    setNotificaciones(lista.length)
    setListaOt(lista)

    //Taller data fetch 

    let listaPrioridad = orden.filter(function(x){
      return x.prioritaria === true && x.comenzada === false && x.entregada === false
    })
    let listaRevision = orden.filter(function(x){
      return x.revision === true && x.comenzada === false && x.prioritaria === false && x.entregada === false && (x.garantia === false || x.garantia === null)
    })
    let listaMantencion = orden.filter(function(x){
      return x.mantencion === true && x.comenzada === false && x.prioritaria === false && x.entregada === false && x.solicitud_repuestos === false
    })
    let listaAprobadas = orden.filter(function(x){
      return x.aprobada === true && x.terminada === true && x.cliente_notificado_ppto === true && x.reparada === false && x.espera_repuesto === false && x.entregada === false
    })
    let listaRechazadas = orden.filter(function(x){
      return x.rechazada === true && x.terminada === true && x.cliente_notificado_ppto === true && x.armada === false && x.entregada === false
    })
    let priComenzadaslet = orden.filter(function(x){
      return x.prioritaria === true && x.comenzada === true && x.revisado === false && x.terminada === false && x.entregada === false
    })
    let revComenzadaslet = orden.filter(function(x){
      return x.revision === true && x.comenzada === true && x.revisado === false && x.terminada === false && x.entregada === false && x.garantia === false
    })
    let mantComenzadas = orden.filter(function(x){
      return x.mantencion === true && x.comenzada === true && x.revisado === false && x.terminada === false && x.entregada === false
    })
    let garComenzadas = orden.filter(function(x){
      return x.garantia === true && x.comenzada === true && x.revisado === false && x.terminada === false && x.entregada === false
    })
    let PptosListos = orden.filter(function(x){
      return x.revision === true && x.revisado === true && x.terminada ===true  && x.cliente_notificado_ppto === false && x.cliente_noresponde === false && x.entregada === false
    })
    let MmtosListos = orden.filter(function(x){
      return (x.mantencion === true || x.garantia === true) && x.mmto_completado === true && x.terminada === true && x.cliente_notificado_retiro === false && x.cliente_notificado_ppto === false && x.cliente_noresponde === false && x.entregada === false
    })
    let solicitudRepMmto = orden.filter(function(x){
      return (x.mantencion === true || x.garantia === true) && x.mmto_completado === false && x.terminada === true && x.cliente_notificado_retiro === false && x.cliente_notificado_ppto === false && x.cliente_noresponde === false && x.solicitud_repuestos === true && x.repuestos_entregados === false && x.espera_repuesto === false && x.entregada === false
    })
    let repuestosRecibidosMmmto = orden.filter(function(x){
      return (x.mantencion === true || x.garantia === true) && x.mmto_completado === false && x.terminada === true && x.cliente_notificado_retiro === false && x.cliente_notificado_ppto === false && x.cliente_noresponde === false && x.solicitud_repuestos === true && x.repuestos_entregados === true && x.entregada === false
    })
    let EqReparados = orden.filter(function(x){
      return x.revisado === true && x.terminada === true && x.reparada === true && x.cliente_noresponde === false && x.cliente_notificado_retiro === false && x.entregada === false
    })
    let EqArmados = orden.filter(function(x){
      return x.revisado === true && x.terminada === true && x.armada === true && x.cliente_noresponde === false && x.cliente_notificado_retiro === false && x.entregada === false
    })
    let NoContestaretiro = orden.filter(function(x){
      return (x.reparada === true || x.mmto_completado === true || x.armada === true) && x.cliente_notificado_retiro === false && x.cliente_noresponde === true && x.entregada === false
    })
    let NoContestappto = orden.filter(function(x){
      return (x.revision === true || x.falla_encontrada === true) && x.reparada === false && x.cliente_notificado_ppto === false && x.cliente_noresponde === true && x.entregada === false
    })
    let EsperaRepuestos = orden.filter(function(x){
      return x.espera_repuesto === true && x.entregada === false
    })
    let Garantias = orden.filter(function(x){
      return x.garantia === true && x.validez_garantia === null
    }) 

    let procesoTotal = priComenzadaslet.length + revComenzadaslet.length + mantComenzadas.length + garComenzadas.length
    let totalNotificaciones = PptosListos.length + MmtosListos.length + EqReparados.length + EqArmados.length + solicitudRepMmto.length 
    let totalNoContesta = NoContestappto.length + NoContestaretiro.length
  
    setPrioridad(listaPrioridad.length) 
    setRevision(listaRevision.length)
    setMantencion(listaMantencion.length)
    setAprobadas(listaAprobadas.length)
    setRechazadas(listaRechazadas.length)
    setPriComenzadas(priComenzadaslet.length)
    setRevComenzadas(revComenzadaslet.length)
    setManComenzadas(mantComenzadas.length)
    setGarantiaCom(garComenzadas.length)
    setProGarLista(garComenzadas)
    setGarantia(Garantias.length)
    setTotalProceso(procesoTotal)
    setProcPrioLista(priComenzadaslet)
    setProcRevLista(revComenzadaslet)
    setProcManLista(mantComenzadas)
    setPriolista(listaPrioridad)
    setRevlista(listaRevision)
    setManlista(listaMantencion)
    setAprlista(listaAprobadas) 
    setRechlista(listaRechazadas)


    setTotalNotificaciones(totalNotificaciones)
    setpptoslistosLista(PptosListos)
    setmmtoslistosLista(MmtosListos)
    seteqreparadosLista(EqReparados)
    seteqarmadosLista(EqArmados)
    setGarantiaLista(Garantias)
    setNoContestaPptoLista(NoContestappto)
    setNoContestaRetiroLista(NoContestaretiro)
    setSolicitudRepuestosLista(solicitudRepMmto)
    setRepRecibidosMmtoLista(repuestosRecibidosMmmto)
    setEsperaRepuesto(EsperaRepuestos.length)
    setpptoslistos(PptosListos.length)
    setmmtoslistos(MmtosListos.length)
    seteqreparados(EqReparados.length)
    seteqarmados(EqArmados.length)
    setNoContestappto(NoContestappto.length)
    setNoContestaretiro(NoContestaretiro.length)
    setSolicitudRepuestos(solicitudRepMmto.length)
    setRepRecibidosMmto(repuestosRecibidosMmmto.length)
    setEsperaRepuestoLista(EsperaRepuestos)
    setnocontestaTotal(totalNoContesta)
  };

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<Home orden={orden} setRender={setRender} render={render} notificaciones={notificaciones} notificacionesTotal={notificacionesTotal} esperaRepuesto={esperaRepuesto} fetchData={fetchData}/>}/> 
        <Route path='/ingreso' element={<Ingreso date={date} clock={clock} render={render} setRender={setRender} lastId={lastId}/>}/>
        <Route path='/notificaciones' element={<ClientesXnotificar render={render} setRender={setRender} pptoslistos={pptoslistos} mmtoslistos={mmtoslistos} eqreparados={eqreparados} eqarmados={eqarmados} nocontestaTotal={nocontestaTotal} solicitudRepuestos={solicitudRepuestos}/>}/>
        <Route path='/estado' element={<Busqueda date={date}/>}/>
        <Route path='/otxingresar' element={<OTxingresar listaOt={listaOt} render={render} setRender={setRender} />}/>
        <Route path='/entrega' element={<Entrega date={date} clock={clock} render={render} setRender={setRender}/>}/>
        <Route path='/espera-repuesto' element={<EsperaRepuesto render={render} setRender={setRender} esperaRepuesto={esperaRepuesto} esperaRepuestoLista={esperaRepuestoLista}/>}/>

        <Route path='/taller' element={<HomeTaller render={render} setRender={setRender} prioridad={prioridad} garantia={garantia} revision={revision} mantencion={mantencion} aprobadas={aprobadas} rechazadas={rechazadas} totalProceso={totalProceso} repRecibidosMmto={repRecibidosMmto}/>}/>
        <Route path='/garantia' element={<Garantias render={render} setRender={setRender} garantia={garantia} garantiaLista={garantiaLista} clock={clock} date={date} />} />
        <Route path='/prioridad' element={<Prioridad date={date} clock={clock} prioridad={prioridad} setRender={setRender} render={render} prioLista={prioLista}/>}/>
        <Route path='/mantenimiento' element={<Mantenimiento date={date} clock={clock} mantenciones={mantencion} setRender={setRender} render={render} manLista={manLista} />}/>
        <Route path='/revision' element={<Revision date={date} clock={clock} revisiones={revision} setRender={setRender} render={render} revLista={revLista}/>}/>
        <Route path='/mmto-rep-listos' element={<MmtoRepListos date={date} clock={clock} render={render} setRender={setRender} repRecibidosMmto={repRecibidosMmto} repRecibidosMmtoLista={repRecibidosMmtoLista} />}/>
        <Route path='/aprobadas' element={<Aprobadas date={date} clock={clock} render={render} setRender={setRender} aprobadas={aprobadas} aprLista={aprLista} />}/>
        <Route path='/rechazadas' element={<Rechazadas date={date} clock={clock} render={render} setRender={setRender} rechazadas={rechazadas} rechLista={rechLista} />}/>
        <Route path='/proceso' element={<Proceso render={render} setRender={setRender} priComenzadas={priComenzadas} revComenzadas={revComenzadas} manComenzadas={manComenzadas} garantiaCom={garantiaCom} />}/>
        <Route path='/proceso-prioridad' element={<PrioritariasProc date={date} clock={clock} priComenzadas={priComenzadas} setRender={setRender} render={render} procPrioLista={procPrioLista}/>}/>
        <Route path='/proceso-revision' element={<RevisionProc revComenzadas={revComenzadas} setRender={setRender} render={render} procRevLista={procRevLista} date={date} clock={clock}/>}/>
        <Route path='/proceso-mantencion' element={<MantencionProc date={date} clock={clock} manComenzadas={manComenzadas} setRender={setRender} render={render} procManLista={procManLista}/>}/>
        <Route path='/proceso-garantia' element={<GarantiaProceso proGarLista={proGarLista} render={render} setRender={setRender} date={date} clock={clock} />}/>
        <Route path="/pptos-listos" element={<PptosListos render={render} setRender={setRender} date={date} clock={clock} pptoslistos={pptoslistos} pptoslistosLista={pptoslistosLista}/>}/>
        <Route path="/mmto-solicitud-rep" element={<SolicitudRepuestos render={render} setRender={setRender} date={date} clock={clock} solicitudRepuestos={solicitudRepuestos} solicitudRepuestosLista={solicitudRepuestosLista} />}/>

        <Route path="/mantenciones-listas" element={<MantencionesListas render={render} setRender={setRender} date={date} clock={clock} mmtoslistos={mmtoslistos} mmtoslistosLista={mmtoslistosLista} />}/>
        <Route path="/equipos-reparados" element={<EquiposReparados render={render} setRender={setRender} date={date} clock={clock} eqreparados={eqreparados} eqreparadosLista={eqreparadosLista}/>}/>
        <Route path="/equipos-armados" element={<EquiposArmados render={render} setRender={setRender} date={date} clock={clock} eqarmados={eqarmados} eqarmadosLista={eqarmadosLista} />}/>
        <Route path="/no-contesta" element={<NoContesta render={render} setRender={setRender} date={date} clock={clock} noContestaretiro={noContestaretiro} noContestappto={noContestappto}/>}/>
        <Route path="/no-contesta-pptos" element={<NoContestapptos render={render} setRender={setRender} date={date} clock={clock} noContestappto={noContestappto} noContestaPptoLista={noContestaPptoLista}/>}/>
        <Route path="/no-contesta-retiro" element={<NoContestaRetiro render={render} setRender={setRender} date={date} clock={clock} noContestaretiro={noContestaretiro} noContestaRetiroLista={noContestaRetiroLista}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
