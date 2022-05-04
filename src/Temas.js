import React from 'react'


let chooseTema = [0];
let color = "blak";


function Temas() {


  if(chooseTema[0] === 0){
    //TEMA 1
    color = "black";


  }else if(chooseTema[0] === "1"){

  }
  return (
    <div>






<input type="radio" id={color} name="colors" value={color}  checked/>


<input type="radio" id="color" name="colors" />

<input type="radio" id="red" name="colors" value="red"/>
<input type="radio" id="green" name="colors" value="green"/>
<input type="radio" id="yellow" name="colors" value="yellow"/>
<input type="radio" id="blue" name="colors" value="blue"/>
<input type="radio" id="purple" name="colors" value="purple"/>
<input type="radio" id="olive" name="colors" value="olive"/>

<div className="page-wrapper">
  <div className="color-palette">
    {/* //BLACK */}
    <label for={color}></label>



    <label for="red"></label>
    <label for="green"></label>
    <label for="yellow"></label>
    <label for="blue"></label>
    <label for="purple"></label>
    <label for="olive"></label>
  </div>
    </div>

    </div>
  )
}

export default Temas