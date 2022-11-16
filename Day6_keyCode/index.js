var pres = document.querySelector('.alert')
var kq = document.querySelector('.kq')
var box = document.querySelector('.box')

var ekey = document.querySelector('.card_key.key p:last-child')
var elocation = document.querySelector('.card_location.location p:last-child')
var ewhich = document.querySelector('.card_which.which p:last-child')
var ecode = document.querySelector('.card_code.code p:last-child')
document.addEventListener('keydown',function(e){
    if(e.keyCode==32){
        ekey.innerText='Space'
    }
    else{
        ekey.innerText = e.key
    }
    kq.innerText=e.which
    elocation.innerText = e.location
    ewhich.innerText = e.which
    ecode.innerText = e.code
    pres.classList.add('hide')
    box.classList.remove('hide')
})