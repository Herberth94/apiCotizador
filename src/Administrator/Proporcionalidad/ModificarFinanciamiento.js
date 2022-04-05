import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from "react-bootstrap/Table";
import { url, url2 } from "../../Componentes/Ocultar";

function ModificarFinanciamiento(prop) {
    // id del proyecto del que queremos ver la proporcionalidad
    const idProyecto = prop.propIdProyecto
    console.log("este es el idProyecto en modificar financiamiento", idProyecto)

    // almacenamiento de las proporcionalidades 
    const [listaFinanciamiento, setListaFinanciamiento] = useState([]);

    //llamado al endpoint para visualizar las proporcionalidades guardadas en la BD
    useEffect(() => {
        async function llamadiListaFinanciamiento() {
            try {
                const respuesta = await axios.get(url2 + `/api/cotizador/proporcionalidad/view/${idProyecto}`)
                setListaFinanciamiento(respuesta.data.data)
                console.log(respuesta.data.data)

            } catch (error) {
                console.log(error)
            }
        }
        llamadiListaFinanciamiento();
    }, [])

    const [datosProporcionalidad, setDatosProporcionalidad] = useState({
        pd_tasa_interes: '',
        pd_anio_financiamiento: '',
        pd_pagos_anuales: ''
    
      })
      // Función que obtiene los datos introducidos en los inputs 
      const handleInputChange = (event) => {
        setDatosProporcionalidad({
          ...datosProporcionalidad, [event.target.name]: event.target.value,
        })
      }
      // Función que realiza la inserción de los datos a la tabla proporcionalidad en la bd 
    
    async function SendProporcionalidadModificada(){
        console.log(idProyecto)
        const data = {
          pd_tasa_interes: datosProporcionalidad.pd_tasa_interes,
          pd_anio_financiamiento: datosProporcionalidad.pd_anio_financiamiento,
          pd_pagos_anuales: datosProporcionalidad.pd_pagos_anuales
        };
        try {
          await axios.put(url2 + `/api/cotizador/proporcionalidad/update/${idProyecto}`, data);
          alert('Actualización de datos de proporcionalidad exitoso')
        } catch (error) {
          console.log(error)
        }

    }

    return (

        <div className="contenido-usuarios">

            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>ID</th>
                        <th>Tasa de Interes</th>
                        <th>Años de Financiamiento</th>
                        <th>Pagos Anuales</th>
                        <th>Modificar</th>

                    </tr>
                </thead>
                <tbody>
                    {Object.keys(listaFinanciamiento).map((key) =>(
                        <tr key={listaFinanciamiento[key].pd_id}>
                            {/*================= ID ==================*/}
                            <td>
                                {listaFinanciamiento[key].pd_id}    
                            </td>
                            {/*================= Años de Financiamiento ==================*/}
                            <td>
                                <input
                                    onChange={handleInputChange} 
                                    defaultValue={listaFinanciamiento[key].pd_tasa_interes}
                                    type="text"
                                    name='pd_tasa_interes'></input>
                            </td>

                            {/*================= Pagos Anuales ==================*/}
                            <td>
                                <input
                                    onChange={handleInputChange} 
                                    defaultValue={listaFinanciamiento[key].pd_anio_financiamiento}
                                    type="text"
                                    name='pd_anio_financiamiento'>
                                </input>
                            </td>
                            {/*================= Pagos Anuales ==================*/}
                            <td>
                                <input
                                    onChange={handleInputChange} 
                                    defaultValue={listaFinanciamiento[key].pd_anio_financiamiento}
                                    type="text"
                                    name='pd_pagos_anuales'>
                                </input>
                            </td>
                            {/*================= Agregar==================*/}
                            <td>
                                <button onClick={SendProporcionalidadModificada} className="btn btn-primary"> Modificar </button>
                            </td>

                        </tr>
                    ))}

                </tbody>
            </Table>
        </div>

    )
}
export default ModificarFinanciamiento