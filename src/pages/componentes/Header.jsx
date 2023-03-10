import React from "react";
import logo from "../../images/logo.png";

function Header() {
  return (
    <div className="header">
        <img src={logo} className="log" alt="Palo Tinto Networks" />
    </div>
  );
}

export default Header;
