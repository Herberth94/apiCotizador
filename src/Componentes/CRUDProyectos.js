import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Animaciones from './Animaciones';

import { EditPartida } from '../Routes/ModificarPartida';
import { CrudPartidas } from './CRUDPartidas';

export const CrudProyectos = (props) => {
    /*======================================== Habilitar/Deshabilitar secciones ========================================*/
    const[show,setShow] = useState(true);// Lista de partidas

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
        //
        const [sCInput, setScInput] = useState([]);

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

            const arraySC = [];
            for(let c = 0 ; c < i ; c++){
                arraySC[c] = coincidencias;
            }
            setScInput(arraySC);

            console.log('clientes de cada input:',arraySC);
            //setNombreC1(nombreCliente);
            //console.log('nombres clientes:',nombreC);
        }

        // Función que obtiene el nombre del cliente seleccionado
        const onSuggestHandler = (nC, key) => {
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
        /*============================================================================================*/
    /*===============================================================================================================*/

    /*================================================== Partidas ==================================================*/
        /*========================= Resumen - Partidas de un proyecto =========================*/
        // Almacenamiento de las partidas
        const[listaPartidas, setListaPartidas] = useState([]);
        
        // Función que realiza la consulta a la tabla partida
        async function getDatosPartida(proyecto_id){
            try{
                const resPP = await axios.get(`http://localhost:4001/api/cotizador/partida/viewPP/${proyecto_id}`);
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
                            <th>Fecha de creción</th>
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
                                    defaultValue={nombreC[key]}
                                    //value={nombreC}
                                    onChange={e => onChangeTextCliente(e.target.value,key)}
                                    />
                                    {Object.keys(suggestionsClientes).map((i)=>
                                    <div 
                                    key={sCInput[key][i].cliente_id}
                                    className="selectCliente" 
                                    onClick={() => onSuggestHandler(sCInput[key][i].nombre_cliente, key)}
                                    >
                                        {sCInput[key][i].nombre_cliente}
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
                                    onClick={() => { getDatosPartida(props.suggestionsP[key].proyecto_id); setShow(!show)}}
                                    >
                                        {show ? 'Ver partidas' : 'Ocultar partidas'}
                                    </button>
                                </td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
                <Animaciones mytext="Resumen BOM" />
                {show ? (
                    <div></div>
                ):(
                    <div>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                        <CrudPartidas
                        partidas={listaPartidas}
                        setfirst={setfirst}
                        envioDataPar={envioDataPartida}
                        />    
                    </div>
                )}
            {/* </form> */}
        </div>
    )
}