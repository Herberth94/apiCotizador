import React, {useEffect, useState} from 'react'
import "../css/Proyectos.css";
import Table from 'react-bootstrap/Table';
import axios from "axios";

function Proyectos() {
    /*== Almacenamiento de todos los proyectos existentes ==*/
    const[listaProyectos, setListaProyectos] = useState([]);

    /*== Almacenamiento de los proyectos que tienen la clave semejante a la instroducida ==*/
    const[suggestionsProyecto,setSuggestionsProyectos] = useState([]);
    
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
        setSuggestionsProyectos(coincidencias);
        setClaveP(claveP);
    }

    /*== Almacenamiento de las partidas de un proyecto en especifico ==*/
    const[listaPartidas, setListaPartidas] = useState([]);
    
    /*== Almacenamiento de todos las partidas de un proyecto en específico ==*/
    async function getDatosPartida(proyecto_id){
        try{
            const resPP = await axios.get(`http://localhost:4001/api/cotizador/partida/viewPP/${proyecto_id}`);
            setListaPartidas(resPP.data.data);
        }catch(error){
            console.log(error);
        }
    }

    /*== Almacenamiento del los servicios_productos de una partida en especifica ==*/
    const[listaSP, setListaSP] = useState([]);

    /*== Función que realiza la consulta de los servicios_productos de una partida en específica ==*/
    async function getDatosSP(partida_id){
        try{
            const resProy = await axios.get(`http://localhost:4001/api/cotizador/partida/viewPSP/${partida_id}`);
            setListaSP(resProy.data.data);
        }catch(error){
            console.log(error);
        }
    }

    /*== Almacenamiento del los servicios_productos de una partida en especifica ==*/
    const[listaPrecios, setListaPrecios] = useState([]);

    /*== Función que realiza la consulta de los servicios_productos de una partida en específica ==*/
    async function getDatosPrecios(sp_id){
        try{
            const resProy = await axios.get(`http://localhost:4001/api/cotizador/precio/viewSPP/${sp_id}`);
            setListaPrecios(resProy.data.data);
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
                            <th>Modificar</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                                       
                    <tbody>
                        {Object.keys(suggestionsProyecto).map((key) => (    
                            //checar aqui va los titulos
                            <tr key={suggestionsProyecto[key].proyecto_id} >
                                <td>{suggestionsProyecto[key].proyecto_id}</td>   
                                <td>{suggestionsProyecto[key].proyecto_clave}</td>  
                                <td>{suggestionsProyecto[key].proyecto_descripcion}</td>  
                                <td>{suggestionsProyecto[key].nombre_cliente}</td> 
                                <td>{suggestionsProyecto[key].proyecto_fecha_creacion}</td>
                                <td>{suggestionsProyecto[key].proyecto_estatus}</td>
                                <td><button className="btn btn-primary modificar">Modificar</button></td> 
                                <td><button className="btn btn-primary detalles" onClick={() => {getDatosPartida(suggestionsProyecto[key].proyecto_id)}}>Ver partidas</button></td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
                
                {/****************************Lista de las partidas de un proyecto ****************************************/}
                {/*============= Titulo Animación =============*/}
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Resumen BOM<span></span></h1>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Partidas del Proyecto<span></span></h1>
                        </div>
                    </div>
                </div>

                <Table responsive  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                                       
                    <tbody>
                        {Object.keys(listaPartidas).map((key) => (    
                            //checar aqui va los titulos
                            <tr key={listaPartidas[key].partida_id} >
                                <td>{listaPartidas[key].partida_id}</td>   
                                <td>{listaPartidas[key].partida_nombre}</td>  
                                <td>{listaPartidas[key].partida_descripcion}</td> 
                                <td><button className="btn btn-primary eliminar">Eliminar</button></td>
                                <td><button className="btn btn-primary modificar">Modificar</button></td> 
                                <td><button className="btn btn-primary detalles" onClick={() => {getDatosSP(listaPartidas[key].partida_id)}}>Ver SP</button></td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
                {/******************Lista de los servicios/productos de una partida ****************************************/}
                {/*============= Titulo Animación =============*/}
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Servicios/Productos<span></span></h1>
                        </div>
                    </div>
                </div>

                <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th># Parte</th>
                            <th>Descripción</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
                            <th>Cantidad</th>
                            <th>Proveedor</th>
                            <th>Marca</th>
                            <th>Categoria</th>
                            <th>Comentarios</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                            <th>Detalles</th>
                        </tr>
                        </thead>

                        <tbody>
                            {Object.keys(listaSP).map((key) => (    
                            <tr key={listaSP[key].sp_id} >
                                <td>{listaSP[key].sp_no_parte}</td>  
                                <td>{listaSP[key].sp_descripcion}</td>  
                                <td>{listaSP[key].sp_meses}</td> 
                                <td>{listaSP[key].sp_semanas}</td>
                                <td>{listaSP[key].sp_cantidad}</td>     
                                <td>{listaSP[key].proveedor_nombre}</td>  
                                <td>{listaSP[key].marca_nombre}</td>  
                                <td>{listaSP[key].categoria_nombre}</td> 
                                <td>{listaSP[key].sp_comentarios}</td>
                                <td><button className="btn btn-primary eliminar">Eliminar</button></td>
                                <td><button className="btn btn-primary modificar">Modificar</button></td> 
                                <td><button className="btn btn-primary detalles" onClick={() => {getDatosPrecios(listaSP[key].sp_id)}}>Ver precios</button></td>
                            </tr>  
                            ))
                            }
                        </tbody>
                </Table>
                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Precios<span></span></h1>
                        </div>
                    </div>
                </div>
                <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>Precio Lista</th>
                            <th>Precio Unitario</th>
                            <th>Desc(%)</th>
                            <th>Precio Total</th>
                            <th>Moneda</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                        </tr>
                        </thead>

                        <tbody>
                            {Object.keys(listaPrecios).map((key) => (    
                            <tr key={listaPrecios[key].precio_id} >  
                                <td>{listaPrecios[key].precio_lista}</td>  
                                <td>{listaPrecios[key].precio_unitario}</td>  
                                <td>{listaPrecios[key].precio_descuento}</td> 
                                <td>{listaPrecios[key].precio_total}</td>
                                <td>{listaPrecios[key].moneda_nombre}</td>
                                <td><button className="btn btn-primary eliminar">Eliminar</button></td>
                                <td><button className="btn btn-primary modificar">Modificar</button></td>    
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