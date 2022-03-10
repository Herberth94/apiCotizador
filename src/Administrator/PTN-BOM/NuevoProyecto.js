import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import PTN from "./DatosPTN";
import Animaciones from "../../Componentes/Animaciones";
import {GuardarNuevoProyecto} from '../../Routes/GuardarNuevoProyecto';
import AnimacionesCliente  from "../../Componentes/AnimacionesCliente";

import {Ok} from '../../Routes/GuardarNuevoProyecto';


import axios from 'axios';

/*======== Datos que se deben Obtener de este archivo para Nuevo Proyecto ==============*/
const nombeProyecto = [
  { clave: "PTN-01", descripcion: "prueba 1", cliente: "Delfos369", fecha: "20-10-2022" }
];

// function guardarProyecto(){
//   const{
//     handleInputChange,
//     enviarDatos
//   } = guardarNuevoProyecto();
// }
 
function NuevoProyecto () {
  
   /*========================== Mostrar Ocultar Tabla ==========================*/
  const [show, setShow] = useState(true);

  const{
    handleInputChange,
    enviarDatos
  } = GuardarNuevoProyecto();

  var { C }= GuardarNuevoProyecto();
  // const impClient =  () => {
    console.log("Hoala");

  // }

  /*========================== Buscar Cliente ==========================*/
  return (

    <div className="contenido-usuarios">
      {/*======================= Titulo Animación =======================*/}
      <div> <Animaciones mytext="Datos Proyecto" /> </div>

      {/*=======================  Tabla Nuevo Proyecto ======================= */}
      <form action="" method="post" onSubmit = {enviarDatos}>
      <Table responsive id="nombreDiv">

        {/*======================= Titulos Tabla ======================= */}
        <thead>
          <tr className="titulo-tabla-usuarios">
            <th>Clave</th>
            <th>Descripción</th>
            <th> Cliente </th>           
          </tr>
        </thead>

        <tbody>
      
          <tr className="">

            {/*=======================  Clave proyecto ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="proyecto_clave"
                onChange= {handleInputChange}
                placeholder="Ingrese Clave"
              />
            </td>
            {/*======================= Descripción ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="proyecto_descripcion"
                onChange={handleInputChange}
                placeholder="Ingrese Descripción"
              />
            </td>
            {/*======================= Lista Clientes ======================= */}
            <td>
              {" "}
              <input
                className="agregar"
                type="number"
                name="proyecto_id_cliente"


                onChange={handleInputChange}


                placeholder="Ingrese el id del cliente"
              />
              <div> <Ok/> </div>
            </td>
          </tr>
        
        </tbody>
       
      </Table>
       {/*=======================  Boton Empezar Nuevo proyecto ======================= */}
     
      <button className="btn btn-primary modificar" type="submit" onClick={() => { setShow(!show)}}>  {show ? 'Empezar' : 'Ocultar Datos'}    </button>
      </form>
      {show ? (
        <div >

        </div>
      ) : (
        <div className="arregla">
          <PTN />
        </div>
      )}


    </div>

  )

}

export default NuevoProyecto