import React from 'react'
import './css/MenuPreventa.css';

import Cookies from 'universal-cookie';

const cookies = new Cookies();



function MenuPreventa() {
  const cierreSesion=()=>{

    cookies.remove('id_usuario',{path:"/"});
    cookies.remove('rol',{path:"/"});
    cookies.remove('estado_login',{path:"/"});
    window.location.href="../Login.js";


  };
  return (
    <div className="contenedor">

      <nav className="main-menu-preventa">
        <ul>
         <div className="name-user">
           <li>
            <a href="#">
              <i className="bi bi-person-circle fa-2x"></i>
              <span className="nav-text">
          Preventa
              </span>
            </a>
          </li>
        </div>
          <li>
            <a href="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">
                Home
              </span>
            </a>

          </li>

          <li>
            <a href="/add-preventa-cliente">
            <i class="bi bi-person-plus"></i>
              <span className="nav-text">
            Agregar Clientes
              </span>
            </a>

          </li>


          <li>
            <a href="/admin-preventa-clientes">
            <i class="bi bi-person-video2"></i>
              <span className="nav-text">
                Administrar Clientes
              </span>
            </a>

          </li>


          <li className="has-subnav">
            <a href="/resumen">
              <i className="bi bi-briefcase-fill fa-2x"></i>
              <span className="nav-text">
             PTN-BOM
              </span>
            </a>           
          </li>


          <li className="has-subnav">
            <a href="/am">
              <i className="bi bi-check2-circle fa-2x"></i>
              <span className="nav-text">
           Proyectos
              </span>
            </a>           
          </li>


          
          <li className="has-subnav">
            <a href="/proporcionalidad">
              <i className="bi bi-check2-circle fa-2x"></i>
              <span className="nav-text">
         Propuesta Económica
              </span>
            </a>           
          </li>




          <li className="has-subnav">
            <a href="/">
              <i className="bi bi-info-circle fa-2x"></i>
              <span className="nav-text">
                Información
              </span>
            </a>

          </li>
        </ul>

        <ul className="logout">
          <li>
          <a href="#" onClick={cierreSesion}   >
             
             <i className="fa fa-power-off fa-2x"></i>
             <span className="nav-text">
              Salir      
                <div> </div>  
         
             </span>
            </a>
          </li>
        </ul>
      </nav>





    </div>

  )
}

export default MenuPreventa