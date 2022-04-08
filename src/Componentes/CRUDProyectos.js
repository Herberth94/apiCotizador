import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Animaciones from './Animaciones';

//Componentes
import {url, url2} from "./Ocultar";
import { EditPartida } from '../Routes/ModificarPartida';
import { EditCats } from '../Routes/ModificarCategorias';
import { CrudPartidas } from './CRUDPartidas';
import { CrudCategorias } from './CRUDCategorias';

let pId;

export const CrudProyectos = (props) => {
    /*======================================== Habilitar/Deshabilitar secciones ========================================*/
    const[show,setShow] = useState(true); //Menu resumen
    const[show2,setShow2] = useState(true); //Lista de partidas
    const[show3,setShow3] = useState(true); //Lista de categorias

    /*================================================== Proyectos ==================================================*/
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
        // Almacenamiento del nombre del cliente a buscar
        const [nombreC, setNombreC] = useState([]);
        // Almacenamiento de los clientes semejantes al texto introducido en el input
        const [suggestionsClientes, setSuggestionsClientes] = useState ([]);

        //const [sCInput, setScInput] = useState([]);

        useEffect(() => {
            Setdatos(props.suggestionsP); 
        },[props.suggestionsP]);


        useEffect(() => {
            let i = Object.keys(props.suggestionsP)
            i = i.length
            //console.log(i)

            setenable(Array(i).fill(true));

            const arrayNombresC = []
            //console.log(enable);
            for(let c = 0 ; c < i ;c++){
                arrayNombresC[c] = props.suggestionsP[c].nombre_cliente;
            }
            setNombreC(arrayNombresC);

            
        },[props.suggestionsP])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr =[] 
            let p = Object.keys(props.suggestionsP);
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

            const arrayNombresC = [];

            if (activar === true){
                for(let c = 0 ; c < p ;c++){
                    if(c === key){
                        arrayNombresC[c] = '';
                    }else{
                        arrayNombresC[c] = nombreC[c];
                    }
                
                }
                setNombreC(arrayNombresC);
            }
        }
        /*==========================================================*/

        /*=================================== Buscador de clientes ===================================*/
        // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
        const onChangeTextCliente = (nombreCliente, key) => {
            let coincidencias = [];
            if(nombreCliente.length>0){
            coincidencias = props.clientes.filter(cliente => {
                const regex = new RegExp(`${nombreCliente}`, "gi");
                return cliente.nombre_cliente.match(regex)
                })
            }
            setSuggestionsClientes(coincidencias);

            key = parseInt(key);
            let i = Object.keys(props.suggestionsP)
            i = i.length;
            const arrayNombresC = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresC[c] = nombreCliente;
                }else{
                    arrayNombresC[c] = nombreC[c];
                }
            }
            setNombreC(arrayNombresC);

            // const arraySC = [];
            // for(let c = 0 ; c < i ; c++){
            //     arraySC[c] = coincidencias;
            // }
            // setScInput(arraySC);

            //console.log('clientes de cada input:',arraySC);
            //setNombreC1(nombreCliente);
            //console.log('nombres clientes:',nombreC);
        }

        // Función que obtiene el nombre del cliente seleccionado
        const onSuggestHandler = (nC, key) => {
            //console.log(nC);
            key = parseInt(key);
            let i = Object.keys(props.suggestionsP)
            i = i.length;
            const arrayNombresC = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresC[c] = nC;
                }else{
                    arrayNombresC[c] = nombreC[c];
                }
            }
            setNombreC(arrayNombresC);
            //console.log('array de nombreC seleccionado:', nombreC);
            //setNombreC(nombreC);
            setSuggestionsClientes([]);
        }

        function getIdP (proyecto_id){
            pId = proyecto_id;
            //console.log(pId);
        }
        /*============================================================================================*/
    /*===============================================================================================================*/

    /*================================================== Partidas ==================================================*/
        /*========================= Resumen - Partidas de un proyecto =========================*/
        // Almacenamiento de las partidas
        const[listaPartidas, setListaPartidas] = useState([]);
        
        // Función que realiza la consulta a la tabla partida
        async function getDatosPartida(proyecto_id){
            try{
                const resPP = await axios.get(url2 + `/api/cotizador/partida/viewPP/${proyecto_id}`);
                    setListaPartidas(resPP.data.data);
            }catch(error){
                console.log(error);
            }
        }
        /*=====================================================================================*/

        /*========================= Envío de nuevos datos =========================*/
        const [first,setfirst] = useState(false);

        const {actualizacionPar} = EditPartida();
        
        const envioDataPartida = (data, key, newdata) => {
            if(first){
                actualizacionPar(data[key], newdata);
            }
        }
        /*=========================================================================*/
    /*==============================================================================================================*/

    /*================================================== Categorias ==================================================*/
        /*========================= Resumen - Categorias de un proyecto =========================*/
        // Almacenamiento de los datos de las categorias
        const[listaCategorias, setListaCategorias] = useState([]);
        
        // Función que realiza la consulta a la tabla partida
        async function getDatosCats(proyecto_id){
            try{
                const resCtsP = await axios.get(url2 + `/api/cotizador/catd/view/${proyecto_id}`);
                    setListaCategorias(resCtsP.data.data);
            }catch(error){
                console.log(error);
            }
        }
        /*=====================================================================================*/

        /*========================= Envío de nuevos datos =========================*/
        const [first1,setfirst1] = useState(false);

        const {actualizacionCats} = EditCats();
        
        const envioDataCats = (estado,data, key, newdata) => {
            if(first1){
                actualizacionCats(estado,data[key], newdata);
            }
        }
        /*=========================================================================*/
    /*==============================================================================================================*/


    return (
        <div>
           {/* <form> */}
                {/****************************Lista de los Proyectos Creados ****************************************/}
                {/*============= Titulo Animación =============*/}
                <Animaciones mytext="Proyectos " />

                <Table responsive  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th>Clave</th>
                            <th>Descripción</th>
                            <th>Cliente</th>
                            <th>Fecha de creación</th>
                            <th>Fecha de modificación</th>
                            <th>Estatus</th>
                            <th>Modificar</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                                    
                    <tbody>
                        {Object.keys(props.suggestionsP).map((key) => (    
                            <tr key={props.suggestionsP[key].proyecto_id} >
                                <td>{props.suggestionsP[key].proyecto_id}</td>  
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.suggestionsP[key].proyecto_clave} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_clave" 
                                    ></input>
                                </td>   
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={props.suggestionsP[key].proyecto_descripcion} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td>  
                                <td>
                                {" "}
                                <input
                                    className="agregar"
                                    type="text"
                                    name="nombre_cliente"
                                    disabled={enable[key]}
                                    value={nombreC[key]}
                                    onChange={e => onChangeTextCliente(e.target.value,key)}
                                    />
                                    {Object.keys(suggestionsClientes).map((i)=>
                                    <div 
                                    key={i}
                                    className="selectCliente" 
                                    onClick={() => onSuggestHandler(suggestionsClientes[i].nombre_cliente, key)}
                                    >
                                        {suggestionsClientes[i].nombre_cliente}
                                    </div>
                                    )}
                                </td> 
                                <td>{props.suggestionsP[key].proyecto_fecha_creacion}</td>
                                <td>{props.suggestionsP[key].proyecto_fecha_modificacion}</td>
                                <td>{props.suggestionsP[key].proyecto_estatus}</td>
                                <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{
                                        props.envioDataP(activar,nombreC,props.clientes,datos,key,data);
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
                                    className="btn btn-primary detalles" 
                                    onClick={() => { 
                                        getIdP(props.suggestionsP[key].proyecto_id);
                                        setShow(!show)}}
                                    >
                                        {show ? 'Ver más' : 'Ocultar partidas'}
                                    </button>
                                </td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
                {show ? (
                    <div></div>
                ):(
                    <div className='arregla'>
                        <div className='contenido-usuarios'>
                            <div className="table-responsive">
                                <div>
                                    <Animaciones mytext="Resumen" /> 
                                </div>
                                <Table responsive id="nombreDiv">
                                    {/*========================== Titulos Tabla ==========================*/}
                                    <thead>
                                        <tr className="titulo-tabla-usuarios">
                                            <th>Resumen  Partidas</th>
                                            <th>Resumen Categorias</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="">
                                            {/*========================== Divisa ==========================*/}
                                            <td>
                                                <button
                                                className="btn btn-primary modificar"
                                                type="button"
                                                onClick={() => {
                                                getDatosPartida(pId); 
                                                setShow2(!show2);
                                                setShow3(true);
                                                }}
                                                >
                                                {" "}
                                                {show2 ? "Ver " : "Ocultar"}{" "}
                                                </button>
                                                {show2 ? (
                                                <div></div>
                                                ) : (
                                                    <div className='arregla'>
                                                        <div className='contenido-usuarios'>
                                                            {/*=================== Botón Mostrar Lista DIV =====================*/}
                                                            <br />
                                                            <CrudPartidas
                                                            partidas={listaPartidas}
                                                            setfirst={setfirst}
                                                            envioDataPar={envioDataPartida}
                                                            />   
                                                        </div> 
                                                    </div>
                                                )}
                                            </td>
                                            <td>
                                                <button
                                                className="btn btn-primary modificar"
                                                type="button"
                                                onClick={() => {
                                                    getDatosCats(pId);
                                                    setShow3(!show3);
                                                    setShow2(true);
                                                }}
                                                >
                                                {" "}
                                                {show3 ? "ver" : "Ocultar"}{" "}
                                                </button>
                                                {show3 ? (
                                                <div></div>
                                                ) : (
                                                <div className="arregla">
                                                    <div className='contenido-usuarios'>
                                                    {/*========================== Llamado al Componente ==========================*/}
                                                    <CrudCategorias
                                                    dcats={listaCategorias}
                                                    setfirst={setfirst1}
                                                    envioData={envioDataCats}
                                                    />
                                                    </div>
                                                </div>
                                                )}
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                )}
            {/* </form> */}
        </div>
    )
}