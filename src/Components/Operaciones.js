export const operaciones = ()=>{
    const total = (p_lista,cantidad,descuento) => {   
        if (p_lista === "" && cantidad === "" && descuento === ""){
            p_lista = 0;
            cantidad = 0;
            descuento = 0;
            const resultado = (Number.parseFloat(p_lista) * Number.parseFloat(cantidad))
            return resultado*(1-(Number.parseFloat(descuento)/100));
    
        }
        else if (p_lista !== "" && cantidad === "" && descuento === ""){
            descuento = 0;
            cantidad = 0;
            const resultado = (Number.parseFloat(p_lista) * Number.parseFloat(cantidad))
            return resultado*(1-(Number.parseFloat(descuento)/100));
        }
    
        else if(cantidad !== '' && p_lista === "" && descuento === "" ){
            p_lista=0;
            descuento= 0;
            const resultado = (Number.parseFloat(p_lista) * Number.parseFloat(cantidad))
            return resultado*(1-(Number.parseFloat(descuento)/100));
            }
    
        else if(descuento !== "" && p_lista === "" && cantidad === ""){
           cantidad=0;
           p_lista= 0;
            const resultado = (Number.parseFloat(p_lista) * Number.parseFloat(cantidad))
            return resultado*(1-(Number.parseFloat(descuento)/100));
            }
        else if(cantidad !== '' && p_lista !== "" && descuento === "" ){
            descuento= 0;
            const resultado = (Number.parseFloat(p_lista) * Number.parseFloat(cantidad))
            return resultado*(1-(Number.parseFloat(descuento)/100));
        }    
            
            else {
                const resultado = (Number.parseFloat(p_lista) * Number.parseFloat(cantidad))
                return resultado*(1-(Number.parseFloat(descuento)/100));
            }
    
        
         
           
        };
    const precio_u = (total, cantidad)=> Number.parseFloat(total)/Number.parseFloat(cantidad) ;
    const descuento_1= (precio_u,precio_l)=>Number.parseFloat(precio_u)/Number.parseFloat(precio_l);
    
    return {
        total,
        precio_u,
        descuento_1        
    };
    

}


