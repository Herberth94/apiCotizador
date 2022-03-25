import React from 'react'

function RegistrarProveedor() {
  return (
    <div className="contenido-main-registro">
        <div className="scene flex">
          <section className="card-body">
            <form  method="post" className="card-form"/*  onSubmit = {enviarDatos} */>
                {/*========= Registrar Clientes========= */}
              <h2 >  <span>Registrar Proveedor</span> </h2>
   {/*========= Nombre Cliente========= */}
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
    {/*========= Razón Social ========= */}
              <label htmlFor="user2" className=" label">
               teléfono
              </label>
              <input
                id="user2"
                type="number"
                name ="telefono"
               /*  onChange={handleInputChange} */
                className="card-input"
                placeholder="Ingrese Teléfono"
              />
  
   {/*========= FALTA Teléfono ========= */}
  <label htmlFor="user2" className=" label">
        Correo Electronico
              </label>
              <input
                id="user2"
                type="email"
                name ="correo"
              /*   onChange={handleInputChange} */
                className="card-input"
                placeholder="Ingrese Correo Electronico"
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

export default RegistrarProveedor