import React from 'react'

function Boton(props) {
  return (



    
    <div className ="boton-login">
    <button className="card-button" type="submit"  disabled={props.mytxt} >
      <span>Entrar</span>
    </button>
    </div>

  )
}

export default Boton