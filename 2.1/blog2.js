"use strict";
window.onload= ()=>{

let d= document;
let boton1= d.getElementById("b1");
boton1.addEventListener("click",()=>{
d.getElementById("audio1").play();
},false);
let boton2= d.getElementById("b2");
boton2.addEventListener("click",()=>{
    d.getElementById("audio2").play();
},false);
let boton3= d.getElementById("b3");
boton3.addEventListener("click",()=>{
    d.getElementById("audio3").play();
},false);
let boton4= d.getElementById("b4");
boton4.addEventListener("click",()=>{
    d.getElementById("audio4").play();
},false);

}