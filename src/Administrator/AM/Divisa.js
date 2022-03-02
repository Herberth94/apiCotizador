import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";


function Divisa() {
  return (
      
    <div className="contenido-usuarios">
            {/*======================= Titulo Animación =======================*/}
            <div> <Animaciones mytext="Divisa" /> </div>
                {/*********Búsqueda de Proyectos AM ********/}

                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="azul">
                                <th>Clave Proyecto</th>
                                <th>Valor Dolar</th>
                                <th>Agregrar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                <input className="agregar"
                                        type="text"
                                        name="clave"
                                        placeholder="Clave Proyecto" />
                                </td>
                                <td>
                                    <input className="agregar"
                                        type="text"
                                        name="divisa"
                                        placeholder="Ingrese Divisa" />
                                </td>
                                <td>
                                    <button className="btn btn-primary">Añadir </button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>


    </div>
  )
}

export default Divisa