var color = document.querySelector('.color')
var eraser = document.querySelector('.eraser')
var decrease = document.querySelector('.decrease')
var sizeElement = document.querySelector('.size')
var increase = document.querySelector('.increase')
var save = document.querySelector('.save')
var clear = document.querySelector('.clear')
var canvas = document.querySelector('canvas')
var ctx =canvas.getContext('2d')
var currentPos = {
    x:0,
    y:0
}
var currentPos2 = {
    x:0,
    y:0
}
var isDrawing =false
var colorPaint = 'ffffff'
var size = 5
sizeElement.innerText=size
canvas.addEventListener('mousedown',function(e){
    currentPos ={
        x: e.offsetX,
        y: e.offsetY
    }
    isDrawing=true
})
canvas.addEventListener('mousemove',function(e){
    if(isDrawing){
        currentPos2 = {
            x:e.offsetX,
            y:e.offsetY
        }


        ctx.beginPath();
        ctx.arc(currentPos.x, currentPos.y, size, 0, 2 * Math.PI); // currentPos.x: toa do x cua dau mut
                                                                    // currentPos.y: toa do y cua dau mut
        ctx.fill();
        ctx.fillStyle = colorPaint
        // Vẽ đầu mút tròn


        ctx.beginPath();
        ctx.moveTo(currentPos.x,currentPos.y)
        ctx.lineTo(currentPos2.x,currentPos2.y)
        ctx.strokeStyle = colorPaint;   //mau vieng
        ctx.lineWidth = size *2 //set do day cua net
        ctx.stroke()
        currentPos.x=currentPos2.x // gan toa do x y cho diem thu bang x,y cho diem thu 2
        currentPos.y=currentPos2.y
    }
})
canvas.addEventListener('mouseup',function(e){
    isDrawing = false
})
color.addEventListener('change',function(e){
    colorPaint = e.target.value
})
eraser.addEventListener('click',function(e){
    colorPaint = '#ffffff'
})
decrease.addEventListener('click',function(e){
    if(size>5){
        size-=5
    }
    else{
        size =5
    }
    sizeElement.innerText = size
})
increase.addEventListener('click',function(e){
    if(size<50){
        size+=5
    }
    else{
        size =50
    }
    sizeElement.innerText = size
})
clear.addEventListener('click',function(){
    ctx.clearRect(0,0,canvas.width,canvas.height) //clearRect in canvas
})
save.addEventListener('click',function(e){         
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image; // it will save locally
})
