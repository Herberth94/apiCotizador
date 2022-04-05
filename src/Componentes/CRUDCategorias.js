import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Animaciones from './Animaciones';

import { EditPartida } from '../Routes/ModificarPartida';
import { CrudPartidas } from './CRUDPartidas';

import {url, url2} from "./Ocultar";

export const CrudCategorias = (props) => {
    
    /*================================================== Categorias ==================================================*/
        /*========================= Editar =========================*/
        const [activar, setActivar] = useState(true);

        const [data,setData] = useState ({
            proyecto_clave:'',
            proyecto_descripcion:''        
        });

        const handleInputChange = (event) => {
            setData ({
            ...data,[event.target.name] : event.target.value ,
        })
        }
        //console.log(props.usuarios);
        const [enable, setenable] = useState([])
        const [datos, Setdatos] = useState()

        useEffect(() => {
            Setdatos(props.dcats); 
            console.log(props.dcats);
        },[props.dcats]);


        useEffect(() => {
            let i = Object.keys(props.dcats)
            i = i.length
            //console.log(i)

            setenable(Array(i).fill(true));
            
        },[props.dcats])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr =[] 
            let p = Object.keys(props.dcats);
            p = p.length;
            for (let i = 0 ; i < p ; i++){
                if(i === key){
                    newArr[i]=!enable[i];
                }
                if(i !== key){
                    newArr[i]=true;
                }

            }   
            setenable(newArr);

        }
        /*==========================================================*/

    /*==============================================================================================================*/


    return (
        <div>
           {/* <form> */}
                {/****************************Lista de los Proyectos Creados ****************************************/}
                {/*============= Titulo Animación =============*/}
                <Animaciones mytext="Categorias " />

                <Table responsive  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Categoria</th>
                            <th># Parte</th>
                            <th>Descripción</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
                            <th>Comentarios</th>
                            <th>Modificar</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                                    
                    <tbody>
                        {Object.keys(props.dcats).map((key) => (    
                            <tr key={props.dcats[key].cd_id} >
                                <td>{props.dcats[key].cd_id}</td>  
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cat_nombre} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_clave" 
                                    ></input>
                                </td>   
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_no_parte} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td>  
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_descripcion} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td> 
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_meses} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td>   
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_semanas} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td>  
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.dcats[key].cd_comentarios} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td>  
                                <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{
                                        //props.envioDataP(activar,nombreC,props.clientes,datos,key,data);
                                        habilitar(key); 
                                        //props.setfirts(activar) ;
                                        setActivar(!activar)
                                    }}
                                    >
                                        {activar ? "Modificar":"Aceptar"}
                                    </button> 
                                </td> 
                                <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{
                                        //props.envioDataP(activar,nombreC,props.clientes,datos,key,data);
                                        //habilitar(key); 
                                        //props.setfirts(activar) ;
                                        //setActivar(!activar)
                                    }}
                                    >
                                        {activar ? "Ver precios":"Ocultar precios"}
                                    </button> 
                                </td>
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
            {/* </form> */}
        </div>
    )
}