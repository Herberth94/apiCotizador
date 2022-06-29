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
    <div className="">
      {/*========================== Titulos ==========================*/}
      <div>
        {" "}
      {/*   <Animaciones mytext="Datos PTN" />{" "} */}
      </div>
      {/*========================== Tabla Datos partida==========================*/}
      <div className="arregla contenido">
        <Animaciones mytext="Datos Partida" />
      <Partida/>

        <div className="">
        <Animaciones mytext="Datos Servicios y Procustos" />
     <DatosSp2 clave={props.clave}/>
        </div>
   

   {/* <K   clave={props.clave}/> */}
      {/*========================== Tabla Datos PTN ==========================*/}
     
          <div>
                    {/* <button className="btn btn-primary modificar" type="button" onClick={()=>llamadoUsuario()} >  {show ? 'Mostrar Lista' : 'Ocultar Lista'} </button> */}
                    {show ? (
                        <div >
                        {/*=================== Ocultar Lista DIV  =====================*/}
                        </div>
                    ) : (
                        <div >
                        {/*=================== Botón Mostrar Lista DIV====================*/}
                            <br />
                            {/*===================     Tabla Usuarios    ====================*/}
                            <div> 
                                
                            </div>         
                        </div>
                    )}
                </div>
     

        
        
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