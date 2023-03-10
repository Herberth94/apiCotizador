import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./css/styles.css";
import "./Componentes/css/Animaciones.css";
import "./css/Tablas.css";
import "./css/Buscador.css";

//============ Rutas Públicas ============
import Login from "./pages/login/Login";
import Footer from "./pages/componentes/Footer";
import Header from "./pages/componentes/Header";




//============ Rutas Private Públicas ============
import PublicRoutes from "./Routes/PublicRoutes";
import MenuAdministrador from "./Preventa/MenuAdministrador";
import Direccion from "./Routes/ValidaDireccion";

//============ Rutas Private Públicas ============
//============ Rutas Private Administrador ============
import Administrador from "./Routes/ValidaAdministrador";
import MenuHeramientas from "./Componentes/Herramientas/MenuHeramientas";

import CalculaDescuento from "./Componentes/Herramientas/CalculaDescuento";
import NuevoProyecto from "./Preventa/PTN-BOM/Menu-Bom/NuevoProyecto";
import NuevoProyectoExcel from "./Componentes/Herramientas/NuevoProyectoExcel";
import Excel from "./Componentes/Herramientas/excel";

//============ Administrador Páginas Private Administrador ============
import MenuDireccion from "./Administrador/MenuDireccion";
import MenuUsuarios from "./Administrador/Usuarios/MenuUsuarios/MenuUsuarios";
import RegistrarUsuarios from "./Administrador/Usuarios/MenuUsuarios/RegistrarUsuarios";
import RegistrarClientes from "./Administrador/Clientes/MenuClientes/RegistrarClientes";
import RegistrarProveedor from "./Administrador/Proveedores/MenuProveedor/RegistrarProveedor";
import RegistrarMarcas from "./Administrador/Proveedores/MenuProveedor/RegistrarMarcas";

import AdministrarUsuarios from "./Administrador/Usuarios/MenuUsuarios/AdministrarUsuarios";
import AdministrarClientes from "./Administrador/Clientes/MenuClientes/AdministrarClientes";
import AdministrarProveedor from "./Administrador/Proveedores/MenuProveedor/AdministrarProveedor";
import AdministrarColaboradores from "./Preventa/Colaboradores/MenuColaborador/AdministrarColaboradores";
import AdministrarColaboradoresVenta from "./Preventa/Colaboradores/MenuColaborador/AdministrarColaboradoresVenta";
import AsignarProyecto from "./Preventa/AsignarVentas/MenuAsignacion/AsignarProyecto";

import Divisa from "./Ventas/AM/Menu-AM/Divisa";
import BuscadorInteligente from "./Ventas/AM/Menu-AM/BuscadorInteligente";
import BuscadorInteligente2 from "./Ventas/AM/Menu-AM/BuscadorInteligente2";
import BuscadorProyectoFinanciamiento from "./Ventas/Proporcionalidad/MenuProporcionalidad/BuscadorProyectoFinanciamiento";
import BuscadorInteligente3 from "./Administrador/PropuestaEconomica/Menu-Propuesta/BuscadorInteligente3";
import BuscadorInteligente4 from "./Administrador/PropuestaEconomica/Menu-Propuesta/BuscadorInteligente4";
import ResumenAM from "./Ventas/AM/Menu-AM/ResumenAM";

import Proyectos from "./Preventa/PTN-BOM/Menu-Bom/ResumenProyectos";
import ContinuarProyecto from "./Preventa/PTN-BOM/Menu-Bom/ContinuarProyecto";

import AgregarColaborador from "./Preventa/Colaboradores/MenuColaborador/AgregarColaborador";

import CambioContraseña from "./Componentes/CambioContraseña";

//============ Preventas Private  ============
import Preventa from "./Routes/ValidaPreventa";

//============ Preventas Páginas Private Ventas ============
import MenuPreventa from "./Preventa/MenuPreventa";
import MenuColaboradores from "./Preventa/Colaboradores/MenuColaborador/MenuColaboradores";

//============ Ventas Private  ============
import Venta from "./Routes/ValidaVenta";

//============ Ventas  Páginas Private  ============
import MenuVentas from "./Ventas/MenuVentas";
import MenuResumenBom from "./Ventas/AM/ResumenBOM/MenuResumenBom";
import { LP } from "./Componentes/Herramientas/ListaProyectos";
import ContinuarPCE from "./Componentes/Herramientas/ContinuarProyectoCE";
import MenuValidacion from "./Ventas/AM-Resumen/MenuValidacion";
import Tablel from "./Ventas/AM-Resumen/Tablel";

import Prueba2 from "./Preventa/PTN-BOM/Routes/Prueba2";

function App() {
  return (
    <div className="App">
      <Router>
        {/*========================== Páginas Públicas==========================*/}

        <PublicRoutes path="/" component={Login} />
        <PublicRoutes path="/" component={Footer} />
        <PublicRoutes path="/" component={Header} />

        {/* ======================================================  */}
        {/*Administrador*/}
        {/* ======================================================  */}

        <Direccion path="/" component={MenuDireccion} />
        <Direccion exact path="/" component={CambioContraseña} />

        <Direccion exact path="/calculadora" component={CalculaDescuento} />
        <Direccion path="/documentacion" component={MenuHeramientas} />
        <Direccion
          exact
          path="/plantilla-excel"
          component={NuevoProyectoExcel}
        />
        <Direccion exact path="/continuarP-excel" component={ContinuarPCE} />
        {/* <Administrador exact path="/" component={CambioContraseña} /> */}
        <Direccion
          exact
          path="/registrar-usuarios"
          component={RegistrarUsuarios}
        />
        <Direccion
          exact
          path="/registrar-clientes"
          component={RegistrarClientes}
        />
        <Direccion
          exact
          path="/registrar-proveedores"
          component={RegistrarProveedor}
        />
        <Direccion exact path="/registrar-marcas" component={RegistrarMarcas} />
        <Direccion
          exact
          path="/registrar-colaboradores"
          component={AgregarColaborador}
        />
        <Direccion
          exact
          path="/administrar-usuarios"
          component={AdministrarUsuarios}
        />
        <Direccion
          exact
          path="/administrar-clientes"
          component={AdministrarClientes}
        />
        <Direccion
          exact
          path="/administrar-proveedores-marcas"
          component={AdministrarProveedor}
        />
        <Direccion
          exact
          path="/administrar-colaboradores"
          component={AdministrarColaboradores}
        />
        <Direccion
          exact
          path="/administrar-asignaciones"
          component={AdministrarColaboradoresVenta}
        />
        <Direccion
          exact
          path="/asignar-proyectos"
          component={AsignarProyecto}
        />
        {/* /////////////Preventa */}

        <Direccion exact path="/nuevo-proyecto" component={NuevoProyecto} />
        <Direccion exact path="/mis-proyectos" component={ContinuarProyecto} />
        <Direccion
          exact
          path="/proyectos-compartidos"
          component={ContinuarProyecto}
        />

        {/*   Excel prueba */}
        <Direccion exact path="/mis-proyectos-r" component={Proyectos} />
        <Direccion
          exact
          path="/proyectos-compartidos-r"
          component={Proyectos}
        />

        {/* /////////////Ventas */}
        <Direccion exact path="/divisa" component={Divisa} />
        <Direccion
          exact
          path="/costos-indirectos"
          component={BuscadorInteligente}
        />
        <Direccion
          exact
          path="/imprimir-propuesta"
          component={BuscadorInteligente3}
        />
        <Direccion
          exact
          path="/administrar-propuesta"
          component={BuscadorInteligente4}
        />
        <Direccion exact path="/resumen-am" component={ResumenAM} />
        <Direccion exact path="/resumen" component={BuscadorInteligente2} />
        <Direccion
          exact
          path="/registrar-financiamiento"
          component={BuscadorProyectoFinanciamiento}
        />

        {/* ======================================================  */}
        {/* Preventa */}
        {/* ======================================================  */}

        {/*======== Inicio ========*/}
        <Preventa path="/" component={MenuPreventa} />
        <Preventa exact path="/" component={CambioContraseña} />

        {/*======== Home ========*/}

        <Preventa path="/calculadora" component={CalculaDescuento} />
        <Preventa path="/documentacion" component={MenuHeramientas} />
        <Preventa path="/plantilla-excel" component={NuevoProyectoExcel} />
        <Preventa exact path="/continuarP-excel" component={ContinuarPCE} />

        {/*======== Registros ========*/}
        <Preventa
          exact
          path="/registrar-clientes"
          component={RegistrarClientes}
        />
        <Preventa
          exact
          path="/registrar-proveedores"
          component={RegistrarProveedor}
        />
        <Preventa exact path="/registrar-marcas" component={RegistrarMarcas} />
        <Preventa
          exact
          path="/registrar-colaboradores"
          component={AgregarColaborador}
        />

        {/*======== Administración ========*/}
        <Preventa
          exact
          path="/administrar-clientes"
          component={AdministrarClientes}
        />
        <Preventa
          exact
          path="/administrar-proveedores-marcas"
          component={AdministrarProveedor}
        />
        <Preventa
          exact
          path="/administrar-colaboradores"
          component={AdministrarColaboradores}
        />
        <Preventa
          exact
          path="/administrar-asignaciones"
          component={AdministrarColaboradores}
        />
        <Preventa exact path="/asignar-proyectos" component={AsignarProyecto} />

        {/*======== BOM========*/}
        <Preventa exact path="/nuevo-proyecto" component={NuevoProyecto} />
        <Preventa exact path="/mis-proyectos" component={ContinuarProyecto} />
        <Preventa
          exact
          path="/proyectos-compartidos"
          component={ContinuarProyecto}
        />

        <Preventa exact path="/mis-proyectos-r" component={Proyectos} />
        <Preventa exact path="/proyectos-compartidos-r" component={Proyectos} />

        {/* ======================================================  */}
        {/* Ventas */}
        {/* ======================================================  */}

        <Venta path="/" component={MenuVentas} />
        <Venta exact path="/" component={CambioContraseña} />

        <Venta exact path="/calculadora" component={CalculaDescuento} />
        <Venta path="/documentacion" component={MenuHeramientas} />

        <Venta exact path="/registrar-clientes" component={RegistrarClientes} />
        <Venta
          exact
          path="/registrar-proveedores"
          component={RegistrarProveedor}
        />
        <Venta exact path="/registrar-marcas" component={RegistrarMarcas} />

        <Venta
          exact
          path="/administrar-clientes"
          component={AdministrarClientes}
        />
        <Venta
          exact
          path="/administrar-proveedores-marcas"
          component={AdministrarProveedor}
        />

        {/* AM*/}
        <Venta exact path="/divisa" component={Divisa} />
        <Venta exact path="/resumen-am" component={ResumenAM} />
        <Venta
          exact
          path="/costos-indirectos"
          component={BuscadorInteligente}
        />
        {/* proyectos*/}
        <Venta
          exact
          path="/imprimir-propuesta"
          component={BuscadorInteligente3}
        />

        {/*    checar */}
        {/* <Venta  exact path="/administrar-propuesta" component={Tablel} /> */}
        <Venta exact path="/administrar-propuesta" component={MenuValidacion} />

        {/* proporcionalidad */}
        <Venta exact path="/resumen" component={BuscadorInteligente2} />
        <Venta
          exact
          path="/registrar-financiamiento"
          component={BuscadorProyectoFinanciamiento}
        />
        <Venta exact path="/resumen-proyecto" component={MenuResumenBom} />

        <Administrador path="/" component={MenuAdministrador} />
        <Administrador exact path="/" component={CambioContraseña} />
        <Administrador exact path="/calculadora" component={CalculaDescuento} />
        <Administrador path="/documentacion" component={MenuHeramientas} />
        <Administrador
          exact
          path="/plantilla-excel"
          component={NuevoProyectoExcel}
        />
        <Administrador
          exact
          path="/continuarP-excel"
          component={ContinuarPCE}
        />

        {/* <Administrador exact path="/" component={CambioContraseña} /> */}

        <Administrador
          exact
          path="/registrar-usuarios"
          component={RegistrarUsuarios}
        />
        <Administrador
          exact
          path="/registrar-clientes"
          component={RegistrarClientes}
        />
        <Administrador
          exact
          path="/registrar-proveedores"
          component={RegistrarProveedor}
        />
        <Administrador
          exact
          path="/registrar-marcas"
          component={RegistrarMarcas}
        />
        <Administrador
          exact
          path="/registrar-colaboradores"
          component={AgregarColaborador}
        />

        <Administrador
          exact
          path="/administrar-usuarios"
          component={AdministrarUsuarios}
        />
        <Administrador
          exact
          path="/administrar-clientes"
          component={AdministrarClientes}
        />
        <Administrador
          exact
          path="/administrar-proveedores-marcas"
          component={AdministrarProveedor}
        />
        <Administrador
          exact
          path="/administrar-colaboradores"
          component={AdministrarColaboradores}
        />
        <Administrador
          exact
          path="/administrar-asignaciones"
          component={AdministrarColaboradoresVenta}
        />

        <Administrador
          exact
          path="/asignar-proyectos"
          component={AsignarProyecto}
        />

        {/* /////////////Preventa */}
        <Administrador exact path="/nuevo-proyecto" component={NuevoProyecto} />
        <Administrador
          exact
          path="/mis-proyectos"
          component={ContinuarProyecto}
        />
        <Administrador
          exact
          path="/proyectos-compartidos"
          component={ContinuarProyecto}
        />
        <Administrador exact path="/mis-proyectos-r" component={Proyectos} />
        <Administrador
          exact
          path="/proyectos-compartidos-r"
          component={Proyectos}
        />

        {/* Bom*/}
        {/*       <Venta  exact path="/resumen-proyecto" component={BuscadorInteligente2} /> 


 */}
      </Router>
    </div>
  );
}

export default App;
