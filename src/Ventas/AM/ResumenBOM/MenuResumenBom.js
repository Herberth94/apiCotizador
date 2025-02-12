import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";

//Componentes
import { CrudProyectos2 } from "./CrudProyectos2";
import { EditProyecto } from "../../../Preventa/PTN-BOM/Routes/ModificarProyectos";
import { url, url2 } from "../../../Componentes/Ocultar";
import Animaciones from "../../../Componentes/Animaciones";
import { Table } from "react-super-responsive-table";

const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get("rol");
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get("id_usuario");

//Obtener URL
var URLactual = window.location.href;

function MenuResumenBom() {
  /*========================== Mostrar/Ocultar ==========================*/
  //Condicionales para almacenar datos
  const [show, setShow] = useState(true); //Lista de proyectos del usuario activo
  const [show1, setShow1] = useState(true); //Lista de proyectos en los que colabora el usuario activo

  const [show2, setShow2] = useState(true); //Tabla de proyectos
  /*=====================================================================*/

  /*======================================== Buscador de proyectos ========================================*/
  // Almacenamiento de todos los proyectos existentes
  const [listaProyectos, setListaProyectos] = useState([]);

  //Almacenamiento de los proyectos semejantes a la clave introducido
  const [suggestions, setSuggestions] = useState([]);
  // Almacenamiento de la clave introducida del proyecto
  const [claveP, setClaveP] = useState([]);

  // Almacenamiento de los clientes existentes
  const [ListaC, setListaC] = useState([]);

  // Función que realiza la consulta a la tabla proyecto
  const getProyectos = async () => {
    try {
      if (validatorrol === "direccion") {
        const resProy = await axios.get(
          url + "/api/cotizador/proyecto/viewadmin"
        );
        setListaProyectos(resProy.data.data);
        setSuggestions(resProy.data.data);
      } else {
        if (
          URLactual === "http://localhost:3000/resumen-proyecto" ||
          URLactual === "10.200.10.9:3000/resumen-proyecto"
        ) {
          const resProy = await axios.get(
            url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`
          );
          setListaProyectos(resProy.data.data);
          setSuggestions(resProy.data.data);
        } else if (show1 === false) {
          const resProy = await axios.get(
            url2 + `/api/cotizador/colaboradores/viewProyectos/${validatorid}`
          );
          setListaProyectos(resProy.data.data);
          setSuggestions(resProy.data.data);
        }
      }
      const resC = await axios.get(url + "/api/cotizador/clientes/view");
      setListaC(resC.data.reSql);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProyectos();
  }, [show, show1]);

  useEffect(() => {
    if (claveP === "") {
      setSuggestions(listaProyectos);
    }
  }, [claveP]);

  // Función que realiza la busqueda de los proyectos semejantes a la clave introducida
  const onChangeTextClaveP = (claveP) => {
    let coincidencias = [];
    if (claveP.length > 0) {
      coincidencias = listaProyectos.filter((proyecto) => {
        const regex = new RegExp(`${claveP}`, "gi");
        return proyecto.proyecto_clave.match(regex);
      });
    }
    setSuggestions(coincidencias);
    //console.log('Suggestions:',suggestions);
    setClaveP(claveP);
  };
  /*=======================================================================================================*/

  /*=================================== Edición de los datos de un proyecto ===================================*/
  const [first, setfirst] = useState(false);

  const { actualizacionProy } = EditProyecto();

  const envioDataProy = (cliente, dataCliente, data, key, newdata) => {
    if (first) {
      actualizacionProy(cliente[key], dataCliente, data[key], newdata);
    }
  };
  /*===========================================================================================================*/

  /*===========================================================================================================*/
  return (
    <div className="contenido-marvilop">
      <div>
        <Animaciones mytext="Resumen BOM" />{" "}
      </div>

      <CrudProyectos2
        suggestionsP={suggestions}
        clientes={ListaC}
        setfirst={setfirst}
        envioDataP={envioDataProy}
      />
    </div>
  );
}
export default MenuResumenBom;
