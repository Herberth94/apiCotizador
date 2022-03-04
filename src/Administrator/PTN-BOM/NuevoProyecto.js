import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import PTN from "./DatosPTN";
import Animaciones from "../../Componentes/Animaciones";
import {GuardarNuevoProyecto} from '../../Routes/GuardarNuevoProyecto';


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
 
function NuevoProyecto() {


  {  /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);

  const{
    handleInputChange,
    enviarDatos
  } = GuardarNuevoProyecto();


  return (

    <div className="contenido-usuarios">
      {/*======================= Titulo Animación =======================*/}
      <div> <Animaciones mytext="Datos Proyecto" /> </div>

      {/*=======================  Tabla Nuevo Proyecto ======================= */}

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
        {/* <form action="" method="post" onSubmit = {enviarDatos}> */}
          <tr className="">

            {/*=======================  Clave proyecto ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="proyecto_clave"
                onChange={handleInputChange}
                placeholder="ingrese Clave"
              />
            </td>
            {/*======================= Descripción ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="proyecto_descripcion"
                onChange={handleInputChange}
                placeholder="ingrese Descripción"
              />
            </td>
            {/*======================= Lista Clientes ======================= */}
            <td>
              {" "}
              <select
                id="lista-proyectos"
                
               
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

      {/*=======================  Boton Empezar Nuevo proyecto ======================= */}
      <button className="btn btn-primary modificar" type="submit" onClick={() => { setShow(!show); enviarDatos()}}>  {show ? 'Empezar' : 'Ocultar Datos'}    </button>
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