var fb =document.querySelector('.count_fb span')
var ytb =document.querySelector('.count_ytb span')
var tt =document.querySelector('.count_tt span')


function counter(element,to){
    var count =0
    var time =1000
    var temp = to/time
    var couting = setInterval(()=>{
        count+=temp
        
       if(count>to){
        clearInterval(couting)
        element.innerText = to
       }
       else{
        element.innerText = Math.round(count)
       }
    },1)
}
counter(fb,3300)
counter(ytb,1100)
counter(tt,9999)

