import React from 'react'

import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";



function MargenGanancia() {
  return (
      
    <div className="contenido-usuarios">

   <div> <Animaciones mytext="Margen de Ganancias" /> </div>


<Table responsive id="nombreDiv">
    <thead>
        <tr className="azul">
            <th>Descripción</th>
            <th>Costo Total</th>
            <th>Margen de Ganancia</th>
            <th>Precio de Venta</th>
        </tr>
    </thead>
    <tbody>
        <tr className="">
            <td>Partida 1</td>
            <td>1053.95</td>
            <td>32 %</td>
            <td>1549.926470</td>
        </tr>
        <tr className="color">
            <td>Partida 2</td>
            <td>132.525</td>
            <td>32 % </td>
            <td>194.889705 </td>
        </tr>
        <tr className="">
            <td>Capacitación</td>
            <td>0</td>
            <td>0 % </td>
            <td>0 </td>
        </tr>
        <tr className="">
            <td>Accesorios</td>
            <td>0</td>
            <td>0 % </td>
            <td>0 </td>
        </tr>
        <tr className="">
            <td>Servicios PTN</td>
            <td>0</td>
            <td>0 % </td>
            <td>0 </td>
        </tr>
        <tr className="">
            <td>Mesa de Ayuda</td>
            <td>10</td>
            <td>32 % </td>
            <td>14.70588</td>
        </tr>
        <tr className="total">
            <td>Total</td>
            <td>1196.475</td>
            <td>32 % </td>
            <td>1759.522058</td>
        </tr>
    </tbody>
</Table>


    </div>
  )
}

export default MargenGanancia