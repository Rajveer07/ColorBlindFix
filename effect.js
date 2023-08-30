const myVideo = document.getElementById("myVideo");
const myCanvas = document.getElementById("myCanvas");
const ctx = myCanvas.getContext("2d");



function animate() {
    let color = [48, 151, 218]
    ctx.drawImage(myVideo, 0, 0, myCanvas.width, myCanvas.height);
    ctx.fillStyle = "rgba(" + color[0] + "," + color[1] + "," + color[2] + ",0)"
    ctx.fillRect(0, 0, myCanvas.width, myCanvas.height);


    imageDataAndColor()
   

    requestAnimationFrame(animate);
}


function imageDataAndColor() {

    const imgData = ctx.getImageData(0, 0, myCanvas.width, myCanvas.height);
    const data = imgData.data
    const threshold = 140;
    for (let i = 0; i < data.length; i += 4) {
      

        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        if (colorMatch([r, g, b], [48, 151, 218], threshold)) {
            const alpha = distance([r, g, b], [48, 151, 218]);
            imgData.data[i + 3] = 255;
            imgData.data[i] = red;
            imgData.data[i + 1] =green;
            imgData.data[i + 2] = blue;
        }
        if(colorMatch([r, g, b], [14, 17, 55], threshold)){
            imgData.data[i + 3] = 255;
            imgData.data[i] = red;
            imgData.data[i + 1] =green;
            imgData.data[i + 2] = blue;
            
        }
    }
    ctx.putImageData(imgData, 0, 0)
}



myVideo.onloadeddata = function () {
    myCanvas.width = myVideo.videoWidth;
    myCanvas.height = myVideo.videoHeight;
    animate();
}

//do the conditional rendering