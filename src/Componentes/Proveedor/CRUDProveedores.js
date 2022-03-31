import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import axios from "axios";
import {url} from "../../Componentes/Ocultar";
import {url2} from "../../Componentes/Ocultar";
export const CrudProveedores = (props) => {
    const [activar, setActivar] = useState(true)

    const [data,setData] = useState ({
        proveedor_nombre: '', 
        proveedor_telefono:'',
        proveedor_email:'',
               
    });
    const handleInputChange = (event) => {
        setData ({
          ...data,[event.target.name] : event.target.value ,
      })
  }
    //console.log(props.usuarios);
    const [enable, setenable] = useState([])
    const [datos, Setdatos] = useState()

    const llamadoMarca = async () => {
       // console.log("soy el proveedor_id", proveedor_id)
        try {
            const respuestaMarca =  await axios.get(url2 + `/api/cotizador/provmarcas/view/25`)
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

    return (
        <div>
            <form>
                {/*===================     Tabla Clientes   ========================*/}
                <Table responsive striped bordered hover size="sm" className="tablas">
                    <thead>
                        {/*=================== Titulos Tabla Clientes ===================*/}
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
                        {/*=================== Contenido Tabla Clientes =================*/}
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
                                    props.setfirst(activar) ; 
                                    setActivar(!activar)
                                    }}
                                >{activar ? 'Modificar' : 'Aceptar'}
                                </button>
                            </td>
                            <td>
                                {" "}
                                <button
                                    className="btn btn-primary modificar"
                                    type="button"
                                    onClick={() => {
                                        llamadoMarca()
   
                                    }}
                                >{activar ? 'Ver marcas' : 'Ocultar'}
                                </button>
                            </td>

                            </tr>
                        ))}
                    </tbody>
                </Table>
            </form>
        </div>
    )
}