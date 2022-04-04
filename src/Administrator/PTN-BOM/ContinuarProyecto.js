import axios from 'axios';
import React from 'react'
import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
// Componentes
import Partida from "./Partida";
import DatosSP from "./DatosSP";
import Categorias from "./Categorias";
import Animaciones from '../../Componentes/Animaciones';
import {InsertDatosPartida} from '../../Routes/GuardarPartida';
import {getIdPar} from './DatosSP';
import {InsertDatosCats} from '../../Routes/GuardarDatosCategorias';
import {url, url2} from "../../Componentes/Ocultar";


const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

export var proyectoIdCont;

function ContinuarProyecto() {
    
  /*========================== Mostrar/Ocultar ==========================*/
  const [show, setShow] = useState(true); // Menú agregar/continuar partida 
  const [show2, setShow2] = useState(true);// Agregar partida
  const [show3, setShow3] = useState(true);// Lista de las partidas de un proyecto
  const [show4, setShow4] = useState(true);// Continuar una partida
  const [show5, setShow5] = useState(true);// Categorias/Finalizar proyecto
  /*=====================================================================*/
  
  /*======================================== Buscador de proyectos ========================================*/
  //Almacenamiento de todos los proyectos existentes
  const[listaProyectos, setListaProyectos] = useState([]);

  //Almacenamiento de los proyectos que tienen la clave semejante a la instroducida
  const[suggestions,setSuggestions] = useState([]);
  
  // Almacenamiento de la clave introducida del proyecto 
  const[claveP,setClaveP] = useState([]);

  // Función que realiza la consulta a la tabla proyectos 
  useEffect(()=>{
      const getProyectos = async () => {
          try{
            if(validatorrol === "administrador"){
              const resProy = await axios.get(url + '/api/cotizador/proyecto/viewadmin');
              setListaProyectos(resProy.data.data);
          }else{
              const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
              setListaProyectos(resProy.data.data);
          }
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
  /*=======================================================================================================*/

  /*======================================== Lista de partidas ========================================*/
  // Almacenamiento de las partidas de un proyecto en especifico
  const[listaPartidas, setListaPartidas] = useState([]);
    
  //Almacenamiento de todos las partidas de un proyecto en específico
  async function getDatosPartida(proyecto_id){
      try{
          const resPP = await axios.get(url2 + `/api/cotizador/partida/viewPP/${proyecto_id}`);
          setListaPartidas(resPP.data.data);
      }catch(error){
          console.log(error);
      }
      proyectoIdCont = proyecto_id;
  }
  //console.log('Varible global proyecto id:', proyectoIdCont);
  const {getIdP} = InsertDatosPartida();
  const {getIdP1} = InsertDatosCats();
  /*===================================================================================================*/

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
      <div>
        {" "}
        <Animaciones mytext="Lista de Proyectos" />{" "}
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
              <th>Continuar</th>
              <th>Finalizar</th>
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
                  <td>
                    <button 
                      className="btn btn-primary modificar" 
                      type="button" 
                      onClick={() => {
                        getIdP(suggestions[key].proyecto_id);
                        getDatosPartida(suggestions[key].proyecto_id); 
                        setShow(!show);}}
                      > 
                        {show ? 'Continuar' : 'Ocultar Proyecto'} 
                      </button>
                  </td>
                  <td>
                    <button 
                      className="btn btn-primary modificar" 
                      type="button" 
                      onClick={() => {
                        getIdP1(suggestions[key].proyecto_id);
                        setShow5(!show5);}}
                      > 
                        {show5 ? 'Finalizar proyecto' : 'Ocultar Proyecto'} 
                      </button>
                  </td>
              </tr>  
          ))}
          </tbody>          
      </Table>
              {/* <button className="btn btn-primary modificar" type="button" onClick={() => { setShow(!show) ;   }}>  {show ? 'Continuar' : 'Ocultar Proyecto'}    </button> */}
      {show ? (
        <div >


        </div>
      ) : (
        <Table responsive  striped bordered hover size="sm">
          <thead>
            <tr className="titulo-tabla-usuarios">
              <th>Agregar más partidas</th>
              <th>Continuar una partida</th>
            </tr>
          </thead>
                              
          <tbody>    
              <tr>
                  <td>
                    <button 
                      className="btn btn-primary modificar" 
                      type="button" 
                      onClick={() => { 
                        getIdPar('');
                        setShow2(!show2) ;}}
                      >{show2 ? 'Agregar' : 'Ocultar'} </button>
                  </td>
                  <td>
                    <button 
                      className="btn btn-primary modificar" 
                      type="button" 
                      onClick={() => { setShow3(!show3) ;}}
                      >{show3 ? 'Continuar' : 'Ocultar'} </button>
                  </td>
              </tr>  
          </tbody>          
      </Table>
      )}

      {show2 ? (
              <div >


              </div>
            ) : (
              
              <div  className="arregla"> 
                <div className="contenido-usuarios">
                  {" "}
                  <Animaciones mytext="Datos PTN" />{" "}
                </div>
                {/*========================== Llamado a los Componentes ==========================*/} 
                <Partida></Partida>
                            
                <DatosSP/>
                
               
              </div>
      )}

      {show3 ? (
              <div >


              </div>
            ) : ( 
              <div className="arregla"> 
                <div className="contenido-usuarios">
                <div>
                  {" "}
                  <Animaciones mytext="Partidas del Proyecto" />{" "}
                </div>

                  <Table responsive  striped bordered hover size="sm">
                      <thead>
                          <tr className="titulo-tabla-usuarios">
                              <th>ID</th>
                              <th>Nombre</th>
                              <th>Descripción</th>
                              <th>Continuar</th>
                          </tr>
                      </thead>
                                        
                      <tbody>
                          {Object.keys(listaPartidas).map((key) => (    
                              //checar aqui va los titulos
                              <tr key={listaPartidas[key].partida_id} >
                                  <td>{listaPartidas[key].partida_id}</td>   
                                  <td>{listaPartidas[key].partida_nombre}</td>  
                                  <td>{listaPartidas[key].partida_descripcion}</td> 
                                  <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={() => {
                                      getIdPar(listaPartidas[key].partida_id);
                                      setShow4(!show4);}}
                                    >  {show4 ? 'Continuar' : 'Ocultar Partida'} </button>
                                  </td> 
                              </tr>  
                          ))}
                      </tbody>          
                  </Table>
                  {show4 ? (
                          <div >


                          </div>
                        ) : (
                          
                          <div  className="arregla"> 
                             <div className="contenido-usuarios">
                              {" "}
                              <Animaciones mytext="Datos Servicios/Productos" />{" "}
                              </div>
                          {/*========================== Llamado al Componente ==========================*/} 
                            <DatosSP></DatosSP>
                          </div>
                  )}
                </div>
              </div>
              
      )}
      {show5 ? (
        <div></div>
      ):(
        <div  className="arregla"> 
          {/*======================== Llamar al componente Categorias ==========================*/}
          <Categorias />
        </div>
      )}
      
    </div>


  )
}

export default ContinuarProyecto