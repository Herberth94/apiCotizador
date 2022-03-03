import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./Componentes/css/Animaciones.css";
import "./css/Tablas.css";


//============ Rutas Públicas ============
import Login from './Login';
import Footer from './Footer';
import Header from './Componentes/Header';

//============ Rutas Private Públicas ============
import PublicRoutes from "./Routes/PublicRoutes";

//============ Rutas Private Públicas ============
import AdministrarClientes from "./Componentes/AdministrarClientes";
import Clientes from "./Componentes/RegistrarClientes";

//============ Rutas Private Administrador ============
import Administrador from "./Routes/ValidaAdministrador";

//============ Administrador Páginas Private Administrador ============
import MenuAdministrador from "./Administrator/MenuAdministrador";
import Registro from './Administrator/RegistrarUsuarios';
import Usuarios from "./Administrator/AdministrarUsuarios";
import CambioContraseña from "./Componentes/CambioContraseña";

import Colaboradores from "./Administrator/AgregarColaborador";

import PTN_BOM from "./Administrator/PTN-BOM/PTN_BOM";
import AM from "./Administrator/AM/AmMenu";
import Proporcionalidad from "./Administrator/Proporcionalidad/ProporcionalidadMenu";

import PropuestaEconomica from "./Administrator/PropuestEconomica";
import ExportarPDF from "./Administrator/ExportarPDF";


//============ Preventas Private  ============
import Preventa from "./Routes/ValidaPreventa";

//============ Preventas Páginas Private Ventas ============
import MenuPreventa from "./Preventa/MenuPreventa";
import addClientesPreventa from "./Preventa/rClientes";
import administrarClientespreventa from "./Preventa/rAdministrarClientes";

//============ Ventas Private  ============
import Venta from "./Routes/ValidaVenta";

//============ Ventas  Páginas Private  ============
import MenuVentas from "./Ventas/MenuVentas";
import ProporcionalidadVentas from "./Ventas/Proporcionalidad";
import AMVentas from "./Ventas/AM";


function App() {
  return (
    <div className="App">

      <Router>

        {/*========================== Páginas Públicas==========================*/}

        <PublicRoutes path="/" component={Login} />
        <PublicRoutes path="/" component={Footer} />
        <PublicRoutes path="/" component={Header} />

        {/*========================== Páginas Administrador ==========================*/}

        <Administrador path="/" component={MenuAdministrador} />
        <Administrador path="/" component={Header} />

        {/* <Administrador exact path="/" component={CambioContraseña} /> */}
        <Administrador exact path="/registrar" component={Registro} />
        <Administrador exact path="/registrar-cliente" component={Clientes} />
        <Administrador exact path="/usuarios" component={Usuarios} />
        <Administrador exact path="/agregar-colaborador" component={Colaboradores} />
        <Administrador exact path="/administrar-clientes" component={AdministrarClientes} />
        <Administrador exact path="/ptn" component={PTN_BOM} />
        <Administrador exact path="/propuesta-economica" component={ExportarPDF} />
        <Administrador exact path="/am" component={AM} />
        <Administrador exact path="/proporcionalidad" component={Proporcionalidad} />

        {/*========================== Páginas Preventa ==========================*/}

        <Preventa path="/" component={MenuPreventa} />
        {/* oooo */}
        <Preventa path="/" component={CambioContraseña} />

        <Preventa path="/add-preventa-cliente" component={addClientesPreventa} />
        <Preventa path="/admin-preventa-clientes" component={administrarClientespreventa} />

        {/*========================== Páginas Ventas ==========================*/}
        <Venta path="/" component={MenuVentas} />
        {/* oooo */}
        <Venta path="/" component={CambioContraseña} />

        <Venta path="/am2" component={AMVentas} />
        <Venta path="/proporcionalidad" component={ProporcionalidadVentas} />


      </Router>


    </div>
  );
}

export default App;
