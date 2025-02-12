import axios from "axios";
import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import { url2 } from "../../../Componentes/Ocultar";

export const CRUDColaboradoresVenta = (props) => {
  console.log(props.colabs);
  const deleteColab = async (cId) => {
    const confirmacion = window.confirm(
      "¿Seguro que quieres borrar este Colaborador?"
    );
    if (confirmacion) {
      try {
        await axios.delete(url2 + `/api/cotizador/delete/${cId}`);
        alert("Colaborador eliminado exitosamente");
      } catch (error) {
        alert("Error al eliminar Colaborador");
      }
    } else {
    }
  };

  return (
    <div>
      <div className="">
        {/*        <Animaciones   mytext= "Administrar Colaboradores" />
         */}
      </div>
      {/*===================     Tabla Proveedores   ========================*/}
      <Table>
        <Thead>
          {/*=================== Titulos Tabla Proveedores ===================*/}

          <Tr>
            <Th>ID</Th>
            <Th>Colaboradores Venta</Th>
            <Th>Eliminar</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/*=================== Tabla de los colaboradores de un Proyecto =================*/}
          {Object.keys(props.colabs).map((key) => (
            <Tr key={props.colabs[parseInt(key)].id_usuario}>
              <Td>{props.colabs[parseInt(key)].id_usuario}</Td>
              {/*=================== Nombre/Email del Colaborador =================*/}
              <Td>{props.colabs[parseInt(key)].email}</Td>
              {/*=================== Botón Eliminar =================*/}
              <Td>
                {" "}
                <button
                  className="sn-boton  eliminar"
                  type="button"
                  onClick={() => {
                    deleteColab(props.colabs[parseInt(key)].id_usuario);
                  }}
                >
                  <i className="bi bi-trash-fill"></i>
                </button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};
