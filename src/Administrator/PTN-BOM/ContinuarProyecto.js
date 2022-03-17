import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";

import DatosPTN from "./DatosPTN";

function ContinuarProyecto() {
    
  {  /*========================== Mostrar Ocultar Tabla ==========================*/}
  const [show, setShow] = useState(true);

  /*== Almacenamiento de todos los proyectos existentes ==*/
  const[listaProyectos, setListaProyectos] = useState([]);

  /*== Almacenamiento de los proyectos que tienen la clave semejante a la instroducida ==*/
  const[suggestions,setSuggestions] = useState([]);
  
  /*== Almacenamiento de la clave introducida del proyecto ==*/
  const[claveP,setClaveP] = useState([]);

  /*== Función que realiza la consulta a la tabla proyectos ==*/
  useEffect(()=>{
      const getProyectos = async () => {
          try{
              const resProy = await axios.get('http://localhost:4001/api/cotizador/proyecto/view1');
              setListaProyectos(resProy.data.data);
          }catch(error){
              console.log(error);
          }
      }
      getProyectos();
  },[])
  
  /*== Función que realiza la busqueda de los proyectos semejantes a la clave introducida ==*/
  const onChangeTextClaveP = (claveP) => {
      let coincidencias = [];
      if(claveP.length>0){
          coincidencias = listaProyectos.filter(proyecto => {
          const regex = new RegExp(`${claveP}`, "gi");
          return proyecto.proyecto_clave.match(regex)
          })
      }
      setSuggestions(coincidencias);
      setClaveP(claveP);
  }

  return (
/*==================== Continuar Proyecto ====================*/
<div  className="contenido-usuarios">
       

              <Table responsive id="nombreDiv">
                <thead>
                  <tr className="titulo-tabla-usuarios">
                    <th>Clave</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="">
                    <td>
                        <input className="agregar"
                        type="text"
                        name="proyecto_clave"
                        onChange={e => onChangeTextClaveP(e.target.value)}
                        value={claveP}
                        placeholder="Ingrese clave del proyecto" />
                    </td>
                  </tr>
                </tbody>
              </Table>

{/****************************Lista de los Proyectos Creados ****************************************/}
      {/*============= Titulo Animación =============*/}
      <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Lista de Proyectos<span></span></h1>
                        </div>
                    </div>
                </div>

                <Table responsive  striped bordered hover size="sm">
                    <thead>
                    <tr className="titulo-tabla-usuarios">
                                <th>ID</th>
                                <th>Clave</th>
                                <th>Descripción</th>
                                <th>Cliente</th>
                                <th>Fecha de creción</th>
                                <th>Estatus</th>
                                <th>Eliminar</th>
                            </tr>
                    </thead>
                                       
                    <tbody>
                    {Object.keys(suggestions).map((key) => (    
                        <tr key={suggestions[key].proyecto_id} >
                            <td>{suggestions[key].proyecto_id}</td>   
                            <td>{suggestions[key].proyecto_clave}</td>  
                            <td>{suggestions[key].proyecto_descripcion}</td>  
                            <td>{suggestions[key].nombre_cliente}</td> 
                            <td>{suggestions[key].proyecto_fecha_creacion}</td>
                            <td>{suggestions[key].proyecto_estatus}</td>  
                            <td><button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;}}>  {show ? 'Continuar' : 'Ocultar Proyecto'} </button></td>
                        </tr>  
                    ))
                    }
                    </tbody>          
                </Table>




              {/* <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Continuar' : 'Ocultar Proyecto'}    </button> */}
              {show ? (
        <div >


        </div>
      ) : (
        
        <div className="arregla">  
      {/*========================== Llamado al Componente ==========================*/} 
        <DatosPTN/>
         </div>
      )}

        </div>


  )
}

export default ContinuarProyecto