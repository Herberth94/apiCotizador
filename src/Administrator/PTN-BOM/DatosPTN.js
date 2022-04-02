/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../Componentes/Animaciones";


// Componentes
 import Partida from "./Partida";
 import DatosSP from "./DatosSP";
 import Categorias from "./Categorias";
 

function DatosPTN() {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  return (
    <div className="contenido-usuarios">
      {/*========================== Titulos ==========================*/}
      <div>
        {" "}
        <Animaciones mytext="Datos PTN" />{" "}
      </div>
      {/*========================== Tabla Datos partida==========================*/}
      <div className="arregla">
        <Partida/>
      {/*========================== Tabla Datos PTN ==========================*/}
      
        <DatosSP/>
        {/*========================== Añadir Categorias ==========================
        Solo cuando se termine el proyecto */}
        <div className="contenido-usuarios">
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
            <div className="arregla">
              {/*======================== Llamar al componente Categorias ==========================*/}
              <Categorias />
            </div>
          )}
        </div>
      </div>
      
      
    </div>
  );
}

export default DatosPTN;