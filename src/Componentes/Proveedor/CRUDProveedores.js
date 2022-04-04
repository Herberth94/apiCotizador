import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {url2} from "../../Componentes/Ocultar";
import { useRegistro3 } from './modificarMarcas';
export const CrudProveedores = (props) => {

    const {actualizacion2} = useRegistro3();

    const [estadoListaMarcas, setListaMarcas] = useState([]);
    const [activar, setActivar] = useState(true)
    const [activar1, setActivar2] = useState(true)
    const [activar3, setActivar3] = useState(true)

    const [first2, setfirst2] = useState(false);

    const [dataMarca, setDataMarca] = useState({
        marca_nombre: ''
    })

    const envioData2 = async (dataMarca, key, datos) => {
        if(first2){
        //    console.log("hola soy el datos[key]",datos[key])
         //   console.log("hola soy el envio data", dataMarca)
            actualizacion2(datos[key],data);

        }
    }
    


    const [data,setData] = useState ({
        proveedor_nombre: '', 
        proveedor_telefono:'',
        proveedor_email:'',
               
    });
    const handleInputChange = (event) => {
        setData ({
          ...data,[event.target.name] : event.target.value ,
          ...dataMarca,[event.target.name] : event.target.value 
      })
  }
    //console.log(props.usuarios);
    const [enable, setenable] = useState([])
    const [enable2, setenable2] = useState([])
    const [datos, Setdatos] = useState()

    useEffect(()=>{
        console.log("se actualiza")
    },[estadoListaMarcas])

    

    const llamadoMarca = async (idFila) => {
       console.log("soy el proveedor_id", idFila)
        try {
            const respuestaMarca =  await axios.get(url2 + `/api/cotizador/provmarcas/view/${idFila}`)
            setListaMarcas((prep)=>{return respuestaMarca.data.data})
            // setListaMarcas(respuestaMarca.data.data)
            console.log("soy la resouestadatdata",respuestaMarca.data.data)
            console.log("soy la lista marcas estadoListadoMarcas:", estadoListaMarcas)
        } catch(error){console.log(error)}
        
    }

    useEffect(() => {
        Setdatos(props.clientes); 
    },[props.clientes]);

    useEffect(() => {
        let i = Object.keys(props.clientes)
         i = i.length
        console.log(i)
        setenable ( Array(i).fill(true));
        console.log(enable);
    },[])

    const habilitar = (key) =>{
        key = parseInt(key);
        const newArr =[] 
        let c = Object.keys(props.clientes);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i]=!enable[i];
            }
            if(i !== key){
                newArr[i]=true;
            }

        }   
        setenable(newArr);
    }
    const habilitar2 = (key) =>{
        console.log("key:",key)
        key = parseInt(key);
        const newArr =[] 
        let c = Object.keys(estadoListaMarcas);
        c = c.length;
        for (let i = 0 ; i < c ; i++){
            if(i === key){
                newArr[i]=!enable2[i];
            }
            if(i !== key){
                newArr[i]=true;
            }

        }   
        setenable2(newArr);
    }

    return (
        <div>
            <form>
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
                            <th>Ver Marcas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*=================== Contenido Tabla Proveedores =================*/}
                        {Object.keys(props.clientes).map((key) => (
                            <tr key={props.clientes[key].proveedor_id}>
                            <td>{props.clientes[key].proveedor_id}</td>
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].proveedor_nombre}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="proveedor_nombre"
                                ></input>
                            </td>
                            {/*================= Teléfono ==================*/}
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].proveedor_telefono}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="proveedor_telefono"
                                ></input>{" "}
                            </td>
                            {/*================= email==================*/}
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].proveedor_email}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="proveedor_email"
                                ></input>{" "}
                            </td>

                            <td>
                                {" "}
                                <button
                                    className="btn btn-primary modificar"
                                    type="button"
                                    onClick={() => {
                                    props.envioData(datos,key,data); 
                                    habilitar(key); 
                                    setData({
                                        proveedor_nombre: '', 
                                        proveedor_telefono:'',
                                        proveedor_email:'',
                                               
                                    })
                                    props.setfirst(activar) ; 
                                    setActivar(!activar)
                                    }}
                                >{activar ? 'Modificar' : 'Aceptar'}
                                </button>
                            </td>
                            <td>
                                {" "}
                                <button
                                    className="btn btn-primary "
                                    type="button"
                                    onClick={() => {
                                        llamadoMarca(props.clientes[key].proveedor_id);
                                        setActivar2(!activar1)
                                
                                        
                                    }}
                                >{activar ? 'Ver marcas' : 'Ocultar'}
                                </button>
                            </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>

                {activar1 ? (
                    <div></div>
                ) : (
                <div className="arregla">
                    <div className="contenido-usuarios">
     {/*=================== TABLA MARCA ===================*/}
                    <Table responsive striped bordered hover size="sm" className="tablas">
                        <thead>
                            {/*=================== Titulos Tabla Marca ===================*/}
                            <tr className="titulo-tabla-usuarios">
                                <th>ID</th>
                                <th>Marca</th>
                                <th>Modificar</th>
            
                            </tr>
                        </thead>
                        <tbody>
                            {/*=================== Contenido Tabla Marca =================*/}
                            {Object.keys(estadoListaMarcas).map((key) => (
                                <tr key={estadoListaMarcas[key].marca_id }>
                                <td>{estadoListaMarcas[key].marca_id }</td>
                                <td>
                                    <input
                                    className="input-name"
                                    defaultValue={estadoListaMarcas[key].marca_nombre}
                                    onChange={handleInputChange}
                                    disabled={enable2[key]}
                                    name="proveedor_nombre"
                                    ></input>
                                </td>
                                <td>
                                    {" "}
                                    <button
                                        className="btn btn-primary modificar"
                                        type="button"
                                        onClick={() => {
                                        envioData2(datos,key,data); 
                                        habilitar2(key); 
                                        setfirst2(activar3) ; 
                                        setActivar3(!activar3)
                                        }}
                                    >{activar ? 'Modificar' : 'Aceptar'}
                                    </button>
                                </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                </div>                       
                ) }
            </form>
        </div>
    )
}