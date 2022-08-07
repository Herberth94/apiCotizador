import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Animaciones from "../../../Componentes/Animaciones";
import { url, url2 } from "../../../Componentes/Ocultar";
import Cookies from "universal-cookie";
import { Partida_catalogo } from "../../../Ventas/Operaciones/totalPartida";
import AdministrarPropuesta from "./AdministrarPropuesta";

const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get("rol");
//let validatorrol ="administrador";
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get("id_usuario");

let pId;

export function BuscadorInteligente4() {
  const {
    getTotalPar,
    getPorcentajesPar,
    getTotalCats,
    getPorcentajesCats,
    getDivisaProy,
    getFinanciamieno,
    getPorcentajesCI,
  } = Partida_catalogo();

  /*========================== Mostrar/Ocultar ==========================*/
  const [show, setShow] = useState([]);
  const [show2, setShow2] = useState(true); // Resumen AM
  const [textBVer, setTextBVer] = useState([]); // Texto de los botones de mostrar
  /*=====================================================================*/

  /*======================================== Buscador de proyectos ========================================*/
  // Almacenamiento de todos los proyectos existentes
  const [listaProyectos, setListaProyectos] = useState([]);

  //Almacenamiento de los proyectos semejantes a la clave introducido
  const [suggestions, setSuggestions] = useState([]);

  // Almacenamiento de la clave introducida del proyecto
  const [claveP, setClaveP] = useState([]);

  /*== Función que realiza la consulta a la tabla proyectos ==*/
  const getProyectos = async () => {
    try {
      if (validatorrol === "direccion") {
        const resProy = await axios.get(
          url + "/api/cotizador/proyecto/viewadmin"
        );
        setListaProyectos(resProy.data.data);
        setSuggestions(resProy.data.data);
      } else {
        const resProy = await axios.get(
          url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`
        );
        setListaProyectos(resProy.data.data);
        setSuggestions(resProy.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProyectos();
  }, []);

  useEffect(() => {
    if (claveP === "") {
      setSuggestions(listaProyectos);
    }

    if (show2 === false) {
      setShow2(true);
    }
  }, [claveP]);

  useEffect(() => {
    let i = Object.keys(suggestions);
    i = i.length;
    setShow(Array(i).fill(true));
    setTextBVer(Array(i).fill("bi bi-eye"));
  }, [suggestions]);

  const habilitar = (key) => {
    key = parseInt(key);
    const newArr = [];
    const newArr2 = [];
    let c = Object.keys(suggestions);
    c = c.length;
    setShow(Array(c).fill(true));
    setTextBVer(Array(c).fill("bi bi-eye"));
    for (let i = 0; i < c; i++) {
      if (i === key) {
        newArr[i] = !show[i];
        setShow2(newArr[i]);
        if (show[i] === false) {
          newArr2[i] = "bi bi-eye";
        } else {
          newArr2[i] = "bi bi-eye-slash-fill";
        }
      }
      if (i !== key) {
        newArr[i] = true;
        newArr2[i] = "bi bi-eye";
      }
    }
    setShow(newArr);
    setTextBVer(newArr2);
  };

  async function consultarTotalesP(id) {
    getTotalPar("");
    getPorcentajesPar("");
    getTotalCats("");
    getPorcentajesCats("");
    getDivisaProy("");
    getPorcentajesCI("");
    getFinanciamieno("");

    try {
      const resTotPar = await axios.get(
        url2 + `/api/cotizador/am/viewTotalesPartidas/${id}`
      );
      getTotalPar(resTotPar.data.data);

      const resAMPar = await axios.get(
        url2 + `/api/cotizador/am/viewAMPartidas/${id}`
      );
      getPorcentajesPar(resAMPar.data.data);

      const resTotCats = await axios.get(
        url2 + `/api/cotizador/am/viewTotalesCategorias/${id}`
      );
      getTotalCats(resTotCats.data.data);

      const resAMCats = await axios.get(
        url2 + `/api/cotizador/am/viewAMCategorias/${id}`
      );
      getPorcentajesCats(resAMCats.data.data);

      const dProy = await axios.get(
        url2 + `/api/cotizador/am/viewDivisa/${id}`
      );
      getDivisaProy(dProy.data.data);

      const resCI = await axios.get(url2 + `/api/cotizador/ci/view/${id}`);
      getPorcentajesCI(resCI.data.data);

      const resdF = await axios.get(
        url2 + `/api/cotizador/proporcionalidad/view/${id}`
      );
      getFinanciamieno(resdF.data.data);
    } catch (error) {
      console.log(error);
    }

  }
  function getIdProy(id) {
    pId = id;
 
  }

  return (
    <div className="contenido-marvilop">
      <div className="animacion-table">
        <div>
          {" "}
          <Animaciones mytext="Propuestas Económicas" />{" "}
        </div>


        <Table id="daTable">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Clave</Th>
              <Th>Descripción</Th>
              <Th>Cliente</Th>
              <Th>Fecha Creación</Th>
              <Th>Fecha Modificación</Th>
              <Th>Estatus</Th>
              <Th>Plazo de meses</Th>
              <Th>Propuesta </Th>
            </Tr>
          </Thead>

          <Tbody>
            {Object.keys(suggestions).map((key) => (
              //checar aqui va los titulos
              <Tr key={suggestions[key].proyecto_id}>
                <Td>{suggestions[key].proyecto_id}</Td>
                <Td>{suggestions[key].proyecto_clave}</Td>
                <Td>{suggestions[key].proyecto_descripcion}</Td>
                <Td>{suggestions[key].nombre_cliente}</Td>
                <Td>{suggestions[key].proyecto_fecha_creacion}</Td>
                <Td>{suggestions[key].proyecto_fecha_modificacion}</Td>
                <Td className={suggestions[key].proyecto_estatus}>
                  {suggestions[key].proyecto_estatus}
                </Td>
                <Td>{suggestions[key].proyecto_plazo_meses}</Td>
                <Td>
                  <button
                    className="sn-boton "
                    onClick={() => {
                      consultarTotalesP(suggestions[key].proyecto_id);
                      getIdProy(suggestions[key].proyecto_id);
                      habilitar(key);
                    }}
                  >
                    <i className={textBVer[key]}></i>
                  </button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        {show2 ? (
          <div></div>
        ) : (
          <div className="">
            {/*========================== Llamado al Componente ==========================*/}
            <AdministrarPropuesta proyId={pId} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BuscadorInteligente4;
