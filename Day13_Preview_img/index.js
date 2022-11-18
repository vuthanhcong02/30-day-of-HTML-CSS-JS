var upload = document.querySelector('#preview')
var upload_img = document.querySelector('.upload')
var error = document.querySelector('.error')

upload.addEventListener('change',function(e){

    var file = upload.files[0]
    // if(!file) // file k ton tai
    //     return  //khong lam gi ca
    // if(file.name.endsWith='.jpg'){ //duoi k ket thuc = jpg
    //     error.innerHTML="Hinh anh khong thuoc dinh dang jpg"   
    //     return   // khong lam gi ca
    // }
    // else    
    //     error.innerHTML=''
    // // Kiem tra dung luong file
    // if(file.size /(1024*1024)< 5){ //duoi k ket thuc = jpg
    //     error.innerHTML="Hinh anh vuot qua dung luong 5 MB"   
    //     return   // khong lam gi ca
    // }
    // else    
    //     error.innerHTML=''    
    
    ////
        // Base64
    var img = document.createElement('img')
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    
    fileReader.onloadend = function(e){
        img.src = e.target.result
    }
    
    // img.src = URL.createObjectURL(file)  //Blob
     upload_img.appendChild(img)
})