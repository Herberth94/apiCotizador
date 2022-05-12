/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import logo from "../../../images/logo.png";
import ExportarPDF from './ExportarPDF';
import infPartida from './ModalPartida'
import {name_cliente  , clave_p, descripcionGeneral}from "../../../Ventas/Operaciones/OperacionesAM";
import ModalPartida from './ModalPartida';




let validaOperacion = false;
export let datos ={}
export let datos2 =[];
function checa(){
   
  validaOperacion = !validaOperacion;
  console.log(descripcionGeneral);
  console.log(datos2);
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
    condiciones:condicionesC,
    
  });
  const handleChange =(event)=>{
    setData ({
      ...data,[event.target.name] : event.target.value ,
  });
  }
  const [show , setshow]=useState(false)
  
  const enviar =(inf)=>{
    datos=data
    if (inf === ''){
      datos2=descripcionGeneral;
    }
    else{
      datos2 = inf
      
    }
    datos2=descripcionGeneral
    console.log(datos);
    setTimeout(function(){
      setshow(false);
      console.log("prueba");
  }, 3000);
  
  }
  
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="contenido-usuarios">




<div className="contenedor">
  <h1 className="logo">
    <span className="nombre-empresa">Datos</span> Propuesta Económica</h1>
  <div className="wrapper animated bounceInLeft">
    <div className="info-empresa">
      <h3><img src={logo}></img></h3>
      <ul className="servicios">
        <li><i className="bi bi-geo-alt-fill" /> Carretera México Toluca #5420 Piso 21, Col. El Yaqui, Del. Cuajimalpa, C.P. 05320, Ciudad de México. </li>
        <li><i className="bi bi-telephone-fill" /> 6843-4433</li>
        <li><i className="bi bi-envelope-fill" /> contacto@palotinto.com</li>
      </ul>
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
        
        <a className="btn btn-success " onClick={()=>{ setshow(!show); enviar(infPartida)}}>
                  <span>Captura de información</span>
          </a> 
          <button type="button" className="btn btn-primary" onClick={() => {setModalShow(true);}} >
          <span>partida</span>

          </button><br/><br/>
          {modalShow  ?   
          <ModalPartida
          show={modalShow}
          partida={descripcionGeneral}
          onHide={() => setModalShow(false)}  
             />:  ''  } 
        
        
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