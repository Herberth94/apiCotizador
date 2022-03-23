import axios from 'axios';
import React, { useState } from 'react';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
const estado = () => {
  if (cookies.get('estado_login') === "0") {
    return false

  } else {
    return true
  }
}

function CambioContraseña() {
  const [datos, setDatos] = useState({
    password: '',
    estado_login: 1
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos, [event.target.name]: event.target.value
    })
  }
  const id = cookies.get('id_usuario')
  
  async function Send() {
    console.log("soy el id adentro del send", id)
    const data = {
      password: datos.password,
      estado_login: 1
    };
    if (datos.password === datos.repassword && datos.email !== "") {
      try {
        const respuesta = await axios.put(`http://localhost:4001/api/cotizador/edit/pass/${id}`, data)
        const send2 = respuesta.data;
        console.log(send2)

        alert('Datos Guardados Existosamente')
      } catch (error) {
        console.log(error)
      }
    } else {
      alert("Las contraseñas no coinciden");
    }

  }

 

  console.log("este es el estado login de cambio contraseña: " );
  console.log(estado());

  return (
    <>
      {estado() ? "" : (<div className="contenido-main-registro">
        <div className="scene flex">
          <section className="card-body">
            <form method="put" className="card-form" onSubmit={Send} >
              <h2 >
                <span>Actualizar Contraseña</span>
              </h2>
              <label htmlFor="user" className=" label">
                Contraseña Nueva
              </label>
              <input
                id="user"
                type="text"
                name='password'
                onChange={handleInputChange}
                className="card-input"
                placeholder="Ingrese Contraseña Nueva"
              />

              <label htmlFor="user2" className=" label">
                Repetir Contraseña
              </label>
              <input
                id="user2"
                type="text"
                name="repassword"
                onChange={handleInputChange}
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