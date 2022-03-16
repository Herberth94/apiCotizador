import React, {useEffect, useState, useRef} from 'react'
import "../css/Proyectos.css";
import Table from 'react-bootstrap/Table';
import axios from "axios";

function Proyectos() {
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
            setDatosProyecto([]);
            coincidencias = listaProyectos.filter(proyecto => {
            const regex = new RegExp(`${claveP}`, "gi");
            return proyecto.proyecto_clave.match(regex)
            })
        }
        setSuggestions(coincidencias);
        setClaveP(claveP);
    }
    
    /*== Almacenamiento del resúmen de un proyecto en especifico ==*/
    const[datosProyecto, setDatosProyecto] = useState([]);

    /*== Función que realiza la consulta de un proyecto en específico ==*/
    async function getDatosProyecto(id){
        try{
            const resProy = await axios.get(`http://localhost:4001/api/cotizador/proyecto/view2/${id}`);
            setDatosProyecto(resProy.data.data);
        }catch(error){
            console.log(error);
        }
    }


    return (
        <div className="contenido-usuarios">
            <div className="table-responsive">
             
                {/*============= Titulo Animación =============*/}
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Buscar Proyectos<span></span></h1>
                        </div>

                        <div className="role">
                            <div className="block"></div>
                            <p>Palo Tinto Networks</p>
                        </div>
                    </div>
                </div>

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
                            <th>Modificar</th>
                            <th>Detalles</th>
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
                                <td><button className="btn btn-primary eliminar">Eliminar</button></td>
                                <td><button className="btn btn-primary modificar">Modificar</button></td> 
                                <td><button className="btn btn-primary detalles" onClick={() => {getDatosProyecto(suggestions[key].proyecto_id)}}>Ver más</button></td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>

                {/******************Lista de los Datos Completos del Proyecto****************************************/}
                {/*============= Titulo Animación =============*/}
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Resumen BOM<span></span></h1>
                        </div>
                    </div>
                </div>
                <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>Partida </th>
                            <th>Descripción partida</th>
                            <th># Parte</th>
                            <th>Descripción producto</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
                            <th>Cantidad</th>
                            <th>Precio Lista</th>
                            <th>Precio Unitario</th>
                            <th>Desc(%)</th>
                            <th>Precio Total</th>
                            <th>Moneda</th>
                            <th>Proveedor</th>
                            <th>Marca</th>
                            <th>Categoria</th>
                            <th>Comentarios</th>
                        </tr>
                        </thead>

                        <tbody>
                            {Object.keys(datosProyecto).map((key) => (    
                            <tr key={datosProyecto[key].partida_id} >
                                <td>{datosProyecto[key].partida_nombre}</td>   
                                <td>{datosProyecto[key].partida_descripcion}</td>   
                                <td>{datosProyecto[key].sp_no_parte}</td>  
                                <td>{datosProyecto[key].sp_descripcion}</td>  
                                <td>{datosProyecto[key].sp_meses}</td> 
                                <td>{datosProyecto[key].sp_semanas}</td>
                                <td>{datosProyecto[key].sp_cantidad}</td>   
                                <td>{datosProyecto[key].precio_lista}</td>  
                                <td>{datosProyecto[key].precio_unitario}</td>  
                                <td>{datosProyecto[key].precio_descuento}</td> 
                                <td>{datosProyecto[key].precio_total}</td>
                                <td>{datosProyecto[key].moneda_nombre}</td>   
                                <td>{datosProyecto[key].proveedor_nombre}</td>  
                                <td>{datosProyecto[key].marca_nombre}</td>  
                                <td>{datosProyecto[key].categoria_nombre}</td> 
                                <td>{datosProyecto[key].sp_comentarios}</td>
                            </tr>  
                            ))
                            }
                        </tbody>
                </Table>
            </div>
        </div>
    );
}
export default Proyectos