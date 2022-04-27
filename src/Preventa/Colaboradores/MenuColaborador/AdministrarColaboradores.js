import React, { useState,useEffect } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Cookies from 'universal-cookie';

//Componentes
import Animaciones from "../../../Componentes/Animaciones";
import {url,url2} from "../../../Componentes/Ocultar";
import { CrudColaboradores } from "../Routes/CRUDColaboradores";




const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');


function AdministrarColaboradores(props) {
  /*========================== Mostrar/Ocultar ==========================*/
  const [show2,setShow2] = useState(true);//Tabla colaboradores
  const [textBVer,setTextBVer] = useState([]);//Texto de los botones
  /*=====================================================================*/

  /*========================== Activar/Desactivar ==========================*/
  const [show,setShow] = useState([]);//Botones que muestran los colaboradores
  /*========================================================================*/

  /*======================================== Buscador de proyectos ========================================*/
  //Almacenamiento de todos los proyectos existentes
  const[listaProyectos, setListaProyectos] = useState([]);
  
  // Almacenamiento de la clave introducida del proyecto 
  const[claveP,setClaveP] = useState([]);

  // Función que realiza la consulta a la tabla proyectos 
  const getProyectos = async () => {
    try{
      if(validatorrol === "administrador"){
        const resProy = await axios.get(url + '/api/cotizador/proyecto/viewadmin');
        setListaProyectos(resProy.data.data);
    }else{
          const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
          setListaProyectos(resProy.data.data);
    }
    }catch(error){console.log(error);}
  }

  useEffect(()=>{
      getProyectos();
  },[])
  
  useEffect(()=>{
    if(claveP === ''){
      getProyectos();
    }
  },[claveP])

  /*== Función que realiza la busqueda de los proyectos semejantes a la clave introducida ==*/
  const onChangeTextClaveP = (claveP) => {
      let coincidencias = [];
      if(claveP.length>0){
          coincidencias = listaProyectos.filter(proyecto => {
          const regex = new RegExp(`${claveP}`, "gi");
          return proyecto.proyecto_clave.match(regex)
          })
      }
      setListaProyectos(coincidencias);
      setClaveP(claveP);
  }
  /*=======================================================================================================*/

  /*================================================== Colaboradores ==================================================*/
  //Almacenamiento de las marcas
  const [listaColabs, setListaColabs] = useState([]);
  //Función que consulta todas las marcas existentes
  const getColabs = async (pId) => {
      try {
          if(props.estado){
            const resColabs =  await axios.get(url2 + `/api/cotizador/viewUsersVentaP/${pId}`);
            setListaColabs(resColabs.data.reSql);
          }else{
            const resColabs =  await axios.get(url2 + `/api/cotizador/colaboradores/view/${pId}`);
            setListaColabs(resColabs.data.data);
          }
          
      } catch(error){console.log(error)}
      console.log(listaColabs);
  }
  /*===================================================================================================================*/
  
  useEffect(() => {
    let i = Object.keys(listaProyectos)
    i = i.length
    setShow(Array(i).fill(true));
    setTextBVer(Array(i).fill('bi bi-eye'));
  },[listaProyectos])

  const habilitar2 = (key) =>{
    key = parseInt(key);
    const newArr =[];
    const newArr2 = [];
    let c = Object.keys(listaProyectos);
    setShow(Array(c).fill(true));
    setTextBVer(Array(c).fill('bi bi-eye'));
    // console.log('suggesKeys:',listaProyectos);
    // console.log('suggesKeys:',c);
    c = c.length;
    for (let i = 0 ; i < c ; i++){
        if(i === key){
            newArr[i] = !show[i];
            setShow2(newArr[i]);
            if(show[i] === false){
                newArr2[i] = 'bi bi-eye';
            }else{
                newArr2[i] = 'bi bi-eye-slash-fill';
            }
        }
        if(i !== key){
            newArr[i]=true;
            newArr2[i] = ' bi bi-eye ';
        }
    }   
    setShow(newArr);
    setTextBVer(newArr2);
}

  return (
    <div className="contenido-usuarios">
      <div className="table-responsive">
        {/*========================== Titulo Animación =======================*/}
        <div> <Animaciones   mytext= "Buscar proyecto"   /> </div>

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
        <div> <Animaciones mytext="Lista de Proyectos" /></div>

        <Table responsive  striped bordered hover size="sm">
            <thead>
              <tr className="titulo-tabla-usuarios">
                <th>ID</th>
                <th>Clave</th>
                <th>Descripción</th>
                <th>Cliente</th>
                <th>Fecha de creción</th>
                <th>Fecha de modificación</th>
                <th>Estatus</th>
                <th>Plazo de meses</th>
                <th>{props.estado ? "Colaboradores Ventas" : "Colaboradores"}</th>
              </tr>
            </thead>
                                
            <tbody>
            {Object.keys(listaProyectos).map((key) => (    
                <tr key={key} >
                    <td>{listaProyectos[key].proyecto_id}</td>   
                    <td>{listaProyectos[key].proyecto_clave}</td>  
                    <td>{listaProyectos[key].proyecto_descripcion}</td>  
                    <td>{listaProyectos[key].nombre_cliente}</td> 
                    <td>{listaProyectos[key].proyecto_fecha_creacion}</td>
                    <td>{listaProyectos[key].proyecto_fecha_modificacion}</td>
                    <td>{listaProyectos[key].proyecto_estatus}</td>  
                    <td>{listaProyectos[key].proyecto_plazo_meses}</td> 
                    <td width={"100"}>
                      <button 
                        className="btn btn-primary Ver" 
                        type="button" 
                        onClick={() => {
                          habilitar2(key);
                          getColabs(listaProyectos[key].proyecto_id);
                        }}
                        > 
                         
                          <i className= {textBVer[key]} ></i>
                        </button>
                    </td>
                </tr>  
            ))}
            </tbody>          
        </Table>
        <div>
          {show2 ? (
            <div>
              {/*=================== Ocultar Lista DIV  =========================*/}
            </div>
          ) : (
            <div>
            {/*=================== Botón Mostrar Lista DIV =====================*/}
            <br />
            <CrudColaboradores
                colabs={listaColabs}
                estado={props.estado}
                //envioData={envioData}
                //setfirst={setfirst}
            />
        </div>  
          )}
        </div>
      </div>
    </div>
  );
}

export default AdministrarColaboradores;