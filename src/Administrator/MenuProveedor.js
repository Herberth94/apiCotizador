import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../Componentes/Animaciones";


import RegistrarProveedor from "../Componentes/Proveedor/RegistrarProveedor";
import RegistrarMarcas from "../Componentes/Proveedor/RegistrarMarcas";


function MenuProveedor() {


        //Habilitar/Deshabilitar tabla del resumen AM
        const [show, setShow] = useState(true)
        const [show2, setShow2] = useState(true)
        const [show3, setShow3] = useState(true)
  return (
 
 
 <div className="contenido-usuarios">


<Animaciones mytext= " Registrar Proveedores" />

{/*========================== Tabla  Categorias ==========================*/}
<Table responsive id="nombreDiv">
  {/*========================== Titulos Tabla ==========================*/}
  <thead>
    <tr className="titulo-tabla-usuarios">
      <th>Registrar Proveedor</th>
      <th>Registrar Marcas </th>
      <th>Administrar Proveedores </th>
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
          {show ? "Registrar" : "Ocultar"}{" "}
        </button>
        {show ? (
          <div></div>
        ) : (
          <div className="arregla">
            {/*========================== Llamado al Componente ==========================*/}
             <RegistrarProveedor/>
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
          {show2 ? "Registrar" : "Ocultar"}{" "}
        </button>
        {show2 ? (
          <div></div>
        ) : (
          <div className="arregla">
            {/*========================== Llamado al Componente ==========================*/}
            <RegistrarMarcas/>
          </div>
        )}
      </td>

      <td>

        {/*   Checar componente */}
        <button
          className="btn btn-primary modificar"
          type="button"
          onClick={() => {
            setShow3(!show3);
          }}
        >
          {" "}
          {show3 ? "Administrar" : "Ocultar"}{" "}
        </button>
        {show3 ? (
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

export default MenuProveedor