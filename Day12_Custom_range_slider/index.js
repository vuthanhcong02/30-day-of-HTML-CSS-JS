var mouse = document.querySelector('.contain')
var process = document.querySelector('.process')
var value = document.querySelector('span')
var body = document.querySelector('body')
var h1 = document.querySelector('h1')
function addPercent(percent){
    value.innerHTML=`${percent}%`
    process.style.width = `${percent}%`
    body.style.backgroundColor = `rgba(0,0,0,${percent/100})`
    if( percent < 10){
        h1.style.color='black'
        // process.style.background='linear-gradient(to left,#1c151d,#827084)'
    }
    else 
        // process.style.background='linear-gradient(to right, #bb69cc, #246bac)'
        h1.style.color='white'
        
} 
mouse.addEventListener('mousemove',function(e){
    var processWidth = e.pageX-this.offsetLeft
    var percent = processWidth / this.offsetWidth *100 

    percent = Math.round(percent) 
    addPercent(percent)
}
)
addPercent('40')