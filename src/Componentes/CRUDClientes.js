import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'

export const CrudClientes = (props) => {
    const [activar, setActivar] = useState(true)

    const [data,setData] = useState ({
        nombre_cliente: '', 
        razon_social:'',
        telefono:'',
        cliente_direccion:''        
    });
    const handleInputChange = (event) => {
        setData ({
          ...data,[event.target.name] : event.target.value ,
      })
  }
    //console.log(props.usuarios);
    const [enable, setenable] = useState([])
    const [datos, Setdatos] = useState()

    useEffect(() => {
        Setdatos(props.clientes); 
    },[props.clientes]);

    useEffect(() => {
        let i = Object.keys(props.clientes)
         i = i.length
        //console.log(i)
        setenable ( Array(i).fill(true));
        //console.log(enable);
    },[])

    const habilitar = (key) =>{
        key = parseInt(key);
        const newArr =[] 
        let c = Object.keys(props.clientes);
        c = c.length + 1;
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
                            <th>Cliente</th>
                            <th>Razón Social</th>
                            <th>Teléfono</th>
                            <th>Dirección</th>
                            <th>Eliminar</th>
                            <th>Modificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/*=================== Contenido Tabla Clientes =================*/}
                        {Object.keys(props.clientes).map((key) => (
                            <tr key={props.clientes[key].cliente_id}>
                            <td>{props.clientes[key].cliente_id}</td>
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].nombre_cliente}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="nombre_cliente"
                                ></input>
                            </td>
                            {/*================= Razón Social ==================*/}
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].razon_social}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="razon_social"
                                ></input>{" "}
                            </td>
                            {/*================= Teléfono ==================*/}
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].telefono}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="telefono"
                                ></input>{" "}
                            </td>
                            {/*================= Dirección==================*/}
                            <td>
                                <input
                                className="input-name"
                                defaultValue={props.clientes[key].cliente_direccion}
                                onChange={handleInputChange}
                                disabled={enable[key]}
                                name="cliente_direccion"
                                ></input>{" "}
                            </td>

                            {/*================= Borrar Cliente ==================*/}
                            <td>
                                <button
                                className="btn btn-primary eliminar"
                                onClick={() => props.borrar(props.clientes[key].cliente_id)
                                }
                                >
                                {" "}
                                Eliminar
                                </button>

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
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </form>
        </div>
    )
}