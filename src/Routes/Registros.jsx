import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Direccion from './ValidaDireccion';
import CalculaDescuento from '../Componentes/Herramientas/CalculaDescuento';
import RegistrarMarcas from '../Administrador/Proveedores/MenuProveedor/RegistrarMarcas';
import RegistrarUsuarios from '../Administrador/Usuarios/MenuUsuarios/RegistrarUsuarios';
import RegistrarClientes from '../Administrador/Clientes/MenuClientes/RegistrarClientes';
import RegistrarProveedor from '../Administrador/Proveedores/MenuProveedor/RegistrarProveedor';
import AgregarColaborador from '../Preventa/Colaboradores/MenuColaborador/AgregarColaborador';


function Registros() {
  return (
    <div>


<Router>
        {/*========================== Páginas Públicas==========================*/}


        <Direccion exact path="/calculadora" component={CalculaDescuento} />
        <Direccion exact path="/registrar-usuarios" component={RegistrarUsuarios}/>
        <Direccion exact path="/registrar-clientes" component={RegistrarClientes} />
        <Direccion exact path="/registrar-proveedores" component={RegistrarProveedor}/>
        <Direccion exact path="/registrar-marcas" component={RegistrarMarcas} />
        <Direccion  exact  path="/registrar-colaboradores"  component={AgregarColaborador}/>

      </Router>



    </div>
  )
}

export default Registros