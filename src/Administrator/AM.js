import React from 'react'

import Table from 'react-bootstrap/Table'
import './css/AM.css';



function Am() {
    return (
        <div className="contenido-usuarios">

            <div className="table-responsive">


                <div className="valor-dolar">
                <div className="titulo-proyectos">
                    <h2>Divisa del Proyecto</h2>
                </div>
                    <div className="valor_dolar">
                   <input className="agregar"
                    type="text"
                    name="clave"
                    placeholder="ingrese Clave Proyecto" />
                    <br/>
                    <br/>           
                      <input className="agregar"
                    type="number"
                    name="doalr"
                    placeholder="ingrese Valor Dolar" />
                    </div>
                    <div className="subir_dolar">
                    <button className="btn btn-success">Subir Valor Dolar</button>
                    </div>
                </div>
            

            <div className="espacio"></div>

                <div className="titulo-proyectos">
                    <h2>Búsqueda por Proyecto</h2>
                </div> 
 {/*********Búsqueda de Proyectos AM ********/}

                <div className="busqueda-proyectos">
                    <Table responsive id="nombreDiv">
                        <thead>
                            <tr className="titulo-tabla-usuarios">
                                <th>Búsqueda por Atributo</th>
                                <th>Clave</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr >
                                <td>
                                    <select id="lista-opciones">
                                        <option value="lista 3">Nombre Proyecto</option>
                                        <option value="lista 1">Clave</option>
                                        <option value="lista 2">Cliente</option>
                                        <option value="lista 3">Fecha</option>
                                    </select>
                                </td>
                                <td>
                                    <input className="agregar"
                                        type="text"
                                        name="Ingrese Parametro"
                                        placeholder="búsqueda" />
                                </td>
                                <td>
                                    <button className="btn btn-primary"> Buscar</button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                

 {/*********Resumen Monedas MXN USD Y Conversion de Moneda BOM PTN ********/}

                <div className="titulo-proyectos">
                    <h2>Resumen</h2>
                </div>
                <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="titulo-tabla-usuarios">
                            <th>Descripción</th>
                            <th>Total MXN</th>
                            <th>Total USD</th>
                            <th>Total Moneda BOM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Partdia 1</td>
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
                        <tr className="azul">
                            <td>Capacitación</td>
                            <td>0</td>
                            <td>0 </td>
                            <td>0</td>                
                        </tr>
                        <tr className="azul">
                            <td>Accesorios</td>
                            <td>0</td>
                            <td>0 </td>
                            <td>0</td>                 
                        </tr>
                        <tr className="azul">
                            <td>Servicios PTN</td>
                            <td>0</td>
                            <td>0 </td>
                            <td>0</td>                
                        </tr>
                    <tr className="azul">
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
 {/********************    Margen de Ganancia  *******************************/}
                <div className="titulo-proyectos">
                    <h2>Margen de Ganancia </h2>

                </div>
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
{/******************************Costos Indirectos  *********************************************/}
<div className="titulo-proyectos">
                    <h2>Costos Indirectos </h2>

                </div>
                <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="azul">
                            <th>Descripción</th>
                            <th>total</th>
                            <th>%</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Comisiones</td>
                            <td>35.1904</td>
                            <td>2 %</td>
                            <td>35.1904</td>
                        </tr>
                        <tr className="color">
                            <td>Riezgo</td>
                            <td>17.595220</td>
                            <td>1% </td>
                            <td>17.595220 </td>           
                        </tr>
                        <tr className="">
                            <td>Fianza</td>
                            <td>87.97610</td>
                            <td> 5 %</td>
                            <td> 87.97610 </td>
                        </tr>                    
                        <tr className="">
                            <td>Seguros y Fletes</td>
                            <td>17.59522</td>
                            <td>1 % </td>
                            <td>17.59522</td>
                        </tr>
                        <tr className="">
                            <td>Costo Administrativo</td>
                            <td>70.38088</td>
                            <td>4 % </td>
                            <td>70.38088 </td>
                        </tr>
                                       
                        <tr className="total">
                            <td>Total</td>
                            <td>228.73786</td>
                            <td> % </td>
                            <td>228.73786</td>
                        </tr>
                    </tbody>
                </Table>



                <div className="boton-cotizador"  >
                    <button className="btn btn-success">Imprimir</button>
                </div>

            </div>
        </div>
    );
}
export default Am