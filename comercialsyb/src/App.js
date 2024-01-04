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
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(true)
  const [nototal, setNototal] = useState()
  const [not, setNot] = useState()
  const [esperarep, setEsperaRep] = useState()
  const [nextorden, setNextOrden] = useState()
  const [clock, setClock] = useState()
  const [date, setDate] = useState()
  const [pptosListos, setPptosListos] = useState()
  const [solRep, setSolRep] = useState()
  const [mmtosListos, setMmtosListos] = useState()
  const [eqRep, setEqRep] = useState()
  const [eqArm, setEqArm] = useState()
  const [noContesta, setNoContesta] = useState()
  const [noContPpto, setNoConPpto] = useState()
  const [noContRetiro, setNoConRetiro] = useState()
  
  //notificaciones taller
  const [prioridad, setPrioridad] = useState()
  const [garantia, setGarantia] = useState()
  const [prioridad_com, setPrioridadCom] = useState()
  const [revCom, setRevCom] = useState()
  const [mantCom, setMantCom] = useState()
  const [garCom, setGarCom] = useState()
  const [totalProceso, setTotalProceso] = useState()
  const [revision, setRevision] = useState()
  const [mantencion, setMantencion] = useState()
  const [repRecibidos, setRepRecibidos] = useState()
  const [aprobadas, setAprobadas] = useState()
  const [rechazadas, setRechazadas] = useState()

  useEffect(() => {  
    getNot();
  },[render])
  
  const getNot = async () => {
    try {
      setLoading(true)
      const date = new Date();
      setClock(date.toLocaleTimeString());
      const result = await fetch('https://comercialsyb-backend-production.up.railway.app/comercial/notificaciones_total/')
      const data = await result.json();
      setNototal(data.notificaciones_total);
      setNot(data.ingresos_otpc)
      setEsperaRep(data.espera_repuesto)
      setNextOrden(data.orden_siguiente)
      setDate(data.date)
      setPptosListos(data.pptos_listos)
      setSolRep(data.solicitud_repuestos)
      setMmtosListos(data.mmtos_listos)
      setEqRep(data.eq_reparados)
      setEqArm(data.eq_armados)
      setNoContesta(data.no_contesta)
      setNoConPpto(data.no_contesta_pptos)
      setNoConRetiro(data.no_contesta_retiros)
      setPrioridad(data.prioridad)
      setGarantia(data.garantia)
      setPrioridadCom(data.pri_com)
      setRevCom(data.rev_com)
      setMantCom(data.mant_com)
      setGarCom(data.gar_com)
      setTotalProceso(data.proceso_total)
      setRevision(data.x_revisar)
      setMantencion(data.x_mantencion)
      setRepRecibidos(data.mant_rep)
      setAprobadas(data.aprobadas)
      setRechazadas(data.rechazadas)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false); // Ensure loading indicator is hidden in case of an error
    }
  }

  return (
    <div>
        <Router>
      <Routes>
        <Route path='/' element={<Home nototal={nototal} not={not} esperarep={esperarep} nextorden={nextorden} setRender={setRender} render={render} loading={loading}/>}/> 
        <Route path='/ingreso' element={<Ingreso date={date} clock={clock} render={render} setRender={setRender} nextorden={nextorden}/>}/>
        <Route path='/notificaciones' element={<ClientesXnotificar pptosListos={pptosListos} solRep={solRep} mmtosListos={mmtosListos} eqRep={eqRep} eqArm={eqArm} noContesta={noContesta}/>}/>
        <Route path='/estado' element={<Busqueda date={date} setRender={setRender} render={render} />}/>
        <Route path='/otxingresar' element={<OTxingresar render={render} setRender={setRender} date={date}/>}/>
        <Route path='/entrega' element={<Entrega date={date} clock={clock} render={render} setRender={setRender}/>}/>
        <Route path='/espera-repuesto' element={<EsperaRepuesto render={render} setRender={setRender}/>}/>

        <Route path='/taller' element={<HomeTaller render={render} setRender={setRender} prioridad={prioridad} garantia={garantia} totalProceso={totalProceso} revision={revision} mantencion={mantencion} repRecibidos={repRecibidos} aprobadas={aprobadas} rechazadas={rechazadas}/>}/>
        <Route path='/garantia' element={<Garantias render={render} setRender={setRender} clock={clock} date={date}/>} />
        <Route path='/prioridad' element={<Prioridad date={date} clock={clock} setRender={setRender} render={render}/>}/>
        <Route path='/mantenimiento' element={<Mantenimiento date={date} clock={clock} setRender={setRender} render={render}/>}/>
        <Route path='/revision' element={<Revision date={date} clock={clock} setRender={setRender} render={render}/>}/>
        <Route path='/mmto-rep-listos' element={<MmtoRepListos date={date} clock={clock} render={render} setRender={setRender}/>}/>
        <Route path='/aprobadas' element={<Aprobadas date={date} clock={clock} render={render} setRender={setRender}/>}/>
        <Route path='/rechazadas' element={<Rechazadas date={date} clock={clock} render={render} setRender={setRender}/>}/>
        <Route path='/proceso' element={<Proceso prioridad_com={prioridad_com} revCom={revCom} mantCom={mantCom} garCom={garCom} />}/>
        <Route path='/proceso-prioridad' element={<PrioritariasProc date={date} clock={clock} setRender={setRender} render={render}/>}/>
        <Route path='/proceso-revision' element={<RevisionProc setRender={setRender} render={render} date={date} clock={clock}/>}/>
        <Route path='/proceso-mantencion' element={<MantencionProc date={date} clock={clock} setRender={setRender} render={render}/>}/>
        <Route path='/proceso-garantia' element={<GarantiaProceso render={render} setRender={setRender} date={date} clock={clock} />}/>
        <Route path="/pptos-listos" element={<PptosListos render={render} setRender={setRender} date={date} clock={clock}/>}/>
        <Route path="/mmto-solicitud-rep" element={<SolicitudRepuestos render={render} setRender={setRender} date={date} clock={clock}/>}/>

        <Route path="/mantenciones-listas" element={<MantencionesListas render={render} setRender={setRender} date={date} clock={clock} />}/>
        <Route path="/equipos-reparados" element={<EquiposReparados render={render} setRender={setRender} date={date} clock={clock}/>}/>
        <Route path="/equipos-armados" element={<EquiposArmados render={render} setRender={setRender} date={date} clock={clock}/>}/>
        <Route path="/no-contesta" element={<NoContesta render={render} setRender={setRender} noContPpto={noContPpto} noContRetiro={noContRetiro}/>}/>
        <Route path="/no-contesta-pptos" element={<NoContestapptos render={render} setRender={setRender} date={date} clock={clock}/>}/>
        <Route path="/no-contesta-retiro" element={<NoContestaRetiro render={render} setRender={setRender} date={date} clock={clock}/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
