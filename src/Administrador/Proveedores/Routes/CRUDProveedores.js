import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from "axios";
//Componentes
import {url2} from "../../../Componentes/Ocultar";
import { EditMarcas } from '../Routes/ModificarMarcas';
import { CrudMarcas } from './CRUDMarcas';

export const CrudProveedores = (props) => {
    /*========================== Mostrar/Ocultar ==========================*/
    const [activar, setActivar] = useState([]);
    const [textBModificar,setTextBModificar] = useState([]);//Texto de los botones de modificar
    const [textBVer,setTextBVer] = useState([]);// Texto de los botones de mostrar
    const [show,setShow] = useState([]);
    const [show2,setShow2] = useState(true);
    /*=====================================================================*/

    /*========================== Habilitar/Deshabilitar ==========================*/
    const [enable, setenable] = useState([]);//Inputs
    /*============================================================================*/

    const [data,setData] = useState ({
        proveedor_nombre: '', 
        proveedor_telefono:'',
        proveedor_email:'',
               
    });

    const handleInputChange = (event) => {
        setData ({
          ...data,[event.target.name] : event.target.value
      })
    }

    const [datos, Setdatos] = useState();

    useEffect(() => {
        Setdatos(props.proveedores); 
    },[props.proveedores]);

    useEffect(() => {
        let i = Object.keys(props.proveedores)
        i = i.length
        setenable(Array(i).fill(true));
        setActivar(Array(i).fill(true));
        setShow(Array(i).fill(true));
        setTextBModificar(Array(i).fill('bi bi-pencil-square'));
        setTextBVer(Array(i).fill('bi bi-eye'));
    },[props.proveedores])

    const habilitar = (key) =>{
        key = parseInt(key);
        const newArr =[] 
        const newArr2 = [];
        const newArr3 = [];
        let c = Object.keys(props.proveedores);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !enable[i];
                if(enable[i] === false){
                    newArr2[i] = 'bi bi-pencil-square';
                    setData({
                        ...data,proveedor_nombre: '', 
                                proveedor_telefono:'',
                                proveedor_email:'',
                    })
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

    const habilitar2 = (key) =>{
        key = parseInt(key);
        const newArr =[];
        const newArr2 = [];
        let c = Object.keys(props.proveedores);
        c = c.length;
        setShow(Array(c).fill(true));
        setTextBVer(Array(c).fill('bi bi-eye'));
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i] = !show[i];
                setShow2(newArr[i]);
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
    
    /*================================================== Marcas ==================================================*/
    //Almacenamiento de las marcas
    const [listaMarcas, setListaMarcas] = useState([]);
    //Función que consulta todas las marcas existentes
    const llamadoMarca = async (idFila) => {
        try {
            const respuestaMarca =  await axios.get(url2 + `/api/cotizador/provmarcas/view/${idFila}`)
            setListaMarcas(respuestaMarca.data.data);
        } catch(error){console.log(error)}
    }

    const {actualizacion} = EditMarcas();

    const [first,setfirst] = useState(false);
    const envioData = (datos, key, data) => {
        if(first){
            actualizacion(datos[key],data);
        }
    }
    /*============================================================================================================*/
    return (
        <div>
            {/*===================     Tabla Proveedores   ========================*/}
            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Proveedores ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>ID</th>
                        <th>Proveedor</th>
                        <th>Teléfono</th>
                        <th>Email</th>
                        <th>Modificar</th>
                        <th>Marcas</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Proveedores =================*/}
                    {Object.keys(props.proveedores).map((key) => (
                        <tr key={key}>
                        <td>{props.proveedores[key].proveedor_id}</td>
                        <td>
                            <input
                            className="input-name"
                            defaultValue={props.proveedores[key].proveedor_nombre}
                            onChange={handleInputChange}
                            disabled={enable[key]}
                            name="proveedor_nombre"
                            ></input>
                        </td>
                        {/*================= Teléfono ==================*/}
                        <td>
                            <input
                            className="input-name"
                            defaultValue={props.proveedores[key].proveedor_telefono}
                            onChange={handleInputChange}
                            disabled={enable[key]}
                            name="proveedor_telefono"
                            ></input>{" "}
                        </td>
                        {/*================= email==================*/}
                        <td>
                            <input
                            className="input-name"
                            defaultValue={props.proveedores[key].proveedor_email}
                            onChange={handleInputChange}
                            disabled={enable[key]}
                            name="proveedor_email"
                            ></input>{" "}
                        </td>

                  {/*       <td>
                            {" "}
                            <button
                                className="btn btn-primary Mod"
                                type="button"
                                onClick={() => {
                                habilitar(key); 
                                props.envioData(datos,key,data); 
                                props.setfirst(activar[key]);
                                //props.setActualizarProvs(activar[key]);
                                }}
                            >
                        <i className= {textBModificar[key]}></i>
                                
                             
                            </button>
                        </td> */}


                        

{enable[key] ? (
                                <td width={"100px"} >
                                    <button 
                                    className=  "btn btn-primary Mod" type="button"
                                    onClick={()=>{
                                       // props.envioData(datos,key,data); 
                                        habilitar(key); 
                                        props.setfirst(activar[key]); 
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
                                        props.envioData(datos,key,data); 
                                        habilitar(key); 
                                        props.setfirst(activar[key]); 
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
                                       props.setfirst(activar[key]); 
                                    }}
                                    >
                                        <i className= "bi bi-x-lg"  ></i>
                                    </button>
                                   
                                </td>
                                </div>
                            )}



                        <td width={"100px"}>
                            {" "}
                            <button
                                className="btn btn-primary Ver"
                                type="button"
                                onClick={() => {
                                    llamadoMarca(props.proveedores[key].proveedor_id);
                                    habilitar2(key);
                                }}
                            >
                                
                                <i className= {textBVer[key]}></i>
                                
                             
                            </button>
                        </td>
                        </tr>  
                    ))}
                </tbody>
            </Table>
            {show2 ? (
                <div></div>
            ) : (
                <div>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                    <CrudMarcas
                        marcas={listaMarcas}
                        envioData={envioData}
                        setfirst={setfirst}
                    />
                </div>                    
            )}
        </div>
    )
}