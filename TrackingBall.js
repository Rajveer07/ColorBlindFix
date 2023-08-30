function TrackingBall(){
    const imgData = ctx.getImageData(0, 200, myCanvas.width, myCanvas.height-100);
    const data = imgData.data
    for(let i=0;i<data.length;i+=4){
        if(data[i]=255){
            console.log(data[i]);

        }
        
    }
}