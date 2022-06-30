/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../../Componentes/Animaciones";
// Componentes
 import Partida from "../Menu-Bom/Partida";
 import DatosSp2 from "../Menu-Bom/DatosSP2";
 import DatosCategorias from "../Menu-Bom/DatosCategorias";
 import Categorias from "../Menu-Bom/Categorias";
 

function DatosPTN(props) {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  return (
    <div className="arregla multiple">
      {/*========================== Titulos ==========================*/}


      <Partida/>
  
     <DatosSp2 clave={props.clave}/>

          <br/>
          <br/>
        <Animaciones mytext="Datos Categorias" />
     <DatosCategorias clave={props.clave}/>
   



     {/* <Categorias clave={props.clave} /> */}
   
      
    </div>
  );
}

export default DatosPTN;