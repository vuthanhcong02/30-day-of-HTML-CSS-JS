var btn = document.querySelector('.search_btn')
btn.addEventListener('click',function(){
    this.parentElement.classList.add('open')// Tra ve nut cha
    this.previousElementSibling.focus()

})