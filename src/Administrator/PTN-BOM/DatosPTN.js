/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Categorias from "./Categorias";
import {GuardarPartida} from '../../Routes/GuardarPartida';

/*============== Operacions PTN BOM ==============*/
import {precioUnitario , calcularDescuento, Total, Hola}from "./Operaciones";

function DatosPTN() {
  const [total, setTotal] = useState(10);


 /*  console.log("---- Precio Unitario ----- ") */
/*PARAMETROS   precioUnitario(precioLista, Descuento) */
/*   console.log( precioUnitario( 100 , 10 ))
  console.log(" ------------- ") */

/*   console.log("---- Calcular Descuento ----- ") */
/*  /*PARAMETROS  calcularDescuento(precioLista, precioUnitario ) */
/*   console.log( calcularDescuento( 100 , 10 )) */
/*   console.log(" ------------- ") */

/*   console.log("---- Calcular Total ----- ") */

 /*PARAMETROS  calcularDescuento(Cantidad , Precio Unitario); */
 /*  console.log( Total( 1 , 90 )) */
/*   console.log(" ------------- ")

 */

  { /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);
  

//  ******* PARA GUARDAR UNA NUEVA PARTODA ********

  /*const {
    enviarDatos,
    handleInputChange
  }= GuardarPartida();*/

/*   OPERACIONES  DATOS*/
// const { total, precio_u, descuento_1, total_1 } = operaciones();

 const [datos, setDatos] = useState({
   clave: "",
   descripcion_proyecto: "",
   cliente: "",
   valor_dolar: "",
   Partida: "",
   precio_lista: '',
   precio_unitario:'',
   descuento: '',
   cantidad: '',
   total:'',
 });
 const [first, setfirst] = useState({


  
 })

 
const handleInputChange = (event) => {
    setDatos({
    ...datos,
    [event.target.name]: event.target.value,
  });
 };





 useEffect(()=>{
   let total = '';
   let precio_u = '';
   if(datos.precio_unitario != '' && datos.cantidad !=''){
     const total = Total(datos.precio_unitario,datos.cantidad)
     setDatos({...datos,total:total})
       if(datos.precio_lista != ''){
         const desc = calcularDescuento(datos.precio_lista,datos.precio_unitario);
         setDatos({...datos,descuento:desc});

     }
    }
   if(datos.precio_unitario == '' && datos.cantidad == ''){
    setDatos({...datos,total:total})
   }
   if(datos.precio_lista != '' && datos.descuento !='' )
   { 
     precio_u= precioUnitario(datos.precio_lista,datos.descuento);
     const total = Total(precio_u,datos.cantidad);
     setDatos({...datos,precio_unitario:precio_u,total:total});
   }
},[datos.precio_unitario,datos.precio_lista,datos.descuento,datos.cantidad])

/*useEffect(()=>{
  const total = Total(datos.precio_unitario,datos.cantidad);
    setDatos({...datos,total:total});
},[datos.cantidad])*/

/*useEffect(()=>{
  const precio_u= precioUnitario(datos.precio_lista,datos.descuento);
  setDatos({...datos,precio_unitario:precio_u});
},[datos.precio_lista,datos.descuento])*/

/*useEffect(()=>{
  const desc = calcularDescuento(datos.precio_lista,datos.precio_unitario);
  setDatos({...datos,descuento:desc});
},[datos.precio_lista,datos.precio_unitario])*/


  return (
    <div className="contenido-usuarios">
      {/*========================== Titulos ==========================*/}
      <div>
        {" "}
        <Animaciones mytext="Datos PTN" />{" "}

     
      </div>

      {/*========================== Datos Partida ==========================*/}

      <div className="partidax">
        {/*========================== Nombre Partida ==========================*/}
        <br />
        <form action="" method="post" >
          <input
            className="agregar"
            type="text"
            name="partida_nombre"
            onChange={handleInputChange}
            placeholder="Ingrese Nombre Partida"
          />
          
          <br />
          <br />

          {/*========================== Descripción Partida ==========================*/}
          <input
            className="agregar"
            type="text"
            name="partida_descripcion"
            onChange={handleInputChange}
            placeholder="ingrese Descripción Partida"
          />
        
          <br />
          <br />
          {/*========================== Botón Agregar Partidas ==========================*/}
          <button className="btn btn-success" >Agregar Datos Partida </button>
        </form>
        <br />
        <br />
      </div>
      <br />

      {/*========================== Tabla Datos PTN ==========================*/}
      <Table responsive id="nombreDiv">
        {/*========================== Titulos Tabla ==========================*/}
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
            {/*========================== Número de Parte ==========================*/}
            <td>
              <input
                className="agregar"
                type="number"
                name="no_parte"
                placeholder="No. Parte"
              />
            </td>
            {/*========================Descripcion Producto ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="text"
                name="descripcion"
                placeholder="Descripción"
              />
            </td>
            {/*========================Meses ==========================*/}
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
            {/*======================== Semanas ==========================*/}
            <td>
              <input
                className="agregar"
                type="number"
                name="entrega_semanas"
                min="0"
                placeholder="Entrega semanas"
              />
            </td>
            {/*======================== Moneda ==========================*/}
            <td>
              <select id="moneda" name="moneda">
                <option value="lista 1">MXN</option>
                <option value="lista 2">USD</option>
              </select>
            </td>
          </tr>
        </tbody>
      </Table>

      {/*======================== Tabla Números ==========================*/}
      <form> 
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
            {/*======================== Cantidad ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="number"
                name="cantidad"
                value={datos.cantidad}
                onChange={handleInputChange}
                placeholder="Cantidad "
                min="0"
                step="any"
              />
            </td>
            {/*======================== Precio Lista ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="number"
                name="precio_lista"
                onChange={handleInputChange}
                placeholder="Precio Lista"
                min="0"
                step="any"
              />
            </td>

            {/*======================== Precio Unitario ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="number"
                value={datos.precio_unitario}
                name="precio_unitario"
                onChange={handleInputChange}
                placeholder="Precio unitario"
                step="any"
              />
            </td>
            {/*======================== Descuento==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="number"
                value={datos.descuento}
                name="descuento"
                onChange={handleInputChange}
                placeholder="Descuento"
                min="0"
                step="any"
              />
            </td>
            {/*======================== Total ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="text"
                name="total"
                value={datos.total}             
                placeholder="Total"
                 step="any"
              />
            </td>
          </tr>
        </tbody>
      </Table>
     
      {/*========================== Datos PTN ==========================*/}
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
            {/*======================== Marca ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="text"
                name="marca"
                placeholder="Marca"
              />
            </td>

            {/*======================== Proveedor ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="text"
                name="provedor"
                placeholder="Proveedor"
              />
            </td>

            {/*======================== Comentarios ==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="text"
                name="comentarios"
                placeholder="Comentarios"
              />
            </td>
            {/*======================== Categorias ==========================*/}
            <td>
              {" "}
              <select id="lista-opciones">
                <option value="lista 1">Tecnología Principal</option>
                <option value="lista 2">Sub-tecnología</option>
                <option value="lista 3">Equipamiento</option>
                <option value="lista 1">Licencia</option>
                <option value="lista 2">Soporte</option>
                <option value="lista 3">Implementación</option>
              </select>
            </td>
            {/*======================== Agregra Datos  ==========================*/}
            <td>
              <button className="btn btn-primary"> Agregar</button>
            </td>
          </tr>
        </tbody>
      </Table>
      </form> 
      {/*========================== Añadir Categorias ==========================
  Solo cuando se termine el proyecto 
  */}

      <button
        className="btn btn-primary modificar"
        type="button"
        onClick={() => {
          setShow(!show);
        }}
      >
        {" "}
        {show ? "Finalizar" : "Ocultar Categorias"}{" "}
      </button>

      {show ? (
        <div></div>
      ) : (
        <div className="arregla">
          {/*======================== Llamar al componente Categorias ==========================*/}
          <Categorias />
        </div>
      )}
    </div>
  );
}

export default DatosPTN;
