import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import axios from 'axios';

import {calcularMonedaBOOM} from "./Operaciones";
/*======== Datos que se deben Obtener de este archivo  ==============*/

const nombreCategorias = [
    {categoria: "Accesorios", totalMXN: 100, totalUSD: 5 , total: 10},
    {categoria: "Mesa de Ayuda", totalUSD: 5,totalUSD: 5 , total: 10},
    {categoria: "Servicios PTN", totalMXN: 200 , totalUSD: 5 , total: 10},
    {categoria: "Capacitacion", totalMXN: 200 , totalUSD: 5 , total: 10},
  ];




function Categorias() {
    const [datosCapacitacion,setDatosCapacitacion] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    const [datosAccesorios,setDatosAccesorios] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    const [datosSptn,setDatosSptn] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    const [datosMA,setDatosMA] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    const handleInputChangeCapacitacion = (event) =>{
        setDatosCapacitacion({
            ...datosCapacitacion, [event.target.name] : event.target.value
        })
    }

    const handleInputChangeAccesorios = (event) =>{
        setDatosAccesorios({
            ...datosAccesorios, [event.target.name] : event.target.value
        })
    }

    const handleInputChangeSptn = (event) =>{
        setDatosSptn({
            ...setDatosSptn, [event.target.name] : event.target.value
        })
    }

    const handleInputChangeMA = (event) =>{
        setDatosMA({
            ...datosMA, [event.target.name] : event.target.value
        })
    }

    //Cálculo de la moneda boom, por defecto se utilizara el valor del dolar = 20.92
    const [datosMBOOM, setDatosBoom] = useState ({
        bCapacitacion:'',
        bAccesorios:'',
        bSPTN:'',
        bMA:''
    })
    // useEffect(() => {
    //     let totalBOOM = '';
    //     if(datosCapacitacion.ct_totales_mxn != '' && datosCapacitacion.ct_totales_usd != ''){
    //         totalBOOM = calcularMonedaBOOM(datosCapacitacion.ct_totales_mxn,datosCapacitacion.ct_totales_usd)
    //         setDatosBoom({...datosMBOOM, bCapacitacion:totalBOOM})
    //     }
    //     if(datosAccesorios.ct_totales_mxn != '' && datosAccesorios.ct_totales_usd != ''){
    //         totalBOOM = calcularMonedaBOOM(datosAccesorios.ct_totales_mxn,datosAccesorios.ct_totales_usd)
    //         setDatosBoom({...datosMBOOM, bAccesorios:totalBOOM})
    //     }
    //     if(datosSptn.ct_totales_mxn != '' && datosSptn.ct_totales_usd != ''){
    //         totalBOOM = calcularMonedaBOOM(datosSptn.ct_totales_mxn,datosSptn.ct_totales_usd)
    //         setDatosBoom({...datosMBOOM, bSPTN:totalBOOM})
    //     }
    //     if(datosMA.ct_totales_mxn != '' && datosMA.ct_totales_usd != ''){
    //         totalBOOM = calcularMonedaBOOM(datosMA.ct_totales_mxn,datosMA.ct_totales_usd)
    //         setDatosBoom({...datosMBOOM, bMA:totalBOOM})
    //     }
    // },[datosCapacitacion.ct_totales_mxn,datosCapacitacion.ct_totales_usd,datosAccesorios.ct_totales_mxn,datosAccesorios.ct_totales_usd,
    // datosSptn.ct_totales_mxn,datosSptn.ct_totales_usd,datosMA.ct_totales_mxn,datosMA.ct_totales_usd])
    async function SendCategorias (){
        const dataCapacitacon = {
            ct_totales_mxn:datosCapacitacion.ct_totales_mxn,
            ct_totales_usd:datosCapacitacion.ct_totales_usd
          };

        const dataAccesorios = {
          ct_totales_mxn:datosAccesorios.ct_totales_mxn,
          ct_totales_usd:datosAccesorios.ct_totales_usd
        };

        const dataSptn = {
            ct_totales_mxn:datosSptn.ct_totales_mxn,
            ct_totales_usd:datosSptn.ct_totales_usd
          };
          
          const dataMA = {
            ct_totales_mxn:datosMA.ct_totales_mxn,
            ct_totales_usd:datosMA.ct_totales_usd
          };
        
          var ListaProyectos = {
            proyecto_id:'',
            proyecto_clave:'',
            proyecto_descripcion:'',
            proyecto_id_cliente:'',
            proyecto_id_cat_c_a_sptn_ma:'',
            proyecto_fecha_creacion:'',
            proyecto_fecha_modificacion:''
          };
        
          var proyectoId = {
            proyecto_id:''
          }

        try{
            /*======== Obtención del id del último proyecto insertado ==============*/
            const resGetProyectos = await axios.get("http://localhost:4001/api/cotizador/proyecto/view");
            ListaProyectos = resGetProyectos.data.data.pop();
            proyectoId.proyecto_id = ListaProyectos.proyecto_id;

            const resCatCap = await axios.post(`http://localhost:4001/api/cotizador/catt/agregar/1/${proyectoId.proyecto_id}`,dataCapacitacon);
            const resCatAcc = await axios.post(`http://localhost:4001/api/cotizador/catt/agregar/2/${proyectoId.proyecto_id}`,dataAccesorios);
            const resCatSPTN = await axios.post(`http://localhost:4001/api/cotizador/catt/agregar/3/${proyectoId.proyecto_id}`,dataSptn);
            const resCatMA = await axios.post(`http://localhost:4001/api/cotizador/catt/agregar/4/${proyectoId.proyecto_id}`,dataMA);
            alert('Registro exitoso')
            }
            catch (error){
            console.log("este es el error", error.toJSON());
        }
    
      }
      const enviarDatosCategorias = (event) =>{
          SendCategorias();
          event.preventDefault()
          //event.target.reset();
      }
    return (
        <div className="contenido-usuarios">
  {/*========================== Categorias ==========================*/}
            <Table responsive id="nombreDiv">
                <thead>
   {/*========================== Titulos Tabla ==========================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Categoría</th>
                        <th>Total MXN</th>
                        <th>Total USD </th>
                        <th>Total Moneda BOM </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td> Capacitación</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_mxn"
                                onChange={handleInputChangeCapacitacion}
                                placeholder="Total capacitación MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_usd"
                                onChange={handleInputChangeCapacitacion}
                                placeholder="Total capacitación USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="bapacitacion" 
                                // readonly
                                // value={datosMBOOM.bCapacitacion}
                                placeholder="Moneda BOM"
                                step="any"
                            />
                        </td>
                    </tr>

                    <tr className="">
                        <td> Accesorios</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_mxn"
                                onChange={handleInputChangeAccesorios}
                                placeholder="Total Accesorios MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_usd"
                                onChange={handleInputChangeAccesorios}
                                placeholder="Total Accesorios USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="bAccesorios"
                                //readOnly
                                //value={datosMBOOM.bAccesorios}
                                placeholder="Moneda BOM"
                                step="any"
                            />
                        </td>
                    </tr>

                    <tr className="">
                        <td> Servicios PTN</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_mxn"
                                onChange={handleInputChangeSptn}
                                placeholder="TotalServicios PTN MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_usd"
                                onChange={handleInputChangeSptn}
                                placeholder="Total Servicios PTN USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="bSPTN"
                                //readOnly
                                //value={datosMBOOM.bSPTN}
                                placeholder="Moneda BOM"
                                step="any"
                            />
                        </td>
                    </tr>

                    <tr className="">
                        <td> Mesa de Ayuda</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_mxn"
                                onChange={handleInputChangeMA}
                                placeholder="Total Mesa de Ayuda MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="number"
                                name="ct_totales_usd"
                                onChange={handleInputChangeMA}
                                placeholder="Total Mesa de Ayuda USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="bMA"
                                //readonly
                                //value={datosMBOOM.bMA}
                                placeholder="Moneda BOM"
                                step="any"
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-success" onClick={enviarDatosCategorias}>Agregar Datos Categoria </button>

        </div>
    )
}

export default Categorias