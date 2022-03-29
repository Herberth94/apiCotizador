import React from 'react'
import Table from "react-bootstrap/Table";

function Financiamiento() {
  return (
    <div className="contenido-usuarios">

<Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Tasa de Interes</th>
                        <th>Años de Financiamiento</th>
                        <th>Pagos Anuales</th>
                        <th>Editar</th>
 
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                  
                        <tr >
                                {/*================= Descripción==================*/}
                            <td>
                          <input>
                          
                          </input>


                            </td>

                            {/*================= Equivale ==================*/}
                            <td>

                            <input>
                          
                          </input>
                            </td>
                            {/*================= Total Indirecto ==================*/}
                            <td>


                            <input>
                          
                          </input>
                            </td>
                            {/*================= Editar==================*/}

                            
                            <td>
                                <button className="btn btn-primary"> Editar </button>
                            </td>

                        </tr>

                </tbody>
            </Table>




        
    </div>
  )
}

export default Financiamiento