import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { useRegistro } from "../Routes/ModificarCLientes";
import Animaciones from "../Componentes/Animaciones";


import {url} from "../Componentes/Ocultar";
import {url2} from "../Componentes/Ocultar";
import { CrudClientes } from "./CRUDClientes";


function AdministrarClientes() {

  /*========================== Mostrar Ocultar Tabla ==========================*/

  const [show, setShow] = useState(false);

  /*========================== Mostrar Ocultar Botón ==========================*/

  const [show2, setShow2] = useState(true);
  
  const [listaClientes, setlistaClientes] = useState([]);
  const {actualizacion} = useRegistro();
  const [first, setfirst] = useState(false);
  
  const borrarCliente = async (dato) => {
    //console.log("este es el dato", dato)
    const confirmacion = window.confirm(
      "¿Seguro que quieres borrar este registro?"
    );

    if (confirmacion) {
      
      const respuesta = await axios.delete(   url2 + `/api/cotizador/clientes/delete/${dato}` );
      console.log("hola soy el undefined", respuesta.data);
      llamado();
    } else {
      llamado();
    }
  };

  const llamado = async () => {  const respuesta = await axios.get(  url + '/api/cotizador/clientes/view' );
    setlistaClientes(respuesta.data.reSql);
  };

  const llamadoCliente = async () => {
    try {
      const respuesta = await axios.get( url + '/api/cotizador/clientes/view');
      //console.log(respuesta.data.reSql);
      setlistaClientes(respuesta.data.reSql);
    } catch (error) { console.log(error);}
    setShow2(!show2);
  };
  const envioData = async (datos, key, data) => {
    if(first){
      console.log(datos[key])
      console.log(data)
      actualizacion(datos[key],data);
    }
  };
  

  return (
    <div className="contenido-usuarios">
      <div className="head"></div>
      <div className="table-responsive">
        {/*========================== Titulo Animación =======================*/}
        <div> <Animaciones mytext="Lista de Clientes" /> </div>

        {/*================= Botón Mostrar/Ocultar Lista =======================*/}
        <div>
          <button className="btn btn-primary modificar" type="button"
            onClick={() => {
              llamadoCliente();
            }}
          >
            {" "}
            {show2 ? "Mostrar Lista" : "Ocultar Lista"}
          </button>
          {show2 ? (
            <div>
              {/*=================== Ocultar Lista DIV  =========================*/}
            </div>
          ) : (
            <div>
              {/*=================== Botón Mostrar Lista DIV =====================*/}
              <br />
              <CrudClientes
                clientes={listaClientes} 
                borrar={borrarCliente} 
                setfirst={setfirst}
                envioData = {envioData}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdministrarClientes;