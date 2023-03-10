import React from 'react'

function DirectionMenu() {
    return (
<div className>
  <div className="menu-btn">
    <button id="menu"><i className="fas fa-bars" /></button>
  </div>
  <div className="side-bar">
    <header>
      <div className="close-btn">
        <i className="fas fa-times" />           
      </div>
      <h1>MARVILOP</h1>
    </header>
    <div className="menu">
      <div className="item"><a href="#"><i classname="fas fa-home" />Home</a></div>
      <div className="item">
        <a className="sub-btn"><i className="fas fa-users" />Registros<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="registrar-usuarios" className="sub-item"><i className="fas fa-user" />Usuarios</a>
          <a href="registrar-usuarios" className="sub-item"><i className="fas fa-user" />Clientes</a>
          <a href="registrar-usuarios" className="sub-item"><i className="fas fa-user" />Marcas</a>
          <a href="registrar-usuarios" className="sub-item"><i className="fas fa-user" />Proveedores</a>
          <a href="registrar-usuarios" className="sub-item"><i className="fas fa-user" />Colaboradores</a>
        </div>
      </div>
      <div className="item">
        <a className="sub-btn"><i className="fas fa-table" />Tables<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="#" className="sub-item">Sub Item 01</a>
          <a href="#" className="sub-item">Sub Item 02</a>
          <a href="#" className="sub-item">Sub Item 03</a>
        </div>
      </div>
      <div className="item"><a href="#"><i className="fas fa-th" />Forms</a></div>
      <div className="item">
        <a className="sub-btn"><i className="fas fa-cogs" />Settings<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="#" className="sub-item">Sub Item 01</a>
          <a href="#" className="sub-item">Sub Item 02</a>
        </div>
      </div>
      <div className="item"><a href="#"><i className="fas fa-info-circle" />About</a></div>
    </div>
  </div>
</div>
    )
}

export default DirectionMenu