import React from 'react';
import Table from 'react-bootstrap/Table'
import { useState } from "react";

import Animaciones from "../../Componentes/Animaciones";

import ExportarPDF from '../ExportarPDF';


function AdministrarPropuesta() {
    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(true)
  return (
    <div className="contenido-usuarios">


    <div className="table-responsive">

  <div>
   <Animaciones mytext="Validación" /> 
  </div>

  <Table responsive id="nombreDiv">
{/*========================== Titulos Tabla ==========================*/}
<thead>
<tr className="titulo-tabla-usuarios">
<th>Propuestas</th>
<th> Validar</th>
<th>Imprimir</th>
<th>Imprimir</th>

</tr>
</thead>
<tbody>
<tr className="">
{/*========================== Divisa ==========================*/}
<td>
<button
  className="btn btn-primary modificar"
  type="button"
  onClick={() => {
    setShow(!show);
  }}
>
  {" "}
  {show ? "Editar" : "Ocultar"}{" "}
</button>
{show ? (
  <div></div>
) : (
  <div className="arregla">
    {/*========================== Llamado al Componente ==========================*/}

  </div>
)}
</td>

<td>
<button
  className="btn btn-primary modificar"
  type="button"
  onClick={() => {
    setShow2(!show2);
  }}
>
  {" "}
  {show2 ? "Administrar" : "Ocultar"}{" "}
</button>
{show2 ? (
  <div></div>
) : (
  <div className="arregla">
    {/*========================== Llamado al Componente ==========================*/}
 
  </div>
)}
</td>




<td>


</td>


<td>

</td>


</tr>
</tbody>
</Table>




  

    </div>
</div>
  )
}

export default AdministrarPropuesta