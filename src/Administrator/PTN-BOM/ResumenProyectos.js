import React, {useEffect, useState} from 'react'
import "../css/Proyectos.css";
import Table from 'react-bootstrap/Table';
import axios from "axios";
import { EditProyecto } from '../../Routes/ModificarProyectos';
import { EditPartida } from '../../Routes/ModificarPartida';
import { EditSP } from '../../Routes/ModificarSP';

function Proyectos() {
    /*======================================== Habilitar/Deshabilitar secciones ========================================*/
    const[show,setShow] = useState(true);// Lista de partidas
    const[show2,setShow2] = useState(true);// Lista de servicios/productos
    const[show3,setShow3] = useState(true);// Lista de precios
    /*==================================================================================================================*/

    /*======================================== Buscador de proyectos ========================================*/
    // Almacenamiento de todos los proyectos existentes
    const[listaProyectos, setListaProyectos] = useState([]);

    // Almacenamiento de los proyectos que tienen la clave semejante a la instroducida
    const[suggestionsProyecto,setSuggestionsProyectos] = useState([]);
    
    // Almacenamiento de la clave introducida del proyecto
    const[claveP,setClaveP] = useState([]);

    // Almacenamiento de los clientes existentes
    const [ListaC, setListaC] = useState ([]);

    // Función que realiza la consulta a la tabla proyecto
    useEffect(()=>{
        const getProyectos = async () => {
            try{
                const resProy = await axios.get('http://localhost:4001/api/cotizador/proyecto/view1');
                const newValidarProy = [];
                let i = Object.keys(resProy.data.data);
                for (let x = 0; x < i.length; x++) {
                    newValidarProy[x] = true;
                }
                setvalidarProy([...validarProy, newValidarProy])
                setListaProyectos(resProy.data.data);
                const resC = await axios.get("http://localhost:4001/api/cotizador/clientes/view");
                setListaC(resC.data.reSql);
            }catch(error){
                console.log(error);
            }
        }
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
        setSuggestionsProyectos(coincidencias);
        setClaveP(claveP);
    }
    /*=======================================================================================================*/

    /*======================================== Resumen de las partidas de un proyecto ========================================*/
    // Almacenamiento de las partidas
    const[listaPartidas, setListaPartidas] = useState([]);
    
    // Función que realiza la consulta a la tabla partida
    async function getDatosPartida(proyecto_id){
        try{
            const resPP = await axios.get(`http://localhost:4001/api/cotizador/partida/viewPP/${proyecto_id}`);
            const newValidarPartida = [];
                let i = Object.keys(resPP.data.data);
                for (let x = 0; x < i.length; x++) {
                    newValidarPartida[x] = true;
                }
                setvalidarPartida([...validarPartida, newValidarPartida])
                setListaPartidas(resPP.data.data);
        }catch(error){
            console.log(error);
        }
    }
    /*========================================================================================================================*/
    

    /*======================================== Resumen de los servicios/productos de una partida ========================================*/
    // Almacenamiento del los servicios_productos
    const[listaSP, setListaSP] = useState([]);

    // Almacenamiento de los proveedores existentes para el buscador
    const [ListaProv, setListaProv] = useState ([]);


    // Función que realiza la consulta a las tablas servicio_producto y proveedores
    async function getDatosSP(partida_id){
        
        try{
            const resPSP = await axios.get(`http://localhost:4001/api/cotizador/partida/viewPSP/${partida_id}`);
            const newValidarSP = [];
                let i = Object.keys(resPSP.data.data);
                for (let x = 0; x < i.length; x++) {
                    newValidarSP[x] = true;
                }
            setvalidarSP([...validarSP, newValidarSP])
            setListaSP(resPSP.data.data);
            
            const respuesta = await axios.get("http://localhost:4001/api/cotizador/proveedor/view");
            setListaProv(respuesta.data.data);
        }catch(error){
            console.log(error);
        }
    }
    /*===================================================================================================================================*/
    
    /*======================================== Resumen deL precio de un servicio/producto ========================================*/
    // Almacenamiento del precio 
    const[listaPrecios, setListaPrecios] = useState([]);

    // Función que realiza la consulta a la tabla precios
    async function getDatosPrecios(sp_id){
        try{
            const resPrecSP = await axios.get(`http://localhost:4001/api/cotizador/precio/viewSPP/${sp_id}`);
            setListaPrecios(resPrecSP.data.data);
        }catch(error){
            console.log(error);
        }
    }
    /*============================================================================================================================*/

    /*=================================== Edición de los datos de un proyecto ===================================*/
    /*=================================== Buscador de clientes ===================================*/
    // Almacenamiento del nombre del cliente a buscar
    const [nombreC, setNombreC] = useState('');

    // Almacenamiento de los clientes semejantes al texto introducido en el input
    const [suggestionsClientes, setSuggestionsClientes] = useState ([]);
    // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
    const onChangeTextCliente = (nombreCliente) => {
        let coincidencias = [];
        if(nombreCliente.length>0){
        coincidencias = ListaC.filter(cliente => {
            const regex = new RegExp(`${nombreCliente}`, "gi");
            return cliente.nombre_cliente.match(regex)
        })
        }
        setSuggestionsClientes(coincidencias);
        setNombreC(nombreCliente);
        }

    // Función que obtiene el nombre del cliente seleccionado
    const onSuggestHandler = (nombreC) => {
        setNombreC(nombreC);
        setSuggestionsClientes([]);
    }
    /*============================================================================================*/
    // Habilitar/Deshabilitar inputs
    const [habilitarP, setHabilitarP] = useState(false);

    const [keyRegistroProy, SetKeyregistroProy] = useState('');
    const [validarProy, setvalidarProy] = useState([]);

    const {
        actualizacionProy,
        editHandleInputChangeP//,
        //editHandleInputChangePIdC
    } = EditProyecto();
    

    const enableProyecto = (key) => {
        const newARR = [];
        //console.log(validar);
        let i = Object.keys(suggestionsProyecto);
        for (let x = 0; x < i.length; x++) {
            newARR[x] = validarProy[0][x];
        }
        console.log(newARR);    
        for (let y = 0; y < i.length; y++) {
            if (y === parseInt(key)) {
                //newARR[y]=!validarProy[0][y];
                newARR[y] = !validarProy[0][y];
            }
            if (y !== parseInt(key)) {
                newARR[y] = true
            };
        }
        setvalidarProy([newARR]);
        SetKeyregistroProy(key);
    }

    const envioDataProy = (datos, key) => {
        if(key === ''){
            setHabilitarP(!habilitarP);
        }else{
            setHabilitarP(!habilitarP);
            actualizacionProy(nombreC,ListaC,datos[key]);
            actulizarPageProy(key);
        }
        
    }

    const actulizarPageProy = (key) => {
        enableProyecto(key);
    }
    /*===========================================================================================================*/

    /*=================================== Edición de los datos de una partida ===================================*/
    // Habilitar/Deshabilitar inputs
    const [habilitarPartida, setHabilitarPartida] = useState(false);

    const [keyRegistroPartida, SetKeyregistroPartida] = useState('');
    const [validarPartida, setvalidarPartida] = useState([]);

    const {
        actualizacionPar,
        handleInputChangePartida
    } = EditPartida();
    

    const enablePartida = (key) => {
        const newARR = [];
        //console.log(validar);
        let i = Object.keys(listaPartidas);
        for (let x = 0; x < i.length; x++) {
            newARR[x] = validarPartida[0][x];
        }
        console.log(newARR);    
        for (let y = 0; y < i.length; y++) {
            if (y === parseInt(key)) {
                //newARR[y]=!validarProy[0][y];
                newARR[y] = !validarPartida[0][y];
            }
            if (y !== parseInt(key)) {
                newARR[y] = true
            };
        }
        setvalidarPartida([newARR]);
        SetKeyregistroPartida(key);
    }

    const envioDataPartida = (datos, key) => {
        if(key === ''){
            setHabilitarPartida(!habilitarPartida);   
        }else{
            setHabilitarPartida(!habilitarPartida);
            actualizacionPar(datos[key]);
            actualizarPagePartida(key);
        }
        
    }

    const actualizarPagePartida = (key) => {
        enablePartida(key);
    }
    /*===========================================================================================================*/

    /*=================================== Eliminación de una partida y sus servicios_productos ===================================*/
    async function SendDeletePartida(id){
        getDatosSP(id);
        //console.log(listaSP);
        let cSP = Object.keys(listaSP);
        for(let c = 0; c < cSP;c++){
            try {
                await axios.delete(`http://localhost:4001/api/cotizador/precio/delete/${listaSP[c].sp_id_precio}`);
            } catch (error) {}
        }
        try{
            await axios.delete(`http://localhost:4001/api/cotizador/partida/delete/${id}`);
            alert('Partida eliminada exitosamene');
            
        } catch (error) {}
    }
    /*============================================================================================================================*/

    /*=================================== Edición de los datos de un servicio/producto ===================================*/
    /*=================================== Buscadores ===================================*/
    /*=================================== Buscador de proveedores ===================================*/
    // Almacenamiento del id del proveedor encontrado en la busqueda
    var proveedorId = {proveedor_id:''}

    // Almacenamiento del nombre del proveedor a buscar
    const [nombreProv, setNombreProv] = useState('');

    // Almacenamiento de los proveedores semejantes al texto introducido en el input
    const [suggestionsProv, setSuggestionsProv] = useState ([]);

    // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
    const onChangeTextProv = (nombreProveedor) => {
        let coincidencias = [];
        if(nombreProveedor.length>0){
        coincidencias = ListaProv.filter(proveedor => {
            const regex = new RegExp(`${nombreProveedor}`, "gi");
            return proveedor.proveedor_nombre.match(regex)
        })
        }
        setSuggestionsProv(coincidencias);
        setNombreProv(nombreProveedor);
    }

    // Función que obtiene el nombre del cliente seleccionado
    const onSuggestHandlerProv = (nombreProveedor) => {
        setNombreProv(nombreProveedor);
        setSuggestionsProv([]);
    }
    /*============================================================================================*/

    /*=================================== Buscador de marcas con respecto al proveedor seleccionado ===================================*/
    // Almacenamiento de los proveedores existentes
    const [listaMarca, setListaMarca] = useState ([]);

    // Almacenamiento del nombre del proveedor a buscar
    const [nombreMarca, setNombreMarca] = useState('');

    // Almacenamiento de los proveedores semejantes al texto introducido en el input
    const [suggestionsMarca, setSuggestionsMarca] = useState ([]);

    // Función que realiza la consulta a la tabla proveedores
    useEffect (() => {
        // Obtención del id del proveedor que se seleccionó en la búsqueda
        let i = Object.keys(ListaProv);
        for (let c = 0; c < i.length; c++) {
        if (nombreProv === ListaProv[c].proveedor_nombre) {
            proveedorId.proveedor_id = ListaProv[c].proveedor_id
            console.log('proveedor id:',proveedorId);
        }        
        }
        async function listaMarcas(){
        try {
            const respuesta = await axios.get(`http://localhost:4001/api/cotizador/provmarcas/view/${proveedorId.proveedor_id}`);
            setListaMarca(respuesta.data.data);
        } catch (error) {}
        }
        if(proveedorId.proveedor_id !== ''){
        listaMarcas();
        }
    },[nombreProv])

    // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
    const onChangeTextMarca = (nombreMarca) => {
        let coincidencias = [];
        if(nombreMarca.length>0){
        coincidencias = listaMarca.filter(marca => {
            const regex = new RegExp(`${nombreMarca}`, "gi");
            return marca.marca_nombre.match(regex)
        })
        }
        setSuggestionsMarca(coincidencias);
        setNombreMarca(nombreMarca);
    }

    // Función que obtiene el nombre del cliente seleccionado
    const onSuggestHandlerMarca = (nombreMarca) => {
        setNombreMarca(nombreMarca);
        setSuggestionsMarca([]);
    }
    
    /*============================================================================================*/

    /*==================================================================================*/
    // Habilitar/Deshabilitar inputs
    const [habilitarSP, setHabilitarSP] = useState(false);

    const [keyRegistroSP, SetKeyregistroSP] = useState('');
    const [validarSP, setvalidarSP] = useState([]);

    const {
        actualizacionSP,
        editHandleInputChangeSP
    } = EditSP();
    

    const enableSP = (key) => {
        const newARR = [];
        //console.log(validar);
        let i = Object.keys(listaSP);
        for (let x = 0; x < i.length; x++) {
            newARR[x] = validarSP[0][x];
        }
        //console.log(newARR);    
        for (let y = 0; y < i.length; y++) {
            if (y === parseInt(key)) {
                newARR[y] = !validarSP[0][y];
            }
            if (y !== parseInt(key)) {
                newARR[y] = true
            };
        }
        setvalidarSP([newARR]);
        SetKeyregistroSP(key);
    }

    const envioDataSP = (datos, key) => {
        if(key === ''){
            setHabilitarSP(!habilitarSP);
        }else{
            setHabilitarSP(!habilitarSP);
            actualizacionSP(nombreProv, ListaProv,nombreMarca,listaMarca,datos[key]);
            actulizarPageSP(key);
        }
        
    }

    const actulizarPageSP = (key) => {
        enableSP(key);
    }
    /*====================================================================================================================*/

    
    /*=================================== Eliminación de un servicio/producto junto con sus precios ===================================*/
    /*=================================================================================================================================*/
    async function SendDeleteSP(id){
        //console.log(id);
        try {
            await axios.delete(`http://localhost:4001/api/cotizador/precio/delete/${id}`);
            alert('Servicio/producto eliminado exitosamente')
        } catch (error) {
            alert('Eliminación del Servicio/producto invalido')
        }
    }
    /*=================================================================================================================================*/

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
                            <th>Fecha de modificación</th>
                            <th>Estatus</th>
                            <th>Modificar</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                                    
                    <tbody>
                        {Object.keys(suggestionsProyecto).map((key) => (    
                            <tr key={suggestionsProyecto[key].proyecto_id} >
                                <td>{suggestionsProyecto[key].proyecto_id}</td>  
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={suggestionsProyecto[key].proyecto_clave} 
                                    disabled={validarProy[0][key]} 
                                    onChange={editHandleInputChangeP}
                                    name="proyecto_clave" 
                                    ></input>
                                </td>   
                                <td>
                                    <input 
                                    className="input-name" 
                                    defaultValue={suggestionsProyecto[key].proyecto_descripcion} 
                                    disabled={validarProy[0][key]} 
                                    onChange={editHandleInputChangeP}
                                    name="proyecto_descripcion" 
                                    ></input>
                                </td>  
                                <td>
                                {" "}
                                <input
                                    className="agregar"
                                    type="text"
                                    name="nombre_cliente"
                                    disabled={validarProy[0][key]}
                                    value={habilitarP ? nombreC : suggestionsProyecto[key].nombre_cliente }
                                    onChange={e => onChangeTextCliente(e.target.value)}
                                />
                                {suggestionsClientes && suggestionsClientes.map((suggestionCliente,i)=>
                                        <div key={i} className="selectCliente" onClick={() => onSuggestHandler(suggestionCliente.nombre_cliente)}>
                                          {suggestionCliente.nombre_cliente}
                                        </div>
                                    )}
                                </td> 
                                <td>{suggestionsProyecto[key].proyecto_fecha_creacion}</td>
                                <td>{suggestionsProyecto[key].proyecto_fecha_modificacion}</td>
                                <td>{suggestionsProyecto[key].proyecto_estatus}</td>
                                <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{enableProyecto(key); envioDataProy(suggestionsProyecto,keyRegistroProy)}}
                                    >{habilitarP ? "Aceptar" : "Modificar"}
                                    </button> 
                                </td> 
                                <td>
                                    <button 
                                    className="btn btn-primary detalles" 
                                    onClick={() => { getDatosPartida(suggestionsProyecto[key].proyecto_id); setShow(!show)}}
                                    >{show ? 'Ver partidas' : 'Ocultar partidas'}</button>
                                </td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>

                <div className="container">
                    <div className="box">
                        <div className="title">
                            <span className="block"></span>
                            <h1 >Resumen BOM<span></span></h1>
                        </div>
                    </div>
                </div>
                {/****************************Lista de las partidas de un proyecto ****************************************/}
                {/*============= Titulo Animación =============*/}
                {show ? (
                        <div> </div>
                ):(
                    <div className='arregla'>
                        <div className='contenido-usuarios'>
                            <div className="container">
                                <div className="box">
                                    <div className="title">
                                        <span className="block"></span>
                                        <h1 >Partidas del Proyecto <span></span></h1>
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
                                            <td>
                                                <input 
                                                id={listaPartidas[key].partida_id}
                                                className="input-name" 
                                                defaultValue={listaPartidas[key].partida_nombre} 
                                                disabled={validarPartida[0][key]} 
                                                onChange={handleInputChangePartida}
                                                name="partida_nombre" 
                                                ></input>
                                            </td>
                                            <td>
                                                <input
                                                className="input-name" 
                                                defaultValue={listaPartidas[key].partida_descripcion} 
                                                disabled={validarPartida[0][key]} 
                                                onChange={handleInputChangePartida}
                                                name="partida_descripcion" 
                                                ></input>
                                            </td> 
                                            <td>
                                                <button 
                                                className="btn btn-primary eliminar"
                                                onClick={()=>{SendDeletePartida(listaPartidas[key].partida_id)}}
                                                >Eliminar</button></td>
                                            <td>
                                                <button 
                                                className="btn btn-primary modificar" 
                                                onClick={()=>{enablePartida(key); envioDataPartida(listaPartidas,keyRegistroPartida)}}
                                                >{habilitarPartida ? "Aceptar" : "Modificar"}
                                                </button> 
                                            </td> 
                                            <td>
                                                <button 
                                                className="btn btn-primary detalles" 
                                                onClick={() => {getDatosSP(listaPartidas[key].partida_id);setShow2(!show2)}}
                                                >{show2 ? 'Ver SP' : 'Ocultar SP'}</button></td> 
                                        </tr>  
                                    ))}
                                </tbody>          
                            </Table>
                            
                            {show2 ? (
                                        <div></div>
                            ):(
                                <div className='arregla'>
                                    <div className='contenido-usuarios'>
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
                                                        <td>
                                                            <input
                                                            className="input-name" 
                                                            defaultValue={listaSP[key].sp_no_parte} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}
                                                            name="sp_no_parte" 
                                                            ></input>
                                                        </td> 
                                                        <td>
                                                            <input
                                                            className="input-name" 
                                                            defaultValue={listaSP[key].sp_descripcion} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}
                                                            name="sp_descripcion" 
                                                            ></input>
                                                        </td>
                                                        <td>
                                                            <input
                                                            className="input-name" 
                                                            defaultValue={listaSP[key].sp_meses} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}
                                                            name="sp_meses" 
                                                            ></input>
                                                        </td>
                                                        <td>
                                                            <input
                                                            className="input-name" 
                                                            defaultValue={listaSP[key].sp_semanas} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}
                                                            name="sp_semanas" 
                                                            ></input>
                                                        </td>
                                                        <td>
                                                            <input
                                                            className="input-name" 
                                                            defaultValue={listaSP[key].sp_cantidad} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}
                                                            name="sp_cantidad" 
                                                            ></input>
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <input
                                                            className="agregar"
                                                            type="text"
                                                            name="proveedor_nombre"
                                                            onChange={e => onChangeTextProv(e.target.value)}
                                                            value={habilitarSP ? nombreProv : listaSP[key].proveedor_nombre}
                                                            disabled={validarSP[0][key]} 
                                                            placeholder="Proveedor"
                                                            />
                                                            {suggestionsProv && suggestionsProv.map((suggestionProv,i)=>
                                                            <div key={i} className="selectCliente" onClick={() => onSuggestHandlerProv(suggestionProv.proveedor_nombre)}>
                                                            {suggestionProv.proveedor_nombre}
                                                            </div>
                                                            )}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <input
                                                            className="agregar"
                                                            type="text"
                                                            name="marca_nombre"
                                                            onChange={e => onChangeTextMarca(e.target.value)}
                                                            value={habilitarSP ? nombreMarca : listaSP[key].marca_nombre}
                                                            disabled={validarSP[0][key]} 
                                                            placeholder="Marca"
                                                            />
                                                            {suggestionsMarca && suggestionsMarca.map((suggestionMarca,i)=>
                                                            <div key={i} className="selectCliente" onClick={() => onSuggestHandlerMarca(suggestionMarca.marca_nombre)}>
                                                            {suggestionMarca.marca_nombre}
                                                            </div>
                                                            )}
                                                        </td>
                                                        <td>
                                                            {" "}
                                                            <select 
                                                            id="lista-opciones" 
                                                            name="sp_id_categoria" 
                                                            defaultValue={listaSP[key].sp_id_categoria} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}>
                                                                <option value={0}></option>
                                                                <option value={1}>Tecnología Principal</option>
                                                                <option value={2}>Sub-tecnología</option>
                                                                <option value={3}>Equipamiento</option>
                                                                <option value={4}>Licencia</option>
                                                                <option value={5}>Soporte</option>
                                                                <option value={6}>Implementación</option>
                                                            </select>
                                                        </td> 
                                                        <td>
                                                            <input
                                                            className="input-name" 
                                                            defaultValue={listaSP[key].sp_comentarios} 
                                                            disabled={validarSP[0][key]} 
                                                            onChange={editHandleInputChangeSP}
                                                            name="sp_comentarios" 
                                                            ></input>
                                                        </td>
                                                        <td>
                                                            <button 
                                                            className="btn btn-primary eliminar"
                                                            onClick={()=>{SendDeleteSP(listaSP[key].sp_id_precio)}}
                                                            >Eliminar </button>
                                                        </td>
                                                        <td>
                                                        <button 
                                                            className="btn btn-primary modificar" 
                                                            onClick={()=>{enableSP(key); envioDataSP(listaSP,keyRegistroSP)}}
                                                            >{habilitarSP ? "Aceptar" : "Modificar"}
                                                            </button> 
                                                        </td> 
                                                        <td>
                                                            <button 
                                                            className="btn btn-primary detalles" 
                                                            onClick={() => {getDatosPrecios(listaSP[key].sp_id); setShow3(!show3);}}
                                                            >{show3 ? 'Ver precios' : 'Ocultar precios'}</button></td>
                                                    </tr>  
                                                    ))
                                                    }
                                                </tbody>
                                        </Table>
                                        {show3 ? (
                                                    <div></div>
                                        ):(
                                            <div className='arregla'>
                                                <div className='contenido-usuarios'>
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
                                                                    <td><button className="btn btn-primary modificar">Modificar</button></td>    
                                                                </tr>  
                                                                ))
                                                                }
                                                            </tbody>
                                                    </Table>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}
export default Proyectos