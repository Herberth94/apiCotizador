import React from 'react'

function RegistrarMarcas() {
  return (
    <div className="contenido-main-registro">
        <div className="scene flex">
          <section className="card-body">
            <form  method="post" className="card-form"/*  onSubmit = {enviarDatos} */>
                {/*========= Registrar Clientes========= */}
              <h2 >  <span>Registrar Marcas</span> </h2>
   {/*========= Nombre Proveedor ========= */}
                 <label htmlFor="user" className=" label">
                    Nombre Proveedor
                 </label>
              <input
                id="user"
                type="text"
                name='nombre_proveedor'
                className="card-input"
                o/* nChange={handleInputChange} */
                placeholder="Ingrese Nombre del Proveedor"
              />
    {/*========= Marca ========= */}
              <label htmlFor="user2" className=" label">
             Marca
              </label>
              <input
                id="user2"
                type="text"
                name ="marca"
               /*  onChange={handleInputChange} */
                className="card-input"
                placeholder="Ingrese Marca"
              />
  
    {/*========= Botón Registrar ========= */}
              <div className="boton-registro">
                <button className="card-button" type="submit">
                  <span>Registrar</span>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
  )
}

export default RegistrarMarcas