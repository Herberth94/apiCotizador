import React, {useEffect, useState} from 'react'
import "../css/Proyectos.css";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { EditProyecto } from '../../Routes/ModificarProyectos';
import { EditSP } from '../../Routes/ModificarSP';
import Cookies from 'universal-cookie';
import Animaciones from '../../Componentes/Animaciones';
import {CrudProyectos} from '../../Componentes/CRUDProyectos';


import {url, url2} from "../../Componentes/Ocultar";


const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

function Proyectos() {
/*======================================== Buscador de proyectos ========================================*/
    // Almacenamiento de todos los proyectos existentes
    const[listaProyectos, setListaProyectos] = useState([]);

    // Almacenamiento de los proyectos que tienen la clave semejante a la instroducida
    const[suggestionsProyecto,setSuggestionsProyectos] = useState([]);
    
    // Almacenamiento de la clave introducida del proyecto
    const[claveP,setClaveP] = useState([]);

    // Almacenamiento de los clientes existentes
    const [ListaC, setListaC] = useState ([]);

    // Función que realiza la consulta a la tabla proyecto
    useEffect(()=>{
        const getProyectos = async () => {
            try{
                if(validatorrol === "administrador"){
                    const resProy = await axios.get(url +'/api/cotizador/proyecto/viewadmin');
                    setListaProyectos(resProy.data.data);
                }else{
                    const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
                    setListaProyectos(resProy.data.data);
                }
                
                const resC = await axios.get(url + "/api/cotizador/clientes/view");
                setListaC(resC.data.reSql);
            }catch(error){console.log(error);}
        }
        getProyectos();
    },[])
    
    // Función que realiza la busqueda de los proyectos semejantes a la clave introducida 
    const onChangeTextClaveP = (claveP) => {
        let coincidencias = [];
        if(claveP.length>0){
            coincidencias = listaProyectos.filter(proyecto => {
            const regex = new RegExp(`${claveP}`, "gi");
            return proyecto.proyecto_clave.match(regex)
            })
        }
        setSuggestionsProyectos(coincidencias);
        setClaveP(claveP);
    }
    /*=======================================================================================================*/

    /*=================================== Edición de los datos de un proyecto ===================================*/
    const [first, setfirst] = useState(false);
    
    const {actualizacionProy} = EditProyecto();

    const envioDataProy =  (activar,cliente, dataCliente, data, key, newdata) => {
        //console.log(data[key])
        // console.log(newdata)
        // console.log(dataCliente);
        // console.log(cliente);
        //actualizacionProy(cliente,dataCliente,data[key],newdata);
        //actualizacionProy(cliente,dataCliente,data[key],newdata);
        setfirst(activar);
        if(first){
            actualizacionProy(cliente[key],dataCliente,data[key],newdata);
        } 
    }
    /*===========================================================================================================*/

    /*===========================================================================================================*/
    return (
        <div className="contenido-usuarios">
            <div className="table-responsive">
                {/*============= Titulo Animación =============*/}
                <Animaciones mytext="Buscar proyectos" />

                {/*********Búsqueda de Lista de Proyectos por Clave ********/}
                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="titulo-tabla-usuarios">
                                <th>Búsqueda por clave</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
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
                </div>
                <div>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                    <CrudProyectos
                        suggestionsP={suggestionsProyecto}
                        clientes={ListaC}
                        setfirst={setfirst}
                        envioDataP={envioDataProy}
                    />    
                </div>
            </div>
        </div>
    );
}
export default Proyectos