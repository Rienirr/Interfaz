window.onload= ()=>{

}
var semaforo = true;

document.getElementById("boton").addEventListener("click", () => {
    cambiar();
}, false);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var gradiente = ctx.createLinearGradient(0, 0, 500, 0);
/*Para rellenar más o menos de forma  correcta  he pillado los colores que he visto en internet*/ 
gradiente.addColorStop(1/7, "#FF0000");
gradiente.addColorStop(2/7, "#FF7F00");
gradiente.addColorStop(3/7, "#FFFF00");
gradiente.addColorStop(4/7, "#00FF00");
gradiente.addColorStop(5/7, "#00FFFF");
gradiente.addColorStop(6/7, "#0000FF");
gradiente.addColorStop(1, "#8d00FF");
ctx.fillStyle = gradiente;
ctx.fillRect(0, 0, 500, 400);

function cambiar() {
    if (semaforo === false) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var gradiente = ctx.createLinearGradient(0, 0, 500, 0);
        
        gradiente.addColorStop(1/7, "#FF0000");
        gradiente.addColorStop(2/7, "#FF7F00");
        gradiente.addColorStop(3/7, "#FFFF00");
        gradiente.addColorStop(4/7, "#00FF00");
        gradiente.addColorStop(5/7, "#00FFFF");
        gradiente.addColorStop(6/7, "#0000FF");
        gradiente.addColorStop(1, "#8d00FF");;
        ctx.fillStyle = gradiente;
        ctx.fillRect(0, 0, 500, 400);
        semaforo = true;
    } else {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var gradiente = ctx.createLinearGradient(0, 0, 500, 0);
        gradiente.addColorStop(1/7, "#8d00FF");
        gradiente.addColorStop(2/7, "#0000FF");
        gradiente.addColorStop(3/7, "#00FFFF");
        gradiente.addColorStop(4/7, "#00FF00");
        gradiente.addColorStop(5/7, "#FFFF00");
        gradiente.addColorStop(6/7, "#FF7F00");
        gradiente.addColorStop(1, "#FF0000");
        ctx.fillStyle = gradiente;
        ctx.fillRect(0, 0, 500, 400);
        semaforo = false;
    }
}