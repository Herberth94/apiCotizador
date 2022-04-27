import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
import Animaciones from "../../../Componentes/Animaciones";
import Financiamiento from './Financiamiento';
import ModificarFinanciamiento from './ModificarFinanciamiento';
import { url, url2 } from "../../../Componentes/Ocultar";
const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
let validatorrol = cookies.get('rol');
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

let idAsignado;

function BuscadorProyectoFinanciamiento() {
    /*== Almacenamiento de todos los proyectos existentes ==*/
    const [listaProyectos, setListaProyectos] = useState([]);
    /*== Almacenamiento de la clave introducida del proyecto ==*/
    const [claveP, setClaveP] = useState([]);

    //Habilitar/Deshabilitar tabla del financiamiento
    const [show, setShow] = useState([])
    const [show2, setShow2] = useState(true)
    const [textBVer,setTextBVer] = useState([]);//Texto de los botones de detalles


    const getProyectos = async () => {
        try {
            if (validatorrol === "administrador") {
                const resProy = await axios.get(url + '/api/cotizador/proyecto/viewadmin');
                setListaProyectos(resProy.data.data);
            } else {
                const resProy = await axios.get(url2 + `/api/cotizador/proyecto/viewpreventas/${validatorid}`);
                setListaProyectos(resProy.data.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    /*== Función que realiza la consulta a la tabla proyectos ==*/
    useEffect(() => {
        getProyectos();
    }, [])

    useEffect(()=>{
        if(claveP === ''){
          getProyectos();
        }
    },[claveP])

    /*== Función que realiza la busqueda de los proyectos semejantes a la clave introducida ==*/
    const onChangeTextClaveP = (claveP) => {
        let coincidencias = [];
        if (claveP.length > 0) {
            coincidencias = listaProyectos.filter(proyecto => {
                const regex = new RegExp(`${claveP}`, "gi");
                return proyecto.proyecto_clave.match(regex)
            })
        }
        setListaProyectos(coincidencias);
        setClaveP(claveP);
    }

    function getProyId (pId){
        idAsignado = pId;
    }
    /*============================================================================================================*/

    useEffect(() => {
        let i = Object.keys(listaProyectos)
        i = i.length
        setShow(Array(i).fill(true));
        setTextBVer(Array(i).fill('Mostrar'));
    },[listaProyectos])

    const habilitar = (key) =>{
        //console.log(key);
        key = parseInt(key);
        const newArr =[];
        const newArr2 = [];
        let c = Object.keys(listaProyectos);
        c = c.length;
        setShow(Array(c).fill(true));
        setTextBVer(Array(c).fill('Mostrar'));
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !show[i];
                setShow2(newArr[i]);
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
                        </tr>
                    </tbody>
                </Table>
                {/****************************Lista de los Proyectos Creados ****************************************/}
                {/*============= Titulo Animación =============*/}
                <div> <Animaciones mytext="Proyectos" /> </div>

                <Table responsive striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Clave</th>
                            <th>Descripción</th>
                            <th>Cliente</th>
                            <th>Fecha de creación</th>
                            <th>Fecha de modificación</th>
                            <th>Estatus</th>
                            <th>Plazo de meses</th>
                            <th>Datos Financiamiento</th>
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
                                <td>
                                    <button
                                    className="btn btn-primary Mod"
                                    onClick={() => {
                                        getProyId(listaProyectos[key].proyecto_id);
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
                        <br />
                        {/*========================== Llamado al Componente modificar financiamiento ==========================*/}
                        <ModificarFinanciamiento propIdProyecto={idAsignado} />
                    </div>
                )}
            </div>


        </div>
    )
}

export default BuscadorProyectoFinanciamiento