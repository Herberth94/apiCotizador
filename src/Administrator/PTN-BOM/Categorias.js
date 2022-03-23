import React, { useState } from 'react'
import Table from "react-bootstrap/Table";
import axios from 'axios';

import {url2} from "../../Componentes/Ocultar";


function Categorias() {
    /*=================================== Obtención de datos para la tabla cat_totales ===================================*/
    /*=================================== Totales capacitación ===================================*/
    // Almacenamiento de los totales
    const [datosCapacitacion,setDatosCapacitacion] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    // Obtención de los datos introducidos en los input
    const handleInputChangeCapacitacion = (event) =>{
        setDatosCapacitacion({
            ...datosCapacitacion, [event.target.name] : event.target.value
        })
    }
    /*============================================================================================*/

    /*=================================== Totales accesorios ===================================*/
    // Almacenamiento de los totales
    const [datosAccesorios,setDatosAccesorios] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    // Obtención de los datos introducidos en los input
    const handleInputChangeAccesorios = (event) =>{
        setDatosAccesorios({
            ...datosAccesorios, [event.target.name] : event.target.value
        })
    }
    /*==========================================================================================*/

    /*=================================== Totales servicios ptn ===================================*/
    // Almacenamiento de los totales
    const [datosSptn,setDatosSptn] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    // Obtención de los datos introducidos en los input
    const handleInputChangeSptn = (event) =>{
        setDatosSptn({
            ...setDatosSptn, [event.target.name] : event.target.value
        })
    }
    /*=============================================================================================*/

    /*=================================== Totales mesa de ayuda ===================================*/
    // Almacenamiento de los totales
    const [datosMA,setDatosMA] = useState({
        ct_totales_mxn:'',
        ct_totales_usd:''
    });

    // Obtención de los datos introducidos en los input
    const handleInputChangeMA = (event) =>{
        setDatosMA({
            ...datosMA, [event.target.name] : event.target.value
        })
    }
    /*=============================================================================================*/
    /*====================================================================================================================*/

    /*============================= Inserción de datos en las tablas cat_totales y proyectos_cat_cat_t =============================*/
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
            // Obtención del id del último proyecto insertado
            const resGetProyectos = await axios.get("http://localhost:4001/api/cotizador/proyecto/view");
            ListaProyectos = resGetProyectos.data.data.pop();
            proyectoId.proyecto_id = ListaProyectos.proyecto_id;

            // Inserciones a las tablas cat_totales y proyectos_cat_cat_t
            await axios.post(url2 + `/api/cotizador/catt/agregar/1/${proyectoId.proyecto_id}`,dataCapacitacon);
            await axios.post(url2 + `/api/cotizador/catt/agregar/2/${proyectoId.proyecto_id}`,dataAccesorios);
            await axios.post(url2 + `/api/cotizador/catt/agregar/3/${proyectoId.proyecto_id}`,dataSptn);
            await axios.post(url2 + `/api/cotizador/catt/agregar/4/${proyectoId.proyecto_id}`,dataMA);
            alert('Registro exitoso')
        }catch (error){
        console.log("este es el error", error.toJSON());
        }
    }

      const envariDatosCatt = (event) =>{
          SendCategorias();
          event.preventDefault()
          event.target.reset();
      }
    /*==============================================================================================================================*/

    return (
        <div className="contenido-usuarios">
            <form action="" method="post" onSubmit = {envariDatosCatt}>
                <Table responsive id="nombreDiv">
                    <thead>
                        {/*========================== Titulos Tabla ==========================*/}
                        <tr className="titulo-tabla-usuarios">
                            <th>Categoría</th>
                            <th>Total MXN</th>
                            <th>Total USD </th>
                        </tr>
                    </thead>
                    {/*========================== Totales capacitación ==========================*/}
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
                        </tr>
                        {/*========================== Totales accesorios ==========================*/}
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
                        </tr>
                        {/*========================== Totales servicios ptn ==========================*/}
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

                        </tr>
                        {/*========================== Totales mesa de ayuda ==========================*/}
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
                        </tr>
                    </tbody>
                </Table>
                <button className="btn btn-success">Agregar Datos Categoria </button>
            </form>
        </div>
    )
}

export default Categorias