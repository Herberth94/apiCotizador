import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./Componentes/css/Animaciones.css";
import "./css/Tablas.css";
//============ Rutas Públicas ============
import Login from './Login';
import Footer from './Componentes/Footer';
//============ Rutas Private Públicas ============
import PublicRoutes from "./Routes/PublicRoutes";

//============ Rutas Private Públicas ============
import MenuClientes from "./Componentes/MenuClientes";
//============ Rutas Private Administrador ============
import Administrador from "./Routes/ValidaAdministrador";
import MenuHeramientas from "./Componentes/Herramientas/MenuHeramientas";

//============ Administrador Páginas Private Administrador ============
import MenuAdministrador from "./Administrator/MenuAdministrador";
import MenuUsuarios from './Administrator/MenuUsuarios';



import CambioContraseña from "./Componentes/CambioContraseña";

import MenuProveedor from "./Administrator/MenuProveedor";


import PTN_BOM from "./Administrator/PTN-BOM/PTN_BOM";
import AM from "./Administrator/AM/AmMenu";
import Proporcionalidad from "./Administrator/Proporcionalidad/ProporcionalidadMenu";

/* import PropuestaEconomica from "./Administrator/PropuestEconomica"; */

import PropuestaEconomica from "./Administrator/PropuestEconomica";

import ExportarPDF from "./Administrator/ExportarPDF";


//============ Preventas Private  ============
import Preventa from "./Routes/ValidaPreventa";

//============ Preventas Páginas Private Ventas ============
import MenuPreventa from "./Preventa/MenuPreventa";
import MenuColaboradores from "./Preventa/MenuColaboradores";

//============ Ventas Private  ============
import Venta from "./Routes/ValidaVenta";

//============ Ventas  Páginas Private  ============
import MenuVentas from "./Ventas/MenuVentas";
import AsignarProyecto from "./Preventa/AsignarProyecto";
import { calcularDescuento } from "./Administrator/PTN-BOM/Operaciones";


  

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
        
        <Administrador exact path="/menu-usuarios" component={MenuUsuarios} />
        <Administrador exact path="/menu-clientes" component={MenuClientes} />
        <Administrador exact path="/menu-proveedores" component={MenuProveedor} />
        <Administrador exact path="/menu-colaboradores" component={MenuColaboradores} />
      
   
       
        <Administrador exact path="/calculadora" component={MenuHeramientas} />
        <Administrador exact path="/ptn" component={PTN_BOM} />
        <Administrador exact path="/propuesta-economica" component={PropuestaEconomica} />
        <Administrador exact path="/am" component={AM} />
        <Administrador exact path="/proporcionalidad" component={Proporcionalidad} />

        {/*========================== Páginas Preventa ==========================*/}

        <Preventa path="/" component={MenuPreventa} />
        {/* oooo */}
        <Preventa exact path ="/" component={CambioContraseña} />

        <Preventa path="/menu-clientes" component={MenuClientes} />
        <Preventa exact path="/menu-colaboradores" component={MenuColaboradores} />
        <Preventa exact path="/menu-proveedores" component={MenuProveedor} />



        <Preventa path="/asignar" component={AsignarProyecto} />
        <Preventa path="/ptn" component={ PTN_BOM} />
        <Preventa path="/calculadora" component={MenuHeramientas} />




        {/*========================== Páginas Ventas ==========================*/}
        <Venta path="/" component={MenuVentas} />
        <Venta exact path="/" component={CambioContraseña} />
        <Venta exact path="/menu-clientes" component={MenuClientes} />
        <Venta path="/menu-proveedores" component={MenuProveedor} />
   

     
        <Venta exact path="/am" component={AM} />
        <Venta exact path="/propuesta-economica" component={ExportarPDF} />


        <Venta path="/calculadora" component={MenuHeramientas} />




      </Router>


    </div>
  );
}

export default App;
