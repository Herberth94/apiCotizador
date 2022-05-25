import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Cookies from 'universal-cookie';
import CalculaDescuento from './CalculaDescuento';
import pdf from "../../Componentes/Manuales/Manual_Administrador_V1.pdf";
import pdf2 from "../../Componentes/Manuales/Manual_Preventa_V1.pdf";
import pdf3 from "../../Componentes/Manuales/Manual_Ventas_V1.pdf";


import Excel from  "../../Componentes/Herramientas/excel.js";


let G;

const cookies = new Cookies();
 let tipoRol = cookies.get('rol');
 let i = "";
 if (tipoRol  === "administrador") {
  G = pdf;
} else if (tipoRol  === "preventa") {
  G = pdf2;
} else if (tipoRol  === "venta") {
  G = pdf3;
} else {
  i = "null";

}

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
          <th className='ocultar'> Calculara de Descuento % </th>
          <th className='ocultar'>Manual de Usuario </th>
        {/*   <th>------ </th> */}
        </tr>
      </thead>
      <tbody>
        <tr className="headerPropuesta">
          {/*========================== Divisa ==========================*/}
          <td>
            <button
              className="btn btn-primary Mod"
              type="button"
              onClick={() => {
                setShow(!show);
              }}
            >
              {" "}
              {show ? "Calculadora " : "Ocultar"}{" "}
            </button>
            {show ? (
              <div></div>
            ) : (
              <div className="arregla divBuscadorInteligente">
                {/*========================== Llamado al Componente ==========================*/}
              < CalculaDescuento/>
              </div>
            )}
          </td>




          <td>

          <button
              className="btn btn-primary Mod"
              type="button"
              onClick={() => {
                setShow2(!show2);
              }}
            >
              {" "}
              {show2 ? "Importa Excel " : "Ocultar"}{" "}
            </button>
            {show2 ? (
              <div></div>
            ) : (
              <div className="arregla divBuscadorInteligente">
                {/*========================== Llamado al Componente ==========================*/}
              < Excel/>
              </div>
            )}

          </td>


          <td>

          <form method="get" action={G}>

           
          <button    className="btn btn-primary PDF" > Manual de Usuario
          <span></span>
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