import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { precioUnitario, calcularDescuento, Total} from "../../Preventa/PTN-BOM/Operaciones/Operaciones";


let validaOperacion = false;
function CalculaDescuento() {

function checa(){
console.log("Holaal");
validaOperacion = !validaOperacion;
console.log(validaOperacion);
}


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
  
      

///CALCULAR DESCUENTO
      /*================================================================================*/
      useEffect(()=>{

        if(datos.precio_lista !=='' && datos.precio_unitario !==''  && validaOperacion === false){
          const desc = calcularDescuento(datos.precio_lista, datos.precio_unitario);
          setDatos({ ...datos, precio_descuento: desc });}

        },[datos.precio_unitario])


///CALCULAR PRECIO UNITARIO
      /*===================================================================================================================*/
      useEffect(()=>{
        let precio_u='';
        if (datos.precio_lista !== '' &&  datos.precio_descuento !== ''  &&  validaOperacion ===true) {
          precio_u = precioUnitario(datos.precio_lista, datos.precio_descuento);
       
          setDatos({ ...datos, precio_unitario: precio_u});
        }
      
      },[datos.precio_descuento])

      //OBTENER TOTALES


      
      

  return (
    <div className="contenido-usuarios">


        
<Table responsive id="nombreDiv">
            <thead>
                <tr className="titulo-tabla-usuarios">
                <th>Función</th>
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
                <label className="switch">
  <input type="checkbox" id="checa"     onClick={checa}/>
  <span className="slider"></span>
</label>
                    
                  
                </td>
               
               
                <td>
                    {" "}
                    <input
                    className="agregar"
                    type="text"
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
                    type="text"
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
                    type="text"
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
                    type="text"
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