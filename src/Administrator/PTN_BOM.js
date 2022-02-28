import React, { useEffect } from "react";
import { useState } from "react";
import "./css/PTN_BOM.css";
import { operaciones } from "../Routes/Operaciones";
import Table from "react-bootstrap/Table";
import Animaciones from "../Componentes/Animaciones";



function PTN_BOM() {
  { /*========================== Mostrar Ocultar Tabla ==========================*/ }
  const [show, setShow] = useState(true);
  { /*========================== Mostrar Ocultar Botón ==========================*/ }
  const [show2, setShow2] = useState(true);
  { /*========================== Mostrar Ocultar Datos Adicionales ==========================*/ }
  const [show3, setShow3] = useState(true);

  /*======================  Operaciones ==============================*/
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

  const enviarDatos = (event) => {
    console.log(datos.clave);
    event.preventDefault();
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
      <div className="table-responsive">
        {/*======================= Titulo Animación =======================*/}
      <div> <Animaciones   mytext= "PTN BOM Cotizaciones"      /> </div>


        {/*================= Nuevo Proyecto ==================*/}

        {/*================= Botón Mostrar/Ocultar Lista ==================*/}
        <div>
          <button
            className="btn btn-primary modificar"
            type="button"
            onClick={() => {
              setShow(!show);
            }}
          >
            {" "}
            {show ? "+ Agregar Nuevo Proyecto" : "Ocultar Datos "}
          </button>
          {show ? (
            <div>
              {/*=================== Ocultar Lista DIV  =====================*/}
            </div>
          ) : (
            <div className="nuevo-proyecto">
              {/*=================== Botón Mostrar Lista DIV====================*/}

              <br />

              <Table responsive id="nombreDiv">
                <thead>
                  <tr className="titulo-tabla-usuarios">
                    <th>Clave</th>
                    <th>Descripción</th>
                    <th> Cliente </th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td>
                      <input
                        className="agregar"
                        type="text"
                        name="clave"
                        onChange={handleInputChange}
                        placeholder="ingrese Clave"
                      />
                    </td>
                    <td>
                      <input
                        className="agregar"
                        type="text"
                        name="descripcion_proyecto"
                        onChange={handleInputChange}
                        placeholder="ingrese Descripción"
                      />
                    </td>
                    <td>
                      {" "}
                      <select
                        id="lista-proyectos"
                        name="cliente"
                        onChange={handleInputChange}
                      >
                        <option value="">Elige una opción</option>
                        <option value="lista 1">Cliente 1</option>
                        <option value="lista 2">Cliente 2</option>
                        <option value="lista 3">Cliente 3</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </Table>

              <button className="btn btn-success ">Comenzar </button>
              <br />
            </div>
          )}
        </div>

        <br />

        {/*=================Continuar Proyecto ==================*/}

        {/*================= Botón Mostrar/Ocultar Lista ==================*/}
        <div>
          <button
            className="btn btn-primary continuar"
            type="button"
            onClick={() => {
              setShow2(!show2);
            }}
          >
            {" "}
            {show2 ? "Continuar Proyecto" : "Ocultar Datos "}
          </button>
          {show2 ? (
            <div>
              {/*=================== Ocultar Lista DIV  =====================*/}
            </div>
          ) : (
            <div className="nuevo-proyecto">
              {/*=================== Botón Mostrar Lista DIV====================*/}

              <br />

              <Table responsive id="nombreDiv">
                <thead>
                  <tr className="titulo-tabla-usuarios">
                    <th>Clave</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td>
                      <input
                        className="agregar"
                        type="text"
                        name="clave"
                        onChange={handleInputChange}
                        placeholder="ingrese Clave"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>

              <button className="btn btn-success "> Aceptar </button>
              <br />
            </div>
          )}
        </div>

        <br />

        <div className="partida">
        <div> <Animaciones   mytext= "Datos PTN"      /> </div>



          <input
            className="agregar"
            type="text"
            name="Partida"
            onChange={handleInputChange}
            placeholder="ingrese Nombre Partida"
          />
          <br />
          <br />
          <input
            className="agregar"
            type="text"
            name="Partida"
            onChange={handleInputChange}
            placeholder="ingrese Descripción Partida"
          />
          <br />
          <br />

          <button className="btn btn-success">+ Agregar Datos Partida </button>
          <br />
          <br />
        </div>

<div className= "partida">
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
                  onChange={handleInputChange}
                  placeholder="No. Parte"
                />
              </td>

              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="descripcion"
                  onChange={handleInputChange}
                  placeholder="Descripción"
                />
              </td>

              <td>
                {" "}
                <input
                  className="agregar"
                  type="number"
                  name="meses"
                  onChange={handleInputChange}
                  min="0"
                  placeholder="Meses"
                />
              </td>

              <td>
                <input
                  className="agregar"
                  type="number"
                  name="entrega_semanas"
                  onChange={handleInputChange}
                  min="0"
                  placeholder="Entrega semanas"
                />
              </td>

              <td>
                <select id="moneda" name="moneda" onChange={handleInputChange}>
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  placeholder="Marca"
                />
              </td>
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="provedor"
                  onChange={handleInputChange}
                  placeholder="Proveedor"
                />
              </td>
              <td>
                {" "}
                <input
                  className="agregar"
                  type="text"
                  name="comentarios"
                  onChange={handleInputChange}
                  placeholder="Comentarios"
                />
              </td>

              <td>
                {" "}
                <select id="lista-opciones" onChange={handleInputChange}>
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

        </div>

        {/* Finalizar */}
        {/*     <div className="boton-ptn-finalizar">
          <button className="btn btn-danger" onClick={enviarDatos}>
            {" "}
            Finalizar{" "}
          </button>
        </div>
 */}

        <div>
          <button
            className="btn btn-primary modificar"
            type="button"
            onClick={() => {
              setShow3(!show3);
            }}
          >
            {" "}
            {show3 ? "Finalizar" : "Ocultar Datos "}
          </button>
          {show3 ? (
            <div>
              {/*=================== Ocultar Lista DIV  =====================*/}
            </div>
          ) : (
            <div className=" Categorias ">
              <div>
                {/*========== Titulo Datos Adicionales Categorias ==========*/}
                <div className="container">
                  <div className="box">
                    <div className="title">
                      <span className="block"></span>
                      <h1>
                        Datos Adicionales del Proyecto<span></span>
                      </h1>
                    </div>

                    <div className="role">
                      <div className="block"></div>
                      <p>Palo Tinto Networks</p>
                    </div>
                  </div>
                </div>
                {/*============= Tablas Agregar Categorias =============*/}
                <Table responsive id="nombreDiv">
                  <thead>
                    <tr className="titulo-tabla-usuarios">
                      <th>Categoría</th>
                      <th>Total MXN</th>
                      <th>Total USD </th>
                      <th>Total Moneda BOM </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td> Capacitación</td>
                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="capacitacion"
                          onChange={handleInputChange}
                          placeholder="Total capacitación MXN"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="accesorios"
                          onChange={handleInputChange}
                          placeholder="Total capacitación USD"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="moneda Bom"
                          onChange={handleInputChange}
                          placeholder="Moneda BOM"
                        />
                      </td>
                    </tr>

                    <tr className="">
                      <td> Accesorios</td>
                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="accesorios"
                          onChange={handleInputChange}
                          placeholder="Total Accesorios MXN"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="accesorios"
                          onChange={handleInputChange}
                          placeholder="Total Accesorios USD"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="moneda Bom"
                          onChange={handleInputChange}
                          placeholder="Moneda BOM"
                        />
                      </td>
                    </tr>

                    <tr className="">
                      <td> Servicios PTN</td>
                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="servicios"
                          onChange={handleInputChange}
                          placeholder="TotalServicios PTN MXN"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="servicios"
                          onChange={handleInputChange}
                          placeholder="Total Servicios PTN USD"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="moneda Bom"
                          onChange={handleInputChange}
                          placeholder="Moneda BOM"
                        />
                      </td>
                    </tr>

                    <tr className="">
                      <td> Mesa de Ayuda</td>
                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="MesaAyuda"
                          onChange={handleInputChange}
                          placeholder="Total Mesa de Ayuda MXN"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="accesorios"
                          onChange={handleInputChange}
                          placeholder="Total Mesa de Ayuda USD"
                        />
                      </td>

                      <td>
                        {" "}
                        <input
                          className="agregar"
                          type="text"
                          name="moneda Bom"
                          onChange={handleInputChange}
                          placeholder="Moneda BOM"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>

              <button className="btn btn-success "> Agregar Categorias </button>
            </div>
          )}
        </div>

        <div></div>
      </div>
    </div>
  );
}

export default PTN_BOM;
