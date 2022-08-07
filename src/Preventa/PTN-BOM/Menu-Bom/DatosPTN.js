/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Select from "./Select";

function DatosPTN(props) {
  /*========================== Mostrar Ocultar Tabla ==========================*/
  const [show, setShow] = useState(true);

  return (
    <div className="arregla contenido">
      <Select clave={props.clave} />

    </div>
  );
}

export default DatosPTN;
