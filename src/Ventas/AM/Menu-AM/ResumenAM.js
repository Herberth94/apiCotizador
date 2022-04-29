import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import Cookies from 'universal-cookie';
//Componentes
import {Partida_catalogo} from '../../Operaciones/totalPartida';
import Animaciones from "../../../Componentes/Animaciones";
import { url, url2 } from '../../../Componentes/Ocultar';
import {  Cantidad,descuentoCliente,  prov, listaProv,desFabrica, costoPTN, margenGanancia, precioVenta , margenDirecto ,
precioFinalVenta,
costoSinIndirectos,
costoFianalProyecto,
datosCompletosAM,
datosCompletosTotal
} from "../../Operaciones/OperacionesAM";
import { EditAM } from '../Routes/ModificarDatosAm';
import {costosIndirectos, equivale,  totalIndirecto} from "../../Operaciones/OperacionesAM";

const cookies = new Cookies();
//Obtención del rol del usuario con sesión activa
//let validatorrol = cookies.get('rol');
let validatorrol ="administrador";
//Obtención del id del usuario con sesión activa
let validatorid = cookies.get('id_usuario');

const ResumenAM = () => {

    const { 
        getTotalPar,
        getPorcentajesPar,
        getTotalCats,
        getPorcentajesCats,
        getDivisaProy,
        getPorcentajesCI,
        getFinanciamieno} = Partida_catalogo();

    /*======================================== Buscador de proyectos ========================================*/
    /*== Almacenamiento de todos los proyectos existentes ==*/
    const[listaProyectos, setListaProyectos] = useState([]);

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
        setListaProyectos(coincidencias);
        setClaveP(claveP);
    }
    /*=======================================================================================================*/
    
    const [partidas, setPartidas] = useState([]);
    const [cats, setCats] = useState([]);
    /*=============================== Función que consulta los datos de un proyeco para el resumen AM ===============================*/  
    async function consultarTotalesP(id){          //console.log(id)
        try{
            const resTotPar = await axios.get(url2 + `/api/cotizador/am/viewTotalesPartidas/${id}`);
            getTotalPar(resTotPar.data.data);

            const resAMPar = await axios.get(url2 + `/api/cotizador/am/viewAMPartidas/${id}`);
            getPorcentajesPar(resAMPar.data.data);
            setPartidas(resAMPar.data.data);

            const resTotCats = await axios.get(url2 + `/api/cotizador/am/viewTotalesCategorias/${id}`);
            getTotalCats(resTotCats.data.data);

            const resAMCats = await axios.get(url2 + `/api/cotizador/am/viewAMCategorias/${id}`);
            getPorcentajesCats(resAMCats.data.data);
            setCats(resAMCats.data.data);

            const dProy = await axios.get(url2 + `/api/cotizador/am/viewDivisa/${id}`);
            getDivisaProy(dProy.data.data);

            const resCI = await axios.get(url2 + `/api/cotizador/ci/view/${id}`);
            getPorcentajesCI(resCI.data.data);

            const resdF = await axios.get(url2 + `/api/cotizador/proporcionalidad/view/${id}`);
            getFinanciamieno(resdF.data.data);
        }catch (error){
            console.log(error);
        }
        
        //console.log('Categorias',totalCategorias);
    }
    /*===============================================================================================================================*/

    /*========================== Mostrar/Ocultar ==========================*/
    const [activar, setActivar] = useState([]);
    const [textBModificar,setTextBModificar] = useState([]);//Texto de los botones de modificar
    const [textBVer,setTextBVer] = useState([]);//Texto de los botones de detalles
    const [show, setShow] = useState([]);//Tabla del resumen AM
    const [show1, setShow1] = useState(true);
    /*=====================================================================*/
    const [data,setData] = useState ({
        desc_cliente: '', 
        margen_ganancia:'',
        cantidad:'',
        desc_fabrica:''
    });

    const handleInputChange = (event) => {
        setData({
          ...data,[event.target.name] : event.target.value
        })
    }

    const [enable, setenable] = useState([]);
    
    useEffect(() => {
        let i = Object.keys(datosCompletosAM)
        i = i.length
        setenable(Array(i).fill(true));
        setActivar(Array(i).fill(true));
        setTextBModificar(Array(i).fill('bi bi-pencil-square'));
    },[datosCompletosAM])

    const habilitar = (key) =>{
        //console.log(datosCompletosAM[key]);
        key = parseInt(key);
        const newArr =[] 
        const newArr2 = [];
        const newArr3 = [];
        let c = Object.keys(datosCompletosAM);
        let d = Object.keys(data);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !enable[i];
                if(enable[i] === false){
                    newArr2[i] = 'bi bi-pencil-square';
                    setData({
                        ...data, desc_cliente : '',
                        margen_ganancia:'',
                        cantidad:'',
                        desc_fabrica:''
                      })
                    // if(data.des_cliente !== ''){
                    //     descuentoCliente[key] = data.des_cliente;
                    // }else if(data.margen_ganancia !== ''){
                    //     margenGanancia[key] = data.margen_ganancia;
                    // }else if(data.cantidad !== ''){
                    //     Cantidad[key] = data.cantidad;
                    // }else if(data.descuento_fabrica !== ''){
                    //     desFabrica[key] = data.descuento_fabrica
                    // }
                }else{
                    newArr2[i] = 'bi bi-check-lg';
                }
                newArr3[i] = !activar[i];
            }
            if(i !== key){
                newArr[i]=true;
                newArr2[i] = 'bi bi-pencil-square';
                newArr3[i]=true;
            }

        }   
        setenable(newArr);
        setTextBModificar(newArr2);
        setActivar(newArr3);
    }

    useEffect(() => {
        let i = Object.keys(listaProyectos)
        i = i.length
        setShow(Array(i).fill(true));
        setTextBVer(Array(i).fill('bi bi-eye'));
    },[listaProyectos])

    const habilitar2 = (key) =>{
        //console.log(key);
        key = parseInt(key);
        const newArr =[];
        const newArr2 = [];
        let c = Object.keys(listaProyectos);
        c = c.length;
        setShow(Array(c).fill(true));
        setTextBVer(Array(c).fill('bi bi-eye'));
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !show[i];
                setShow1(newArr[i]);
                if(show[i] === false){
                    newArr2[i] = 'bi bi-eye';
                }else{
                    newArr2[i] = 'bi bi-eye-slash-fill';
                }
            }
            if(i !== key){
                newArr[i]=true;
                newArr2[i] = 'bi bi-eye';
            }
        }   
        setShow(newArr);
        setTextBVer(newArr2);
    }

    const {actualizacion} = EditAM();

    const envioData = (key) => {
        if(activar[key] === false){
            actualizacion(partidas,cats,datosCompletosAM[key],data);
        }
    }

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
                                        placeholder="Ingresa la clave del Proyecto" 
                                />
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
                            <th>Fecha de Modificación</th>
                            <th>Estatus</th>
                            <th>Plazo Meses</th>
                            <th>Resumen AM</th>
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
                                <td>{listaProyectos[key].proyecto_fecha_modificacion}</td>
                                <td>{listaProyectos[key].proyecto_estatus}</td> 
                                <td width={"60px"}>{listaProyectos[key].proyecto_plazo_meses}</td>
                                <td width={"100px"}>
                                    <button 
                                    className="btn btn-primary Ver" 
                                    onClick={() => {
                                        consultarTotalesP(listaProyectos[key].proyecto_id);
                                        habilitar2(key);
                                    }}
                                    >
                                       <i className=  {textBVer[key]}></i> 
                                        
                                      </button>
                                </td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
            </div>
            {show1 ? (
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
                                    <th>Modificar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/*=================== Contenido Tabla Clientes =================*/}
                                {Object.keys(datosCompletosAM).map((key) => (
                                <tr key={key}>
                                    <td>{datosCompletosAM[key]}</td>
                                    {/*================= Descripcion General Partida ==================*/}
                                    <td> {" $ "} {datosCompletosTotal[key]}</td>
                                    {/*================= Descuento Cliente ==================*/}
                                    <td className="editar" >
                                        <input
                                        className="input-name"
                                        type="number"
                                        defaultValue={descuentoCliente[key]}
                                        disabled={enable[key]} 
                                        onChange={handleInputChange}
                                        name="desc_cliente" 
                                        ></input> 
                                    </td>
                                    {/*================= Precio Venta ==================*/}
                                    <td> {"$"} {precioVenta[key]} </td>
                                    {/*================= Margen Ganancia==================*/}
                                    <td  className="editar">
                                        <input
                                        className="input-name"
                                        type="number"
                                        defaultValue={margenGanancia[key]}
                                        disabled={enable[key]} 
                                        onChange={handleInputChange}
                                        name="margen_ganancia" 
                                        ></input>
                                    </td>
                                    {/*================= PrecioLista Unitario ==================*/}
                                    <td>{" $ "} {prov[key]}</td>
                                    {/*================= Cantidad ==================*/}
                                    <td className="editar">
                                        <input
                                        className="input-name"
                                        type="number"
                                        defaultValue={Cantidad[key]}
                                        disabled={enable[key]} 
                                        onChange={handleInputChange}
                                        name="cantidad" 
                                        ></input>
                                    </td>
                                    {/*================= Lista prov ==================*/}
                                    <td>{" $ "} {listaProv[key]}</td>
                                    {/*================= Descuento Fabrica ==================*/}    
                                    <td  className="editar">
                                        <input
                                        className="input-name"
                                        type="number"
                                        defaultValue={desFabrica[key]}
                                        disabled={enable[key]} 
                                        onChange={handleInputChange}
                                        name="desc_fabrica" 
                                        ></input>
                                    </td>
                                    {/*================= Costo PTN ==================*/}
                                    <td >{" $ "} {costoPTN[key]}  </td>
                                    {/*================= Margen Directo ==================*/}
                                    <td>{margenDirecto[key] } {" % "}</td>
                                    {/*================= Botón Modificar ==================*/}
                             {/*        <td>
                                        <button 
                                        className="btn btn-primary Mod"
                                        onClick={()=>{
                                            habilitar(key);
                                            envioData(key);
                                        }}
                                        > {textBModificar[key]}
                                        </button>
                                    </td> */}



{enable[key] ? (
                                <td width={"100px"} >
                                    <button 
                                    className=  "btn btn-primary Mod" type="button"
                                    onClick={()=>{
                                       // props.envioData(datos,key,data); 
                                        habilitar(key); 
                                        envioData(key);
                                    }}
                                    >
                                        <i className  = {textBModificar[key]}  ></i>
                                    </button>
                                    
                                </td>
                            ):(
                              
                              
                              <div >
                                    <td width={"100px"} >
                                    <button 
                                    className="btn btn-primary Mod" type="button"
                                    onClick={()=>{
                                      
                                        habilitar(key); 
                                        envioData(key);
                                    }}
                                    >
                                        <i className= {textBModificar[key]}  ></i>
                                    </button>
                                
                                </td>

                                <td width={"100px"}>
                                    <button 
                                    className="btn btn-primary Cancelar" type="button"
                                    onClick={()=>{
                                      /*   props.envioData(datos,key,data);  */
                                        habilitar(key); 
                                      
                                    }}
                                    >
                                        <i className= "bi bi-x-lg"  ></i>
                                    </button>
                                   
                                </td>
                                </div>
                            )}



                                </tr>
                                ))}
                            </tbody>
                        </Table>


                        <div> <Animaciones mytext="Costos Indirectos " /> </div>

                        <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Descripción</th>
                        <th>Equivale a % </th>
                        <th>Total </th>

 
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(costosIndirectos).map((key) => (
                        <tr key={key}>
                            {/*================= Descripción==================*/}
                            <td>{costosIndirectos[key]}</td>

                            {/*================= Equivale ==================*/}
                            <td className="editar" >
                                        <input
                                        className="input-name"
                                        type="number"
                                        defaultValue={equivale[key] }
                                        disabled={true} 
                                        onChange={handleInputChange}
                                        name="porcentaje" 
                                        ></input> 
                                    </td>
                            {/*================= Total Indirecto ==================*/}
                            <td>{ totalIndirecto[key]}</td>
                            {/*================= Editar==================*/}


                        </tr>
                    ))}
                </tbody>
            </Table>

                        <div>
                        <div> <Animaciones mytext="Totales " /> </div>
         
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
                                            <td className='amarillo'> {" $ "}{precioFinalVenta } {"USD"}</td>  
                                            <td className='azul'>{" $ "} {costoSinIndirectos}  {"USD"}</td>    
                                            <td className='verde'>{" $ "} {costoFianalProyecto} {"USD"}   </td>      
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