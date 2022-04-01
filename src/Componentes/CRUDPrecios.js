import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import Animaciones from './Animaciones';

export const CrudPrecios = (props) => {
    /*================================================== Partidas ==================================================*/
        /*========================= Editar =========================*/
        const [activar, setActivar] = useState(true)

        const [data,setData] = useState ({
            precio_lista:'',
            precio_unitario:'',
            precio_descuento:'',
            precio_total:'',
            precio_id_moneda:''     
        });

        const [dataCantidad,setDataCantidad] = useState ({
            sp_cantidad:''    
        });

        const handleInputChange = (event) => {
            setData ({
                ...data,[event.target.name] : event.target.value ,
            })
            setDataCantidad({
                ...dataCantidad,[event.target.name]:event.target.value,
            })
        }
        
        const [enable, setenable] = useState([]);
        const [datos, Setdatos] = useState();

        useEffect(() => {
            Setdatos(props.precios); 
        },[props.precios]);


        useEffect(() => {
            let i = Object.keys(props.precios)
            i = i.length
            //console.log(i)
            setenable(Array(i).fill(true)); 
        },[props.precios])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr = [] 
            let p = Object.keys(props.precios);
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
        }
        /*==========================================================*/
        
    return (
        <div>
           {/* <form> */}
           <Animaciones mytext="Precios" />
            <Table responsive id="nombreDiv"  striped bordered hover size="sm">
                <thead>
                    <tr className="titulo-tabla-usuarios">
                        <th>ID</th>
                        <th>Cantidad</th>
                        <th>Precio Lista</th>
                        <th>Precio Unitario</th>
                        <th>Desc(%)</th>
                        <th>Precio Total</th>
                        <th>Moneda</th>
                        <th>Modificar</th>
                    </tr>
                    </thead>

                    <tbody>
                        {Object.keys(props.precios).map((key) => (    
                        <tr key={props.precios[key].precio_id}>
                            <td>{props.precios[key].precio_id}</td>
                            <td>
                                <input
                                className="input-name" 
                                defaultValue={props.precios[key].sp_cantidad} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="sp_cantidad" 
                                ></input>
                            </td>
                            <td>
                                <input
                                className="input-name" 
                                defaultValue={props.precios[key].precio_lista} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_lista" 
                                ></input>  
                            </td> 
                            <td>
                                <input
                                className="input-name" 
                                defaultValue={props.precios[key].precio_unitario} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_unitario" 
                                ></input>  
                            </td>  
                            <td>
                                <input
                                className="input-name" 
                                defaultValue={props.precios[key].precio_descuento} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_descuento" 
                                ></input>  
                            </td> 
                            <td>
                                <input
                                className="input-name" 
                                defaultValue={props.precios[key].precio_total} 
                                //disabled={true}
                                //readOnly
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                name="precio_total" 
                                ></input>  
                            </td> 
                            <td>
                                <select 
                                id="lista-opciones" 
                                name="precio_id_moneda" 
                                defaultValue={props.precios[key].precio_id_moneda} 
                                disabled={enable[key]} 
                                onChange={handleInputChange}
                                >
                                    <option value={0}></option>
                                    <option value={1}>MXN</option>
                                    <option value={2}>USD</option>
                                </select>
                            </td>
                            <td>
                                <button 
                                className="btn btn-primary modificar"
                                onClick={()=>{
                                    habilitar(key); 
                                    props.envioDataPrecio(dataCantidad, datos, key, data);
                                    setActivar(!activar);
                                    props.setfirst(activar);
                                }}
                                >
                                    {activar ? "Modificar" : "Aceptar"}
                                </button>
                            </td>    
                        </tr>  
                        ))
                        }
                    </tbody>
            </Table>
            {/* </form> */}
        </div>
    )
}