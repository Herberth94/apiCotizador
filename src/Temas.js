import React from 'react'

function Temas() {
  return (
    <div>



<input type="radio" id="white" name="colors" value="white" checked/>
<input type="radio" id="dark" name="colors" value="dark"  />
<input type="radio" id="red" name="colors" value="red"/>
<input type="radio" id="green" name="colors" value="green"/>
<input type="radio" id="yellow" name="colors" value="yellow"/>
<input type="radio" id="blue" name="colors" value="blue"/>
<input type="radio" id="purple" name="colors" value="purple"/>
<input type="radio" id="olive" name="colors" value="olive"/>

<div class="page-wrapper">
  <div class="color-palette">
    <label for="white"></label>
    <label for="dark"></label>
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