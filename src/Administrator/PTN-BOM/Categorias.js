import React from 'react'
import Table from "react-bootstrap/Table";


/*======== Datos que se deben Obtener de este archivo  ==============*/

const nombreCategorias = [
    {categoria: "Accesorios", totalMXN: 100, totalUSD: 5 , total: 10},
    {categoria: "Mesa de Ayuda", totalUSD: 5,totalUSD: 5 , total: 10},
    {categoria: "Servicios PTN", totalMXN: 200 , totalUSD: 5 , total: 10},
    {categoria: "Capacitacion", totalMXN: 200 , totalUSD: 5 , total: 10},
  ];




function Categorias() {
    return (
        <div className="contenido-usuarios">
  {/*========================== Categorias ==========================*/}
            <Table responsive id="nombreDiv">
                <thead>
   {/*========================== Titulos Tabla ==========================*/}
                    <tr className="titulo-tabla-usuarios">
                        <th>Categoría</th>
                        <th>Total MXN</th>
                        <th>Total USD </th>
                        <th>Total Moneda BOM </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td> Capacitación</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="capacitacion"

                                placeholder="Total capacitación MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="accesorios"

                                placeholder="Total capacitación USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="moneda Bom"

                                placeholder="Moneda BOM"
                            />
                        </td>
                    </tr>

                    <tr className="">
                        <td> Accesorios</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="accesorios"

                                placeholder="Total Accesorios MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="accesorios"

                                placeholder="Total Accesorios USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="moneda Bom"

                                placeholder="Moneda BOM"
                            />
                        </td>
                    </tr>

                    <tr className="">
                        <td> Servicios PTN</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="servicios"

                                placeholder="TotalServicios PTN MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="servicios"

                                placeholder="Total Servicios PTN USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="moneda Bom"

                                placeholder="Moneda BOM"
                            />
                        </td>
                    </tr>

                    <tr className="">
                        <td> Mesa de Ayuda</td>
                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="MesaAyuda"

                                placeholder="Total Mesa de Ayuda MXN"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="accesorios"

                                placeholder="Total Mesa de Ayuda USD"
                            />
                        </td>

                        <td>
                            {" "}
                            <input
                                className="agregar"
                                type="text"
                                name="moneda Bom"

                                placeholder="Moneda BOM"
                            />
                        </td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn btn-success">Agregar Datos Categoria </button>

        </div>
    )
}

export default Categorias