import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { precioUnitario, calcularDescuento, Total} from "../../Administrator/PTN-BOM/Operaciones";


function CalculaDescuento() {

    const [datos, setDatos] = useState({
        precio_lista: '',
        precio_unitario: '',
        precio_descuento: '',
        sp_cantidad: '',
        precio_total: '',
        precio_id_moneda:''
      });
      
      const handleInputChange = (event) => {
        setDatos({
          ...datos,[event.target.name]: event.target.value,
        });
      };
  
      

      useEffect(()=>{
        let precio_u='';
        if (datos.precio_lista !== '' &&  datos.precio_descuento !== '' && datos.sp_cantidad !== '') {
          precio_u = precioUnitario(datos.precio_lista, datos.precio_descuento);
          const total = Total(precio_u, datos.sp_cantidad);
          setDatos({ ...datos, precio_unitario: precio_u , precio_total:total});
        }
      
      },[datos.precio_lista,datos.precio_descuento])
      /*================================================================================*/
      useEffect(()=>{
        let total='';
        let desc_='';
        if (datos.precio_unitario !== '' && datos.sp_cantidad !== '') {
          const total = Total(datos.precio_unitario, datos.sp_cantidad)
          setDatos({ ...datos, precio_total: total })
        }
        if (datos.precio_unitario == '' || datos.sp_cantidad == '') {
          setDatos({ ...datos, precio_total: total , precio_descuento:desc_ })
        }
      },[datos.precio_unitario,datos.sp_cantidad])
      /*================================================================================*/
      useEffect(()=>{
        if(datos.precio_lista !=='' && datos.precio_unitario !==''){
          const desc = calcularDescuento(datos.precio_lista, datos.precio_unitario);
          setDatos({ ...datos, precio_descuento: desc });}
        },[datos.precio_unitario])
        
      /*===================================================================================================================*/
  
      

  return (
    <div className="contenido-usuarios">


        
<Table responsive id="nombreDiv">
            <thead>
                <tr className="titulo-tabla-usuarios">
                <th>Cantidad</th>
                <th>Precio Lista</th>
                <th>Precio Unitario</th>
                <th> Descuento (%)</th>
                <th> Total </th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                {/*======================== Cantidad ==========================*/}
                <td>
                    {" "}
                    <input
                    className="agregar"
                    type="number"
                    name="sp_cantidad"
                    value={datos.sp_cantidad}
                    onChange={handleInputChange}
                    placeholder="Cantidad "
                    
                    />
                </td>
                {/*======================== Precio Lista ==========================*/}
                <td>
                    {" "}
                    <input
                    className="agregar"
                    type="number"
                    name="precio_lista"
                    value={datos.precio_lista}
                    onChange={handleInputChange}
                    placeholder="Precio Lista"
                    
                    />
                </td>

                {/*======================== Precio Unitario ==========================*/}
                <td>
                    {" "}
                    <input
                    className="agregar"
                    type="number"
                    value={datos.precio_unitario}
                    name="precio_unitario"
                    onChange={handleInputChange}
                    placeholder="Precio unitario"
                    step="any"
                    />
                </td>
                {/*======================== Descuento==========================*/}
                <td>
                    {" "}
                    <input
                    className="agregar"
                    type="number"
                    value={datos.precio_descuento}
                    name="precio_descuento"
                    onChange={handleInputChange}
                    placeholder="Descuento"
                    min="0"
                    step="any"
                    />
                </td>
                {/*======================== Total ==========================*/}
                <td>
                    {" "}
                    <input
                    className="agregar"
                    type="text"
                    name="precio_total"
                    value={datos.precio_total}
                    readOnly
                    placeholder="Total"
                    step="any"
                    />
                </td>
                </tr>
            </tbody>
            </Table>




    </div>
  )
}

export default CalculaDescuento