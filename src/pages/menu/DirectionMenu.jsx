import React from 'react'
import Cookies                                 from "universal-cookie";
const cookies = new Cookies();

function DirectionMenu() {
  const cierreSesion = () => {
    cookies.remove("id_usuario", { path: "/" });
    cookies.remove("rol", { path: "/" });
    cookies.remove("estado_login", { path: "/" });
    window.location.href = "../Login.js";
  };
    return (
<div className="menu-sidebar">
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
     
      <div className="item">
        <a className="sub-btn"><i className="fas fa-users" />Registros<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="registrar-usuarios" className="sub-item"><i className="fas fa-user" />Usuarios</a>
          <a href="registrar-clientes" className="sub-item"><i className="fas fa-user" />Clientes</a>
          <a href="registrar-marcas" className="sub-item"><i className="fas fa-user" />Marcas</a>
          <a href="registrar-proveedores" className="sub-item"><i className="fas fa-user" />Proveedores</a>
          <a href="registrar-colaboradores" className="sub-item"><i className="fas fa-user" />Colaboradores</a>
        </div>
      </div>
      <div className="item">
        <a className="sub-btn"><i className="fas fa-table" />Administración<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="adm-usuarios" className="sub-item"><i className="fas fa-user" />Usuarios</a>
          <a href="adm-clientes" className="sub-item"><i className="fas fa-user" />Clientes</a>
          <a href="adm-marcas" className="sub-item"><i className="fas fa-user" />Marcas</a>
          <a href="adm-proveedores" className="sub-item"><i className="fas fa-user" />Proveedores</a>
          <a href="adm-colaboradores" className="sub-item"><i className="fas fa-user" />Colaboradores</a>
        </div>
      </div>
 {/*      <div className="item"><a href="#"><i className="fas fa-th" />Forms</a></div> */}
 {/*      <div className="item">
        <a className="sub-btn"><i className="fas fa-cogs" />Settings<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="#" className="sub-item">Sub Item 01</a>
          <a href="#" className="sub-item">Sub Item 02</a>
        </div>
      </div>
 */}

      <div className="item">
        <a className="sub-btn"><i className="fa fa-tasks" />Preventa<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="#" className="sub-item">Proyectos</a>
          <a href="#" className="sub-item">Excel</a>
          <a href="#" className="sub-item">Resumen</a>
        </div>
      </div>


      <div className="item">
        <a className="sub-btn"><i className="fas fa-cogs" />Ventas<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="#" className="sub-item">Analisís de Margen</a>
          <a href="#" className="sub-item">Proporcionalidad</a>
          <a href="#" className="sub-item">Propuesta Eco</a>
        </div>
      </div>


      <div className="item">
        <a className="sub-btn"><i className="fas fa-cogs" />Herramientas<i className="fas fa-angle-right dropdown" /></a>
        <div className="sub-menu">
          <a href="/calculadora" className="sub-item"><i className="fa fa-calculator" /> Calculadora</a>
          <a href="/documentación" className="sub-item"><i className="fa fa-file-pdf" /> Documentación</a>
        </div>
      </div>



      <div className="item"><a href="# "   onClick={cierreSesion}><i className="fa fa-arrow-left" />Salir</a></div>
    </div>
  </div>
</div>
    )
}

export default DirectionMenu