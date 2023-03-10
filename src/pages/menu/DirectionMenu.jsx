import React from 'react'
import Icono from '../componentes/Icono'

function DirectionMenu() {
    return (
<div className="contenedor">
  <div className="sidebar ancho">
    <div className="logo text-warning">
      <i className="fa fa-ravelry fa-2x logo-sym" /><span className="logo-texto">Marvilop</span>
    </div>
    <div className="user">
      <img src="https://source.unsplash.com/VM42AzcEBdI/50x50/?faces" alt="" />
      <span className="user-nombre">Administrador</span>
    </div>
    <nav className="menu-nav">
      <ul>
    
        <li className="menu-items"><a href="#"><i className="fa fa-user-plus menu-nav--icon fa-fw" /><span>Registros</span></a>
          <a href="#" className="menu-boton"><i className="fa fa-caret-right" /></a>
          <ul className="menu-nav-seg">
            <li className="menu-items-seg"><a href="#">Usuarios</a></li>
            <li className="menu-items-seg"><a href="#">Clientes</a></li>
            <li className="menu-items-seg"><a href="#">Marcas</a></li>
          </ul>
        </li>


  
        <li className="menu-items"><a href="#"><i className="fa fa-users menu-nav--icon fa-fw" /><span>Administración</span></a>
          <a href="#" className="menu-boton"><i className="fa fa-caret-right" /></a>
          <ul className="menu-nav-seg">
            <li className="menu-items-seg"><a href="#">Usuarios</a></li>
            <li className="menu-items-seg"><a href="#">Clientes</a></li>
            <li className="menu-items-seg"><a href="#">Marcas</a></li>
          </ul>
        </li>



        <li className="menu-items"><a href="#"><i className="fa fa-inbox  menu-nav--icon fa-fw" /><span className="menu-items">Inbox</span></a></li>
        <li className="menu-items"><a href="#"><i className="fa fa-file-text-o  menu-nav--icon fa-fw" /><span className="menu-items">Forms</span></a></li>
      </ul>
    </nav>
  </div>
  <div className="main bg-light">
    <div className="barra">
      <a className="menu-toggle"><i className="fa fa-bars menu-nav--icon" /></a>

    </div>

  </div>
</div>

    )
}

export default DirectionMenu