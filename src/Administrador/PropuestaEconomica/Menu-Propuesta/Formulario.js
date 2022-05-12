import React,{useState} from 'react';
import logo from "../../../images/logo.png";
import ExportarPDF from './ExportarPDF';

import {name_cliente  , clave_p}from "../../../Ventas/Operaciones/OperacionesAM";





let validaOperacion = false;
export let datos ={}
function checa(){

  validaOperacion = !validaOperacion;
  
  }
  


let condicionesC = "CONDICIONES COMERCIALES \n"+
"• La vigencia de la presente propuesta es de 10 días naturales. \n"+
" • La propuesta contempla el servicio para 9 Pantallas mensual  \n"+
" • La forma de pago será en mensualidades de $ 687.78 antes de IVA por pantalla.  \n"+
"  • Esta propuesta contempla los servicios de ENERO 2021 al mes de DICIEMBRE 2021. \n"+
" • Los precios están expresados en moneda nacional. \n"+
" • Los retrasos en pagos generarán un interés moratorio del 0.2% por cada día de atraso en el pago. \n"+
"   • El cargo por refacturación es de 200.m.n. + IVA ";


const tiempoTranscurrido = Date.now();
const hoy = new Date(tiempoTranscurrido);





export const fecha = hoy.toLocaleDateString();

function Formulario() {
  const [data,setData] = useState ({
    nombre:'De ',
    servicios:'',
    condiciones:condicionesC
  
  });
  const handleChange =(event)=>{
    setData ({
      ...data,[event.target.name] : event.target.value ,
  });
  }
  const [show , setshow]=useState(false)
  
  const enviar =()=>{
    datos=data
    console.log(datos);
    setTimeout(function(){
      setshow(false);
      console.log("prueba");
  }, 3000);
  
  }
  
 

  return (
    <div className="contenido-usuarios">




<div className="contenedor">
  <h1 className="logo">
    <span className="nombre-empresa">Datos</span> Propuesta Económica</h1>
  <div className="wrapper animated bounceInLeft">
    <div className="info-empresa">
      <h3><img className="logoPropuesta" src={logo}></img></h3>
      <div className='divServicios'>
        <ul className="servicios">
          <li><i className="bi bi-geo-alt-fill" />  </li>
          <li><i className="bi bi-telephone-fill" /> </li>
          <li><i className="bi bi-envelope-fill" /> </li>
        </ul>
        <ul className="servicios">
          <li>Carretera México Toluca #5420 Piso 21, Col. El Yaqui, Del. Cuajimalpa, C.P. 05320, Ciudad de México. </li>
          <li>6843-4433</li>
          <li>contacto@palotinto.com</li>
        </ul>
      </div>
    </div>
    <div className="contacto">
      <h3>Datos Propuesta</h3>
      <form className="formulario" >
        <p>
          <label>Proyecto</label>
          <input type="text" onChange={handleChange} name="nombre"  defaultValue={clave_p }  />
        </p>
        <p>
          <label>Fecha</label>
          <input type="text" name="fecha"  defaultValue={fecha} />
        </p>
        <p>
          <label>Cliente</label>
          <input type="email" onChange={handleChange} name="servicios"   defaultValue={ name_cliente}  />
        </p>
        <p>
         
          <label className="switch2"> 
                <input type="checkbox" id="checa"     onClick={checa}/>
                <span className="slider2"></span>
                </label>  
        </p>

     
        
        <p className="full">
        </p>
        <a className="btn btn-success " onClick={()=>{ setshow(!show); enviar()}}>
                  <span>Captura de información</span>
          </a> 
      
          <div></div>
        
        
</form>

<div className='parrafoX'>
        <p className="full3">
          <label>Condiciones Comerciales</label>
          <textarea id="txt3" onChange={handleChange} name="condiciones" defaultValue={condicionesC} />
        </p>

        </div>
<div>
{ show ? <ExportarPDF/> : ''}

</div>
    </div>
  </div>
</div>



    </div>
  )
}

export default Formulario