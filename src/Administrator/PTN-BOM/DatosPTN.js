import React from "react";
import { useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import Categorias from "./Categorias";


function DatosPTN() {
  { /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);

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
                name="precio_unitario"
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
                name="descuento"
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
