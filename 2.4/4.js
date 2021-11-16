var semaforo;
document.getElementById("boton").addEventListener("click", () => {
    cambiar();
}, false);

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 360, 0);
grd.addColorStop(0.14, "red");
grd.addColorStop(0.29, "orange");
grd.addColorStop(0.44, "yellow");
grd.addColorStop(0.59, "green");
grd.addColorStop(0.74, "aqua");
grd.addColorStop(0.89, "blue");
grd.addColorStop(1, "purple");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 400, 250);

function cambiar() {
    if (semaforo === false) {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, 360, 0);
        grd.addColorStop(0.14, "red");
        grd.addColorStop(0.29, "orange");
        grd.addColorStop(0.44, "yellow");
        grd.addColorStop(0.59, "green");
        grd.addColorStop(0.74, "aqua");
        grd.addColorStop(0.89, "blue");
        grd.addColorStop(1, "purple");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 400, 250);
        semaforo = true;
    } else {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        var grd = ctx.createLinearGradient(0, 0, 360, 0);
        grd.addColorStop(0.14, "purple");
        grd.addColorStop(0.29, "blue");
        grd.addColorStop(0.44, "aqua");
        grd.addColorStop(0.59, "green");
        grd.addColorStop(0.74, "yellow");
        grd.addColorStop(0.89, "orange");
        grd.addColorStop(1, "red");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 400, 250);
        semaforo = false;
    }
}