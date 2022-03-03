import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";


function CostosIndirectos() {
  return (
      
    <div className="contenido-usuarios">

   <div> <Animaciones mytext="Costos Indirectos" /> </div>


<Table responsive id="nombreDiv">
    <thead>
        <tr className="azul">
            <th>Descripción</th>
            <th>total</th>
            <th>%</th>
            <th>Total</th>
            <th>Editar</th>
        </tr>
    </thead>
    <tbody>
        <tr className="">
            <td>Comisiones</td>
            <td>35.1904</td>
            <td>2 %</td>
            <td>35.1904</td>
            <td>
            <button className="btn btn-primary"> Editar </button>
            </td>
        </tr>
        <tr className="color">
            <td>Riezgo</td>
            <td>17.595220</td>
            <td>1% </td>
            <td>17.595220 </td>
            <td>
            <button className="btn btn-primary"> Editar </button>
            </td>
        </tr>
        <tr className="">
            <td>Fianza</td>
            <td>87.97610</td>
            <td> 5 %</td>
            <td> 87.97610 </td>
            <td>
            <button className="btn btn-primary"> Editar </button>
            </td>
        </tr>
        <tr className="">
            <td>Seguros y Fletes</td>
            <td>17.59522</td>
            <td>1 % </td>
            <td>17.59522</td>
            <td>
            <button className="btn btn-primary"> Editar </button>
            </td>
        </tr>
        <tr className="">
            <td>Costo Administrativo</td>
            <td>70.38088</td>
            <td>4 % </td>
            <td>70.38088 </td>
            <td>
            <button className="btn btn-primary"> Editar </button>
            </td>
        </tr>

        <tr className="total">
            <td>Total</td>
            <td>228.73786</td>
            <td> % </td>
            <td>228.73786</td>
            <td></td>
        </tr>
    </tbody>
</Table>



    </div>
  )
}

export default CostosIndirectos