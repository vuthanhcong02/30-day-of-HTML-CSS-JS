var allShow = document.querySelectorAll('.show_on_scroll')

// console.log(allShow)
function scroll_in_Window(elt){
    const rects = elt.getClientRects()[0];
    console.log(rects)
    var heightScreen = window.innerHeight

    if(!(rects.bottom<0||rects.top>heightScreen)){
        elt.classList.add('start')
    }
    else{
        elt.classList.remove('start')

    }
}

function checkAnimation(){
    allShow.forEach(e=>{
        scroll_in_Window(e)
    })
}
window.onscroll = checkAnimation