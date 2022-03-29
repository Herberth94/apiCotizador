import axios from 'axios';
import React ,{useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'
import { EditSP } from '../Routes/ModificarSP';
import Animaciones from './Animaciones';
import { CrudSp } from './CRUDSP';

export const CrudPartidas = (props) => {
    /*======================================== Habilitar/Deshabilitar secciones ========================================*/
    const[show,setShow] = useState(true);// Lista de servicios/productos

    /*================================================== Partidas ==================================================*/
        /*========================= Editar =========================*/
        const [activar, setActivar] = useState(true)

        const [data,setData] = useState ({
            partida_nombre:'',
            partida_descripcion:''      
        });

        const handleInputChange = (event) => {
            setData ({
            ...data,[event.target.name] : event.target.value ,
        })
        }

        const [enable, setenable] = useState([])
        const [datos, Setdatos] = useState()
        

        useEffect(() => {
            Setdatos(props.partidas); 
        },[props.partidas]);


        useEffect(() => {
            let i = Object.keys(props.partidas)
            i = i.length
            //console.log(i)

            setenable(Array(i).fill(true)); 
        },[props.partidas])

        
        const habilitar = (key) =>{
            key = parseInt(key);
            const newArr = [] 
            let p = Object.keys(props.partidas);
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

        /*=================================== Eliminación de una partida y sus servicios/productos ===================================*/
        async function SendDeletePartida(id){
            // getDatosSP(id);
            // //console.log(listaSP);
            // let cSP = Object.keys(listaSP);
            // for(let c = 0; c < cSP;c++){
            //     try {
            //         await axios.delete(`http://localhost:4001/api/cotizador/precio/delete/${listaSP[c].sp_id_precio}`);
            //     } catch (error) {}
            // }
            // try{
            //     await axios.delete(`http://localhost:4001/api/cotizador/partida/delete/${id}`);
            //     alert('Partida eliminada exitosamene');
                
            // } catch (error) {}
        }
        /*============================================================================================================================*/
    /*==============================================================================================================*/

    /*================================================== servicios/productos ==================================================*/
        /*========================= Resumen - servicios/productos de una partida =========================*/
        // Almacenamiento del los servicios_productos
        const[listaSP, setListaSP] = useState([]);

        // Almacenamiento de los proveedores existentes para el buscador
        const [ListaProv, setListaProv] = useState ([]);


        // Función que realiza la consulta a las tablas servicio_producto y proveedores
        async function getDatosSP(partida_id){
            try{
                const resPSP = await axios.get(`http://localhost:4001/api/cotizador/partida/viewPSP/${partida_id}`);
                setListaSP(resPSP.data.data);
                const respuesta = await axios.get("http://localhost:4001/api/cotizador/proveedor/view");
                setListaProv(respuesta.data.data);
            }catch(error){
                console.log(error);
            }
        }
        /*================================================================================================*/

        /*========================= Envío de nuevos datos =========================*/
        const [first,setfirst] = useState(false);

        const {actualizacionSP} = EditSP();

        const envioDataSp = (nP, dataProv, nM, dataM,newdata, key, data) => {
            if(first){
                // console.log('Proveedor:',nP[key]);
                // console.log('Proveedores:', dataProv);
                // console.log('Marca:',nM[key]);
                // console.log('Marcas:', dataM);
                // console.log('NewData:',newdata);
                // console.log('OldData:',data[key]);
                actualizacionSP(nP[key],dataProv,nM[key],dataM,data[key], newdata);
            }
        }
        /*=========================================================================*/
    /*=========================================================================================================================*/
    return (
        <div>
           {/* <form> */}
                <Animaciones mytext="Partidas" />

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
                        {Object.keys(props.partidas).map((key) => (    
                            //checar aqui va los titulos
                            <tr key={props.partidas[key].partida_id} >
                                <td>{props.partidas[key].partida_id}</td>
                                <td>
                                    <input 
                                    id={props.partidas[key].partida_id}
                                    className="input-name" 
                                    defaultValue={props.partidas[key].partida_nombre} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="partida_nombre" 
                                    ></input>
                                </td>
                                <td>
                                    <input
                                    className="input-name" 
                                    defaultValue={props.partidas[key].partida_descripcion} 
                                    disabled={enable[key]} 
                                    onChange={handleInputChange}
                                    name="partida_descripcion" 
                                    ></input>
                                </td> 
                                <td>
                                    <button 
                                    className="btn btn-primary eliminar"
                                    onClick={()=>{SendDeletePartida(props.partidas[key].partida_id)}}
                                    >Eliminar</button></td>
                                <td>
                                    <button 
                                    className="btn btn-primary modificar" 
                                    onClick={()=>{
                                        habilitar(key); 
                                        props.envioDataPar(datos, key, data);
                                        props.setfirst(activar);
                                        setActivar(!activar)}}
                                    >{activar ? "Modificar" : "Aceptar"}
                                    </button> 
                                </td> 
                                <td>
                                    <button 
                                    className="btn btn-primary detalles" 
                                    onClick={() => {getDatosSP(props.partidas[key].partida_id);setShow(!show)}}
                                    >
                                        {show ? 'Ver SP' : 'Ocultar SP'}
                                    </button>
                                </td> 
                            </tr>  
                        ))}
                    </tbody>          
                </Table>
                {show ? (
                    <div></div>
                ):(
                    <div>
                    {/*=================== Botón Mostrar Lista DIV =====================*/}
                    <br />
                        <CrudSp
                        sp={listaSP}
                        proveedores={ListaProv}
                        setfirst={setfirst}
                        envioDataSP={envioDataSp}
                        />    
                    </div>
                )}
            {/* </form> */}
        </div>
    )
}