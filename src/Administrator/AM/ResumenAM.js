import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";







function ResumenAM() {
  return (
    <div className="contenido-usuarios">

<div> <Animaciones mytext="Resumen AM" /> </div>

<Table responsive id="nombreDiv">
                    <thead>
                        <tr className="azul">
                            <th>Descripción</th>
                            <th>Total MXN</th>
                            <th>Total USD</th>
                            <th>Total Moneda BOM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Partida 1</td>
                            <td>99</td>
                            <td>1049 </td>
                            <td>1053.95</td>
                        </tr>
                        <tr className="">
                            <td>Partida 2</td>
                            <td>650.5</td>
                            <td>100 </td>
                            <td>132.525</td>
                        </tr>
                        <tr className="par">
                            <td>Capacitación</td>
                            <td>0</td>
                            <td>0 </td>
                            <td>0</td>
                        </tr>
                        <tr className="par">
                            <td>Accesorios</td>
                            <td>0</td>
                            <td>0 </td>
                            <td>0</td>
                        </tr>
                        <tr className="par">
                            <td>Servicios PTN</td>
                            <td>0</td>
                            <td>0 </td>
                            <td>0</td>
                        </tr>
                        <tr className="par">
                            <td>Mesa de Ayuda</td>
                            <td>200</td>
                            <td>0 </td>
                            <td>10</td>
                        </tr>
                        <tr className="total">
                            <td>Total</td>
                            <td>949.5</td>
                            <td>1149</td>
                            <td>1196.475</td>
                        </tr>
                    </tbody>
                </Table>
           






    </div>
  )
}

export default ResumenAM