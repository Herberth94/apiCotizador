/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../../Componentes/Animaciones";
// Componentes
 import Partida from "../Menu-Bom/Partida";
 import DatosSp2 from "../Menu-Bom/DatosSP2";
 import Categorias from "../Menu-Bom/Categorias";
 

function DatosPTN(props) {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  return (
    <div className="">
      {/*========================== Titulos ==========================*/}
      <div>
        {" "}
      {/*   <Animaciones mytext="Datos PTN" />{" "} */}
      </div>
      {/*========================== Tabla Datos partida==========================*/}
      <div className="">
        <Partida/>
      {/*========================== Tabla Datos PTN ==========================*/}
      
        <DatosSp2 clave={props.clave}/>
        {/*========================== Añadir Categorias ==========================
        Solo cuando se termine el proyecto */}
        {/* <div className="contenido-usuarios">
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
            <div className="">
              {/*======================== Llamar al componente Categorias ==========================*/}
              {/* <Categorias clave={props.clave} />
            </div>
          )}
        </div>*/} 
      </div> 
      
    </div>
  );
}

export default DatosPTN;