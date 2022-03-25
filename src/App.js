import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./Componentes/css/Animaciones.css";
import "./css/Tablas.css";
//============ Rutas Públicas ============
import Login from './Login';
import Footer from './Componentes/Footer';
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

import MenuProveedor from "./Administrator/MenuProveedor";


import PTN_BOM from "./Administrator/PTN-BOM/PTN_BOM";
import AM from "./Administrator/AM/AmMenu";
import Proporcionalidad from "./Administrator/Proporcionalidad/ProporcionalidadMenu";

/* import PropuestaEconomica from "./Administrator/PropuestEconomica"; */
import ExportarPDF from "./Administrator/ExportarPDF";


//============ Preventas Private  ============
import Preventa from "./Routes/ValidaPreventa";

//============ Preventas Páginas Private Ventas ============
import MenuPreventa from "./Preventa/MenuPreventa";
import Colaboradores from "./Preventa/AgregarColaborador";
import AdministrarColaboradores from "./Preventa/AdministrarColaboradores";

//============ Ventas Private  ============
import Venta from "./Routes/ValidaVenta";

//============ Ventas  Páginas Private  ============
import MenuVentas from "./Ventas/MenuVentas";
import ProporcionalidadVentas from "./Ventas/Proporcionalidad";
import AMVentas from "./Ventas/AM";
import AsignarProyecto from "./Preventa/AsignarProyecto";




function App() {
  

  return (
    <div className="App">

      <Router>

        {/*========================== Páginas Públicas==========================*/}

        <PublicRoutes path="/" component={Login} />
        <PublicRoutes path="/" component={Footer} />
    
        {/*========================== Páginas Administrador ==========================*/}

        <Administrador path="/" component={MenuAdministrador}  />

        {/* <Administrador exact path="/" component={CambioContraseña} /> */}
        
        <Administrador exact path="/registrar" component={Registro} />
        <Administrador exact path="/registrar-cliente" component={Clientes} />
        <Administrador exact path="/registrar-proveedor" component={MenuProveedor} />

   
        <Administrador exact path="/usuarios" component={Usuarios} />
        <Administrador exact path="/administrar-clientes" component={AdministrarClientes} />
        <Administrador exact path="/ptn" component={PTN_BOM} />
        <Administrador exact path="/propuesta-economica" component={ExportarPDF} />
        <Administrador exact path="/am" component={AM} />
        <Administrador exact path="/proporcionalidad" component={Proporcionalidad} />

        {/*========================== Páginas Preventa ==========================*/}

        <Preventa path="/" component={MenuPreventa} />
        {/* oooo */}
        <Preventa exact path ="/" component={CambioContraseña} />

        <Preventa path="/agregar-cliente" component={Clientes} />
        <Preventa path="/administrar-clientes" component={AdministrarClientes } />
        <Preventa exact path="/agregar-colaborador" component={Colaboradores} />
        <Preventa path="/administrar-colaboradores" component={AdministrarColaboradores } />
        <Preventa path="/asignar" component={AsignarProyecto} />
        <Preventa path="/ptn" component={ PTN_BOM} />


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
