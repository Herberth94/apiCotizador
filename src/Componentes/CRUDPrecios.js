import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

//Componentes
import Animaciones from "./Animaciones";
import {
  precioUnitario,
  calcularDescuento,
  Total,
} from "../Preventa/PTN-BOM/Operaciones/Operaciones";

let validaOperacion = false;

export const CrudPrecios = (props) => {
  /*================================================== Partidas ==================================================*/
  /*========================= Editar =========================*/
  const [activar, setActivar] = useState(true);

  const [data, setData] = useState({
    cantidad: "",
    precio_lista: "",
    precio_unitario: "",
    precio_descuento: "",
    precio_total: "",
    precio_id_moneda: "",
  });

  const handleInputChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const [enable, setenable] = useState([]);
  const [datos, Setdatos] = useState();

  useEffect(() => {
    Setdatos(props.precios);
  }, [props.precios]);

  useEffect(() => {
    let i = Object.keys(props.precios);
    i = i.length;
    //console.log(i)
    setenable(Array(i).fill(true));
  }, [props.precios]);

  const habilitar = (key) => {
    key = parseInt(key);
    const newArr = [];
    let p = Object.keys(props.precios);
    p = p.length;
    for (let i = 0; i < p; i++) {
      if (i === key) {
        newArr[i] = !enable[i];
      }
      if (i !== key) {
        newArr[i] = true;
      }
    }
    setenable(newArr);

    setActivar(!activar);
    if (activar === true) {
      if (props.estado) {
        setData({
          ...data,
          cantidad: props.precios[key].sp_cantidad,
          precio_lista: props.precios[key].precio_lista,
          precio_unitario: props.precios[key].precio_unitario,
          precio_descuento: props.precios[key].precio_descuento,
          precio_total: props.precios[key].precio_total,
        });
      } else {
        setData({
          ...data,
          cantidad: props.precios[key].cd_cantidad,
          precio_lista: props.precios[key].precio_lista,
          precio_unitario: props.precios[key].precio_unitario,
          precio_descuento: props.precios[key].precio_descuento,
          precio_total: props.precios[key].precio_total,
        });
      }
    }
  };
  /*==========================================================*/

  function checa() {
    validaOperacion = !validaOperacion;
  }

  ///CALCULAR DESCUENTO
  /*================================================================================*/
  useEffect(() => {
    if (
      data.precio_lista !== "" &&
      data.precio_unitario !== "" &&
      validaOperacion === false
    ) {
      const desc = calcularDescuento(data.precio_lista, data.precio_unitario);
      const total = Total(data.precio_unitario, data.cantidad);
      setData({ ...data, precio_total: total, precio_descuento: desc });
    }

    if (data.precio_lista === "" || data.precio_unitario === "") {
      setData({ ...data, precio_descuento: "" });
    }
  }, [data.cantidad, data.precio_lista, data.precio_unitario]);

  ///CALCULAR PRECIO UNITARIO
  /*===================================================================================================================*/
  useEffect(() => {
    let precio_u = "";
    if (
      data.precio_lista !== "" &&
      data.precio_descuento !== "" &&
      validaOperacion === true
    ) {
      precio_u = precioUnitario(data.precio_lista, data.precio_descuento);
      const total = Total(precio_u, data.cantidad);
      if (data.precio_descuento < 0 || data.precio_descuento > 100) {
        // alert("Advertencia Porcentaje Invalido")
      }
      setData({ ...data, precio_total: total, precio_unitario: precio_u });
    }
  }, [data.precio_descuento, data.precio_lista, data.cantidad]);

  //OBTENER TOTALES

  //checar
  /*===================================================================================================================*/
  useEffect(() => {
    if (data.precio_unitario === "" || data.cantidad === "") {
      setData({ ...data, precio_total: "" });
    }
  }, [, data.precio_unitario, data.cantidad]);

  return (
    <div className="">
      {/* <form> */}
      <Animaciones mytext="Precios" />
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Calcular</Th>
            <Th>Cantidad</Th>
            <Th>Precio Lista</Th>
            <Th>Precio Unitario</Th>
            <Th>Desc(%)</Th>
            <Th>Precio Total</Th>
            <Th>Moneda</Th>
            <Th>Modificar</Th>
          </Tr>
        </Thead>

        <Tbody>
          {Object.keys(props.precios).map((key) => (
            <Tr key={key}>
              <Td>{props.precios[key].precio_id}</Td>
              <Td>
                <label className="switch">
                  <input type="checkbox" id="checa" onClick={checa} />
                  <span className="slider"></span>
                </label>
              </Td>
              <Td>
                <input
                  className="input-name"
                  type="number"
                  placeholder={
                    activar
                      ? props.estado
                        ? props.precios[key].sp_cantidad
                        : props.precios[key].cd_cantidad
                      : ""
                  }
                  value={data.cantidad}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="cantidad"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  type="number"
                  placeholder={activar ? props.precios[key].precio_lista : ""}
                  value={data.precio_lista}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="precio_lista"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  type="number"
                  placeholder={
                    activar ? props.precios[key].precio_unitario : ""
                  }
                  value={data.precio_unitario}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="precio_unitario"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  type="number"
                  placeholder={
                    activar ? props.precios[key].precio_descuento : ""
                  }
                  value={data.precio_descuento}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                  name="precio_descuento"
                ></input>
              </Td>
              <Td>
                <input
                  className="input-name"
                  placeholder={props.precios[key].precio_total}
                  value={data.precio_total}
                  //disabled={true}
                  readOnly
                  disabled={true}
                  //onChange={handleInputChange}
                  name="precio_total"
                ></input>
              </Td>
              <Td>
                <select
                  id="lista-opciones"
                  name="precio_id_moneda"
                  defaultValue={props.precios[key].precio_id_moneda}
                  disabled={enable[key]}
                  onChange={handleInputChange}
                >
                  <option value={0}></option>
                  <option value={1}>MXN</option>
                  <option value={2}>USD</option>
                </select>
              </Td>
              {enable[key] ? (
                <Td>
                  <button
                    className="sn-boton"
                    onClick={() => {
                      habilitar(key);
                      //props.envioDataPrecio(props.estado,datos, key, data);
                      props.setfirst(activar);
                    }}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </Td>
              ) : (
                <>
                  <Td>
                    <button
                      className="sn-boton"
                      onClick={() => {
                        habilitar(key);
                        props.envioDataPrecio(props.estado, datos, key, data);
                        props.setfirst(activar);
                      }}
                    >
                      <i className="bi bi-check-lg"></i>
                    </button>
                  </Td>

                  <Td>
                    <button
                      className="sn-boton cancelar"
                      type="button"
                      onClick={() => {
                        habilitar(key);
                        //props.envioDataPrecio(props.estado,datos, key, data);
                        props.setfirst(activar);
                      }}
                    >
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </Td>
                </>
              )}
            </Tr>
          ))}
        </Tbody>
      </Table>

      <br />
      <br />
      {/* </form> */}
    </div>
  );
};
