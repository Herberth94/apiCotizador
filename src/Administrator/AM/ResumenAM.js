import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";
import { url, url2 } from "../../Componentes/Ocultar";

import {partidasUnicas, descripcionGeneral, totalMXN, totalUSD, monedaPTN2} from "./OperacionesAM";


function ResumenAM() {
    //Habilitar/Deshabilitar tabla del resumen AM
    const [show, setShow] = useState(true)

    /*======================================== Buscador de proyectos ========================================*/
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
                const resProy = await axios.get(url + '/api/cotizador/proyecto/view1');
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
    /*=======================================================================================================*/

    
    /*=============================== Función que consulta los datos de un proyeco para el resumen AM ===============================*/
    // Almacenamiento de datos
    const [totalesP,setTotalesP] = useState([]);

    async function consultarTotalesP(id){
        //console.log(id)
        try{
            const resProy = await axios.get(url2 + `/api/cotizador/am/viewAM/${id}`);
            setTotalesP(resProy.data.data);
            
        }catch (error){
            console.log(error);
        }
        console.log(totalesP);
    }
    /*===============================================================================================================================*/
    return (
        <div className="contenido-usuarios">
            <div>
                {" "}
                <Animaciones mytext="Resumen AM" />{" "}
            </div>

            <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="azul">
                                <th>Clave Proyecto</th>
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
                                        placeholder="Ingresa la clave del Proyecto" />
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
                            <th>Resumen AM</th>
                        </tr>
                    </thead>
                                       
                    <tbody>
                        {Object.keys(suggestions).map((key) => (    
                            //checar aqui va los titulos
                            <tr key={suggestions[key].proyecto_id} >
                                <td>{suggestions[key].proyecto_id}</td>   
                                <td>{suggestions[key].proyecto_clave}</td>  
                                <td>{suggestions[key].proyecto_descripcion}</td>  
                                <td>{suggestions[key].nombre_cliente}</td> 
                                <td>{suggestions[key].proyecto_fecha_creacion}</td>
                                <td>{suggestions[key].proyecto_estatus}</td> 
                                <td>
                                    <button 
                                    className="btn btn-primary" 
                                    onClick={() => {consultarTotalesP(suggestions[key].proyecto_id);setShow(!show)}}
                                    >{show ? 'Ver mas':'Ocultar proyecto'}</button>
                                </td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
            </div>
            {show ? (
                <div></div>
            ):(
                <div className="arregla">
                    <div className="contenido-usuarios">
                    <Table responsive striped bordered hover size="sm" className="tablas">
                        <thead>
                            {/*=================== Titulos Tabla Clientes ===================*/}
                            <tr className="titulo-tabla-usuarios">
                                <th>Nombre Partida</th>
                                <th>Descripción General </th>
                                <th>Total MXN</th>
                                <th>Total USD</th>
                                <th>Total Moneda Bom</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/*=================== Contenido Tabla Clientes =================*/}

                            {Object.keys(partidasUnicas).map((key) => (
                                <tr key={partidasUnicas[key]}>
                                    <td>{partidasUnicas[key]}</td>

                                    {/*================= Descripcion General Partida ==================*/}
                                    <td>{descripcionGeneral[key]}</td>
                                    {/*================= Total MXN ==================*/}
                                    <td>{totalMXN[key]}</td>
                                    {/*================= Total USD ==================*/}

                                    <td>{totalUSD[key]}</td>

                                    {/*================= Total Moneda Bom ==================*/}

                                    <td>{monedaPTN2[key]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
            )}
        </div>
    );
}

export default ResumenAM;
