import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./Componentes/css/Animaciones.css";
import "./css/Tablas.css";
import "./css/Buscador.css"
import Header from "./Componentes/Header";
//============ Rutas Públicas ============
import Login from './Administrador/Login/Login';
import Footer from './Componentes/Footer';
//============ Rutas Private Públicas ============
import PublicRoutes from "./Routes/PublicRoutes";

//============ Rutas Private Públicas ============
import MenuClientes from "./Administrador/Clientes/MenuClientes/MenuClientes";
//============ Rutas Private Administrador ============
import Administrador from "./Routes/ValidaAdministrador";
import MenuHeramientas from "./Componentes/Herramientas/MenuHeramientas";

import CalculaDescuento from "./Componentes/Herramientas/CalculaDescuento";
import NuevoProyecto from "./Preventa/PTN-BOM/Menu-Bom/NuevoProyecto";
import NuevoProyectoExcel from "./Componentes/Herramientas/NuevoProyectoExcel";
import Excel from "./Componentes/Herramientas/excel";

//============ Administrador Páginas Private Administrador ============
import MenuAdministrador from "./Administrador/MenuAdministrador";
import MenuUsuarios from './Administrador/Usuarios/MenuUsuarios/MenuUsuarios';
import RegistrarUsuarios from "./Administrador/Usuarios/MenuUsuarios/RegistrarUsuarios"
import RegistrarClientes from "./Administrador/Clientes/MenuClientes/RegistrarClientes"
import RegistrarProveedor from "./Administrador/Proveedores/MenuProveedor/RegistrarProveedor";
import RegistrarMarcas from "./Administrador/Proveedores/MenuProveedor/RegistrarMarcas";


import AdministrarUsuarios from "./Administrador/Usuarios/MenuUsuarios/AdministrarUsuarios";
import AdministrarClientes from "./Administrador/Clientes/MenuClientes/AdministrarClientes";
import AdministrarProveedor from "./Administrador/Proveedores/MenuProveedor/AdministrarProveedor";
import AdministrarColaboradores from "./Preventa/Colaboradores/MenuColaborador/AdministrarColaboradores";

import AsignarProyecto from "./Preventa/AsignarVentas/MenuAsignacion/AsignarProyecto";

import Divisa from "./Ventas/AM/Menu-AM/Divisa";
import BuscadorInteligente from "./Ventas/AM/Menu-AM/BuscadorInteligente";
import BuscadorInteligente2 from "./Ventas/AM/Menu-AM/BuscadorInteligente2";
import BuscadorProyectoFinanciamiento from "./Ventas/Proporcionalidad/MenuProporcionalidad/BuscadorProyectoFinanciamiento";
import BuscadorInteligente3 from "./Administrador/PropuestaEconomica/Menu-Propuesta/BuscadorInteligente3";
import BuscadorInteligente4 from "./Administrador/PropuestaEconomica/Menu-Propuesta/BuscadorInteligente4";
import ResumenAM from "./Ventas/AM/Menu-AM/ResumenAM";



import ContinuarProyecto from "./Preventa/PTN-BOM/Menu-Bom/ContinuarProyecto";


import AgregarColaborador from "./Preventa/Colaboradores/MenuColaborador/AgregarColaborador";

import CambioContraseña from "./Componentes/CambioContraseña";

import MenuProveedor from "./Administrador/Proveedores/MenuProveedor/MenuProveedor";
import MenuVentas2 from "./Preventa/AsignarVentas/MenuAsignacion/MenuVentas";

import PTN_BOM from "./Preventa/PTN-BOM/Menu-Bom/PTN_BOM";
import AM from "./Ventas/AM/Menu-AM/AmMenu";
import Proporcionalidad from "./Ventas/Proporcionalidad/MenuProporcionalidad/ProporcionalidadMenu";

/* import PropuestaEconomica from "./Administrator/PropuestEconomica"; */

import PropuestaEconomica from "./Administrador/PropuestaEconomica/Menu-Propuesta/PropuestEconomica";
import ExportarPDF from "./Administrador/PropuestaEconomica/Menu-Propuesta/ExportarPDF";


//============ Preventas Private  ============
import Preventa from "./Routes/ValidaPreventa";

//============ Preventas Páginas Private Ventas ============
import MenuPreventa from "./Preventa/MenuPreventa";
import MenuColaboradores from "./Preventa/Colaboradores/MenuColaborador/MenuColaboradores";

//============ Ventas Private  ============
import Venta from "./Routes/ValidaVenta";

//============ Ventas  Páginas Private  ============
import MenuVentas from "./Ventas/MenuVentas";
import MenuValidacion from "./Ventas/AM-Resumen/MenuValidacion";

import MenuFormulario from "./Ventas/AM-Resumen/MenuFormulario";
import MenuResumenBom from "./Ventas/AM/ResumenBOM/MenuResumenBom";
  

function App() {
  

  return (
    <div className="App">

      <Router>

        {/*========================== Páginas Públicas==========================*/}

        <PublicRoutes path="/" component={Login} />
        <PublicRoutes path="/" component={Footer} />
        <PublicRoutes path="/" component={Header} />

    
        {/*========================== Páginas Administrador ==========================*/}

        <Administrador path="/" component={MenuAdministrador}  />


              
        <Administrador exact path="/calculadora" component={CalculaDescuento} />
        <Administrador  path="/documentacion" component={MenuHeramientas} />
        <Administrador exact path="/plantilla-excel" component={NuevoProyectoExcel} />


        {/* <Administrador exact path="/" component={CambioContraseña} /> */}
        
        <Administrador exact path="/registrar-usuarios" component={RegistrarUsuarios} />
        <Administrador exact path="/registrar-clientes" component={RegistrarClientes} />        
        <Administrador exact path="/registrar-proveedores" component={RegistrarProveedor} />
        <Administrador exact path="/registrar-marcas" component={RegistrarMarcas} />
        <Administrador exact path="/registrar-colaboradores" component={AgregarColaborador} />


        <Administrador exact path="/administrar-usuarios" component={AdministrarUsuarios} />
        <Administrador exact path="/administrar-clientes" component={AdministrarClientes} />        
        <Administrador exact path="/administrar-proveedores-marcas" component={AdministrarProveedor} />
        <Administrador exact path="/administrar-colaboradores" component={AdministrarColaboradores} />



        <Administrador exact path="/administrar-asignaciones" component={AdministrarColaboradores}   />
        <Administrador exact path="/asignar-proyectos" component={AsignarProyecto} />
      

{/* /////////////Preventa */}
        <Administrador exact path="/nuevo-proyecto" component={NuevoProyecto} /> 
        <Administrador exact path="/continuar-proyecto" component={ContinuarProyecto } /> 
   
 
   
 

{/* /////////////Ventas */}

        <Administrador exact path="/divisa" component={Divisa} /> 
        <Administrador exact path="/costos-indirectos" component={BuscadorInteligente} /> 
        <Administrador exact path="/imprimir-propuesta" component={ BuscadorInteligente3} /> 
        <Administrador exact path="/administrar-propuesta" component={ BuscadorInteligente4} />
        <Administrador exact path="/resumen-am" component={ResumenAM} /> 



   
 
   




        <Administrador exact path="/resumen" component={BuscadorInteligente2} /> 
        <Administrador exact path="/registrar-financiamiento" component={BuscadorProyectoFinanciamiento} />
      
      
      
      


        <Administrador exact path="/menu-clientes" component={MenuClientes} />
        <Administrador exact path="/menu-proveedores" component={MenuProveedor} />
        <Administrador exact path="/menu-colaboradores" component={MenuColaboradores} />
        <Administrador exact path ="/" component={CambioContraseña} />
        <Administrador path ="/" component={Header} />
        <Administrador exact path="/ptn" component={PTN_BOM} />
        <Administrador exact path="/propuesta-economica" component={PropuestaEconomica} />
        <Administrador exact path="/am" component={AM} />
        <Administrador exact path="/proporcionalidad" component={Proporcionalidad} />
        <Administrador path="/asignar-proyecto" component={MenuVentas2} />

      {/*   <Administrador   exact path="/" component={Temas} />
 */}
        {/*========================== Páginas Preventa ==========================*/}

        <Preventa path="/" component={MenuPreventa} />
        {/* oooo */}
        <Preventa exact path ="/" component={Header} />
        <Preventa exact path ="/" component={CambioContraseña} />

        <Preventa path="/menu-clientes" component={MenuClientes} />
        <Preventa exact path="/menu-colaboradores" component={MenuColaboradores} />
        <Preventa exact path="/menu-proveedores" component={MenuProveedor} />



        <Preventa path="/asignar" component={MenuVentas2} />
        <Preventa path="/ptn" component={ PTN_BOM} />
        <Preventa path="/calculadora" component={MenuHeramientas} />




        {/*========================== Páginas Ventas ==========================*/}
        <Venta path="/" component={MenuVentas} />
        <Venta exact path="/" component={CambioContraseña} />
        <Venta exact path="/menu-clientes" component={MenuClientes} />
        <Venta path="/menu-proveedores" component={MenuProveedor} />
        <Venta exact path="/am" component={AM} />
        <Venta exact path="/propuesta-economica" component={ MenuFormulario  } />
        <Venta path="/calculadora" component={MenuHeramientas} />
        <Venta exact path="/proporcionalidad" component={Proporcionalidad} />



        <Venta exact path="/resumen-ptn" component={MenuResumenBom} />






      </Router>


    </div>
  );
}

export default App;
