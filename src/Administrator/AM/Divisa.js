import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";



import {url2} from "../../Componentes/Ocultar";
import {url} from "../../Componentes/Ocultar";



function Divisa() {
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

    const [datosDivisa, setDatosDivisa] = useState({
        am_valor_dolar: ''
    })
    const handleInputChange = (event) => {
        setDatosDivisa ({
            ...datosDivisa,[event.target.name] : event.target.value
        })
    }

    /*== Función que agrega una divisa a un proyecto en específico ==*/
    async function enviarDivisa(id){

        const data = {
            am_valor_dolar: datosDivisa.am_valor_dolar
        };
        console.log(id)
        try{
            const resProy = await axios.post(url2 + `/api/cotizador/am/agregar/${id}`,data);
            const enviarDatos2 = resProy.data
            console.log(enviarDatos2);
            alert('Registro exitoso')
            // setDatosProyecto(resProy.data.data);
        }catch (error){
            console.log(error);
        }
    }
  return (
    <div className="contenido-usuarios">
            {/*======================= Titulo Animación =======================*/}
            <div> <Animaciones mytext="Divisa" /> </div>
                {/*********Búsqueda de Proyectos AM ********/}

                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="azul">
                                <th>Clave Proyecto</th>
                                <th>Valor Dolar</th>
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
                                        placeholder="Clave Proyecto" />
                                </td>
                                <td>
                                    <input className="agregar"
                                        type="text"
                                        name="am_valor_dolar"
                                        placeholder="Ingrese Divisa"
                                        onChange={handleInputChange} />
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
                            <th>Agregar divisa</th>
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
                                <td><button className="btn btn-primary" onClick={() => {enviarDivisa(suggestions[key].proyecto_id)}}>Agregar</button></td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
            </div>


    </div>
  )
}

export default Divisa