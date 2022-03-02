import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";

import DatosPTN from "./DatosPTN";

function ContinuarProyecto() {
    
  {  /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);


  return (
    
/*==================== Continuar Proyecto ====================*/
<div  className="contenido-usuarios">
       

              <Table responsive id="nombreDiv">
                <thead>
                  <tr className="titulo-tabla-usuarios">
                    <th>Clave</th>
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
                  </tr>
                </tbody>
              </Table>




              <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Continuar' : 'Ocultar Proyecto'}    </button>
              {show ? (
        <div >


        </div>
      ) : (
        
        <div className="arregla">  
      {/*========================== Llamado al Componente ==========================*/} 
        <DatosPTN/>
         </div>
      )}

        </div>


  )
}

export default ContinuarProyecto