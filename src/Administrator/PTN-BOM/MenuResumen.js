import React from 'react';
import Table from 'react-bootstrap/Table'
import { useState } from "react";

import Animaciones from "../../Componentes/Animaciones";


import Proyectos from './ResumenProyectos';


function MenuResumen() {
    const [show, setShow] = useState(true)
    const [show2, setShow2] = useState(true)
  return (
    <div className="contenido-usuarios">


    <div className="table-responsive">

  <div>
   <Animaciones mytext="Resumen" /> 
  </div>

  <Table responsive id="nombreDiv">
{/*========================== Titulos Tabla ==========================*/}
<thead>
<tr className="titulo-tabla-usuarios">
<th>Resumen  Partidas</th>
<th> Resumen Categorias</th>


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
  {show ? "Ver " : "Ocultar"}{" "}
</button>
{show ? (
  <div></div>
) : (
  <div className="arregla">
    {/*========================== Llamado al Componente ==========================*/}
     <Proyectos/>
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
  {show2 ? "ver" : "Ocultar"}{" "}
</button>
{show2 ? (
  <div></div>
) : (
  <div className="arregla">
    {/*========================== Llamado al Componente ==========================*/}
 
  </div>
)}
</td>





</tr>
</tbody>
</Table>




  

    </div>
</div>
  )
}

export default MenuResumen