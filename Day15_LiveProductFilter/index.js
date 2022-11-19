// var h3 = document.querySelector('h3')

// fetch('https://fakestoreapi.com/products')
// .then(res=>{
//     return res.json()
// })
// .then(data=>{
//     h3.innerText=''
//     var Product = document.querySelector('.products')
//     data.forEach(element => {
//     var listProduct = document.createElement('div')
//     listProduct.classList.add('product')
//     listProduct.innerHTML = `<img src="${element.image}" alt="">
//                                     <div class="infor">
//                                         <div class="name">${element.title}</div>
//                                         <div class="price">${element.price}</div>
//                                     </div>`
//         Product.appendChild(listProduct)
//      });
//         console.log(data)
// })
    
var h3 = document.querySelector('h3')
async function showProducts(){
    let apiUrl=`https://fakestoreapi.com/products`
    let data = await fetch(apiUrl).then(res=>res.json())
    data.forEach(element => {
        h3.innerText=''
        var Product = document.querySelector('.products')
        var listProduct = document.createElement('div')
        listProduct.classList.add('product')
        listProduct.innerHTML = `<img src="${element.image}" alt="">
                                             <div class="infor">
                                                 <div class="name">${element.title}</div>
                                                 <div class="price">${element.price}</div>
                                           </div>`
        Product.appendChild(listProduct)                                   
    });
}
showProducts()
var searchInput = document.querySelector('input')
searchInput.addEventListener('input',function(e){
    let txtSearch = e.target.value.trim().toLowerCase()
    let listProuctDOM = document.querySelectorAll('.products')
    listProuctDOM.forEach(items=>{
        if(items.innerText.toLowerCase().includes(txtSearch))
            items.classList.remove('hide')
        else{
            items.classList.add('hide')
        }
    })
})