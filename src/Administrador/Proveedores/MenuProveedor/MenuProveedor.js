import {  React ,useState } from "react";
import Table                from "react-bootstrap/Table";
import Animaciones          from "../../../Componentes/Animaciones";
import RegistrarProveedor   from "./RegistrarProveedor";
import RegistrarMarcas      from "./RegistrarMarcas";
import AdministrarProveedor from "./AdministrarProveedor";

function MenuProveedor() {
  //Habilitar/Deshabilitar tabla del resumen AM
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  return (
    <div className="contenido-usuarios">
      <Animaciones mytext="Proveedores" />

      {/*========================== Tabla  Categorias ==========================*/}
      <Table responsive id="nombreDiv">
        {/*========================== Titulos Tabla ==========================*/}
        <thead>
          <tr className="titulo-tabla-usuarios">
            <th className="ocultar">Registrar Proveedor</th>
            <th className="ocultar">Registrar Marcas </th>
            <th className="ocultar">Proveedores / Marcas </th>
          </tr>
        </thead>
        <tbody>
          <tr className="headerPropuesta">
            {/*========================== Divisa ==========================*/}
            <td>
              <button
                className="btn btn-primary modificar"
                type="button"
                onClick={() => {
                  setShow(!show);
                  setShow2(true);
                  setShow3(true);
                }}
              >
                {" "}
                {show ? "Registrar Proveedores" : "Ocultar"}{" "}
              </button>
              {show ? (
                <div></div>
              ) : (
                <div className="arregla divBuscadorInteligente">
                  {/*========================== Llamado al Componente ==========================*/}
                  <RegistrarProveedor />
                </div>
              )}
            </td>

            <td>
              <button
                className="btn btn-primary modificar"
                type="button"
                onClick={() => {
                  setShow2(!show2);
                  setShow(true);
                  setShow3(true);
                }}
              >
                {" "}
                {show2 ? "Registrar  Marcas" : "Ocultar"}{" "}
              </button>
              {show2 ? (
                <div></div>
              ) : (
                <div className="arregla divBuscadorInteligente">
                  {/*========================== Llamado al Componente ==========================*/}
                  <RegistrarMarcas />
                </div>
              )}
            </td>

            <td>
              {/*   Checar componente */}
              <button
                className="btn btn-primary modificar"
                type="button"
                onClick={() => {
                  setShow3(!show3);
                  setShow(true);
                  setShow2(true);
                }}
              >
                {" "}
                {show3 ? "Administrar Proveedores / Marcas" : "Ocultar"}{" "}
              </button>
              {show3 ? (
                <div></div>
              ) : (
                <div className="arregla">
                  {/*========================== Llamado al Componente ==========================*/}
                  <AdministrarProveedor />
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default MenuProveedor;
