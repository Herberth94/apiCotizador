import React, {useEffect, useState, useRef} from 'react'
import "../css/Proyectos.css";
import Table from 'react-bootstrap/Table';
import axios from "axios";

// const listaProyectos = [
//     {id: 1, clave: 'PTN-BOM-01', descripcion: 'Prueba 1' , status: 'Aprobado'},
//     {id: 2, clave: 'PTN-BOM-02', descripcion: 'Prueba 2' , status: 'Rechazado'},
//     {id: 3, clave: 'PTN-BOM-03', descripcion: 'Prueba 3' ,status: 'Rechazado'}
//   ];

function Proyectos() {
    /*========================== Buscador de proyectos ==========================*/
    /*========================== Almacenamiento de proyectos a buscar ==========================*/
    const[listaProyectos, setListaProyectos] = useState([]);
    const[datoClave,setDatoClave] = useState('')

    // const lp = useRef([{
    //     proyecto_id:'',
    //     proyecto_clave:'',
    //     proyecto_descripcion:'',
    //     nombre_cliente:'',
    //     proyecto_fecha_creacion:''
    // }]);
    /*========================== Almacenamiento de los clientes semejantes al texto introducido ==========================*/
    const [suggestions, setSuggestions] = useState([]);

    const onChangeClaveProyecto = (datoClave) => {
        setDatoClave(datoClave);
        var coincidencias = listaProyectos.filter(clave => {
            if(clave.proyecto_clave.toLocaleLowerCase().includes(datoClave.toLocaleLowerCase)){
                return clave
            }
        })
        console.log('Coincidencias: ',coincidencias);
        setSuggestions(coincidencias);
        setDatoClave(datoClave);
    }
    
    useEffect(()=>{
        const getProyectos = async () => {
            try{
                const resProy = await axios.get('http://localhost:4001/api/cotizador/proyecto/view1');
                setListaProyectos(resProy.data.data);
                //setListaProyectos(resProy.data.data);
                //lp = resProy.data.data;
            }catch(error){
                console.log(error);
            }
        }
        getProyectos();
    },[])
    //console.log(listaProyectos);
    // function getP(lp){
    //     return lp
    // };
    /*========================== Almacenamiento de los datos de un proyecto en especifico ==========================*/
    const[datosProyecto, setDatosProyecto] = useState([]);
    async function getDatosProyecto(id){
        try{
            const resProy = await axios.get(`http://localhost:4001/api/cotizador/proyecto/view2/${id}`);
            setDatosProyecto(resProy.data.data);
            //setListaProyectos(resProy.data.data);
            console.log('Datos de un proyecto:',datosProyecto);
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


                {/*********Búsqueda de Lista de Proyectos por Nombre Proyecto, Clave, Cliente, Fecha ********/}
                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="titulo-tabla-usuarios">
                                <th>Búsqueda por clave</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <input className="agregar"
                                        type="text"
                                        name="proyecto_clave"
                                        onChange={e => onChangeClaveProyecto(e.target.value)}
                                        value={datoClave}
                                        placeholder="Ingrese clave del proyecto" />
                                </td>
                                <td>
                                    <button className="btn btn-primary"> Buscar</button>
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
                                <th>Status</th>
                                <th>Eliminar</th>
                                <th>Modificar</th>
                                <th>Detalles</th>
                            </tr>
                    </thead>
                                       
    <tbody>
      {Object.keys(listaProyectos).map((key) => (    
          //checar aqui va los titulos
        <tr key={listaProyectos[key].proyecto_id} >
            <td>{listaProyectos[key].proyecto_id}</td>   
            <td>{listaProyectos[key].proyecto_clave}</td>  
            <td>{listaProyectos[key].proyecto_descripcion}</td>  
            <td>{listaProyectos[key].nombre_cliente}</td> 
            <td>{listaProyectos[key].proyecto_fecha_creacion}</td>
            <td>Aprobado</td>  
            <td><button className="btn btn-primary eliminar">Eliminar</button></td>
            <td><button className="btn btn-primary modificar">Modificar</button></td> 
            <td><button className="btn btn-primary detalles" onClick={() => {getDatosProyecto(listaProyectos[key].proyecto_id)}}>Ver más</button></td> 
        </tr>  
       ))
      }
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
                        //checar aqui va los titulos
                        <tr key={datosProyecto[key].partida_nombre} >
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