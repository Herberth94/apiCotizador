import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";



import {costosIndirectos, equivale,  totalIndirecto} from "../../Componentes/OperacionesAM";




function CostosIndirectos() {
  return (
      
    <div className="contenido-usuarios">

   <div> <Animaciones mytext="Costos Indirectos" /> </div>

   <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Descripción</th>
                        <th>Equivale a % </th>
                        <th>Total </th>
                        <th>Editar</th>
 
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(costosIndirectos).map((key) => (
                        <tr key={costosIndirectos[key]}>
                                {/*================= Descripción==================*/}
                            <td>{costosIndirectos[key]}    </td>

                            {/*================= Equivale ==================*/}
                            <td className="editar">{equivale[key]}  {" % "}</td>
                            {/*================= Total Indirecto ==================*/}
                            <td>{ totalIndirecto[key]}</td>
                            {/*================= Editar==================*/}

                            
                            <td>
                                <button className="btn btn-primary"> Editar </button>
                            </td>

                        </tr>
                    ))}
                </tbody>
            </Table>



    </div>
  )
}

export default CostosIndirectos