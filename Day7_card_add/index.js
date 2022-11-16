var tags = document.querySelector('.tags_kq')
var input = document.querySelector('input')
var btn = document.querySelector('.btn')

items=[]
function render(){
    tags.innerHTML=``
    for (let i = 0; i < items.length; i++) {
        const tag = items[i];
        tags.innerHTML+=`<li/>      
                        ${tag}
                        <i class="fa-solid fa-xmark" onclick="removeTag()"></i>
                        </li>`
        }
    tags.appendChild(input)
    input.focus()    
}
render()
input.addEventListener('keydown',function(e){
    if(e.keyCode==13){
        if(input.value==" "){
            input.value=""
        }
        else{
            items.push(input.value.trim())
            input.value=""
            render()
        }
    }
   
})
function removeTag(index){
    items.splice(index,1)
    render()

}
btn.addEventListener('click',function(){
    items=[]
    render()
})