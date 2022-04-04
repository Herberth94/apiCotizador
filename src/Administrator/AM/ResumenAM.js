import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Partida_catalogo} from '../../Componentes/totalPartida'
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
import Animaciones from "../../Componentes/Animaciones";
import { url, url2 } from '../../Componentes/Ocultar';

import { partidasUnicas2, Cantidad,descuentoCliente, monedaPTN, prov, listaProv,desFabrica, costoPTN, margenGanancia, precioVenta , margenDirecto ,
precioFinalVenta,
costoSinIndirectos,
costoFianalProyecto
} from "./OperacionesAM.js";

const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
//let validatorrol = cookies.get('rol');
let validatorrol ="administrador";
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');
const ResumenAM = () => {
    const { getTotalPar,getPorcentajesPar,getTotalCats,getPorcentajesCats,getDivisaProy,getPorcentajesCI} = Partida_catalogo()
    
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
    
    
    /*=============================== Función que consulta los datos de un proyeco para el resumen AM ===============================*/  
    async function consultarTotalesP(id){          //console.log(id)
        try{
            const resTotPar = await axios.get(url2 + `/api/cotizador/am/viewTotalesPartidas/${id}`);
            getTotalPar(resTotPar.data.data);

            const resAMPar = await axios.get(url2 + `/api/cotizador/am/viewAMPartidas/${id}`);
            getPorcentajesPar(resAMPar.data.data);

            const resTotCats = await axios.get(url2 + `/api/cotizador/am/viewTotalesCategorias/${id}`);
            getTotalCats(resTotCats.data.data);

            const resAMCats = await axios.get(url2 + `/api/cotizador/am/viewAMCategorias/${id}`);
            getPorcentajesCats(resAMCats.data.data);

            const dProy = await axios.get(url2 + `/api/cotizador/am/viewDivisa/${id}`);
            getDivisaProy(dProy.data.data);

            const resCI = await axios.get(url2 + `/api/cotizador/ci/view/${id}`);
            getPorcentajesCI(resCI.data.data);

        }catch (error){
            console.log(error);
        }
        
        //console.log('Categorias',totalCategorias);
    }
    /*===============================================================================================================================*/
    
    
    
    //const {consultarTotalesP} = GetDatosProyecto();
    
    return (

        <div className="contenido-usuarios">

            <div> <Animaciones mytext="AM COMPLETO" /> </div>
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
                <div> <Animaciones mytext="Proyectos " /> </div>

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
                                    onClick={() => {
                                        consultarTotalesP(suggestions[key].proyecto_id);
                                        setShow(!show);}}
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
                                    <th className="listacl">Lista cl </th>
                                    <th>Desc. Cliente % </th>
                                    <th>Precio Venta </th>
                                    <th>Margen de Ganancia %</th>
                                    <th>Precio Lista Unitario Prov</th>
                                    <th>Cantidad</th>
                                    <th>Lista Prov</th>
                                    <th>Desc Fabrica %</th>
                                    <th>Costo PTN</th>
                                    <th>Margen Directo %</th>
                                    <th>Editar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*=================== Contenido Tabla Clientes =================*/}

                                {Object.keys(datosCompletosAM).map((key) => (
                                    <tr key={datosCompletosAM[key]}>
                                        <td>{datosCompletosAM[key]}</td>

                                        {/*================= Descripcion General Partida ==================*/}
                                        <td> {" $ "} {datosCompletosTotal[key]}</td>
                                        {/*================= Descuento Cliente ==================*/}
                                        <td className="editar" >{ descuentoCliente[key]}  {" % "}   </td>

                                    {/*================= Precio Venta ==================*/}
                                    <td> {"$"} {precioVenta[key]} </td>

                                    {/*================= Margen Ganancia==================*/}
                                        <td  className="editar" >{margenGanancia[key]}   {" % "} </td>

                                        {/*================= PrecioLista Unitario ==================*/}

                                        <td>{" $ "} {prov[key]}</td>

                                {/*================= Cantidad ==================*/}
                                        <td className="editar">{Cantidad[key]}</td>


                                        <td>{" $ "} {listaProv[key]}</td>


                                        <td  className="editar"> {desFabrica[key]}  {" % "} </td>
                                    {/*================= Cost PTN ==================*/}
                                        <td >{" $ "} {costoPTN[key]}  </td>


                                        <td>{margenDirecto[key] } {" % "}</td>


                                        
                                        <td>

                                            <button className="btn btn-primary"> Editar </button>


                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>

                        <div>
                            <Table responsive striped bordered hover size="sm" className="tablas">
                                <thead>
                                    {/*=================== Titulos Tabla Clientes ===================*/}
                                    <tr className="titulo-tabla-usuarios">
                                        <th>Precio Final de Venta</th>
                                        <th>Costo (Sin Indirecto)</th>
                                        <th>Costo Final del Proyecto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/*=================== Contenido Tabla Clientes =================*/}
                                            <tr >
                                            <td className='amarillo'> {" $ "} {precioFinalVenta } </td>  
                                            <td className='azul'>{" $ "} {costoSinIndirectos}</td>    
                                            <td className='verde'>{" $ "} {costoFianalProyecto}</td>      
                                            </tr >
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                    
            )}
        </div>
    )
}

export default ResumenAM