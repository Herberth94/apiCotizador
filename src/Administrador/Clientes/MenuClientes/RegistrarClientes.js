import React from 'react'
import { useRegistro } from "../Routes/registroClientes"

function RegistrarClientes() {
  const {
    handleInputChange,
    enviarDatos
  } = useRegistro()


  return (
    <div className="full">
      <div className="box">
        <section className="card-box">
          <form method="post" className="card-form" onSubmit={enviarDatos}>
            {/*========= Registrar Clientes========= */}
            <h2 >  Registrar Clientes</h2>
            {/*========= Nombre Cliente========= */}
            <label htmlFor="user" >
              Nombre Cliente
            </label>
            <input
              type="text"
              id="user"
              name='nombre_cliente'
              className="card-input"
              autoCapitalize='characters'
              onChange={handleInputChange}
              placeholder="Nombre Cliente"
            />

            {/*========= Razón Social ========= */}
            <label htmlFor="user2" >
              Razón Social
            </label>
            <input
              id="user2"
              type="text"
              name="razon_social"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Razón Social"
            />

            {/*=========Teléfono ========= */}
            <label htmlFor="user2">
              Contacto (Teléfono)
            </label>
            <input
              id="user2"
              type="number"
              name="telefono"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Ingrese Número Telefónico"
            />
            {/*========= Dirección ========= */}
            <label htmlFor="user2" >
              Dirección
            </label>
            <input
              id="user2"
              type="text"
              name="cliente_direccion"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Ingrese Dirección"
            />
            {/*========= Botón Registrar ========= */}
            <div className="boton-login">
              <button className="btn-login" type="submit">
                <span>Registrar</span>
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default RegistrarClientes