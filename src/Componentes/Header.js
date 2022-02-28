import React from 'react'
import logo from './images/logo.png'
import './css/header.css'


function Header() {
    return (
        <div className= "header">

        <div className= "header-a">

           <h3>  <img src={logo} className="log"  alt="Palo Tinto Networks" /></h3>
            
        </div>
              
        </div>
    )
}

export default Header