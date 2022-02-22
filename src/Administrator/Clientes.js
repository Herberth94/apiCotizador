import React from 'react'
import { useRegistro } from '../Components/registroClientes'


function Clientes() {

  const {
    handleInputChange,
    enviarDatos
  }=useRegistro()

    return (
        <div className="contenido-main-registro">
        <div className="scene flex">
          <section className="card-body">
            <form  method="post" className="card-form" onSubmit = {enviarDatos}>
              <h2 >
                <span>Registrar Cliente</span>
              </h2>
                 <label htmlFor="user" className=" label">
                    Nombre Cliente
                 </label>
              <input
                id="user"
                type="text"
                name='nombre_cliente'
                className="card-input"
                onChange={handleInputChange}
                placeholder="Nombre Cliente"
              />
  
              <label htmlFor="user2" className=" label">
                Razón Social
              </label>
              <input
                id="user2"
                type="text"
                name ="razon_social"
                onChange={handleInputChange}
                className="card-input"
                placeholder="Razón Social"
              />
  
  
              <div className="boton-registro">
                <button className="card-button3" type="submit">
                  <span>Registrar</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    )
}

export default Clientes