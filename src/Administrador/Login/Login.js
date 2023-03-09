import React from "react";
import { useLogin } from "./Routes/useLogin";
import ReCAPTCHA from "react-google-recaptcha";
import { passwordCaptcha } from "../../Componentes/Ocultar";

import "../../css/ventanas.css";



import { mensajeAlerta } from "../../pages/componentes/Alerta";

export let valida = false;
/*  Funcion Captcha Validación Correcta */
function onChange(value) {
  if (value != null) {
    valida = true;
  } else {
    valida = false;
  }
}

export function Login() {
  const MostrarAlerta = () => {


    if (valida == false) {
      mensajeAlerta("CAPTCHA"  , "Por favor Valida el Captcha" ,"warning" , "Cerrar" );
    }
  };

  

  const { handleInputChange, enviarDatos } = useLogin();

  return (
    /* //============ Login ============ */

    <div className="container">
      <div className="box">
        <section className="card-box">
          <form
            action=""
            method="post"
            id="form"
            className="card-form"
            onSubmit={enviarDatos}
          >
            <h2>Login </h2>

            {/* //============ Correo ============ */}

            <label htmlFor="user" >
              Usuario
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="card-input"
              onChange={handleInputChange}
              placeholder="Ingrese Correo"
            />

            {/* //============ Contraseña ============ */}

            <label htmlFor="password" >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              className="card-input"
              onChange={handleInputChange}
              data-type="password"
              placeholder="Ingrese Contraseña"
            />

            <div className="captcha">
              <ReCAPTCHA sitekey={passwordCaptcha} onChange={onChange} />
            </div>

            <div className="boton-login">           
              <button
                className="btn-login"
                type="submit"
                onClick={() => MostrarAlerta()}
              >
                <span>Entrar</span>
              </button>
            </div>
          </form>
        </section>
      </div>

      <div></div>
    </div>
  );
}

export default Login;
