import React from 'react'
import './css/MenuPreventa.css';



function MenuPreventa() {
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
            <a href="/login">
              <i className="fa fa-power-off fa-2x"></i>
              <span className="nav-text">
                Salir
              </span>
            </a>
          </li>
        </ul>
      </nav>





    </div>

  )
}

export default MenuPreventa