import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Animaciones from "../../Componentes/Animaciones";
import { useRegistro2 } from "./ModificarProveedor";
import { useRegistro3 } from "./modificarMarcas";
import {url} from "../../Componentes/Ocultar";
import {url2} from "../../Componentes/Ocultar";
import { CrudProveedores } from "./CRUDProveedores";



function AdministrarProveedor() {

  /*========================== Mostrar Ocultar Tabla ==========================*/

  const [show, setShow] = useState(false);

  /*========================== Mostrar Ocultar Botón ==========================*/

  const [show2, setShow2] = useState(true);
  
  const [listaClientes, setlistaClientes] = useState([]);
  const {actualizacion} = useRegistro2();
  const [first, setfirst] = useState(false);

  const llamado = async () => {  const respuesta = await axios.get( url + '/api/cotizador/proveedor/view');
    setlistaClientes(respuesta.data.data);
    console.log("hola soy el llamado.resprov", respuesta.data.data)
  };

  const llamadoCliente = async () => {
    try {
      const respuesta = await axios.get( url + '/api/cotizador/proveedor/view');
      console.log("hola soy la respuesta data", respuesta.data.data);
      setlistaClientes(respuesta.data.data);
    } catch (error) { console.log(error);}
    setShow2(!show2);
  };
  const envioData = async (datos, key, data) => {
    if(first){
      console.log("hola soy el datos[key]",datos[key])
      console.log("hola soy el envio data", data)
      actualizacion(datos[key],data);
    }
  };


  return (
    <div className="contenido-usuarios">
      <div className="head"></div>
      <div className="table-responsive">
        {/*========================== Titulo Animación =======================*/}
        <div> <Animaciones mytext="Lista de Proveedores" /> </div>

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
              <CrudProveedores
                clientes={listaClientes} 
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

export default AdministrarProveedor;