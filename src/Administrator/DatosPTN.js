import React from 'react'
import { useState } from "react";
import Table from "react-bootstrap/Table";

import Animaciones from "../Componentes/Animaciones";

import Categorias from "./Categorias";




function DatosPTN() {

    {
        /*========================== Mostrar Ocultar Tabla ==========================*/
      }
      const [show, setShow] = useState(true);
    
  return (
    <div className="contenido-usuarios">

<div> <Animaciones   mytext= "Datos PTN"      /> </div>

<div  className="partidax">
       
          <br />
         <input
            className="agregar"
            type="text"
            name="Partida"
          
            placeholder="ingrese Nombre Partida"
          />
          <br />
          <br />
          <input
            className="agregar"
            type="text"
            name="Partida"
          
            placeholder="ingrese Descripción Partida"
          />
          <br />
          <br />

          <button className="btn btn-success">Agregar Datos Partida </button>

          <br />
          <br />

          </div>

          <br />

<Table responsive id="nombreDiv">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th>No. De Parte</th>
                <th>Descripción</th>
                <th> Duración Meses </th>
                <th> Entrega </th>
                <th> Moneda </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <input
                    className="agregar"
                    type="number"
                    name="no_parte"
                
                    placeholder="No. Parte"
                  />
                </td>

                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="text"
                    name="descripcion"
            
                    placeholder="Descripción"
                  />
                </td>

                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="number"
                    name="meses"
                
                    min="0"
                    placeholder="Meses"
                  />
                </td>

                <td>
                  <input
                    className="agregar"
                    type="number"
                    name="entrega_semanas"
               
                    min="0"
                    placeholder="Entrega semanas"
                  />
                </td>

                <td>
                  <select
                    id="moneda"
                    name="moneda"
                 
                  >
                    <option value="lista 1">MXN</option>
                    <option value="lista 2">USD</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </Table>



          <Table responsive id="nombreDiv">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th>Cantidad</th>
                <th>Precio Lista</th>
                <th>Precio Unitario</th>
                <th> Descuento (%)</th>
                <th> Total </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="number"
                    name="cantidad"
              
                    placeholder="Cantidad "
                    min="0"
                    step="any"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="number"
                    name="precio_lista"
             
                    placeholder="Precio Lista"
                    min="0"
                    step="any"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="number"
                    name="precio_unitario"
                   
                    placeholder="Precio unitario"
                    min="0"
                    step="any"
                  />
                </td>

                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="number"
                    name="descuento"
                
                    placeholder="Descuento"
                    min="0"
                    step="any"
                  />
                </td>

                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="text"
                    placeholder="Total"
                    min="0"
                    step="any"
                  />
                </td>
              </tr>
            </tbody>
          </Table>


          

          <Table responsive id="nombreDiv">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th>Marca</th>
                <th>Proveedor</th>
                <th>Comentarios </th>
                <th>Categoría </th>
                <th> - </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="text"
                    name="marca"
             
                    placeholder="Marca"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="text"
                    name="provedor"
                  
                    placeholder="Proveedor"
                  />
                </td>
                <td>
                  {" "}
                  <input
                    className="agregar"
                    type="text"
                    name="comentarios"
                 
                    placeholder="Comentarios"
                  />
                </td>

                <td>
                  {" "}
                  <select id="lista-opciones" >
                    <option value="lista 1">Tecnología Principal</option>
                    <option value="lista 2">Sub-tecnología</option>
                    <option value="lista 3">Equipamiento</option>
                    <option value="lista 1">Licencia</option>
                    <option value="lista 2">Soporte</option>
                    <option value="lista 3">Implementación</option>
                    {/*   <option value="lista 1">Capacitación</option>
                         <option value="lista 2">Accesorios</option>
                  <option value="lista 3">Soporte PTN</option>
                  <option value="lista 2">Implementación PTN</option>
                  <option value="lista 3">Mesa de Ayuda PTN</option> */}
                  </select>
                </td>

                <td>
                  <button className="btn btn-primary"> Agregar</button>
                </td>
              </tr>
            </tbody>
          </Table>
    


          <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Finalizar' : 'Ocultar Categorias'}    </button>
     
              {show ? (
        <div >   

        </div>
      ) : (
        <div className="arregla">   
       <Categorias/>
         </div>
      )}



    </div>
  )
}

export default DatosPTN