import React from "react";
import Table from "react-bootstrap/Table";
import Animaciones from "../../Componentes/Animaciones";

import {partidasUnicas, descripcionGeneral, totalMXN, totalUSD, monedaPTN2} from "./OperacionesAM";


function ResumenAM() {
    return (
        <div className="contenido-usuarios">
            <div>
                {" "}
                <Animaciones mytext="Resumen AM" />{" "}
            </div>

            <Table responsive striped bordered hover size="sm" className="tablas">
                <thead>
                    {/*=================== Titulos Tabla Clientes ===================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Nombre Partida</th>
                        <th>Descripción General </th>
                        <th>Total MXN</th>
                        <th>Total USD</th>
                        <th>Total Moneda Bom</th>
                    </tr>
                </thead>
                <tbody>
                    {/*=================== Contenido Tabla Clientes =================*/}

                    {Object.keys(partidasUnicas).map((key) => (
                        <tr key={partidasUnicas[key]}>
                            <td>{partidasUnicas[key]}</td>

                            {/*================= Descripcion General Partida ==================*/}
                            <td>{descripcionGeneral[key]}</td>
                            {/*================= Total MXN ==================*/}
                            <td>{totalMXN[key]}</td>
                            {/*================= Total USD ==================*/}

                            <td>{totalUSD[key]}</td>

                            {/*================= Total Moneda Bom ==================*/}

                            <td>{monedaPTN2[key]}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ResumenAM;
