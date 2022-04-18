import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../../Componentes/Animaciones";
import { url, url2 } from '../../../Componentes/Ocultar';
import Cookies from 'universal-cookie';
import {Partida_catalogo} from '../../../Ventas/Operaciones/totalPartida';
import AdministrarPropuesta from './AdministrarPropuesta';
import PEconomica from './PEconomica';





const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
//let validatorrol = cookies.get('rol');
let validatorrol ="administrador";
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');


function BuscadorInteligente3() {
    /*========================== Mostrar/Ocultar ==========================*/
    const [show,setShow] = useState([]); 
    const [show2,setShow2] = useState(true); // Resumen AM
    const [textBVer,setTextBVer] = useState([]);// Texto de los botones de mostrar
    /*=====================================================================*/

    /*======================================== Buscador de proyectos ========================================*/
    // Almacenamiento de todos los proyectos existentes
    const[listaProyectos, setListaProyectos] = useState([]);

    // Almacenamiento de los proyectos que tienen la clave semejante a la instroducida
    const[suggestions,setSuggestions] = useState([]);

    // Almacenamiento de la clave introducida del proyecto
    const[claveP,setClaveP] = useState([]);

    // Función que realiza la consulta a la tabla proyecto
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

    useEffect(()=>{
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
        setSuggestions(coincidencias);
        setClaveP(claveP);
    }
    /*=======================================================================================================*/
    useEffect(() => {
        let i = Object.keys(suggestions)
        i = i.length
        setShow(Array(i).fill(true));
        setTextBVer(Array(i).fill('Mostrar'));
    },[suggestions])

    const habilitar = (key) =>{
        key = parseInt(key);
        const newArr =[];
        const newArr2 = [];
        let c = Object.keys(suggestions);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !show[i];
                setShow2(!show2);
                if(show[i] === false){
                    newArr2[i] = 'Mostrar';
                }else{
                    newArr2[i] = 'Ocultar';
                }
            }
            if(i !== key){
                newArr[i]=true;
                newArr2[i] = 'Mostrar';
            }
        }   
        setShow(newArr);
        setTextBVer(newArr2);
    }
    
    const { 
        getTotalPar,
        getPorcentajesPar,
        getTotalCats,
        getPorcentajesCats,
        getDivisaProy,
        getPorcentajesCI} = Partida_catalogo();

    async function consultarTotalesP(id){
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

    return (
        <div className="contenido-usuarios">
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
                                <input  
                                className="agregar"
                                type="text"
                                name="proyecto_clave"
                                onChange={e => onChangeTextClaveP(e.target.value)}
                                value={claveP}
                                placeholder="Ingresa la clave del Proyecto" />
                            </td>
                        </tr>
                    </tbody>
                </Table>

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
                    <tr key={key} >
                        <td>{suggestions[key].proyecto_id}</td>   
                        <td>{suggestions[key].proyecto_clave}</td>  
                        <td>{suggestions[key].proyecto_descripcion}</td>  
                        <td>{suggestions[key].nombre_cliente}</td> 
                        <td>{suggestions[key].proyecto_fecha_creacion}</td>
                        <td>{suggestions[key].proyecto_estatus}</td> 
                        <td>
                            <button 
                            className="btn btn-primary Ver" 
                            onClick={() => {
                            consultarTotalesP(suggestions[key].proyecto_id);    
                            habilitar(key);
                            }}
                            >
                                {textBVer[key]}
                            </button>
                        </td> 
                    </tr>  
                    ))}
                </tbody>          
            </Table>
            {show2 ? (
                <div></div>
            ) : (
                <div className="arregla">
                    {/*========================== Llamado al Componente ==========================*/}
                    {/*           <CostosIndirectos/> */}
                    <PEconomica/>
                </div>
            )}
        </div>             
    </div>
  );
};
export default BuscadorInteligente3