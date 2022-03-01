import React from 'react';
import './css/ventanas.css';
import {useLogin} from './Routes/useLogin';

export function Login() {

  const {  
    handleInputChange,
    enviarDatos
  } = useLogin ();

  return (

           /* //============ Login ============ */
    <div className="container-portada">
      <div className="scene flex">

        <section className="card-body">
          <form action="" method="post" id="form" className="card-form" onSubmit = {enviarDatos}>
           
           {/* //============Titulo ============ */}
            <h2> <span >Login</span></h2>

           {/* //============ Correo ============ */}  

            <label htmlFor="user" className=" label">Usuario</label>
            <input id="email"
              type="email"
              name="email"
              className="card-input"
              onChange={handleInputChange}
              placeholder="Ingrese Correo" />

            {/* //============ Contraseña ============ */}

            <label htmlFor="password" className="label">Contraseña</label>   
            <input id="password"
              type="password"
              name="password"
              className="card-input"
              onChange={handleInputChange}
              data-type="password"
              placeholder="Ingrese Contraseña" />

             {/* //============ Botón Entrar ============ */}
  
            <div className ="boton-login">
            <button className="card-button" type="submit">
              <span>Entrar</span>
            </button>
            </div>
          </form>
        </section>
      </div>
   </div>




  )
}

export default Login