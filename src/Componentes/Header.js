import React from "react";
import "./css/header.css";
import logo from "../images/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="header">
        <h3>
          {" "}
          <img src={logo} className="log" alt="Palo Tinto Networks" />
        </h3>
      </div>
    </div>
  );
}

export default Header;
