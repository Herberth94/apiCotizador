import React from 'react'
import Table from 'react-bootstrap/Table'

import './css/Proporcionalidad.css';




function Proporcionalidad() {
    return (
        <div className="contenido-usuarios">

      {/*============= Titulo Animación =============*/}
      <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Buscar Proyectos<span></span></h1>
                        </div>

                        <div className="role">
                            <div className="block"></div>
                            <p>Palo Tinto Networks</p>
                        </div>

                    </div>
                </div>


            {/*********Búsqueda de Lista de Proyectos por Nombre Proyecto, Clave, Cliente, Fecha ********/}
            <div className="busqueda-proyectos">
                <Table responsive id="nombreDiv">
                    <thead>
                        <tr className="azul">
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
                                    placeholder="busqueda" />
                            </td>
                            <td>
                                <button className="btn btn-primary"> Buscar</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

      {/*============= Titulo Animación =============*/}
      <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Resumen<span></span></h1>
                        </div>
                    </div>
                </div>
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

            <div className="table-responsive">

      {/*============= Titulo Animación =============*/}
      <div className="container">
                    <div className="box">

                        <div className="title">
                            <span className="block"></span>
                            <h1 >Proporcionalidad<span></span></h1>
                        </div>
                    </div>
                </div>

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






                <div className="boton-cotizador"  >

                    <button className="btn btn-success">Imprimir</button>


                </div>





            </div>
        </div>
    );
}
export default Proporcionalidad