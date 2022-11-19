var listImg = document.querySelectorAll('.list_img div img')
var btnPrev = document.querySelector('.prev')
var btnNext = document.querySelector('.next')
var Img = document.querySelector('.img_src')

var currentIndex = 0
function updateImg(index){
    document.querySelectorAll('.list_img div').forEach(item=>{
    item.classList.remove('active')
    })
    currentIndex=index
    Img.src = listImg[index].getAttribute('src')
    listImg[index].parentElement.classList.add('active')
}
listImg.forEach((imgElement,index)=>{
    imgElement.addEventListener('click',e=>{
        updateImg(index)
        })
       
    })

btnNext.addEventListener('click',function(){
    if(currentIndex == listImg.length-1){
        currentIndex =0
    }
    else{
        currentIndex++
    }
    updateImg(currentIndex)
})
btnPrev.addEventListener('click',function(){
    if(currentIndex == 0){
        currentIndex =listImg.length-1
    }
    else{
        currentIndex--
    }
        updateImg(currentIndex)
})
