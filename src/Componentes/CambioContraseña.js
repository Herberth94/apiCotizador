import React from 'react';
import { estado_login } from '../Routes/ValidaRol';


function CambioContraseña() {
  

  console.log("este es el estado login de cambio contraseña: ", !estado_login);
  return (
    <>
    { !estado_login && (<div className="contenido-main-registro">
      <div className="scene flex">
        <section className="card-body">
          <form method="post" className="card-form" >
            <h2 >
              <span>Actualizar Contraseña</span>
            </h2>
            <label htmlFor="user" className=" label">
              Contraseña Nueva
            </label>
            <input
              id="user"
              type="text"
              name='nombre_cliente'
              className="card-input"
              placeholder="Ingrese Contraseña Nueva"
            />

            <label htmlFor="user2" className=" label">
              Repetir Contraseña
            </label>
            <input
              id="user2"
              type="text"
              name="razon_social"
              className="card-input"
              placeholder="Repita la Contraseña"
            />

            <div className="boton-registro">
              <button className="card-button" type="submit">
                <span>Actualizar</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>)}
    </>
  )
}

export default CambioContraseña