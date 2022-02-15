import React from 'react'
import "./css/PropuestaEconomica.css";
import Table from 'react-bootstrap/Table'


function PropuestaEconomica() {
    return (
        <div className="contenido-usuarios">

            <div className="table-responsive">

            {/*============= Titulo Animación =============*/}
            <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Propuesta Económica<span></span></h1>
                        </div>

                        <div className="role">
                            <div className="block"></div>
                            <p>Palo Tinto Networks</p>
                        </div>

                    </div>
                </div>

                <select id="lista-cotizaciones">
                        <option value="lista 1">Proyecto 1</option>
                        <option value="lista 2">Proyecto 2</option>
                        <option value="lista 3">Proyecto 3</option>
                      

                    </select>
                <br />
                <br />

             <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="encabezado">
                            <th>Nombre</th>
                            <th>Total MXN</th>
                            <th>Total USD</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Total equipamiento</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>



                        <tr className="color">
                        <td>Total Licenciamiento</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>


                        <tr className="">
                        <td>Total Srv. Implementación:</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>


                        <tr className="color">
                        <td>Total Srv. Implementación PTN:</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>


                        <tr className="">
                        <td>Total Srv. Soporte PTN:</td>
                            <td>10000</td>
                            <td>500 </td>
                        </tr>

                            
                        <tr className="color">
                        <td>Total Srv. Mesa de Ayuda PTN:</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>
                        <tr className="">
                        <td>Total Soporte:</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>
                        <tr className="color">
                        <td>Total Srv. Capacitación:</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>
                        <tr className="">
                        <td>Total Accesorios:</td>
                            <td>10000</td>
                            <td>500 </td>
                            
                        </tr>
                        <tr className="total">
                        <td>Precio Total</td>
                            <td>10000000</td>
                            <td>500000 </td>
                            
                        </tr>
                       




                    </tbody>
                </Table>


                <div className="titulo-proyectos">
                    <h2>Resumen Total </h2>

                </div>

                <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="encabezado">
                            <th>Descripción</th>
                            <th>Total MXN</th>
                            <th>Total USD</th>
                            <th>TotAL En Moneda</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="">
                            <td>Switches</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                            
                        </tr>



                        <tr className="">
                           <td>Routerss</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                            
                        </tr>


                        <tr className="">
                        <td>Servidores</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                        </tr>


                        <tr className="">
                           <td>Consultoría</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                        </tr>


                        <tr className="green">
                           <td>Capacitación</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                        </tr>

                            
                        <tr className="green">
                            <td>Accesorios</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                            
                        </tr>
                        <tr className="green">
                            <td>Servicios PTN</td>
                            <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                            
                        </tr>
                        <tr className="green">
                           <td>Mesa de Ayuda</td>
                           <td>600</td>
                            <td>700 </td>
                            <td>730 </td>
                            
                        </tr>

                        <tr className="total-moneda">
                           <td>Σ Total</td>
                           <td></td>
                            <td> </td>
                            <td>790290 </td>
                            
                        </tr>
                     
                        <tr className="total-mxn-usd">
                           <td>Σ Total</td>
                           <td>1261726</td>
                            <td>12671267 </td>
                            <td> </td>
                            
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
export default PropuestaEconomica