var img = document.querySelectorAll('.image img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var lop_phu_img = document.querySelector('.lop_phu img')
var lop_phu = document.querySelector('.lop_phu')
var current_index_img = 0

function phu(){
    if(current_index_img==img.length-1){
           next.classList.add('hidden')
        }
    else{
            next.classList.remove('hidden')
        }
    if(current_index_img==0){
            prev.classList.add('hidden')
            }
    else{
            prev.classList.remove('hidden')
            }    
    lop_phu_img.src = img[current_index_img].src
    lop_phu.classList.add('show')

}
img.forEach((item,index)=>{
    item.addEventListener('click',function(){
        current_index_img=index
       phu()
    })
})

close.addEventListener('click',function(){
    lop_phu.classList.remove('show')
})
function right_arrow(){
    if(current_index_img<img.length-1){
        current_index_img++
        phu()
    }
}
next.addEventListener('click',function(){
    right_arrow()
     
})


function left_arrow(){ 
    if(current_index_img >0){
        current_index_img--
        phu()
        
    }
}
prev.addEventListener('click',function(){  
   left_arrow()
})

document.addEventListener('keydown',function(e){
    if(e.keyCode==27){
    lop_phu.classList.remove('show')
    }
    if(e.keyCode==39){
        right_arrow()
    }
    if(e.keyCode==37){
        left_arrow()
    }
})