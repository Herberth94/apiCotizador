import React from "react";
import Icono from "../pages/componentes/Icono";
import "./css/footer.css";

function Footer() {
  return (
    //============ Footer Página Web ============
    <div className="box-footer">
      {/* //============ Redes Sociales ============ */}
      <div className="social-media">
   
          <a href={"#"} target="_blank" rel="noreferrer">
          <Icono  icono="bi:telephone-fill"   color="white" />
          </a>

          <a href={"#"} target="_blank" rel="noreferrer">
          <Icono  icono="mingcute:mail-fill"   color="white"/>
          </a>


          <a href={"#"} target="_blank" rel="noreferrer">
          <Icono  icono="mdi:map-marker-radius"  color="white"/>
          </a>


          <a href={"#"} target="_blank" rel="noreferrer">
          <Icono  icono="akar-icons:linkedin-box-fill"   color="white"/>
          </a>


      </div>
      <div className="copiright">
        <h3>Marvilop  © Copyright 2022</h3>
      </div>
    </div>
  );
}

export default Footer;
