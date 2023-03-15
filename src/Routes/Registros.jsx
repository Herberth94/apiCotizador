import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Direccion from './ValidaDireccion';
import CalculaDescuento from '../Componentes/Herramientas/CalculaDescuento';
import RegistrarMarcas from '../pages/registers/RegistrarMarcas';
import RegistrarUsuarios from '../pages/registers/RegistrarUsuarios';
import RegistrarClientes from '../pages/registers/RegistrarClientes';
import RegistrarProveedor from '../pages/registers/RegistrarProveedor';
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