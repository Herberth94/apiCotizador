import React from 'react'

function Partida() {



  return (
  
    <div className="partidax">
    {/*========================== Nombre Partida ==========================*/}
    <br />
    <form action="" method="post">
      <input
        className="agregar"
        type="text"
        name="partida_nombre"
       /*  onChange={handleInputChangePartida} */
        placeholder="Ingrese Nombre Partida"
      />

      <br />
      <br />

      {/*========================== Descripción Partida ==========================*/}
      <input
        className="agregar"
        type="text"
        name="partida_descripcion"
      /*   onChange={handleInputChangePartida} */
        placeholder="ingrese Descripción Partida"
      />

      <br />
      <br />
      {/*========================== Botón Agregar Partidas ==========================*/}
      <button className="btn btn-success" /* onClick={enviarDatosPartida} */>Agregar Datos Partida</button>
    </form>
    <br />
    <br />
  </div>
  
  )
}

export default Partida