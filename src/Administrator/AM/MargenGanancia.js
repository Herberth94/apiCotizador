import React from 'react'

import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";

import { partidasUnicas2, descripcionGeneral2, margenGanancia, precioVenta } from "./OperacionesAM";




function MargenGanancia() {
    return (

        <div className="contenido-usuarios">

            <div> <Animaciones mytext="Margen de Ganancias" /> </div>


            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Nombre Partida</th>
                        <th>Descripción General </th>
                        <th>Margen de Ganancia %</th>
                        <th>Precio Venta</th>
                        <th>Editar</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(partidasUnicas2).map((key) => (
                        <tr key={partidasUnicas2[key]}>
                            <td>{partidasUnicas2[key]}</td>

                            {/*================= Descripcion General Partida ==================*/}
                            <td>{partidasUnicas2[key]}</td>
                            {/*================= Total MXN ==================*/}
                            <td>{margenGanancia[key]}</td>
                            {/*================= Total USD ==================*/}

                            <td>{precioVenta[key]}</td>

                            {/*================= Total Moneda Bom ==================*/}

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

export default MargenGanancia