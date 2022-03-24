import React from 'react'

import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";

import { partidasUnicas2, Cantidad,descuentoCliente, monedaPTN, prov, listaProv,desFabrica, costoPTN, margenGanancia, precioVenta , margenDirecto ,
precioFinalVenta,
costoSinIndirectos,
costoFianalProyecto

} from "./OperacionesAM";



function MargenGanancia() {
    return (

        <div className="contenido-usuarios">

            <div> <Animaciones mytext="AM COMPLETO" /> </div>


            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Nombre Partida</th>
                        <th className="listacl">Lista cl </th>
                        <th>Desc. Cliente % </th>
                        <th>Precio Venta </th>
                        <th>Margen de Ganancia %</th>
                        <th>Precio Lista Unitario Prov</th>
                        <th>Cantidad</th>
                        <th>Lista Prov</th>
                        <th>Desc Fabrica %</th>
                        <th>Costo PTN</th>
                        <th>Margen Directo %</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(partidasUnicas2).map((key) => (
                        <tr key={partidasUnicas2[key]}>
                            <td>{partidasUnicas2[key]}</td>

                            {/*================= Descripcion General Partida ==================*/}
                            <td> {" $ "} {monedaPTN[key]}</td>
                            {/*================= Descuento Cliente ==================*/}
                            <td className="amarillo" >{" % "} {descuentoCliente[key]}   </td>

                          {/*================= Precio Venta ==================*/}
                          <td> {precioVenta[key]} {"$"}</td>

                         {/*================= Margen Ganancia==================*/}
                            <td>{" % "} {margenGanancia[key]} </td>

                            {/*================= PrecioLista Unitario ==================*/}

                            <td className="azul">{" $ "} {prov[key]}</td>

                     {/*================= Cantidad ==================*/}
                            <td>{Cantidad[key]}</td>


                            <td>{" $ "} {listaProv[key]}</td>


                            <td>{" % "} {desFabrica[key]}</td>
                          {/*================= Cost PTN ==================*/}
                            <td className="verde">{" $ "} {costoPTN[key]}  </td>


                            <td>{margenDirecto[key] } {" % "}</td>


                            
                            <td>

                                <button className="btn btn-primary"> Editar </button>


                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>


 <div>



            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Precio Final de Venta</th>
                        <th>Costo (Sin Indirecto)</th>
                        <th>Costo Final del Proyecto</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}
                            <tr >
                            <td className='amarillo'> {precioFinalVenta } </td>  
                            <td className='azul'>{costoSinIndirectos}</td>    
                            <td className='verde'>{costoFianalProyecto}</td>      
                            </tr >

                       
                </tbody>
            </Table>

            </div>

        </div>
    )
}

export default MargenGanancia