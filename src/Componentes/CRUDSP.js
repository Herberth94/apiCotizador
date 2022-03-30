import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Animaciones from './Animaciones';

import { EditPrecio } from '../Routes/ModificarPrecio';
import { CrudPrecios } from './CRUDPrecios';


export const CrudSp = (props) => {
    /*======================================== Habilitar/Deshabilitar secciones ========================================*/
    const[show,setShow] = useState(true);// Lista de precios

    /*================================================== SP ==================================================*/
        /*========================= Editar =========================*/
        const [activar, setActivar] = useState(true);

        const [data,setData] = useState ({
            sp_no_parte:'',
            sp_descripcion:'',
            sp_meses:'',
            sp_semanas: '',
            sp_id_categoria:'',
            sp_comentarios:''      
        });

        const handleInputChange = (event) => {
            setData ({
            ...data,[event.target.name] : event.target.value ,
        })
        }
        //console.log(props.usuarios);
        const [enable, setenable] = useState([])
        const [datos, Setdatos] = useState()
        // Almacenamiento del nombre del proveedor a buscar
        const [nombreProv, setNombreProv] = useState([]);
        // Almacenamiento del nombre del proveedor a buscar
        const [nombreMarca, setNombreMarca] = useState([]);
        

        useEffect(() => {
            Setdatos(props.sp); 
        },[props.sp]);


        useEffect(() => {
            let i = Object.keys(props.sp)
            i = i.length
            //console.log(i)

            setenable(Array(i).fill(true));

            const arrayNombresProv = []
            for(let c = 0 ; c < i ;c++){
                arrayNombresProv[c] = props.sp[c].proveedor_nombre;
            }
            setNombreProv(arrayNombresProv);

            const arrayNombresMarca = []
            for(let c = 0 ; c < i ;c++){
                arrayNombresMarca[c] = props.sp[c].marca_nombre;
            }
            setNombreMarca(arrayNombresMarca);
        },[props.sp])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr =[] 
            let p = Object.keys(props.sp);
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

            const arrayNombresProv = [];
            const arrayNombresMarca = []
            if (activar === true){
                for(let c = 0 ; c < p ;c++){
                    if(c === key){
                        arrayNombresProv[c] = '';
                    }else{
                        arrayNombresProv[c] = nombreProv[c];
                    }
                }
                setNombreProv(arrayNombresProv);

                for(let c = 0 ; c < p ;c++){
                    if(c === key){
                        arrayNombresMarca[c] = '';
                    }else{
                        arrayNombresMarca[c] = nombreMarca[c];
                    }
                }
                setNombreMarca(arrayNombresMarca);
            }
            
            
        }
        /*==========================================================*/

        /*================================================================ Buscadores ================================================================*/
        /*=================================== Buscador de proveedores ===================================*/
        // Almacenamiento del id del proveedor encontrado en la busqueda
        var proveedorId = {proveedor_id:''}

        // Almacenamiento de los proveedores semejantes al texto introducido en el input
        const [suggestionsProv, setSuggestionsProv] = useState ([]);

        // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
        const onChangeTextProv = (nP,key) => {
            let coincidencias = [];
            if(nP.length>0){
                coincidencias = props.proveedores.filter(proveedor => {
                    const regex = new RegExp(`${nP}`, "gi");
                    return proveedor.proveedor_nombre.match(regex)
                })
            }
            setSuggestionsProv(coincidencias);

            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresProv = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresProv[c] = nP;
                }else{
                    arrayNombresProv[c] = nombreProv[c];
                }
            }
            setNombreProv(arrayNombresProv);
        }

        // Almacenamiento de los proveedores existentes
        const [listaMarca, setListaMarca] = useState ([]);
        // Función que realiza la consulta a la tabla proveedores
        async function listaMarcas(proveedor){
            let i = Object.keys(props.proveedores);
            for (let c = 0; c < i.length; c++) {
            if (proveedor === props.proveedores[c].proveedor_nombre) {
                proveedorId.proveedor_id = props.proveedores[c].proveedor_id
                //console.log('proveedor id:',proveedorId);
                }
            }
            try {
                if(proveedorId.proveedor_id !== ''){
                    const respuesta = await axios.get(`http://localhost:4001/api/cotizador/provmarcas/view/${proveedorId.proveedor_id}`);
                    setListaMarca(respuesta.data.data);
                }
            } catch (error) {console.log(error);}
        }


        // Función que obtiene el nombre del cliente seleccionado
        const onSuggestHandlerProv = (nP,key) => {
            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresProv = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresProv[c] = nP;
                }else{
                    arrayNombresProv[c] = nombreProv[c];
                }
            }
            setNombreProv(arrayNombresProv);
            listaMarcas(nP);
            //console.log(listaMarca);
            setSuggestionsProv([]);
        }
        /*============================================================================================*/

        /*=================================== Buscador de marcas con respecto al proveedor seleccionado ===================================*/
        // Almacenamiento de los proveedores semejantes al texto introducido en el input
        const [suggestionsMarca, setSuggestionsMarca] = useState ([]);

        // Función que realiza la busqueda de los clientes semejantes a al nombre introducido 
        const onChangeTextMarca = (nM,key) => {
            let coincidencias = [];
            if(nM.length>0){
            coincidencias = listaMarca.filter(marca => {
                const regex = new RegExp(`${nM}`, "gi");
                return marca.marca_nombre.match(regex)
            })
            }
            setSuggestionsMarca(coincidencias);
            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresMarca = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresMarca[c] = nM;
                }else{
                    arrayNombresMarca[c] = nombreMarca[c];
                }
            }
            setNombreMarca(arrayNombresMarca);
        }

        // Función que obtiene el nombre del cliente seleccionado
        const onSuggestHandlerMarca = (nM, key) => {
            key = parseInt(key);
            let i = Object.keys(props.sp)
            i = i.length;
            const arrayNombresMarca = []
            for(let c = 0 ; c < i ;c++){
                if(c === key){
                    arrayNombresMarca[c] = nM;
                }else{
                    arrayNombresMarca[c] = nombreMarca[c];
                }
            }
            setNombreMarca(arrayNombresMarca);
            setSuggestionsMarca([]);
        }
        
        /*============================================================================================*/
        /*============================================================================================================================================*/
        
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
    /*========================================================================================================*/

    /*================================================== Precios ==================================================*/
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

        /*========================= Envío de nuevos datos =========================*/
        const [first,setfirst] = useState(false);

        const {actualizacionPrecio} = EditPrecio();
        
        const envioDataPrecio = (datacant, data, key, newdata) => {
            if(first){
                console.log('Old Cantidad:',data[key].sp_cantidad);
                console.log('New Cantidad:',datacant);
                console.log('Old Data Precio:',data[key]);
                console.log('New Data Precio:',newdata);
                //actualizacionPrecio(datacant, data[key], newdata);
            }
        }
        /*=========================================================================*/
    /*=============================================================================================================*/


    return (
        <div>
           {/* <form> */}
                {/******************Lista de los servicios/productos de una partida ****************************************/}
                {/*============= Titulo Animación =============*/}
                <Animaciones mytext="Servicios/Productos" />
                <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>ID</th>
                            <th># Parte</th>
                            <th>Descripción</th>
                            <th>Duración Meses</th>
                            <th>Entrega Semanas</th>
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
                            {Object.keys(props.sp).map((key) => (    
                            <tr key={props.sp[key].sp_id} >

                               <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={key} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_no_parte" 
                                    ></input>
                                </td> 
                                <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_no_parte} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_no_parte" 
                                    ></input>
                                </td> 
                                <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_descripcion} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_descripcion" 
                                    ></input>
                                </td>
                                <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_meses} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_meses" 
                                    ></input>
                                </td>
                                <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.sp[key].sp_semanas} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_semanas" 
                                    ></input>
                                </td>
                                <td>
                                    {" "}
                                    <input
                                    className="agregar"
                                    type="text"
                                    name="proveedor_nombre"
                                    onChange={e => onChangeTextProv(e.target.value, key)}
                                    defaultValue={nombreProv[key]}
                                    disabled={enable[key]} 
                                    placeholder="Proveedor"
                                    />
                                    {Object.keys(suggestionsProv).map((i)=>
                                    <div 
                                    key={i} 
                                    className="selectCliente" 
                                    onClick={() => onSuggestHandlerProv(suggestionsProv[i].proveedor_nombre,key)}
                                    >
                                        {suggestionsProv[i].proveedor_nombre}
                                    </div>
                                    )}
                                </td>
                                <td>
                                    {" "}
                                    <input
                                    className="agregar"
                                    type="text"
                                    name="marca_nombre"
                                    onChange={e => onChangeTextMarca(e.target.value,key)}
                                    defaultValue={nombreMarca[key]}
                                    disabled={enable[key]} 
                                    placeholder="Marca"
                                    />
                                    {Object.keys(suggestionsMarca).map((i)=>
                                    <div 
                                    key={i} 
                                    className="selectCliente" 
                                    onClick={() => onSuggestHandlerMarca(suggestionsMarca[i].marca_nombre,key)}
                                    >
                                        {suggestionsMarca[i].marca_nombre}
                                    </div>
                                    )}
                                </td>
                                <td>
                                    {" "}
                                    <select 
                                    id="lista-opciones" 
                                    name="sp_id_categoria" 
                                    defaultValue={props.sp[key].sp_id_categoria} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}>
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
                                    defaultValue={props.sp[key].sp_comentarios} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="sp_comentarios" 
                                    ></input>
                                </td>
                                <td>
                                    <button 
                                    className="btn btn-primary eliminar"
                                    //onClick={()=>{SendDeleteSP(props.sp[key].sp_id_precio)}}
                                    >Eliminar </button>
                                </td>
                                <td>
                                <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{
                                        habilitar(key); 
                                        props.envioDataSP(nombreProv, props.proveedores,nombreMarca, listaMarca, data, key, datos);
                                        props.setfirst(activar);
                                        setActivar(!activar)
                                    }}
                                    >{activar ? "Modificar":"Aceptar"}
                                    </button> 
                                </td> 
                                <td>
                                    <button 
                                    className="btn btn-primary detalles" 
                                    onClick={() => {getDatosPrecios(props.sp[key].sp_id); setShow(!show);}}
                                    >
                                        {show ? 'Ver precios' : 'Ocultar precios'}
                                    </button>
                                </td>
                            </tr>  
                            ))
                            }
                        </tbody>
                </Table>
                {show ? (
                    <div></div>
                ):(
                    <div>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                        <CrudPrecios
                        precios={listaPrecios}
                        setfirst={setfirst}
                        envioDataPrecio={envioDataPrecio}
                        />    
                    </div>
                )}
            {/* </form> */}
        </div>
    )
}