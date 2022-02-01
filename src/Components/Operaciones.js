const total = (p_unitario,cantidad) => {

    if (p_unitario === "" && cantidad === ""){
        p_unitario = 0;
        cantidad = 0;
        return console.log((Number.parseFloat(p_unitario) * Number.parseFloat(cantidad)));

    }
     if (p_unitario !== "" && cantidad === ""){
        cantidad = 0;
        return console.log((Number.parseFloat(p_unitario) * Number.parseFloat(cantidad)));
    }

    else if(cantidad !== '' && p_unitario === ""){
        p_unitario=0;
        return console.log((Number.parseFloat(p_unitario) * Number.parseFloat(cantidad)));

        }
        else {
            return console.log((Number.parseFloat(p_unitario) * Number.parseFloat(cantidad)));
        }

    
     
       
    };
    
   
    
    

const precio_unitario = (p_lista,descuento) => {return (p_lista(1-descuento))};
const descuento =(p_unitario,p_lista)=> (1-(p_unitario/p_lista))*100;


    
export {total , precio_unitario , descuento}