var boxes = document.querySelectorAll('.img')
var imgList = document.querySelectorAll('.img_main')

var currentTarget = null
imgList.forEach(target=>{
    target.addEventListener('dragstart',function(e){
        this.classList.add('boder')  
        currentTarget = this
    })
    target.addEventListener('dragend',function(e){
        this.classList.remove('boder')  
    })
})

boxes.forEach(box=>{
    box.addEventListener('dragover',function(e){
        e.preventDefault()
    })
    box.addEventListener('drop',function(e){
        if(!box.querySelector('.img_main')){
            this.appendChild(currentTarget)
        }
        
    })
})