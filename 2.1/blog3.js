"use strict";
window.onload= ()=>{
    let d=document;
let video=d.getElementById("video");


    
let boton1= d.getElementById("b1");
boton1.addEventListener("click",()=>{
video.currentTime=0;
video.play();
},false);
let boton2= d.getElementById("b2");
boton2.addEventListener("click",()=>{
   
    video.currentTime-=5;
    video.play();
},false);
let boton3= d.getElementById("b3");
boton3.addEventListener("click",()=>{
    video.currentTime+=5;
    video.play();
},false);
let boton4= d.getElementById("b4");
boton4.addEventListener("click",()=>{
    d.getElementById("video").muted=true;
},false);

let boton5= d.getElementById("b5");
boton5.addEventListener("click",()=>{
   video.volume+=0.1;

},false);


let boton6= d.getElementById("b6");
boton6.addEventListener("click",()=>{
    console.log(video.volume);
video.volume-=0.1;
console.log(video.volume);

},false);

}