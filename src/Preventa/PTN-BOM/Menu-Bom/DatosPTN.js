/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Animaciones from "../../../Componentes/Animaciones";
// Componentes
 import Partida from "../Menu-Bom/Partida";
 import DatosSp2 from "../Menu-Bom/DatosSP2";
 import Categorias from "../Menu-Bom/Categorias";
 

function DatosPTN(props) {
  
  /*========================== Mostrar Ocultar Tabla ==========================*/ 
  const [show, setShow] = useState(true);

  
  return (
    <div className="arregla multiple">
      {/*========================== Titulos ==========================*/}


<div className="ok">

<Partida/>
  
</div  >

    <div  className="ok">
    <DatosSp2 clave={props.clave}/>
  
      </div>
  


<div className="ok">
<Categorias clave={props.clave} />

</div>

 
   
      
    </div>
  );
}

export default DatosPTN;