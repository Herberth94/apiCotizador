import React from 'react'

function Colaborador() {


    return (
        <div className="contenido-main-registro">
        <div className="scene flex">
          <section className="card-body">
            <form  method="post" className="card-form" >
              <h2 >
                <span>Agregrar Colaborador</span>
              </h2>
                 <label htmlFor="user" className=" label">
              Correo del Colaborador
                 </label>
              <input
                id="user"
                type="text"
                name='correo'
                className="card-input"
                placeholder="Ingrese Correo del Colaborador"
              />


            <label htmlFor="user" className=" label">
              Clave del Proyecto
                 </label>
              <input
                id="user"
                type="text"
                name='clave'
                className="card-input"
                placeholder="Ingrese Clave del Proyecto"
              />
  
  
              <label htmlFor="user2" className=" label">
                Contraseña 
              </label>
              <input
                id="user2"
                type="text"
                name ="contraseña"
                className="card-input"
                placeholder="Ingrese su Contraseña"
              />
  

  <label htmlFor="user2" className=" label">
              Repetir Contraseña
              </label>
              <input
                id="user2"
                type="number"
                name ="rcontraseña"
                className="card-input"
                placeholder="Repita la Contraseña"
              />
  
  
              <div className="boton-registro">
                <button className="card-button3" type="submit">
                  <span>Agregar al Proyecto</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    )
}

export default Colaborador