"use strict";
/*He creado una función con JavaScript para poner los elementos del formulario al valor inicial  usando insertAdjacentElement como hemos visto en clase */
window.onload= ()=>{

    
    let d= document;
    let boton= d.createElement("button");
    boton.innerText="Resetear formulario";
    boton.addEventListener("click", function(event){
        document.getElementById("Fo").reset();
    },false);
    
    d.getElementById("Fo").insertAdjacentElement("afterbegin",boton);
  
  
  


}
