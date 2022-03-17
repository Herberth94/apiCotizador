import React, {useEffect, useState,} from 'react'
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
    const[listaProyectos, setListaProyectos] = useState([{
        proyecto_id:'',
        proyecto_clave:'',
        proyecto_descripcion:'',
        proyecto_id_cliente:'',
        proyecto_id_cat_c_a_sptn_ma:'',
        proyecto_fecha_creacion:'',
        proyecto_fecha_modificacion:''
    }]);
    const[suggestions,setSuggestions] = useState([]);
    /*========================== Almacenamiento de los clientes semejantes al texto introducido ==========================*/
    const[claveP,setClaveP] = useState([]);

    //const [suggestions, setSuggestions] = useState([]);

    const getProyectos = async () => {
        try{
            const resProy = await axios.get('http://localhost:4001/api/cotizador/proyecto/view1');
            setListaProyectos(resProy.data.data);
            //setSuggestions(resProy.data.data)
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getProyectos();
    },[])
        
    const onChangeTextClaveP = (claveP) => {
        //console.log(ListaC);
        let coincidencias = [];
        if(claveP.length>0){
            setDatosProyecto([]);
            coincidencias = listaProyectos.filter(proyecto => {
            const regex = new RegExp(`${claveP}`, "gi");
            return proyecto.proyecto_clave.match(regex)
            })
        }
        //console.log('Coincidencias: ',coincidencias);
        setSuggestions(coincidencias);
        setClaveP(claveP);
        //console.log(nombreC);
    }
    
    /*========================== Almacenamiento de los datos de un proyecto en especifico ==========================*/
    const[datosProyecto, setDatosProyecto] = useState([]);

    /*========================== Obtención de los datos de un proyecto en especifico ==========================*/
    async function getDatosProyecto(id){
        try{
            const resProy = await axios.get(`http://localhost:4001/api/cotizador/proyecto/view2/${id}`);
            setDatosProyecto(resProy.data.data);
            //console.log('Datos de un proyecto:',datosProyecto);
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
                                <th>Status</th>
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
            <td>Aprobado</td>  
            <td><button className="btn btn-primary eliminar">Eliminar</button></td>
            <td><button className="btn btn-primary modificar">Modificar</button></td> 
            <td><button className="btn btn-primary detalles" onClick={() => {getDatosProyecto(suggestions[key].proyecto_id)}}>Ver más</button></td> 
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