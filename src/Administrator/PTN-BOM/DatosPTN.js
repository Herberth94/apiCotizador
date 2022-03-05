import React, { useEffect } from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Categorias from "./Categorias";

/*============== Operacions PTN BOM ==============*/
import {precioUnitario , calcularDescuento, Total, Hola}from "./Operaciones";


import {operaciones}  from "../../Routes/Operaciones";




function DatosPTN() {

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


/*   OPERACIONES  DATOS*/
const { total, precio_u, descuento_1, total_1 } = operaciones();

const [datos, setDatos] = useState({
  clave: "",
  descripcion_proyecto: "",
  cliente: "",
  valor_dolar: "",
  Partida: "",
  precio_lista: "",
  precio_unitario: "",
  descuento: "",
  cantidad: "",
});

const handleInputChange = (event) => {
  //console.log(event.target.value)
  setDatos({
    ...datos,
    [event.target.name]: event.target.value,
  });
};

useEffect(() => {
  if (
    datos.precio_lista.length > 0 &&
    datos.cantidad.length > 0 &&
    datos.descuento.length > 0 &&
    datos.precio_unitario === ""
  ) {
    console.log("total:  ");
    const Total = total(datos.precio_lista, datos.cantidad, datos.descuento);
    console.log(Total);
    console.log("Precio unitario :");
    console.log(precio_u(Total, datos.cantidad));
  }
  if (
    datos.precio_lista.length > 0 &&
    datos.cantidad.length > 0 &&
    datos.precio_unitario.length > 0 &&
    datos.descuento === ""
  ) {
    console.log("Descuento: ");
    const desc_1 = descuento_1(datos.precio_unitario, datos.precio_lista);
    console.log(desc_1.toFixed(2));
    console.log("total_1: ");
    console.log(total_1(datos.cantidad, datos.precio_unitario));
  }
}, [
  datos.cantidad,
  datos.descuento,
  datos.precio_lista,
  datos.precio_unitario,
  descuento_1,
  precio_u,
  total,
  total_1,
]);









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
        <input
          className="agregar"
          type="text"
          name="Partida"
          placeholder="ingrese Nombre Partida"
        />
        
        <br />
        <br />

        {/*========================== Descripción Partida ==========================*/}
        <input
          className="agregar"
          type="text"
          name="Partida"
          placeholder="ingrese Descripción Partida"
        />
        <br />
        <br />
        {/*========================== Botón Agregar Partidas ==========================*/}
        <button className="btn btn-success">Agregar Datos Partida </button>
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
                name="precioList"
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
                name="precioUni"
                onChange={handleInputChange}
                placeholder="Precio unitario"
                min="0"
                step="any"
              />
            </td>
            {/*======================== Descuento==========================*/}
            <td>
              {" "}
              <input
                className="agregar"
                type="number"
                name="desc"
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
             
                placeholder="Total"
                min="0"
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
