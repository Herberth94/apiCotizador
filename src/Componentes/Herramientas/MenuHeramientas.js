import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Cookies from 'universal-cookie';
import CalculaDescuento from './CalculaDescuento';
import pdf from "../../Componentes/Manuales/Manual_Administrador_V1.pdf";
import pdf2 from "../../Componentes/Manuales/Manual_Preventa_V1.pdf";
import pdf3 from "../../Componentes/Manuales/Manual_Ventas_V1.pdf";


import Excel from "../../Componentes/Herramientas/excel.js";
import Nuevo from "../../Preventa/PTN-BOM/Menu-Bom/NuevoProyecto";



import CargaDatos from "./CargaDatos";


let G;

const cookies = new Cookies();
let tipoRol = cookies.get('rol');
let i = "";
if (tipoRol === "administrador") {
  G = pdf;
} else if (tipoRol === "preventa") {
  G = pdf2;
} else if (tipoRol === "venta") {
  G = pdf3;
} else {
  i = "null";

}

function MenuHeramientas() {


  //Habilitar/Deshabilitar tabla del resumen AM
  const [show, setShow] = useState(true)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(true)
  return (


    <div className="contenido-usuarios">


      <Animaciones mytext="Manual de Usuario" />

      {/*========================== Tabla  Categorias ==========================*/}
      <Table responsive id="nombreDiv">
        {/*========================== Titulos Tabla ==========================*/}
        <tbody>
          <tr className="headerPropuesta">
            {/*========================== Divisa ==========================*/}
            <td>
              <form method="get" action={G}>
                <button className="btn btn-primary PDF" > Descargar PDF
                </button>
              </form>
            </td>
          </tr>
        </tbody>
      </Table>




    </div>
  )
}

export default MenuHeramientas