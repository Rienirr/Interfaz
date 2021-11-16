window.onload = function() {
    var canvas = document.getElementById("canvas");
        if (canvas && canvas.getContext) {
          var ctx = canvas.getContext("2d");
          if (ctx) {
            var srcImg = document.getElementById("imagen");
            ctx.drawImage(srcImg, 0, 0, ctx.canvas.width, ctx.canvas.height);
            var imgData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
            var pixels = imgData.data;
            for (var i = 0; i < pixels.length; i += 4) {
              var luminosidad = .3 * pixels[i] + .6 * pixels[i + 1] + .1 * pixels[i + 2];
              pixels[i] = Math.min(luminosidad + 40, 255); 
              pixels[i + 1] = Math.min(luminosidad + 15, 255); 
              pixels[i + 2] = luminosidad; 														
            }
            ctx.putImageData(imgData, 0, 0);
          }
        }
    }