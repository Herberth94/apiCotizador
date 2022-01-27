import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import "./css/App.css";
import Login from './Login';
import Footer from './Footer';

import Header from './Header';


//PublicRoutes
import PublicRoutes from "./Components/PublicRoutes";



import Administrador from "./Components/Administrador";
import MenuAdministrador from "./Administrator/MenuAdministrador";
import Registro from './Administrator/Registro';
import Clientes from "./Administrator/Clientes";
import Usuarios from "./Administrator/Usuarios";
import PTN_BOM from "./Administrator/PTN_BOM";
import Proyectos from "./Administrator/Proyectos";
import PropuestaEconomica from "./Administrator/PropuestEconomica";
import AM from "./Administrator/AM";
import Proporcionalidad from "./Administrator/Proporcionalidad";



//Preventa Private
import Preventa from "./Components/Preventa";
//Preventa Rutas
import MenuPreventa from "./Preventa/MenuPreventa";



//Ventas Private
import Venta from "./Components/Venta";
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


          {/* Rutas Administrador  */}
          <Administrador path="/" component={MenuAdministrador} />
          <Administrador  path="/" component={Header} />


         <Administrador exact path="/registrar" component={Registro} />
         <Administrador exact path="/registrar-cliente" component={Clientes} />
         <Administrador exact path="/usuarios" component={Usuarios} />
         <Administrador exact path="/ptn" component={PTN_BOM} />
         <Administrador exact path="/proyectos" component={Proyectos} />
         <Administrador exact path="/propuesta-economica" component={PropuestaEconomica} />
         <Administrador exact path="/am" component={AM} />
         <Administrador exact path="/proporcionalidad" component={Proporcionalidad} />



         
        {/* Rutas Preventa  */}

        <Preventa path="/" component={MenuPreventa} />



      {/* Rutas Venta  */}
        <Venta path="/" component={MenuVentas} />
        <Venta path="/am" component={AMVentas} />
        <Venta path="/proporcionalidad" component={ProporcionalidadVentas} />
       


         











      {/*     <Route  exact path= "/login"> <Login/>   <Footer/>  </Route> */}
         {/*  <Route  exact path= "/login"> <Header/>  <Registro/>   <Footer/>  </Route> */}
       
       
    
      </Router>

     


    </div>
  );
}

export default App;
