import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";

function Proporcionalidad() {
  return (
    
    
    <div className="contenido-usuarios">

<div> <Animaciones mytext="Resumen Categorias" /> </div>
 
 <Table responsive id="nombreDiv">
                <thead>
                    <tr className="azul" >
                        <th>Categoria</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className= "par" >
                        <td>Capacitación</td>
                        <td>160003</td>
                    </tr>
                    <tr className="color impar">
                        <td>Accesorios</td>
                        <td>80807</td>
                    </tr>
                    <tr className="par">
                        <td>Servicios PTN</td>
                        <td>371.36</td>
                    </tr>
                    <tr className="impar">
                        <td>Mesa de Ayuda</td>
                        <td>371.36</td>
                    </tr>
                    <tr className="total">
                        <td>Total</td>
                        <td>263572.36</td>
                    </tr>

                </tbody>
            </Table>

            <div> <Animaciones mytext="Proporcionalmente" /> </div>


            <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="azul">
                            <th>Descripción</th>
                            <th>PRECIO VENTA</th>
                            <th>%</th>
                            <th>Proporcionar MESA DE AYUDA</th>
                            <th>TOTAL</th>                      
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="par">
                            <td>Swithches</td>
                            <td>1073.98</td>
                            <td>24% </td>
                            <td>1193</td>
                            <td>2267.93</td>
                        

                        </tr>

                        <tr className="impar">
                            <td>Routers</td>
                            <td>1073.98</td>
                            <td>24% </td>
                            <td>1193</td>
                            <td>2267.93</td>
                       

                        </tr>

                        <tr className="par">
                            <td>Servidores</td>
                            <td>1073.98</td>
                            <td>24% </td>
                            <td>1193</td>
                            <td>2267.93</td>
                          

                        </tr>


                        <tr className="impar">
                            <td>Consultoría</td>
                            <td>1073.98</td>
                            <td>24% </td>
                            <td>1193</td>
                            <td>2267.93</td>
                         

                        </tr>


                        <tr className="total">
                            <td>Totales</td>
                            <td>1073.98</td>
                            <td>24% </td>
                            <td>1193</td>
                            <td>2267.93</td>
                           

                        </tr>
                    </tbody>
                </Table>




        
    </div>
  )
}

export default Proporcionalidad