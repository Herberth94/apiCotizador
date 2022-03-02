import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import PTN from "./DatosPTN";
import Animaciones from "../../Componentes/Animaciones";


/*======== Datos que se deben Obtener de este archivo para Nuevo Proyecto ==============*/
const nombeProyecto = [
  { clave: "PTN-01", descripcion: "prueba 1", cliente: "Delfos369", fecha: "20-10-2022" }
];

 
function NuevoProyecto() {

  {  /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);



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
          <tr className="">

            {/*=======================  Clave proyecto ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="clave"

                placeholder="ingrese Clave"
              />
            </td>
            {/*======================= Descripción ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="descripcion_proyecto"

                placeholder="ingrese Descripción"
              />
            </td>
            {/*======================= Lista Clientes ======================= */}
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

      {/*=======================  Boton Empezar Nuevo proyecto ======================= */}
      <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show); }}>  {show ? 'Empezar' : 'Ocultar Datos'}    </button>
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