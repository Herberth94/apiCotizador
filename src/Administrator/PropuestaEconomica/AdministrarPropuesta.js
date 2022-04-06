import React from 'react';
import Table from 'react-bootstrap/Table'
import { useState } from "react";

import Animaciones from "../../Componentes/Animaciones";

import ExportarPDF from '../ExportarPDF';
import axios from 'axios';
import { url2 } from '../../Componentes/Ocultar';


function AdministrarPropuesta() {
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)
  // const [validarProyecto, setValidarProyecto]=useState({
  //   proyecto_estatus: 'Validado'
  // })
  const [rechazarProyecto, setRechazarProyecto]=useState('')

  const validarProyecto2= "Validado";
  const rechazarProyecto2 = "Rechazado";

  async function cambioEstatusProyectoValidad(){
    try{
      const data = {
        proyecto_estatus: rechazarProyecto
      }
      console.log(data.proyecto_estatus)
      console.log(rechazarProyecto)
      const respuesta = await axios.put(url2 + `/api/cotizador/proyecto/updateEstatus/76`, data);
      const send2 = respuesta.data
      console.log(send2)
      alert("Estatus del proyecto actualizado")
    } catch(error){
      console.log(error)
    }
  }

  // async function cambioEstatusProyectoRechazado(){
  //   try{
  //     const data = {
  //       proyecto_estatus: 'Rechazado'
  //     }
  //     const respuesta = await axios.put(url2 + `/api/cotizador/proyecto/updateEstatus/76`, data);
  //     const send2 = respuesta.data
  //     console.log(send2)
  //     alert("Estatus del proyecto actualizado")
  //   } catch(error){
  //     console.log(error)
  //   }
  // }

  return (
    <div className="contenido-usuarios">


      <div className="table-responsive">

        <div>
          <Animaciones mytext="Validación" />
        </div>

        <Table responsive id="nombreDiv">
          {/*========================== Titulos Tabla ==========================*/}
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>Propuestas</th>
              <th>Rechazar Proyecto</th>
              <th>Validar Proyecto</th>
              <th>Imprimir</th>

            </tr>
          </thead>
          <tbody>
            <tr className="">
              {/*========================== Divisa ==========================*/}
              <td>
                <button
                  className="btn btn-primary modificar"
                  type="button"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  {" "}
                  {show ? "Editar" : "Ocultar"}{" "}
                </button>
                {show ? (
                  <div></div>
                ) : (
                  <div className="arregla">
                    {/*========================== Llamado al Componente ==========================*/}

                  </div>
                )}
              </td>



              <td>

                <button className="btn btn-danger" onClick={()=>{ setRechazarProyecto(rechazarProyecto2);cambioEstatusProyectoValidad()}} type="button"> Rechazar </button>


              </td>


              <td>

                <button className="btn btn-primary" onClick={()=>{setRechazarProyecto(validarProyecto2);cambioEstatusProyectoValidad()}} type="button"> Validar </button>


              </td>


              <td>
                <ExportarPDF />
              </td>


            </tr>
          </tbody>
        </Table>






      </div>
    </div>
  )
}

export default AdministrarPropuesta