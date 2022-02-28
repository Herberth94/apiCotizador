import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import "./Componentes/css/Animaciones.css";
import "./css/Tablas.css";

import Login from './Login';
import Footer from './Footer';

import Header from './Componentes/Header';


//PublicRoutes
import PublicRoutes from "./Routes/PublicRoutes";
import AdministrarClientes from "./Componentes/AdministrarClientes";
import Clientes from "./Componentes/RegistrarClientes";

import CambioContraseña from "./Componentes/CambioContraseña";
import Administrador from "./Routes/Administrador";
import MenuAdministrador from "./Administrator/MenuAdministrador";
import Registro from './Administrator/RegistrarUsuarios';

import Usuarios from "./Administrator/AdministrarUsuarios";
import Colaboradores from "./Administrator/Colaborador";

import PTN_BOM from "./Administrator/PTN_BOM";
import Proyectos from "./Administrator/Proyectos";
import PropuestaEconomica from "./Administrator/PropuestEconomica";
import AM from "./Administrator/AM";
import Proporcionalidad from "./Administrator/Proporcionalidad";

 import ExportarPDF from "./Administrator/ExportarPDF";


 


//Preventa Private
import Preventa from "./Routes/Preventa";
//Preventa Rutas
import MenuPreventa from "./Preventa/MenuPreventa";
import addClientesPreventa from "./Preventa/rClientes";
import administrarClientespreventa from "./Preventa/rAdministrarClientes";






//Ventas Private
import Venta from "./Routes/Venta";
//Ventas Rutas
import MenuVentas from "./Ventas/MenuVentas";
import ProporcionalidadVentas from "./Ventas/Proporcionalidad";
import AMVentas from "./Ventas/AM";



function App() {
  return (
    <div className="App">

<Router>
     
        <PublicRoutes path="/" component={Login} />
        <PublicRoutes path="/" component={Footer} />
        <PublicRoutes path="/" component={Header} />



          {/* Rutas Administrador  */}
          <Administrador path="/" component={MenuAdministrador} />
           <Administrador  path="/" component={Header} />



          <Administrador exact path="/" component={CambioContraseña} />


          
         <Administrador exact path="/registrar" component={Registro} />
         <Administrador exact path="/registrar-cliente" component={Clientes} />
         <Administrador exact path="/usuarios" component={Usuarios} />
         <Administrador exact path="/agregar-colaborador" component={Colaboradores} />
         <Administrador exact path="/administrar-clientes" component={AdministrarClientes} />
         <Administrador exact path="/ptn" component={PTN_BOM} />
         <Administrador exact path="/propuesta-economica" component={ExportarPDF} /> 
          <Administrador exact path="/am" component={AM} /> 
 
         <Administrador exact path="/proporcionalidad" component={Proporcionalidad} />

         

         
        {/* Rutas Preventa  */}

        <Preventa path="/" component={MenuPreventa} />
        <Preventa path="/add-preventa-cliente" component={addClientesPreventa} />
        <Preventa path="/admin-preventa-clientes" component={administrarClientespreventa} />

      {/* Rutas Venta  */}
        <Venta path="/" component={MenuVentas} />
        <Venta path="/am2" component={AMVentas} />
        <Venta path="/proporcionalidad" component={ProporcionalidadVentas} />
       


         











      {/*     <Route  exact path= "/login"> <Login/>   <Footer/>  </Route> */}
         {/*  <Route  exact path= "/login"> <Header/>  <Registro/>   <Footer/>  </Route> */}
       
       
    
      </Router>

     


    </div>
  );
}

export default App;
