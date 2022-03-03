import React from 'react'


function rClientes() {

    return (
        <div className="contenido-main-registro">
        <div className="scene flex">
          <section className="card-body">
            <form className="card-form">
              <h2 >
                <span>Registrar Cliente</span>
              </h2>
                 <label htmlFor="user" className=" label">
                    Nombre Cliente
                 </label>
              <input
                id="user"
                type="text"
                className="card-input"
                placeholder="Nombre Cliente"
              />
  
              <label htmlFor="user2" className=" label">
                Razón Social
              </label>
              <input
                id="user2"
                type="text"
                name =""
                className="card-input"
                placeholder="Razón Social"
              />
  
  
              <div className="boton-registro">
                <button className="card-button" type="button">
                  <span>Registrar</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    )
}

export default rClientes