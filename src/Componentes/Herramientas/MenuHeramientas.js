import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Cookies from 'universal-cookie';
import CalculaDescuento from './CalculaDescuento';
import pdf from "../../Componentes/Manuales/Manual_Administrador.pdf";
import pdf2 from "../../Componentes/Manuales/Manual_Administrador.pdf";
import pdf3 from "../../Componentes/Manuales/Manual_Administrador.pdf";



const cookies = new Cookies();
 let tipoRol = cookies.get('rol');
 let i = "";
 if (tipoRol  === "administrador") {

} else if (tipoRol  === "preventa") {
  i = "preventa";
} else if (tipoRol  === "venta") {
  i = "venta";
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
        <tr className="">
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
              <div className="arregla">
                {/*========================== Llamado al Componente ==========================*/}
              < CalculaDescuento/>
              </div>
            )}
          </td>


          <td>

          <form method="get" action={pdf}>

           
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