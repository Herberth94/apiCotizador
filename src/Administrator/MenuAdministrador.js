import React from "react";
import "./css/MenuAdministrador.css";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function archivo() {
  const cierreSesion = () => {
    cookies.remove("id_usuario", { path: "/" });
    cookies.remove("rol", { path: "/" });
    cookies.remove('estado_login',{path:"/"});
    window.location.href = "../Login.js";
  };

  return (
    <div className="contenedor">
      {/*======================== Menú ==========================*/}
      <nav className="main-menu">
        <ul>
          <div className="administrador-user">
            <li>
              <i className="bi bi-person-circle fa-2x"></i>
              <span className="nav-text">Administrador</span>
            </li>
          </div>

          <li>
            <a href="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/registrar">
              <i className="bi bi-person-plus fa-2x"></i>
              <span className="nav-text">Registrar Usuarios</span>
            </a>
          </li>

          <li className="has-subnav">
            <a href="/registrar-cliente">
              <i className="bi bi-person-plus fa-2x"></i>
              <span className="nav-text">Registrar Cliente</span>
            </a>
          </li>

          <li className="has-subnav">
            <a href="/usuarios">
              <i className="bi bi-person-video2"></i>
              <span className="nav-text">Administrar Usuarios</span>
            </a>
          </li>

          <li className="has-subnav">
            <a href="/administrar-clientes">
              <i className="bi bi-person-video2"></i>
              <span className="nav-text">Administrar Clientes</span>
            </a>
          </li>

          {/*======================== Preventa==========================*/}

          <li className="has-subnav">
            <a href="/ptn">
              <i className="bi bi-file-earmark-spreadsheet fa-2x"></i>
              <span className="nav-text">PTN BOM Cotizaciones</span>
            </a>
          </li>

   
          {/*======================== Venta ==========================*/}

          <li className="has-subnav">
            <a href="/am">
              <i className="bi bi-check2-circle fa-2x"></i>
              <span className="nav-text">AM</span>
            </a>
          </li>
          <li className="has-subnav">
            <a href="/proporcionalidad">
              <i className="bi fa-solid fa-chart-line"></i>

              <span className="nav-text">Proporcionalidad</span>
            </a>
          </li>

          <li className="has-subnav">
            <a href="/propuesta-economica">
              <i className="bi bi-briefcase fa-2x"></i>
              <span className="nav-text">Propuesta Ecónomica</span>
            </a>
          </li>
          {/*======================== Salir ==========================*/}
        </ul>
        <ul className="logout">
          <li>
            <a href="#" onClick={cierreSesion}>
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">Salir</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default archivo;
