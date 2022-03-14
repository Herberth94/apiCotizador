import React from "react";
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import PTN from "./DatosPTN";
import Animaciones from "../../Componentes/Animaciones";
import "../css/PTN_BOM.css";
// import {GuardarNuevoProyecto} from '../../Routes/GuardarNuevoProyecto';
// import AnimacionesCliente  from "../../Componentes/AnimacionesCliente";
// import {Ok} from '../../Routes/GuardarNuevoProyecto';


import axios from 'axios';
import { ListGroup } from "react-bootstrap";

/*======== Datos que se deben Obtener de este archivo para Nuevo Proyecto ==============*/
const nombeProyecto = [
  { clave: "PTN-01", descripcion: "prueba 1", cliente: "Delfos369", fecha: "20-10-2022" }
];

// function guardarProyecto(){
//   const{
//     handleInputChange,
//     enviarDatos
//   } = guardarNuevoProyecto();
// }
 
function NuevoProyecto () {
  
   /*========================== Mostrar Ocultar Tabla ==========================*/
  const [show, setShow] = useState(true);

  /*========================== Almacenamiento de los clientes registrados ==========================*/
  const [ListaC, setListaC] = useState ([{
    cliente_id:'',
    nombre_cliente:'',
    razon_social:'',
    telefono:'',
    cliente_direccion:''
  }]);
  /*========================== Almacenamiento del id cliente encontrado en la busqueda ==========================*/
  var clienteId = { proyecto_id_cliente: ''}

  /*========================== Almacenamiento del nombre del cliente a buscar ==========================*/
  const [nombreC, setNombreC] = useState('');

  /*========================== Almacenamiento de los clientes semejantes al texto introducido ==========================*/
  const [suggestions, setSuggestions] = useState ([]);

  /*========================== Almacenamiento de los datos introducidos de un proyecto ==========================*/
  const [datos, setDatos] = useState ([{
    proyecto_clave:'',
    proyecto_descripcion:''
  }]);

  /*========================== Obtención de la lista de clientes registrados ==========================*/
  useEffect (() => {
    async function listaClientes(){
      try {
        const respuesta = await axios.get("http://localhost:4001/api/cotizador/clientes/view");
        setListaC(respuesta.data.reSql);
        //console.log('Datos directos:',respuesta.data.reSql);
        //console.log('Datos del arreglo:',ListaC);
      } catch (error) {}
    }
    //console.log('Datos por afuera de la función:',ListaC);
    listaClientes();
    //console.log(ListaC);
  },[])

  /*========================== Buscador de clientes ==========================*/
  const onChangeTextCliente = (nombreC) => {
    //console.log(ListaC);
    let coincidencias = [];
    if(nombreC.length>0){
      coincidencias = ListaC.filter(cliente => {
        const regex = new RegExp(`${nombreC}`, "gi");
        return cliente.nombre_cliente.match(regex)
      })
    }
    //console.log('Coincidencias: ',coincidencias);
    setSuggestions(coincidencias);
    setNombreC(nombreC);
    //console.log(nombreC);
  }

  /*========================== Obtención del cliente seleccionado ==========================*/
  const onSuggestHandler = (nombreC) => {
    setNombreC(nombreC);
    setSuggestions([]);
    //console.log(clienteId);
  }

  const handleInputChange = (event) =>{
    /*   console.log("este es el event.target.value", event.target.value) */
        setDatos ({
          ...datos,[event.target.name] : event.target.value ,
        })
  }
  
  async function Send (){
    //Obtención del id del cliente
    let i = Object.keys(ListaC);
    //console.log(ListaC);
    for (let c = 0; c < i.length; c++) {
      if (nombreC == ListaC[c].nombre_cliente) {
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
        const respuesta = await axios.post(`http://localhost:4001/api/cotizador/proyecto/agregar/1`, data);
        const getProyectoId = respuesta.data.id_proyecto;
        //console.log(getProyectoId);
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
          </tr>
        </tbody>
      </Table>
       {/*=======================  Boton Empezar Nuevo proyecto ======================= */}
      <button className="btn btn-primary modificar" type="submit"> Agregar proyecto  </button>
      </form>
      <button className="btn btn-primary modificar" type="submit" onClick={() => { setShow(!show)}}>  {show ? 'Empezar' : 'Ocultar Datos'}    </button>
      {show ? (
        <div >

        </div>
      ) : (
        <div className="arregla">
          <PTN />
        </div>
      )}


    </div>

  )

}

export default NuevoProyecto