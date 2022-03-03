import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";


import BuscarProyecto from "./BuscarProyecto"




function ProporcionalidadMenu() {
  {  /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);

  {  /*========================== Mostrar Ocultar Botón ==========================*/}
  const [show2, setShow2] = useState(true);

  {  /*========================== Mostrar Ocultar Datos Adicionales ==========================*/}
  const [show3, setShow3] = useState(true);

  {  /*========================== Mostrar Ocultar Datos Adicionales ==========================*/}
  const [show4, setShow4] = useState(true);


  return (
    <div className="contenido-usuarios">
      {/*======================= Titulo Animación =======================*/}

      <Animaciones mytext=" Proporcionalidad " />

      {/*========================== Tabla  Categorias ==========================*/}
      <Table responsive id="nombreDiv">
        {/*========================== Titulos Tabla ==========================*/}
        <thead>
          <tr className="titulo-tabla-usuarios">
        
            <th>Resumen</th>
            <th>Status Proyectos</th>
    
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
                {show ? "Ver" : "Ocultar"}{" "}
              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="arregla">
                  {/*========================== Llamado al Componente ==========================*/}
                <BuscarProyecto/>
                </div>
              )}
            </td>

            <td>
              <button
                className="btn btn-primary modificar"
                type="button"
                onClick={() => {
                  setShow2(!show2);
                }}
              >
                {" "}
                {show2 ? "Ver" : "Ocultar"}{" "}
              </button>
              {show2 ? (
                <div></div>
              ) : (
                <div className="arregla">
                  {/*========================== Llamado al Componente ==========================*/}
            
                </div>
              )}
            </td>

          



          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default ProporcionalidadMenu;
