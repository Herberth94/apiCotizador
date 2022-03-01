import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";


import PTN from "./DatosPTN";

import Animaciones from "../Componentes/Animaciones";







function NuevoProyecto() {

    {
        /*========================== Mostrar Ocultar Tabla ==========================*/
      }
      const [show, setShow] = useState(true);
    


    return (


       <div className="contenido-usuarios">
         {/*======================= Titulo Animación =======================*/}
  <div> <Animaciones   mytext= "Datos Proyecto"      /> </div>

                      <Table responsive id="nombreDiv">
                <thead>
                  <tr className="titulo-tabla-usuarios">
                    <th>Clave</th>
                    <th>Descripción</th>
                    <th> Cliente </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td>
                      <input
                        className="agregar"
                        type="text"
                        name="clave"
                  
                        placeholder="ingrese Clave"
                      />
                    </td>
                    <td>
                      <input
                        className="agregar"
                        type="text"
                        name="descripcion_proyecto"
                     
                        placeholder="ingrese Descripción"
                      />
                    </td>
                    <td>
                      {" "}
                      <select
                        id="lista-proyectos"
                        name="cliente"
                       
                      >
                        <option value="">Elige una opción</option>
                        <option value="lista 1">Cliente 1</option>
                        <option value="lista 2">Cliente 2</option>
                        <option value="lista 3">Cliente 3</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>




              <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Empezar' : 'Ocultar Datos'}    </button>
              {show ? (
        <div >   

        </div>
      ) : (
        <div className="arregla">   
         <PTN/>
         </div>
      )}






 </div>
  
    )
  
}

export default NuevoProyecto