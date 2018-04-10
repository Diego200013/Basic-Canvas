var canvas,ctx;

window.addEventListener('load',function(){
   
    canvas= document.querySelector("#myCanvas");
    ctx= canvas.getContext("2d");
    
    drawFigure()

})

function drawFigure(){

ctx.save()

//text
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.font = '40pt Calibri'
ctx.strokeText("My Monster",120,50,350)
ctx.strokeStyle="green"
ctx.strokeText("My Monster",123,50,350)

//cap
ctx.strokeStyle="#000";
ctx.fillStyle="yellow";
ctx.lineWidth=3;
ctx.fillRect(215,110,100,50)
ctx.strokeRect(215,110,100,50)

//textCap
ctx.fillStyle="#000";
ctx.font = '15pt Calibri'
ctx.fillText("KT-2504",232,138)

//ears
ctx.fillStyle="purple"
ctx.lineWidth=6;
ctx.fillRect(55,270,50,70)
ctx.strokeRect(55,270,50,70)
ctx.fillRect(415,270,50,70)
ctx.strokeRect(415,270,50,70)


//head
ctx.fillStyle="#FA5858";
ctx.translate(110,160)
ctx.lineWidth=8;
ctx.strokeRect(0,0,300,300)
ctx.fillRect(0,0,300,300)

//eyes
ctx.fillStyle="grey";
ctx.lineWidth=4;
ctx.fillRect(50,50,50,50)
ctx.strokeRect(50,50,50,50)
ctx.fillRect(200,50,50,50)
ctx.strokeRect(200,50,50,50)

//pupils

ctx.fillStyle="yellow";
ctx.lineWidth=3;
ctx.strokeRect(65,65,20,20)
ctx.strokeRect(215,65,20,20)
ctx.fillRect(65,65,20,20)
ctx.fillRect(215,65,20,20)

//nose 
 
ctx.fillRect(135,130,40,60)
ctx.strokeRect(135,130,40,60)

//mouth

ctx.fillStyle="grey";
ctx.fillRect(105,230,100,40)
ctx.strokeRect(105,230,100,40)

//teeth
ctx.strokeStyle="#fff";
ctx.fillStyle="#000";
ctx.fillRect(120,238,70,25)
ctx.strokeRect(120,238,70,25)




ctx.restore()


}