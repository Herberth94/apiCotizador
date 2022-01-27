import React from "react";

export let authAdmin1;
export let authPreventa1;
export let authVenta1;

export let i = "global";

export let validator  = "administrador";


function foo() {
      
    if(validator === "administrador"){
        i = "administrador";
    }else if(validator === "preventa"){
        i = "preventa";
    }else if(validator === "venta"){
        i = "venta";
    }else{
        i = "null"
    }
 
    console.log(i); // local
}
foo();




export  default class ValidaUsuario extends React.Component{
state ={
    rol: ['admin','preventa','venta']
}
render(){

    if(this.state.rol[0]=== "admin"){
        console.log("soy admin");
     
        authAdmin1 =false;

        return(
            <div>
                <h1>Hola Admin</h1>
            </div>
        )
    }else if  (this.state.rol[0]=== "preventa"){
        console.log("Soy Preventa");
        authPreventa1=true;
        return(
            <div>
                <h1>Hola Preventa</h1>
            </div>
        )
    }else if  (this.state.rol[0]=== "venta"){
        console.log("Soy de Ventas");
        authVenta1=true;
        return(
            <div>
                <h1>Hola Ventas</h1>
            </div>
        )
    }else{
        console.log("ERROR");
        return(
            <div>
                <h1>Existe un Error;</h1>
            </div>
        )

    }

}

}