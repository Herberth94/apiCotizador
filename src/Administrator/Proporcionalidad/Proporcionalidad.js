import React from 'react'
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";

import {TOTAL, proporcional ,  proporcionalMesaAyuda,  partidasUnicas,  precioVenta2 ,
     totalMensual , financiamiento} 
     from "../../Componentes/OperacionesAM";



function Proporcionalidad() {
  return (
    
    
    <div className="contenido-usuarios">



            <div> <Animaciones mytext="Proporcionalmente" /> </div>

            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Descripción</th>
                        <th > Precio Venta </th>
                        <th>  % </th>
                        <th>Proporcional MESA DE AYUDA </th>
                        <th>TOTAL</th>
                        <th>TOTAL MENSUAL</th>
                        <th>Financiamiento</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(partidasUnicas).map((key) => (
                        <tr key={partidasUnicas[key]}>
                            
                            {/*================= Descripción  ==================*/}

                            <td>{partidasUnicas[key]}</td>


                            <td>{"$ "}{precioVenta2[key]}</td>
                            {/*================= Precio Venta ==================*/}
                            <td className="verde" >{proporcional[key]} {" % "}  </td>

                          {/*=================  % ==================*/}
                      

                         {/*================= Proporcional Mesa de Ayuda==================*/}
                            <td>{ proporcionalMesaAyuda[key]} {" $"}</td>

                            {/*================= Total ==================*/}

                            <td className="azul">{TOTAL[key]} {" $ "}</td>

                  {/*================= Total Mensual ==================*/}
                  <td className="azul"> {totalMensual[key]}{" $ "}</td>

                    {/*================= Financiamiento ==================*/}
                            <td>{financiamiento[key]}</td>
                                {/*================= eDITARF==================*/}   
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

export default Proporcionalidad