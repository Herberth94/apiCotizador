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
          <div className="administrador-user">
            <li>
              <i className="bi bi-person-circle fa-2x"></i>
              <span className="nav-text">Preventa</span>
            </li>
          </div>

          <li>
            <a href="/">
              <i className="fa fa-home fa-2x"></i>
              <span className="nav-text">Home</span>
            </a>
          </li>

          <li>
            <a href="/agregar-cliente">
            <i className="bi bi-person-plus"></i>
              <span className="nav-text">
            Agregar Clientes
              </span>
            </a>

          </li>

          <li className="has-subnav">
            <a href="/agregar-colaborador">
              <i className="bi bi-people fa-2x"></i>
              <span className="nav-text">Añadir Colaborador</span>
            </a>
          </li>



          <li>
            <a href="/administrar-clientes">
            <i className="bi bi-person-video2"></i>
              <span className="nav-text">
                Administrar Clientes
              </span>
            </a>

          </li>


          
          <li>
            <a href="/administrar-colaboradores">
            <i className="bi bi-person-video2"></i>
              <span className="nav-text">
                Administrar Colaboradores
              </span>
            </a>

          </li>


     
          <li className="has-subnav">
            <a href="/asignar">
              <i className="bi bi-briefcase fa-2x"></i>
              <span className="nav-text">
           Asignar Proyecto
              </span>
            </a>           
          </li>




          <li className="has-subnav">
            <a href="/ptn">
              <i className="bi bi-briefcase-fill fa-2x"></i>
              <span className="nav-text">
             PTN-BOM
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