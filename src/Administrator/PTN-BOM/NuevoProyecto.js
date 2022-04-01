import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import PTN from "./DatosPTN";
import Animaciones from "../../Componentes/Animaciones";
import "../css/PTN_BOM.css";
import axios from 'axios';
import Partida from "./Partida";
import DatosSP from "./DatosSP";
import DatosPTN from "./DatosPTN";
import Cookies from 'universal-cookie';


import {url, url2} from "../../Componentes/Ocultar";


//Obtención del id del usuario con sesión activa
const cookies = new Cookies();
export let validatorid = cookies.get('id_usuario');
 
function NuevoProyecto () {
  
   /*========================== Mostrar Ocultar Tabla ==========================*/
  const [show, setShow] = useState(true);

  
  /*=================================== Buscador de clientes ===================================*/
  // Almacenamiento de los clientes existentes
  const [ListaC, setListaC] = useState ([]);

  // Almacenamiento del id cliente encontrado en la busqueda
  var clienteId = { proyecto_id_cliente: ''}

  // Almacenamiento del nombre del cliente a buscar
  const [nombreC, setNombreC] = useState('');

  // Almacenamiento de los clientes semejantes al texto introducido en el input
  const [suggestions, setSuggestions] = useState ([]);

  // Función que realiza la consulta a la tabla clientes
  useEffect (() => {
    async function listaClientes(){
      try {
        const respuesta = await axios.get(url + "/api/cotizador/clientes/view");
        setListaC(respuesta.data.reSql);
      } catch (error) {}
    }
    listaClientes();
  },[])

  // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
  const onChangeTextCliente = (nombreC) => {
    let coincidencias = [];
    if(nombreC.length>0){
      coincidencias = ListaC.filter(cliente => {
        const regex = new RegExp(`${nombreC}`, "gi");
        return cliente.nombre_cliente.match(regex)
      })
    }
    setSuggestions(coincidencias);
    setNombreC(nombreC);
  }

  // Función que obtiene el nombre del cliente seleccionado
  const onSuggestHandler = (nombreC) => {
    setNombreC(nombreC);
    setSuggestions([]);
  }
  /*============================================================================================*/

  /*=================================== Obtención de datos para la tabla proyecto ===================================*/
  // Almacenamiento de los datos
  const [datos, setDatos] = useState ([{
    proyecto_clave:'',
    proyecto_descripcion:''
  }]);

  // Obtención de los datos introducidos en los input
  const handleInputChange = (event) =>{
        setDatos ({
          ...datos,[event.target.name] : event.target.value ,
        })
  }

  // Función que realiza la inserción del proyecto
  async function Send (){
    // Obtención del id del cliente que se seleccionó en la búsqueda
    let i = Object.keys(ListaC);
    for (let c = 0; c < i.length; c++) {
      if (nombreC === ListaC[c].nombre_cliente) {
        clienteId.proyecto_id_cliente = ListaC[c].cliente_id
        console.log(clienteId);
      }        
    }

    const data = {
        proyecto_clave: datos.proyecto_clave,
        proyecto_descripcion: datos.proyecto_descripcion,
        proyecto_id_cliente: clienteId.proyecto_id_cliente
    };

    try{
      //console.log('Este es el id del usuario activo:', validatorid);
      const respuesta = await axios.post(url2 + `/api/cotizador/proyecto/agregar/${validatorid}`, data);
      const getProyectoId = respuesta.data.id_proyecto;
      console.log(getProyectoId);
      alert('Registro exitoso')
    }catch (error){
      alert('Registro invalido')
    }
  }

  const enviarDatos = (event) =>{
      Send();
      event.preventDefault()
      event.target.reset();
  }
  /*=================================================================================================================*/

  return (

    <div className="contenido-usuarios">
      {/*======================= Titulo Animación =======================*/}
      <div> <Animaciones mytext="Datos Proyecto" /> </div>

      {/*=======================  Tabla Nuevo Proyecto ======================= */}
      <form action="" method="post" onSubmit = {enviarDatos}>
      <Table responsive id="nombreDiv">

        {/*======================= Titulos Tabla ======================= */}
        <thead>
          <tr className="titulo-tabla-usuarios">
            <th>Clave</th>
            <th>Descripción</th>
            <th> Cliente </th>    
            <th> Añadir </th>           
          </tr>
        </thead>

        <tbody>
      
          <tr className="">

            {/*=======================  Clave proyecto ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="proyecto_clave"
                onChange= {handleInputChange}
                placeholder="Ingrese Clave"
              />
            </td>
            {/*======================= Descripción ======================= */}
            <td>
              <input
                className="agregar"
                type="text"
                name="proyecto_descripcion"
                onChange={handleInputChange}
                placeholder="Ingrese Descripción"
              />
            </td>
            {/*======================= Lista Clientes ======================= */}
            <td>
              {" "}
              <input
                className="agregar"
                type="text"
                name="nombre_cliente"
                onChange={e => onChangeTextCliente(e.target.value)}
                value={nombreC}
                placeholder="Ingrese el nombre del cliente"
              />
              {suggestions && suggestions.map((suggestion,i)=>
                <div key={i} className="selectCliente" onClick={() => onSuggestHandler(suggestion.nombre_cliente)}>
                  {suggestion.nombre_cliente}
                </div>
              )}
            </td>
            <td>
                 {/*=======================  Boton Empezar Nuevo proyecto ======================= */}
                   <button className="btn btn-primary modificar" type="submit"> Agregar proyecto  </button>
            </td>
          </tr>
        </tbody>
      </Table>
   
      </form>
      <button className="btn btn-primary modificar" type="submit" onClick={() => { setShow(!show)}}>  {show ? 'Empezar' : 'Ocultar Datos'}    </button>
      {show ? (
        <div >

        </div>
      ) : (
        <div className="arregla">
          <DatosPTN></DatosPTN>
        </div>
      )}


    </div>

  )

}

export default NuevoProyecto