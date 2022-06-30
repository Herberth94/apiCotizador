/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../../Componentes/Animaciones";
// Componentes
 import Partida from "../Menu-Bom/Partida";
 import DatosSp2 from "../Menu-Bom/DatosSP2";
 import DatosCategorias from "../Menu-Bom/DatosCategorias";
 import Categorias from "../Menu-Bom/Categorias";
 import Select from "./Select";
 

function DatosPTN(props) {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  return (
    <div className="arregla contenido">

 <Select  
  clave={props.clave}
 />
{/* 
    <div  className="caja1">

    <DatosSp2 clave={props.clave}/>



    <div className="caja2">
 <DatosCategorias clave={props.clave}/>
      
    </div>
    
    </div> */}
 
  


   

     {/* <Categorias clave={props.clave} /> */}
   
      
    </div>
  );
}

export default DatosPTN;