window.onload = function(){
    let canvas =
    document.getElementById("theLostCanvas");
    if(canvas && canvas.getContext){
        let ctx = canvas.getContext("2d");
        if(ctx){
            ctx.lineWidth = 15;//ancho de linea
            ctx.strokeStyle = "blue" //borde amarillo

            ctx.beginPath();//inicia la linea
            ctx.lineCap = "round";//punta de la linea
            ctx.moveTo(50,50);//inicio del punto
            ctx.lineTo(350,50)//final del punto
            ctx.stroke()

            //segunda linea
            ctx.strokeStyle = "orange";
            ctx.lineCap = "square";
            ctx.beginPath();
            ctx.moveTo(25,100);
            ctx.lineTo(350,100)
            ctx.stroke();

            //tercera linea
            ctx.strokeStyle = "green";
            ctx.lineCap = "butt";
            ctx.beginPath();
            ctx.moveTo(50,150);
            ctx.lineTo(350,150)
            ctx.stroke();



        }


    }
}

