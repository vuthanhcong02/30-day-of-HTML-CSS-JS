var search= document.querySelector('.search_input input')
var city= document.querySelector('.city')
var nation= document.querySelector('.nation')
var time= document.querySelector('.time')
var date= document.querySelector('.date')
var temperature= document.querySelector('.temperature .tem')
var status_1= document.querySelector('.status_1')
var view= document.querySelector('.view_able')
var win= document.querySelector('.wind')
var hum= document.querySelector('.hum')
var deg= document.querySelector('.sup')
var content= document.querySelector('.content')
async function showWeather(){
    let search_city=search.value.trim()
    let apiURL=`https://api.openweathermap.org/data/2.5/weather?q=${search_city}&units=metric&appid=d78fd1588e1b7c0c2813576ba183a667`
    let data = await fetch(apiURL).then(res=>res.json())
    if(data.cod==200){
        content.classList.remove('hide')
        city.innerText= data.name
        nation.innerText=data.sys.country
        status_1.innerText=data.weather[0].main
        let temp =data.main.temp
        temperature.innerText=temp
        view.innerText=data.visibility + ' m'
        win.innerText=data.wind.speed+' m/s'
        hum.innerText=data.main.humidity + ' %'
        time.innerText=new Date().toLocaleTimeString('vi')
        date.innerText=new Date().toLocaleDateString('vi')
        if(temp< 18){
            document.body.className='cold'
        }
        else{
            document.body.className='hot'
        }
       }
    else{
        content.classList.add('hide')
    }
}
search.addEventListener('keypress',function(e){
    if(e.keyCode==13){
        showWeather()
    }
})

