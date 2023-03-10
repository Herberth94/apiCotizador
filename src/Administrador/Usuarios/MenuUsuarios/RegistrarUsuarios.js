import React from "react";
import { useRegistro } from "../Routes/useRegistro";

function RegistrarUsuarios() {
  const { handleInputChange, enviarDatos } = useRegistro();

  return (
    <div className="full">
      <div className="box">
        <section className="card-box">
          <form
            action=""
            method="post"
            className="card-form"
            onSubmit={enviarDatos}
          >
            <h2>
              <span>Registrar Usuarios</span>
            </h2>
            <label className="rol" htmlFor="rol">
              Tipo rol:{" "}
            </label>

            <select
              id="rol"
              name="usuario_id_rol"
              required
              onChange={handleInputChange}
            >
              <option value={4}>--------------</option>
              {/*     <option value={5}>Dirección</option> */}
              <option value={1}>Administrador</option>
              <option value={2}>Preventa</option>
              <option value={3}>Venta</option>
            </select>
            <br />
            <br />

            <label htmlFor="user">
              Correo
            </label>
            <input
              id="user"
              type="email"
              name="email"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Ingrese Correo"
            />

            <label htmlFor="user2" >
              Repetir Correo
            </label>
            <input
              id="user2"
              type="text"
              name="remail"
              onChange={handleInputChange}
              className="card-input"
              placeholder="Repita el Correo"
            />

            <label htmlFor="password" >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              onChange={handleInputChange}
              className="card-input"
              data-type="password"
              placeholder="Ingrese Contraseña"
            />

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

      <br />
    </div>
  );
}

export default RegistrarUsuarios;
