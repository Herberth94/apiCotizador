/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../../Componentes/Animaciones";
// Componentes
 import Partida from "../Menu-Bom/Partida";
 import DatosSp2 from "../Menu-Bom/DatosSP2";
 import Categorias from "../Menu-Bom/Categorias";
 
 import K from "./K";

function DatosPTN(props) {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  return (
    <div className="arregla">
      {/*========================== Titulos ==========================*/}


        <Animaciones mytext="Datos Partida" />
      <Partida/>

   
          <br/>
          <br/>
        <Animaciones mytext="Datos Servicios y Productos" />
     <DatosSp2 clave={props.clave}/>
   

   

       
          <button
          className="btn btn-primary modificar"
          type="button"
          onClick={() => {
            setShow(!show);
          }}
          >
          {" "}
          {show ? "Agregar categorias" : "Ocultar Categorias"}{" "}
          </button>

          {show ? (
            <div></div>
            ) : (
            <>
              {/*======================== Llamar al componente Categorias ==========================*/}
              <Categorias clave={props.clave} />
            </>
          )}
     
 
      
    </div>
  );
}

export default DatosPTN;