import React, { useState } from "react";
import "./css/Usuarios.css";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useRegistro } from "../Components/ModificarCLientes";

function AdministrarClientes() {
  {
    /*========================== Mostrar Ocultar Tabla ==========================*/
  }
  const [show, setShow] = useState(false);
  {
    /*========================== Mostrar Ocultar Botón ==========================*/
  }
  const [show2, setShow2] = useState(true);

  const [keyRegistro, SetKeyregistro] = useState("");
  const [listaClientes, setlistaClientes] = useState([]);
  const [validar, setvalidar] = useState([]);
  const { actualizacion, handleInputChange } = useRegistro();
  const enable = (key) => {
    const newARR = [];
    //console.log(validar);
    let i = Object.keys(listaClientes);
    for (let x = 0; x < i.length; x++) {
      newARR[x] = validar[0][x];
    }
    //console.log(newARR);
    for (let y = 0; y < i.length; y++) {
      if (y == key) {
        //newARR[y]=!validar[0][y];
        newARR[y] = !validar[0][y];
      }
      if (y != key) {
        newARR[y] = true;
      }
    }

    setvalidar([newARR]);
    SetKeyregistro(key);
    //console.log(newARR)
  };
  const borrarCliente = async (dato) => {
    const confirmacion = window.confirm(
      "¿Seguro que quieres borrar este registro?"
    );
    if (confirmacion) {
      console.log(dato);
      const respuesta = await axios.delete(
        `http://localhost:4001/api/cotizador/clientes/delete/${dato}`
      );
      console.log(respuesta.data);
      llamado();
    } else {
      llamado();
    }
  };
  const llamado = async () => {
    const respuesta = await axios.get(
      "http://localhost:4001/api/cotizador/clientes/view"
    );
    setlistaClientes(respuesta.data.reSql);
  };

  const llamadoCliente = async () => {
    setShow2(!show2);
    const newValidar = [];
    const respuesta = await axios.get(
      "http://localhost:4001/api/cotizador/clientes/view"
    );
    console.log(respuesta.data.reSql);
    let i = Object.keys(respuesta.data.reSql);
    for (let x = 0; x < i.length; x++) {
      newValidar[x] = true;
    }
    setvalidar([...validar, newValidar]);
    setlistaClientes(respuesta.data.reSql);
  };
  const envioData = (datos, key) => {
    setShow(!show);
    //console.log(key);
    actualizacion(datos[key]);
    //window.location.reload();
    actulizarPage(key);
  };
  const actulizarPage = (key) => {
    enable(key);
  };

  return (
    <div className="contenido-usuarios">
      <div className="table-responsive">
        {/*========================== Titulo Animación =======================*/}
        <div className="container">
          <div className="box">
            <div className="title">
              <span className="block"></span>
              <h1>
                Lista de Clientes<span></span>
              </h1>
            </div>

            <div className="role">
              <div className="block"></div>
              <p>Palo Tinto Networks</p>
            </div>
          </div>
        </div>
        {/*================= Botón Mostrar/Ocultar Lista =======================*/}
        <div>
          <button className="btn btn-primary modificar" type="button"
            onClick={() => {
              llamadoCliente();
            }}
          >
            {" "}
            {show2 ? "Mostrar Lista" : "Ocultar Lista"}{" "}
          </button>
          {show2 ? (
            <div>
              {/*=================== Ocultar Lista DIV  =========================*/}
            </div>
          ) : (
            <div>
              {/*=================== Botón Mostrar Lista DIV =====================*/}
              <br />
              {/*===================     Tabla Clientes   ========================*/}
              <Table responsive striped bordered hover size="sm"  className="tablas">
                <thead>
                  {/*=================== Titulos Tabla Clientes ===================*/}
                  <tr className="titulo-tabla-usuarios">
                    <th>ID</th>
                    <th>Cliente</th>
                    <th>Razón Social</th>
                    <th>Teléfono</th>
                    <th>Eliminar</th>
                    <th>Modificar</th>
                  </tr>
                </thead>
                <tbody>
                  {/*=================== Contenido Tabla Clientes =================*/}
                  {Object.keys(listaClientes).map((key) => (
                    <tr key={listaClientes[key].id_cliente}>
                      <td>{listaClientes[key].id_cliente}</td>
                      <td>
                        <input
                          className="input-name"
                          defaultValue={listaClientes[key].nombre_cliente}
                          onChange={handleInputChange}
                          disabled={validar[0][key]}
                          name="nombre_cliente"
                        ></input>
                      </td>
                      <td>
                        <input
                          className="input-name"
                          defaultValue={listaClientes[key].razon_social}
                          onChange={handleInputChange}
                          disabled={validar[0][key]}
                          name="razon_social"
                        ></input>{" "}
                      </td>
{/* CHECAR NUMERO TELEFONICO */}
                      <td>
                        <input
                          className="input-name"
                          defaultValue={listaClientes[key].razon_social}
                          onChange={handleInputChange}
                          disabled={validar[0][key]}
                          name="telefono"
                        ></input>{" "}
                      </td>


                      <td>
                        <button
                          className="btn btn-primary eliminar"
                          onClick={() =>
                            borrarCliente(listaClientes[key].id_cliente)
                          }
                        >
                          {" "}
                          Eliminar
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button
                          className="btn btn-primary modificar"
                          type="button"
                          onClick={() => {
                            enable(key);
                            envioData(listaClientes, keyRegistro);
                          }}
                        >
                          {" "}
                          {show ? "Aceptar" : "Modificar"}{" "}
                        </button>
                        {show ? (
                          <div>
                            {/*=================== Aceptar Cambios DIV ====================*/}
                          </div>
                        ) : (
                          <div>
                            {/*=================== Modificar Usuario DIV ====================*/}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdministrarClientes;
