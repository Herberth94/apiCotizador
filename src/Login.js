import React from 'react';
import './css/ventanas.css';
import {useLogin} from './Routes/useLogin';
import ReCAPTCHA from "react-google-recaptcha";
import {passwordCaptcha} from "./Componentes/Ocultar";
import Boton from "./Componentes/Boton";


let change = true;


/*  Funcion Captcha Validación Correcta */

function onChange(value) {
  /*   console.log("Captcha value:", value);
     */
    console.log("Validación Valida")
     change=false

     

  }
  
  /*  Funcion Captcha Validación Incorrecta */
  
  function onErrored(value) {
    /*   console.log("Captcha value:", value);
       */
      console.log("Validación Incorrecta")
    
    }


    function mostrar() {
     let  div = document.getElementById('flotante');
      div.style.display = '';
  }

  function cerrar() {
     let div = document.getElementById('flotante');
      div.style.display = 'none';
  }

export function Login() {

  const {  
    handleInputChange,
    enviarDatos
  } = useLogin ();

  return (

           /* //============ Login ============ */
           
    <div className="container-portada">
      <div className="scene flex login">

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

          
             
            
            <div className="re-Captcha">
          
          {/*========== ReCAPTCHA Seguridad ==========*/}
           <ReCAPTCHA
           sitekey= {passwordCaptcha}
           onChange={onChange}
           onErrored={onErrored}
           />
         </div>


   {/* //============ Botón Entrar ============ */}

      <Boton myxt={true} />


   {/*    
            <div className ="boton-login">
            <button className="card-button" type="submit"  disabled={change} >
              <span>Entrar</span>
            </button>
            </div>

 */}
         


          </form>
        </section>
      </div>
   </div>




  )
}

export default Login