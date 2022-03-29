import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";

import CalculaDescuento from './CalculaDescuento';



function MenuHeramientas() {
            //Habilitar/Deshabilitar tabla del resumen AM
            const [show, setShow] = useState(true)
            const [show2, setShow2] = useState(true)
  return (
 
 
    <div className="contenido-usuarios">


    <Animaciones mytext= " Herramientas " />
    
    {/*========================== Tabla  Categorias ==========================*/}
    <Table responsive id="nombreDiv">
      {/*========================== Titulos Tabla ==========================*/}
      <thead>
        <tr className="titulo-tabla-usuarios">
          <th>Calculara de Descuento  )</th>
          <th>------ </th>
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
              {show ? "Calcular" : "Ocultar"}{" "}
            </button>
            {show ? (
              <div></div>
            ) : (
              <div className="arregla">
                {/*========================== Llamado al Componente ==========================*/}
              < CalculaDescuento/>
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
              {show2 ? "Calcular" : "Ocultar"}{" "}
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
  )
}

export default MenuHeramientas