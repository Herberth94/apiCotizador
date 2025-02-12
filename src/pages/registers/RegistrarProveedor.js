import React from "react";
import { InsertDatosProvedor } from "./routes/GuardarProveedor";

function RegistrarProveedor() {
  const { handleInputChange, enviarDatosProv } = InsertDatosProvedor();
  return (
    <div className="full">
    <div className="box">
      <section className="card-box">
          <form method="post" className="card-form" onSubmit={enviarDatosProv}>
            {/*========= Registrar Clientes========= */}
            <h2>
              {" "}
              <span>Registrar Proveedor</span>{" "}
            </h2>
            {/*========= Nombre Cliente========= */}
            <label htmlFor="user" >
              Nombre Proveedor
            </label>
            <input
              id="user"
              type="text"
              name="proveedor_nombre"
              className="card-input"
              onChange={handleInputChange}
              placeholder="Ingrese Nombre del Proveedor"
            />
            {/*========= Razón Social ========= */}
            <label htmlFor="user2">
              teléfono
            </label>
            <input
              id="user2"
              type="number"
              name="proveedor_telefono"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Ingrese Teléfono"
            />

            {/*========= FALTA Teléfono ========= */}
            <label htmlFor="user2" >
              Correo Electronico
            </label>
            <input
              id="user2"
              type="email"
              name="proveedor_email"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Ingrese Correo Electronico"
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

      <br />
      <br />
    </div>
  );
}

export default RegistrarProveedor;
