var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

let j = 20;
let x, y;
for (let i = 1; i <= 4; i++) {
    ctx.beginPath();
    ctx.shadowBlur =25;
    if (i == 1) {
        ctx.shadowColor = "orange"; 
    }else if (i == 2){
        ctx.shadowColor = "green"; 
    }else if (i == 3){
        ctx.shadowColor = "blue"; 
    }else if (i == 4){
        ctx.shadowColor = "red"; 
    }
    
    ctx.strokeRect(170 + j, 26 + j, 150, 150);
    j += 15;

}
ctx.beginPath();
x = 75;
y = 75;
var radius = 25;
var start_angle = (Math.PI);
var end_angle = (Math.PI) * 0.5;
var anticlockwise = 1;
ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise);
ctx.stroke();
ctx.beginPath();
x = 135;
y = 75;
var radius = 25;
var start_angle = (Math.PI);
var end_angle = (Math.PI) * 0;
var anticlockwise = 1;
ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise);
ctx.stroke();

ctx.beginPath();
x = 75;
y = 145;
var radius = 25;
var start_angle = (Math.PI)*0.5;
var end_angle = (Math.PI);
var anticlockwise = 1;
ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise);
ctx.stroke();
ctx.beginPath();

x = 135;
y = 145;
var radius = 25;
var start_angle = (Math.PI)*0;
var end_angle = (Math.PI);
var anticlockwise = 1;
ctx.arc(x, y, radius, start_angle, end_angle, anticlockwise);
ctx.stroke();