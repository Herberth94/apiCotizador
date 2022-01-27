import React from 'react';
import './css/login.css';
import banner from './images/logo.png';
import {useLogin} from '../src/Components/useLogin';



export function Login() {

  const {  
    handleInputChange,
    enviarDatos
  } = useLogin ();



  return (
    <div className="container-portada">
      <div className="banner-login">
     <img src={banner} alt="usuario" /> 
      </div>
      <div className="scene flex">

        <section className="card-body">
          <form action="" method="post" id="form" className="card-form" onSubmit = {enviarDatos}>
            <h2>
              <span >Login</span>
            </h2>
            <label htmlFor="user" className=" label">Usuario</label>
            <input id="email"
              type="email"
              name="email"
              className="card-input"
              onChange={handleInputChange}
              placeholder="Ingrese Correo" />



            <label htmlFor="password" className="label">Contraseña</label>   
            <input id="password"
              type="password"
              name="password"
              className="card-input"
              onChange={handleInputChange}
              data-type="password"
              placeholder="Ingrese Contraseña" />
  
            <div className ="boton-login">
            <button className="card-button2" type="submit">
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