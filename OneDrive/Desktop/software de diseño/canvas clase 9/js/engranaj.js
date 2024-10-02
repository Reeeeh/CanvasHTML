window.onload = function(){
    
    //let indica una variable a nivel de bloque{ }
    let canvas = document.getElementById("theLostCanvas");
    if(canvas && canvas.getContext) {
        let ctx = canvas.getContext("2d");
        if(ctx){
            //entro al canvas
            let centroX = canvas.width / 2;
            let centroY = canvas.height / 2;
            // definimos el radio
            let radioExterno = 95;
            let radioInterno = 50;
            let radioMedio = radioInterno *1.6;

            //numero de puntos de engranaje
            let numeroPuntos = 40;

            //configuramos las lineas
            ctx.beginPath();
            ctx.lineJoin = "bevel"; //al unir las lineas se utiliza un acabado redondo
            
            for(
                let i = 0;
                // se llama i por convención
                i < numeroPuntos;

                i ++

            ){
                if(
                    i % 2 == 0

                ){
                    radio = radioExterno;
                }else{
                    radio = radioInterno;

                }

                let angulo = Math.PI * 2/numeroPuntos * (i+1);

                let x = (radio * Math.sin(angulo)) + centroX;
                let y = (radio * Math.cos(angulo)) + centroY;

                if(i == 0){
                    ctx.moveTo(x,y);

                }else{
                    ctx.lineTo(x,y);
                }
            }


                ctx.closePath();
                ctx.lineWidth = 10;
                ctx.strokeStyle = "orange";
                ctx.fillStyle = "red";
                ctx.stroke();


        }
    }

}