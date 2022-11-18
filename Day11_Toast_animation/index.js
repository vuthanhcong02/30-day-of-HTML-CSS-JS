var btn_success= document.querySelector('.toast_success')
var btn_warning= document.querySelector('.toast_warning')
var btn_error= document.querySelector('.toast_error')

btn_success.addEventListener('click',function(){
    add_btn('success',2000)

})
btn_warning.addEventListener('click',function(){
    add_btn('warning',2000)

})
btn_error.addEventListener('click',function(){
    add_btn('error',2000)

})
function add_btn(status,timeout){
    let temp = ``
    switch(status){
        case 'success':
            temp = `<i class="fa-sharp fa-solid fa-circle-check"></i>
            <span class="mes">This is a success message</span>`
            break
        case 'warning':
            temp = `<i class="fa-sharp fa-solid fa-triangle-exclamation"></i>
            <span class="mes">This is a success message</span>`
            break
        case 'error':
            temp = ` <i class="fa-solid fa-circle-exclamation"></i>
            <span class="mes">This is a error message</span>`
            break            
    }


    var coast = document.createElement('div')
    coast.classList.add('message')
    coast.classList.add(status)
    coast.innerHTML=`${temp}
                    <div class="countdown"></div>`
    var addList_message = document.querySelector('.messages')
    addList_message.appendChild(coast)
    timeout = 2000
    setTimeout (function(){
        coast.style.animation = 'show_message_hide 1.5s ease forwards'
    },timeout)
    setTimeout (function(){
        coast.remove()
    },timeout+1000)
}